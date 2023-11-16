<template>
  <FormKit type="group" outerClass="formkit-object pt-2" v-if="render">
    <p class="border-b-2 border-zinc-300 py-1">{{ props.label ?? context.meta }}</p>
    <div class="flex gap-2 py-2 items-center pl-2"  v-for="(idx, k) of keys" :key="k" > 
      <FormKit v-model="keys[k]" @input="setValue" />:
      <FormKit v-model="model[k]" @input="setValue" :type="modelTypes[k] ?? 'text'" />  
      <FormKit type="select" :options="types" v-model="modelTypes[k]" @change="forceRender" />  
      <button type="button" @click="e => removeItem(k)"><MinusCircleIcon class="h-5" /></button>  
    </div>

    <button type="button" @click="addItem" class="block w-full py-2 bg-zinc-100 hover:bg-zinc-200">
      <PlusCircleIcon class="h-4 m-auto" />
    </button> 
  </FormKit> 
</template>
 
<script setup> 
import _ from 'lodash'
import { ref, computed, nextTick } from 'vue'
import { MinusCircleIcon, PlusCircleIcon } from '../icons/index';
const { context } = defineProps(['context']) 
 
const props = computed(() => context.node?.props || {}) 
const keys = ref(Object.keys(context.value))
const model = ref(Object.values(context.value))
const modelTypes = ref([])
const render = ref(true)
const types = {
  'text':'Text',
  'number':'Number',
  'toggle':'Boolean', 
}

function forceRender(){
  render.value = false
  nextTick(() => {
    render.value = true
  })
}

function addItem(){
  keys.value.push(' ')
  model.value.push(' ')
  forceRender()
  setValue()
}

function removeItem(k){
  keys.value.splice(k, 1)
  model.value.splice(k, 1) 
  forceRender()
  setValue()
}
 
async function setValue () { 
  nextTick(() => {
    context.node.input( 
      _.zipObject(keys.value, model.value) 
    )  
  })
}  
</script>