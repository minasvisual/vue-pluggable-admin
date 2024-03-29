<template>
   <div class="formkit-outer" :data-type="context.type" :class="[props.outerClass ?? '']">
    <span class="formkit-label" :class="[props.labelClass ?? '']" v-if="context.label">
      {{ context.label }}
    </span> 
    <div class="formkit-wrapper flex items-center" :class="[props.wrapperClass ?? '']">  
        <span v-if="slots.prefix" class="prefix p-2">{{ slots.prefix }}</span>
        <component :is="$slots.prefix" />
        <input type='text' 
              v-bind="context.attributes"  
              class='formkit-input'
              v-model="field"
              @keyup='formataMoedaInput' 
              @blur='context.blur'
              autocomplete="off"
              maxlength=16
        /> 
        <component :is="$slots.suffix" />
        <span v-if="slots.suffix" class="suffix p-2">{{ slots.suffix }}</span>
    </div>
    <span class="formkit-help" :class="[props.helpClass ?? '']" v-if="context.help">
      {{ context.help }} 
      <component :is="$slots.help" />
    </span>
    <ul class="formkit-messages" v-if="hasMessages"> 
      <li class="formkit-message" v-for="msg of context.messages" :key="msg.key">
        {{ msg.value }}
      </li>
    </ul>
  </div>
</template>

<script setup> 
  import { ref, onMounted, watch, computed } from 'vue';
  const { context } = defineProps(['context']) 
  const props = computed(() => context.node?.props || {})
  const slots = computed(() => props.value?.slots || {})
  const field = ref()
  const model = ref([])
  
  const formataMoedaInput = () => {
    field.value = formatarMoeda(field.value)
    
    context.node.input( unformat(field.value) )
  }
  
  const formatarMoeda = (valor) => {
    valor = valor + ''
    valor = parseInt( valor.replace(/[\D]+/g, '') )
    valor = valor + ''
    valor = valor.replace(/[\D]+/g, '')
    valor = valor.replace(/([0-9]{2})$/g, ',$1')
    
    if (valor.length === 3) valor = '0'+valor
    else if (valor.length === 1) valor = '0,0'+valor
    
    if( valor.length > 6 )
      valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")
    if( valor.length > 10 )
      valor = valor.replace(/([0-9]{3}),([0-9]{3}),([0-9]{2}$)/g, ".$1.$2,$3")
    if( valor.length > 14 )
      valor = valor.replace(/([0-9]{3}),([0-9]{3}),([0-9]{3}),([0-9]{2}$)/g, ".$1.$2.$3,$4") 
    if( valor == 'NaN' ) return ''
    
    return valor
  }
  
  const unformat = (valor) => {
    valor = valor + ''
    valor = valor.replace(/[^0-9,]+/g, '') 
    valor = valor.replace(',', '.') 
    return (valor === NaN || valor == 'NaN') ? '' : +valor
  }
  
  const parseNumber = (valor = '0') => {
    const splitValor = (valor + '').split('.')
    
    if( !splitValor[1] ) valor + '00'
    else if (splitValor[1].length === 1) valor += '0'
    
    return valor+''.replace(/\D/g, '') || 0
  }
  
  const blurHandler = (e) => {
    context.handlers.blur(e) 
  }
  
  watch(() => context.value, (newVal, oldVal) => {
     if( newVal && unformat(field.value) !== newVal ){
       field.value = parseNumber(newVal)
       field.value = formatarMoeda(field.value)
     }
  })
  
  onMounted(() => {
    field.value = parseNumber(context.value) 
  })
</script> 
