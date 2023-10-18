<template>
    <a class="p-1" v-if="inputType == 'link'" href="#" @click.prevent="emitClick">
        {{ replaceContent() }}
    </a>
    <CButton 
        v-else-if="inputType == 'button'"
        size="sm"
        color="info"
        v-on:click="emitClick" 
        v-bind="{ ...cell, type: inputType }"
    >   
        {{ replaceContent() }}
    </CButton>
     <FormulateInput 
        v-else
        input-class="p-1"
        :placeholder="( inputType == 'select' && 'select..' || 'empty' )"
        @blur-context="emitClick"
        v-model="data"
        v-bind="{ ...cell, type: inputType, name: cell.key, label: false }"
    />
</template>

<script setup>
  import _ from 'lodash'
  import { interpolate,  } from '../../libs/helpers'
  import { computed } from 'vue'
  const { get, mergeDeep } = _

  const { data, cell, row } = defineProps(['data','cell','row'])
  const inputType = computed(e => get(cell, 'action.type', 'button'))
  const sendType = computed(e => {
    if( cell?.action?.source == 'cell')
      return cell
    else if( cell?.action?.source === 'row')
      return { ...row, [cell?.key]: data }
    else if( cell?.action?.source == 'field')
      return { [cell.key]: data }
    else if( cell?.action?.source == 'context')
      return mergeDeep(cell?.action?.data, { overwrite: {api:{ resource:row }}, row: get(row, cell?.action?.id, data) })
    else if( cell?.action?.source == 'custom')
      return cell?.action?.data
    else    
      return data
  })

  function replaceContent() {
      if( !['button','link'].includes(inputType.value) )
          return false

      if( cell?.action?.label ) 
          return interpolate(cell.action.label, {data: data, action: cell.action, row: row  }).toString()
      else
          return data && data.toString()
  }

  function emitClick(){
      if( !cell?.action?.handler || (!['custom','context'].includes(cell?.action?.source) && data == row[cell.key]) ) return;

      row[cell.key] = data
      // $bus.$emit(cell?.action?.handler, sendType.value)
      console.debug("table/Actions emitclick called", cell?.action?.handler, sendType.value)
  } 
</script>

<style scoped>
    select{
        padding: 3px !important;
    }
</style>
