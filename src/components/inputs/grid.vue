<template>
  <div :data-type="context.type" :class="[props.outerClass ?? '']">
    <div class="flex flex-col py-2">
      <CrudTable 
        :resource="[]" 
        :model="model" 
        @selected="changed"
        @create="hook"
        @edit="hook"
        @delete="hook" 
        @refresh="hook" 
      />  
      <p class="py-2">Selected: {{ selected.length }}</p>
    </div>
    <hr />
  </div>
</template>

<script setup>
  import _ from 'lodash'
  import { computed, onMounted, ref } from 'vue';
  import CrudTable from '../Table.vue'    
 
  const emit = defineEmits(['create']) 
  const { context } = defineProps(['context']) 
  const props = computed(() => context.node?.props || {})  

  const model = ref({
    ..._.get(props.value, 'model', {}),
    canCreate: _.get(props.value, 'model.canCreate', false),
    canEdit: _.get(props.value, 'model.canEdit', false),
    canDelete: _.get(props.value, 'model.canDelete', false),
  }) 
  const selected = ref([]) 
  
  function changed({rows}) {  
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
    console.debug('grid', context.attrs.onCreate)
    
  })
</script>