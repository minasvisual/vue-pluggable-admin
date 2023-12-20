<template> 
  <div class="relative shadow-md sm:rounded-lg crud-table overflow-x-auto w-full" >
    <Alerts :show="alert?.message" :type="alert?.type" :message="alert?.message" >
      <slot name="alert" v-bind="{ alert, model, resource }" >
        {{ alert?.message }}
      </slot>
    </Alerts>
    <table v-if="ready" class="w-full text-sm text-left text-gray-500 dark:text-gray-400" :class="`${ model.tableClasses || '' }`">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr class="pd-toolbar py-1">
            <th scope="col" :colspan="totalCols" class="py-2">
              <div class="headers flex">
                <div class="lelf-col flex items-center justify-left w-1/2">
                  <button class="px-4 flex items-center whitespace-nowrap" type="button" v-if="selected.length" @click="deleteSelected">
                    <TrashIcon class="h-5" /> {{ selected.length }} Selected
                  </button>
                  <button class="px-4" type="button" @click="getDatasource">
                    <RefreshIcon class="h-5" />
                  </button>
                  <button class="px-4" type="button" v-if="can(model, 'canCreate')" @click="() => emit('create', {target: 'create', row: {}})">
                    <PlusIcon class="h-5" />
                  </button>
                  <slot name="toolbar-left" />
                </div>
                <div class="right-col flex items-center justify-center w-1/2">
                  <slot name="toolbar-center" />
                </div>
                <div class="right-col flex items-center justify-end w-1/2">
                  <slot name="toolbar-right" />
                </div>
              </div>
            </th> 
          </tr>
          <tr>
            <th class="px-4 flex gap-2"> 
              <input type="checkbox" :checked="(selected.length == table.length)" @change="selectAll" /> All
            </th>
            <th scope="col" class="px-2 py-1" v-for="col in schema" :key="col.key" @click="() => toggleSort(col)"> 
              <div class="flex items-center gap-2">
                {{ col.label }} 
                <span v-if="col.sorter && Instance.isIt('sorter') == col.key">
                  <ArrowUpIcon class="h-4" v-if="col._order" />
                  <ArrowDownIcon class="h-4" v-else /> 
                </span>
              </div>
            </th> 
            <th class="">
                &nbsp;
            </th>
          </tr>
          <tr class="pd-filters" v-if="can(model, 'api.pagination.limitField', false) && can(model, 'api.pagination.filterExp', false)">
              <th class="px-4 flex gap-2">
                &nbsp;
              </th>
              <th scope="col" class="px-2" v-for="col in schema" :key="col.key">
                <FormKit v-if="can(model, 'api.pagination.filterExp', false) && col.filter" :type="gete(col, 'filter.type', 'search')" :delay="500" outer-class="m-0 p-0" input-class="w-full p-1"
                        :model="gete(col, 'model', {})"
                        :overwrite="gete(col, 'overwrite', {})"
                        :options="gete(col, 'options', [])"
                        @input="e => setFilter(col, e)"  
                ></FormKit>
                <slot name="header-scope" v-bind="{col, filters}"></slot>
              </th>
              <th class="px-2 flex items-center justify-end">
                <slot name="header-actions" v-bind="{schema, filters}"></slot>
                <span class="flex items-center justify-end" v-if="can(model, 'api.pagination.limitField', false)">
                  <p class="">Limit</p> 
                  <FormKit outer-class="m-0 p-0 pl-2" input-class="text-xs" type="select" v-model="perPage" :options="[1,5,15,25,50,100,500]" @input="changeLimit" />
                </span>
              </th>
          </tr>
        </thead> 
        <tbody>
          <tr class="pd-rows bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(row, index) in table" :key="index"> 
              <td class="px-4 py-2" >
                  <input type="checkbox" :value="false" :checked="isSelected(selected, row)" @change="selectionChange(selected, row)" />
              </td> 
              <td class="px-2 py-2" v-for="(col, k) in schema" :key="col.key">
                <slot name="row-scope" v-bind="{col, row, index}">
                  <TableInputs :cell="col" :data="row" :key="col.key+k" /> 
                </slot>
              </td> 
              <td class="px-2 py-2 flex justify-end" >
                <slot name="row-actions" v-bind="{row, index}"></slot>
                <a class="cursor-pointer mr-3" v-if="can(model, 'canEdit')" @click="() => emit('edit', { target: 'edit', row})" >
                  <PencilIcon class="h-5" />
                </a>
                <a class="cursor-pointer" v-if="can(model, 'canDelete')" @click="() => deleteEmit(row)" >
                  <TrashIcon class="h-5" />
                </a>
              </td> 
          </tr> 
        </tbody>
        <tfoot>
          <tr class="pd-subfooter" v-if="can(model, 'canFooter', false)" >
            <td class="px-4 py-2" >
                &nbsp;
            </td> 
            <td class="px-4 py-2" v-for="col in schema" :key="col.key"> 
              <slot name="footer-scope" v-bind="{col, table, filters}"></slot>
            </td>
            <td class="px-2 py-2 flex justify-end" >
              <slot name="footer-actions" v-bind="{table, filters}"></slot>
            </td>
          </tr>
          <tr class="pd-footer">
            <td :colspan="totalCols" class="w-full pt-4">
              <slot name="pagination" v-bind="{totalPages, actual:1, changePage}">
                <CommonPagination v-if="can(model, 'api.pagination.pageField', false) || can(model, 'api.pagination.local', false)" 
                                  :pages="totalPages" :actual="1" @change="changePage" />
              </slot>
            </td>
          </tr>
        </tfoot>
    </table>
    <div v-else class="text-center h-20">
      <Spinner />
    </div>
  </div>
