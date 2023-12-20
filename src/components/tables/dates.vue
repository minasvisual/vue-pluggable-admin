<template>
  <div class="whitespace-nowrap"> 
    {{ formatDate(data, cell?.action?.format || 'MM/DD/YYYY HH:mm', cell?.action?.from || null, cell?.action?.utc || false) }}
  </div>
</template>

<script setup>
  import { formatDate } from '../../libs/helpers'
  const { data, cell, row } = defineProps(['data', 'cell', 'row'])
    
</script>