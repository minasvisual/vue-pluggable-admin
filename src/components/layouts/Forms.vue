<template> 
  <Fragment v-if="ready">
    <CrudForm v-if="schema.properties" :model="schema" :data="resource" @saved="e =>$emit('saved', e)" /> 
    <span v-else>Properties required</span>
  </Fragment>
</template>
 
<script setup>   
  import { ref, reactive, onMounted, onBeforeMount } from 'vue' 
  import axios from 'axios'
  import Fragment from '../common/Fragment.vue' 
  import ResourceClass from '../../libs/resource'   
  
  const { model, resource:res = {} } = defineProps(['model','resource']) 

  const ready = ref(false)
  let schema = ref({ })
  let resource = reactive(res)
  let Instance = ResourceClass({ $axios:axios })
  
  onBeforeMount(async () => { 
    try{
      if( typeof model === 'string' ){
        let data = await Instance.loadModel(model)  
        schema.value = data 
      }else{
        Instance.setModel(model) 
        schema.value = model
      } 
      ready.value = true
    } catch(e) {
      console.error('before mont', e)
    }
  })
 
 
  onMounted(async () => { 
    // ready.value = true
  })
</script>