</template>

<script setup>
  import _ from 'lodash' 
  import axios from 'axios' 
  
  import { RefreshIcon, TrashIcon, PlusIcon, PencilIcon, ArrowDownIcon, ArrowUpIcon } from './icons/index'
  import { ref, inject, reactive, computed, watch, onBeforeMount, onMounted, onUnmounted, nextTick  } from 'vue'
  import CommonPagination from './common/Pagination.vue'
  import TableInputs from './tables/index.vue'
  import Spinner from './common/Spinner.vue' 
  import Alerts from './common/Alerts.vue' 
  
  import ResourceClass from '../libs/resource'
  import { 
    schemaColumns, can, isSelected, selectionChange, selectionAll, fetchQueryInfo, filterParams, validateQueryInfo, 
    calcPages, mergeDeep,  
  } from '../libs/helpers'  
  
  let { resource, model:defModel } = defineProps({  
    model:{
      type: Object,
      default: null
    },
    resource: {
      type: Array,
      default: []
    }
  })
   
  let model = defModel ? ref(defModel) : inject('model')  
  let session = inject('session')  
  // const App = useAppContext() 
  let Instance = ResourceClass({ $axios: axios }) 
  let alert = ref(null)
  let ready = ref(false)
  let schema = ref([])
  let filters = ref({})
  let selected = ref([])
  let table = ref(resource)
  let perPage = ref( _.get(model.value,'api.perPage',5) )
  let tableCount = ref(1)
  let config = reactive({})
  let queryInfo = reactive({})
  const gete = _.get

  const emit = defineEmits(['create','edit','delete','selected','refresh'])
      
  let totalCols = computed(() => { 
    return schema.value.length + 2
  })
    
  let totalPages = computed(() => { 
    return calcPages(tableCount.value, perPage.value)
  })

  const deleteEmit = (row) =>{
    // Instance.setModel({ ...model.value })

    if( confirm('Are you sure?') ) { 
      ( Instance.can('deleteDataById') ? Instance.deleteData(row):Promise.resolve('bypassed')).then(
        e => {
          console.log(e)
          // $message("Removido com sucesso")
          emit('delete', { target: 'delete', row })
          getDatasource()
        }
      ).catch(setAlert)
    }else{
     return false
    }
  }

  const selectAll = () => {
    selected.value = selectionAll(selected.value, table.value)
    table.value = [ ...table.value ]
  }

  const deleteSelected = async () => {
    if( confirm('Are you sure?') ) {
      for( let row of selected.value ){
        await Instance.deleteData(row).then(e => { 
          emit('delete', { target: 'delete', row})
        })
      }
      $message("Removido com sucesso")
      getDatasource()
    }
  }

  const toggleSort = (col = {}) => {
    nextTick(() => { 
      // let localPagination = _.get(model.value,'api.pagination.local', false)
      // config.sort = col.key
      col._order = _.isNil(col._order) ? false : !col._order

      queryInfo = { ...queryInfo, ...fetchQueryInfo('sort', { column: col.key, asc: col._order }) }

      console.debug('toggleSort', queryInfo)
      // if( Instance.isIt('local') )
      //   table.value = Instance.sorting({ local: true, col:[col.key], order:[col._order ? 'desc':'asc']  })
      // else
        getDatasource()
    })
  }

  const changePage = (num) => {
    nextTick(() => { 
      let localPagination = _.get(model.value,'api.pagination.local', false)
      queryInfo = { ...queryInfo, ...fetchQueryInfo('page', num) }

      if( localPagination === true )
        table.value = Instance.paginate({ local: true, perPage: perPage.value, page:num })
      else
        getDatasource()
    })
  }

  const changeLimit = (v) => {
    nextTick(() => { 
      if( Instance.can('paginate') )
        queryInfo = { ...queryInfo, ...fetchQueryInfo('pageSize', v) }

      getDatasource()
    })
  }

  const setFilter = (col, value) => {
    return changeFilters({ [col.key]:{ value:value, filter: col?.filter }})
  }

  const changeFilters = (e) => {
    nextTick(() => { 
      console.debug("changeFilters change", e) 
      filters.value = Object.assign(filters.value, e)

      Object.keys(filters.value).map((item) => {
        if( !filters.value[item].value )
           filters.value = _.omit(filters.value, [item])
      })

      queryInfo = { ...queryInfo, ...fetchQueryInfo('filter', filters.value) }
      getDatasource()
    })
  }

  const getDatasource = async (data={}, config={}) => {
    try {
      if( !Instance.isIt('local') && validateQueryInfo(JSON.parse(JSON.stringify(queryInfo)) )){
        let api = filterParams({ ...model.value.api }, { ...queryInfo, data: resource.value }) 
        Instance.setModel({ ...model.value, api })
      }
 
      if( Instance.can('getData') ){
        var { rows, total } = await Instance.getData(data, config)  
      } else { 
        var { rows, total } = await Instance.setData(resource, queryInfo)  
      }

      if( Instance.isIt('local') ) { 
        var { rows, total } = await Instance.setData(rows, queryInfo)  
      }
       
      // table.value = localPagination ? 
      table.value = Instance.paginate({ local:true, perPage: perPage.value })
      tableCount.value = total

      emit('refresh', { target:'refresh', rows })
      console.debug("concluiu  getDatasource")
    } catch (error) {
      console.error(error)
      setAlert({ message:"Error to get data", error, type:'error' })
    }
  }

  const modifyColumn = async (input) => {
    if( input.model && typeof input.model == 'string' ) 
      input.model = await Instance.loadModel(input.model)

    if( _.has(model.value, 'auth') ){ 
      let request = Instance.authRequest( Instance.getToken() );
      input.model = mergeDeep(input.model, { api:request })
    } 

    if( input.overwrite && typeof input.overwrite == 'object' )
      input.model = mergeDeep(input.model, input.overwrite)
 
    input.model = mergeDeep(input.model, _.pick(model.value, ['domain','auth']))

    return input
  }

  const setAlert = (rs) => {
    alert.value = {
      message: _.get(rs, 'response.data.message', _.get(rs, 'data.message', rs.message)),
      type: rs && rs.error ? 'error': 'success',
    }
  }

  watch(model, () => {
    Instance.setModel({ ...model.value })

    getDatasource()
  })

  watch(() => selected, (dd) => {  
    emit('selected', { target:'selected', rows:dd.value })
  }, { deep: true })

  defineExpose({
    getDatasource,
  })

  onBeforeMount(async () => {
    schema.value = schemaColumns(model.value?.properties) 
    for(let idx in schema.value){
      // console.debug('onBeforeMount', schema.value[idx])
      schema.value[idx] = await modifyColumn(schema.value[idx])
    }
  })
    
  onMounted(async () => {
    try { 
      // console.error("table mounted", model.value)
      Instance.setModel({ ...model.value })
  
      // await getDatasource()
      changeLimit(perPage.value)
      // $bus.listen('table:refresh', getDatasource)
    } catch (error) {
      console.error("onmounted", error)
    }
    ready.value = true
  })
 
  onUnmounted(() => {
      // console.error("table unmountedmounted", model.value)
      Instance.setModel({ })
  })
</script>

<style lang="scss">
.crud-table {
  .pd-filters {
    .formkit-outer {
      margin: 0
    }
  }
  .alert {
    padding: 5px;
    background: lightblue;
    &.success{
      background: lightgreen;
    }
    &.error{
      background: lightcoral;
    }
  }
}
</style>