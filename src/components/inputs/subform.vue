<template>
  <div :data-type="context.type" :class="[props.outerClass ?? '']">
    <div class="flex flex-col py-2">
      <CrudForm 
        :key="context.node.name"
        :data="context.value" 
        :resource="resource" 
        :model="model" 
        @saved="changed" 
      />   
    </div>
    <hr />
  </div>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue';
  import CrudForm from '../Form.vue'    
  
  const { context } = defineProps(['context']) 
  const props = computed(() => context.node?.props || {})  

  const model = ref( props.value?.model ) 
  const selected = ref([]) 
  const resource = computed(() => model.value.api?.resource || {})  
  
  function changed(rows) { 
    selected.value = rows
    context.node.input(rows)
  }

  function hook({ target, ...data }){ 
    if( target == 'create' && context.attrs.onCreate )
      context.attrs.onCreate({ target, ...data })
    if( target == 'edit' && context.attrs.onEdit )
      context.attrs.onEdit({ target, ...data })
    if( target == 'delete' && context.attrs.onDelete )
      context.attrs.onDelete({ target, ...data })
    if( target == 'refresh' && context.attrs.onRefresh )
      context.attrs.onRefresh({ target, ...data })
  }

  onMounted(() => { 
    
  })
</script>