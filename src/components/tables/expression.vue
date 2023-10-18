<template>
    <span v-html="expression" v-on="$listeners"></span >
</template>

<script setup> 
  import _ from 'lodash'    
  import { computed } from 'vue';
  
  const { data, cell, row } = defineProps(['data', 'cell', 'row'])
  const expression = computed(e => { 
      let compiled = _.template(_.get(cell, 'action.template', '${data}'));
      return compiled({data, cell, row}) 
  })
</script>