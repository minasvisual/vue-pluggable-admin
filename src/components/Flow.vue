<template>
  <main :class="`form-flow w-full relative ${ $attrs.class || ''}`" v-if="ready">  
    <Table 
      :model="schema" 
      @create="doEvent"
      @edit="doEvent"
      @delete="doEvent"
      @selected="doEvent"
      @refresh="doEvent"
    /> 
   
    <div class="modal fixed w-full h-full bg-black/20 left-0 top-0" v-if="data">
        <button @click="e => setData(null)" class="absolute right-0">&#10006;</button>
        <div class="absolute w-4/5 -translate-x-1/2 left-1/2 bg-white p-4 rounded-lg my-2 max-h-[95vh] overflow-y-auto ">
          <Form
            :model="schema"  
            :data="data"  
            @saved="setData(null)"
          /> 
        </div>
      </div> 
    </main>
</template>

<script setup>
import _ from 'lodash'
import axios from 'axios'
import { nextTick, onBeforeMount, ref } from 'vue';
import Table from './Table.vue'    
import Form from './Form.vue'    
import ResourceClass from '../libs/resource' 
  
const Instance = ResourceClass({ $axios: axios })
const { schema, resource } = defineProps(['schema','resource']) 
const model = ref(schema) 
const data =  ref(resource)
const ready =  ref(false)

function setData (newVal) {
  data.value = null
  nextTick(() => {
    data.value = newVal
  })
}

function doEvent(e){
  // console.log( 'Event received', JSON.stringify(e, null, 2))
  if( e.target == 'create' )
    setData(e.row)
  if( e.target == 'edit' )
    setData(e.row) 
}

onBeforeMount(() => { 
  Instance.setModel(model.value)
  const request = Instance.authRequest(Instance.getToken())
  model.value.api = Object.assign(model.value.api, request)
  console.debug(model.value)
  ready.value = true
})
</script>

<style lang="scss">
.form-flow { 
}
</style>