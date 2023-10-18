<template>
    <span v-if="renderComponent">{{ item[ cell.action.fieldLabel ] }}</span>
    <span v-else><Spinner color="info" size="sm" /></span>
</template>


<script setup>
  import axios from 'axios'
  import _ from 'lodash'
  import { nextTick, ref, onMounted } from 'vue';
  import { mergeDeep } from '../../libs/helpers' 
  import ResourceClass from '../../libs/resource'
  import Spinner from '../common/Spinner.vue';

  const Instance = new ResourceClass({ $axios:axios })
  const { get } = _ 
  const { data, cell, } = defineProps(['data','cell'])
  const renderComponent = ref()
  const item = ref({}) 
 
  // watch(async data(newVal){
  //     if( newVal )
  //       await this.buildData()
  //   }
  // }

  onMounted(async () => {
    renderComponent.value = false 
    let { model } = cell

    if( _.has(model, 'api.rootApi') ) 
      schema.value = model
        
    Instance.setModel(model)
    await buildData()

    renderComponent.value = true
  })
   
  async function buildData(){   
    item.value = {}
    let { action } = cell

    if( action && action.fieldValue )
      _.set( schema.value, "api", mergeDeep( convertAttributesToSchema(action), (schema.value?.api || {}) )  )

    if( schema.value && schema.value.api && data.value ){
      let pk = get(schema.value, 'primaryKey', 'id')

      item.value = await Instance.getData({ [pk]: data.value }) 
    }else{
      item.value = {}
    }
  }

  function convertAttributesToSchema(attr){
    return {
      rootApi: get(attr, 'url'),
      wrapData: get(attr, 'wrapData'),
      fieldLabel: get(attr, 'fieldLabel'),
      fieldValue: get(attr, 'fieldValue'),
      ...get(attr, 'requestOptions', {})
    }
  }

  function forceRerender() {
    renderComponent.value = false;

    nextTick(() => {
      renderComponent.value = true;
    })
  }
</script>

<style lang="css">
  .table-select select{
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
    border: none  !important;
    background-color: transparent !important;
  }
</style>