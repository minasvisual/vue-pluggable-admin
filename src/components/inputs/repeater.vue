<template>
   <div class="formkit-outer" :data-type="context.type" :class="[props.outerClass ?? '']">
    <span class="formkit-label" :class="[props.labelClass ?? '']" v-if="context.label">
      {{ context.label }}
    </span> 
    <section class="formkit-wrapper" :class="[props.wrapperClass ?? '']">   
        <div v-if="schema && rendered && props.inline === true"  class="relative">  
          <template v-for="(row, i) in context.value" :key="i"> 
            <div class="flex py-2 gap-2"> 
              <FormKit v-if="![null,undefined].includes(model[i])" v-bind="_.omit(schema[0], ['$formkit'])" v-model="model[i]" />  
              <button type="button" class="flex justify-between items-center gap-2 p-2" @click="removeTag(i)" title="Remove item">
                <MinusCircleIcon class="h-5"  />
              </button>
            </div>
            <hr>
          </template>  
        </div> 
        <div v-else-if="schema && rendered && !props.inline" class="relative">  
          <FormKitSchema :schema="schemaObj" />  
        </div>
        <span v-else>error</span> 
    </section>
    <button type="button" class="flex justify-start items-center gap-2 py-2" @click="addTag"  title="Add new item">
      <PlusCircleIcon class="h-5" /> Add
    </button> 

    <span class="formkit-help" :class="[props.helpClass ?? '']" v-if="context.help">
      {{ context.help }}
    </span>
    <ul class="formkit-messages" v-if="hasMessages"> 
      <li class="formkit-message" v-for="msg of context.messages" :key="msg.key">
        {{ msg.value }}
      </li>
    </ul>
  </div>
</template>

<script setup>  
  import { ref, computed, onMounted } from 'vue'
  import _ from 'lodash'
  import { normalizeInput } from '../../libs/helpers'; 
  import { MinusCircleIcon, PlusCircleIcon } from '../icons/index';
  const { context = {} } = defineProps(['context']) 
  const props = computed(() => context.node?.props || {})
  const valid = ref(true)
  const schema = ref([])
  const model = ref([]) 
  const rendered = ref(false)
  const schemaObj = computed(() => {
    if( props.value.inline ) return []
    else
      return model.value.map((i, k) => {
        return {
          "$formkit": "group",
          "name": k,  
          "children": [
            {
              "$el": "div",
              "attrs": {"class":"flex py-2 gap-2"},
              "children":[
                {
                  "$el": "div",
                  "attrs": {"class":"w-full"},
                  "children": schema.value
                },
                {
                  "$el":'button',
                  "attrs":{ "type":"button", "class":"p-2", "onclick":() => removeTag(k) },
                  "children": [
                    {
                      "$cmp": MinusCircleIcon,
                      "props": { "class": "h-5", "title":"Remove item" }
                    } 
                  ]
                },
              ]
            },
            {
              "$el": "hr",
              "attrs": {"class":"w-full p-1"},
              "children":""
            }
          ]
        }
      })
  })  
  
  function addTag (event) { 
    var val = props.value.inline === true ? "":({ }) 
    // model.value.push(val)  
    context.node.input([...context.value, val])  
    model.value = [...context.value, val]
  }

  function removeTag (index) {  
    let data = JSON.parse(JSON.stringify(model.value))
    data = data.filter((i, k) => k != index)
    context.node.input(data)  
    model.value = data
  }
  
  function changeData(){  
    context.node.input(model.value)  
  }
 
  onMounted(async () => {  
    model.value = [...context.value]
    for(let row of (props.value.schema || []) ){ 
      schema.value.push( await normalizeInput(row) )
    } 
    rendered.value = true
  })
</script> 
 
<style scoped> 
</style>


<!-- {
  "name": "repeater",
  "label": "Item array (custom input)",
  "type": "repeater",
  "inline": true, // true = array string 1 field | false = object
  "schema":[
    {
      "name": "tags",
      "label": "Tags", 
    }
  ]
} -->