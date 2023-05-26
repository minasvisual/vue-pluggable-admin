<template> 
  <div class="relative shadow-md sm:rounded-lg crud-table overflow-x-auto w-full" >
    <div v-if="alert && alert.message" :class="`alert w-full text-center ${ alert?.type || '' }`" >
      <span>{{ alert.message }}</span>
    </div>
    <table v-if="ready" class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
           <tr class="pd-toolbar">
                <th scope="col" :colspan="totalCols" class="py-2">
                  <div class="headers flex">
                    <div class="lelf-col flex items-center justify-left w-1/2">
                      <button class="px-4 flex items-center whitespace-nowrap" type="button" v-if="selected.length" @click="deleteSelected">
                        <TrashIcon class="h-5" /> {{ selected.length }} Selected
                      </button>
                      <button class="px-4" type="button" @click="getDatasource">
                        <RefreshIcon class="h-5" />
                      </button>
                      <button class="px-4" type="button" @click="() => emit('create', {target: 'create', row: {}})">
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
                <th> </th>
                <th scope="col" class="px-2 py-1" v-for="col in schema" :key="col.key" @click="() => toggleSort(col)"> 
                  <div class="flex items-center gap-2">
                    {{ col.label }} 
                    <span v-if="col.sorter && config.sort == col.key">
                      <ArrowUpIcon class="h-4" v-if="col._order" />
                      <ArrowDownIcon class="h-4" v-else /> 
                    </span>
                  </div>
                </th> 
            </tr>
            <tr class="pd-filters">
                <th class="px-4 flex gap-2">
                  <input type="checkbox" :checked="(selected.length == table.length)" @change="selectAll" /> All
                </th>
                <th scope="col" class="px-2 py-1" v-for="col in schema" :key="col.key">
                  <FormKit v-if="col.filter" :type="gete(col, 'filter.type', 'search')" :delay="500" outer-class="m-0 p-0" input-class="w-full p-1"
                          :model="gete(col, 'model', {})"
                          :overwrite="gete(col, 'overwrite', {})"
                          :options="gete(col, 'options', [])"
                          @input="e => setFilter(col, e)"  
                  ></FormKit>
                </th>
                <th class="px-2 flex items-center justify-end">
                  <p class="">Limit</p> 
                  <FormKit outer-class="m-0 p-0 pl-2" type="select" v-model="perPage" :options="[1,5,15,25,50,100,500]" @input="changeLimit" />
                </th>
            </tr>
        </thead> 
        <tbody>
            <tr class="pd-rows bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(row, index) in table" :key="index"> 
                <td class="px-4 py-2" >
                    <input type="checkbox" :value="false" :checked="isSelected(selected, row)" @change="selectionChange(selected, row)" />
                </td> 
                <td class="px-2 py-2" v-for="col in schema" :key="col.key">
                  <TableInputs :cell="col" :data="row" /> 
                </td> 
                <td class="px-2 py-2 flex justify-end" >
                  <a class="cursor-pointer mr-3" @click="() => emit('edit', { target: 'edit', row})" v-if="can(schema, 'canEdit')">
                    <PencilIcon class="h-5" />
                  </a>
                  <a class="cursor-pointer" @click="() => deleteEmit(row)" v-if="can(schema, 'canDelete')">
                    <TrashIcon class="h-5" />
                  </a>
                </td> 
            </tr> 
        </tbody>
        <tfoot>
          <tr class="pd-footer">
            <td :colspan="totalCols" class="w-full p-2 pt-4 ">
              <CommonPagination :pages="totalPages" :actual="1" @change="changePage" />
            </td>
          </tr>
        </tfoot>
    </table>
  </div>
</template>

<script setup>
  import _ from 'lodash' 
  import axios from 'axios' 

  import { ref, inject, reactive, computed, watch, onBeforeMount, onMounted, onUnmounted, nextTick  } from 'vue'
  import CommonPagination from './common/Pagination.vue'
  import TableInputs from './tables/index.vue'
  import { RefreshIcon, TrashIcon, PlusIcon, PencilIcon, ArrowDownIcon, ArrowUpIcon } from './icons/index'
  
  import ResourceClass from '../libs/resource'
  import { schemaColumns, can, isSelected, selectionChange, selectionAll, fetchQueryInfo, filterParams, validateQueryInfo, 
           calcPages, mergeDeep,  } 
  from '../libs/helpers' 
  // import { useAppContext } from '~/store/global' 
  
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
  let perPage = ref(5)
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
      config.sort = col.key
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

      if( localPagination )
        table.value = Instance.paginate({ local: true, perPage: perPage.value, page:num })
      else
        getDatasource()
    })
  }

  const changeLimit = (v) => {
    nextTick(() => { 
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
      if( !Instance.isIt('local') && !validateQueryInfo( JSON.parse(JSON.stringify(queryInfo)) )){
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
      alert("Error to getData")
    }
  }

  const modifyColumn = async (input) => {
    if( input.model && typeof input.model == 'string' ) 
      input.model = await Instance.loadModel(input.model)

    if( input.overwrite && typeof input.overwrite == 'object' )
      input.model = mergeDeep(input.model, input.overwrite)
 
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

  onBeforeMount(async () => {
    schema.value = schemaColumns(model.value?.properties) 
    for(let idx in schema.value){
      console.log('onBeforeMount', schema.value[idx])
      schema.value[idx] = await modifyColumn(schema.value[idx])
    }
  })
    
  onMounted(async () => {
    try { 
      // console.error("table mounted", model.value)
      Instance.setModel({ ...model.value })
  
      await getDatasource()

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
}
</style>