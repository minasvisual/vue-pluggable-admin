<template>
    <select 
        v-if="renderComponent" 
        class="table-select"
        :value="data" 
        disabled
    >
        <!-- v-on="$listeners" -->
      <option v-for="(opt, idx) of (cell.options || options)" :key="idx" :value="opt.value">{{ opt.label }}</option>
    </select>
</template>


<script setup> 
  import axios  from 'axios' 
  import _ from 'lodash' 
  import { onMounted, ref, nextTick } from 'vue'
  import { filterParams, mergeDeep, interpolate, toRaw } from '../../libs/helpers'
  import ResourceClass from '../../libs/resource'

  const { data, cell, row } = defineProps(['data','cell','row'])
  const Instance = ResourceClass({ $axios:axios })
  const renderComponent = ref(false)
  const loading = ref(false)
  const options = ref([])
 
  function forceRerender() {
    renderComponent.value = false;

    nextTick(() => {
      renderComponent.value = true;
    });
  }

  async function getOptions({ rootApi, fieldLabel, fieldValue, ...apiModel }, modelValue = {}, filter={}){
    try{ 
      // console.debug("input mixin get options", { rootApi, fieldLabel, fieldValue, ...data })
      if( rootApi ){
        loading.value = true;
        let request = Instance.authRequest( Instance.getToken() );
        apiModel = mergeDeep(apiModel, request)
        if( typeof filter == 'object' )
          apiModel = mergeDeep(apiModel, filter)

        rootApi = interpolate(rootApi, { data:modelValue, row })

        Instance.setModel({ api: { ...apiModel, rootApi, resource:row } })

        // console.log("getOoptions", this.Instance.getModel())
        let { rows } = await Instance.getData({ data:modelValue }) 

        options.value = rows && rows.map((i, k) => ({ 
            label: _.get(i, fieldLabel, i.toString()), 
            value: _.get(i, fieldValue, k)
          }) 
        )
        
        loading.value = false;
        forceRerender()
        return options.value
      }
    }catch(e){
        alert('Erro to get data from '+ rootApi)
        console.error('Erro select input', e)
        return options.value
    }
  } 
    
  onMounted(async () => {
    let { action, model } = cell
    Instance.setModel(toRaw(model))

    if( _.has(model, 'api.rootApi') )
      cell.options = await getOptions(
          Object.assign(model.api, action), 
          data, 
          filterParams(model.api, { filters:[{prop: action.fieldValue, value:data }] }) 
      )

    renderComponent.value = true
  }) 
</script>

<style lang="css">
  .table-select{
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
    border: none  !important;
    background: transparent !important; 
    color: #333;
  }
</style>