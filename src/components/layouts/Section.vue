<template> 
  <Fragment v-if="ready">
    <FormKitSchema :schema="schema?.properties || schema" :data="resource" />
  </Fragment>
</template>
 
<script setup>  
  import { ref, reactive, onMounted, onBeforeMount } from 'vue' 
  import axios from 'axios'
  import Fragment from '../common/Fragment.vue' 
  import ResourceClass from '../../libs/resource'  
  let Instance = ResourceClass({ $axios:axios })

  const { model, resource:res = [] } = defineProps(['model','resource'])
  const ready = ref(false)
  const schema = ref([{'$el':'h1', 'children':'Hello World'}])
  let resource = reactive(res)
  
  async function loadData () { 
    let res = await Instance.getData().catch(console.error)
    resource = JSON.parse(JSON.stringify(res))
  }

  onBeforeMount(async () => { 
    try{
      if( typeof model === 'string' ){
        let data = await Instance.loadModel(model) 
        if( data.api?.rootApi )
          await loadData()
        schema.value = data 
      }else{
        Instance.setModel(model)
        if( model?.api?.rootApi )
          await loadData()
        schema.value = model
      } 
      ready.value = true
    } catch(e) {
      console.error('before mont', e)
    }
  })
 
  onMounted(async () => { 
    console.log('mounted section', typeof model) 
  })
</script>
