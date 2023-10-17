<template>
  <div class="form" v-if="!!row">
    <div v-if="res.message" class="text-red"> 
      <slot name="alert" v-bind="{ row, res, model }" >
        {{ res.message }}
      </slot>
    </div>
    <FormKit v-if="ready && schema" type="form" method="post" submit-label="Submit" :form-class="`w-full ${ model?.formClasses || '' }`"
            :actions="can(model, 'submit')"
            v-model="row" 
            @submit="save" 
    >
      <slot name="prefix" v-bind="{ row, res, model }" />
      <FormKitSchema :schema="schema" class="py-2" />
      <slot name="suffix" v-bind="{ row, res, model }" />
    </FormKit> 
    <div v-else-if="!ready">
      <Spinner />
    </div>
    <div v-else>
      <slot name="error" v-bind="{ row, res, model }" >
        Schema not found
      </slot>
    </div> 
  </div>
</template>

<script setup>
  import _ from 'lodash' 
  import axios from 'axios' 
  
  import Spinner from './common/Spinner.vue' 
  import Resource from '../libs/resource'
  import { ref, inject, reactive, computed, watch, onBeforeMount, onMounted, onUnmounted, nextTick  } from 'vue'
  // import { useAppContext } from '~/store/global'; 
  // import { useAuth } from '~/store/auth'; 
  import { normalizeInput, can, schemaFields, filterParams } from '../libs/helpers'; 

  // let { $axios, $bus, $message } = useNuxtApp() 
  let Instance = Resource({ $axios: axios })
  const emit = defineEmits(['saved'])
  // const App = useAppContext()
  // const Auth = useAuth()
  const schema = ref([]) 

  const { model, data, resource } = defineProps({
    model: {
      type: Object,
      default: () => ({ properties: [] })
    }, 
    data: {
      type: Object,
      default: () => ({})
    },
    resource:{
      type: Object,
      default: () => ({})
    },
  })
 
  const save = (payload) => {
    Instance.setModel(JSON.parse(JSON.stringify(model)))
    // payload = Object.assign(resource, payload)

    let formFields = fields.value.filter(i => !i.ignored).map(i => i.key)
    console.debug('Save', formFields, payload)  
    Instance.saveData(_.pick(payload, formFields)).then((rs) => {
      // $message("Saved ")
      res.value = rs
      emit('saved', rs)

      // $bus.emit('form:created', payload)
    }).catch(err => res.value = _.get(err, 'response.data', err) )
  }

  let row = ref(data)
  let res = ref({})
  let ready = ref(false)
  let fields = ref(schemaFields(model?.properties)) 
 
  const getDatasource = async (payload={}, config={}) => {
    try { 
      console.debug("chamou to formDatasource", model)  
      let api = filterParams({ ..._.get(model, 'api', {}) }, { data: payload }) 

      Instance.setModel({ ...model, api })

      row.value = await Instance.getDataObject(payload, config)
        
      console.debug("concluiu  getDatasource", api)
    } catch (error) {
      console.error('error formDatarousce', error)
      alert("Error to getData")
    }
  }

  watch(model, (newVal) => {
    console.debug('form wathc', newVal)
    Instance.setModel(JSON.parse(JSON.stringify(newVal))) 
  })
  
  const modifyInput = async (input) => {
    if( input.model && typeof input.model == 'string' ) 
      input.model = await Instance.loadModel(input.model)
     
    _.set(input.model, 'api.resource', row.value)

    return input
  }
 
  onBeforeMount(async () => {
    try {  
      let modelRaw = JSON.parse(JSON.stringify(model))
      Instance.setModel(modelRaw)
      fields.value = schemaFields(modelRaw.properties)
      // row.value = await Instance.getData(row.value)
 
      // Instance.setModel(model.value)
      // resource.value = await Instance.getData() 

      console.debug('fields', fields.value)
      for(let row of model.properties){ 
        schema.value.push( await normalizeInput(row, modifyInput) )
      } 
    } catch (error) {
      console.error("onmounted", error)
    }
  })

  onMounted(async () => {
    if( model.type == 'form' && Instance.can('getDataById') )
        await getDatasource(resource)
    
    ready.value = true
  })

  onUnmounted(() => { 
    console.debug("onmounted")
  })
</script>

<style lang="scss">
.formkit-wrapper{
	max-width: 100% !important;
}
.formkit-actions {
  padding: 10px 0;
}
</style>