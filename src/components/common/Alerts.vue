<template>
  <div :class="`alert alert-${type} shadow-lg my-2`" v-if="show">
    <slot v-bind="{ show, message, type }">
      <InfoCircleIcon class="h-4" />    
      <span>{{ message }}</span>
    </slot>
  </div>
</template>

<script setup>   
  import { InfoCircleIcon } from '../icons/index';

  const { show, message, type = 'info' } = defineProps(['show','message','type'])
</script>

<style lang="scss"> 
  .alert {
    padding: 5px;
    background: lightblue;
    &.alert-success{
      background: lightgreen;
    }
    &.alert-error{
      background: lightcoral !important;
    }
  } 
</style>