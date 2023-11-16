<template>
    <span v-html="template( get(cell, 'action.template', '${data}') )(props)"></span >
</template>

<script setup> 
  import _ from 'lodash'    
  import { computed } from 'vue';
  
  const { template, get } = _
  const props = defineProps(['data', 'cell', 'row'])
  const { data, cell, row } = props
  const expression = computed(e => { 
      let compiled = _.template(_.get(cell, 'action.template', '${data}'));
      return compiled({data, cell, row}) 
  })
</script>