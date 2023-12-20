import components from './components/index' 
import inputs from './components/inputs/index' 
import IMask from './libs/imask'
import { formatDate } from './libs/helpers'
 

export const CustomPlugins = [
  function formats(node){
    const context = node.props 
    node.hook.input((value, next) => { 
      if( context.type == 'switch' )
        return next(value === true)
      if( value && context.type.includes('date') && value.includes('Z') ){ 
        let format = ( context.type == 'date' ? 'YYYY-MM-DD': 'YYYY-MM-DD\\THH:mm:ss' ) 
        let newVal = formatDate(value, format, null, (context.attrs.utc || true))
        return next(newVal)
      } 
      return next(value)
    })
  },
  function masks(node){
    const context = node.props 
    node.hook.input((value, next) => {
      const hasMask = 'masks' in context.attrs || 'masks' in context.attrs
      if ( hasMask ) { 
        const options = context.attrs['masks'] || context.attrs.masks
        const maskOptions = typeof options === 'object' && options.mask ? options : { mask: options }
        const masked = IMask.createMask(maskOptions)
        masked.resolve(value) 
        return next(masked.value)
      } else {
        return next(value)
      }
    })
  },
]

const inputByComponent = (comp, type = 'input', props = []) => { 
  return {
    // Node type: input, group, or list.
    type: type,
    // Schema to render (schema object or function that returns an object)
    schema: [],
    // A Vue component to render (use schema _OR_ component, but not both)
    component: comp,
    // (optional) Input specific props the <FormKit> component should accept.
    // should be an array of camelCase strings
    props: props,
    // (optional) Array of functions that receive the node.
    features: [], 
  }
}

const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop]
        // console.log(`Crud${component.__name}`)
        Vue.component(`Crud${component.__name}`, component)
      }
    }
  }
}

const {
  CodeInput,
  JsonInput,
  // EditorInput,
  // DateRangeInput,
  GridInput,
  FormInput,
  ToggleInput,
  TagsInput,
  RepeaterInput,
  CurrencyInput,
  ObjectInput,
  AutocompleteInput,
  ImageInput,
  DynamicInput,
  MultipleInput,
} = inputs 
 

export const CustomInputs = {
  // 'link': inputByComponent(LinkComponent),
  // 'code': inputByComponent(CodeInput, 'input'),
  // 'json': inputByComponent(JsonInput, 'input'),
  // 'editor': inputByComponent(EditorInput, 'input'),
  // 'daterange': inputByComponent(DateRangeInput, 'input', ['format']), 
  'autocomplete': AutocompleteInput,
  'toggle': inputByComponent(ToggleInput, 'input', ['boolean']),
  'tags': inputByComponent(TagsInput, 'input', ['output']),
  'hasMany': inputByComponent(RepeaterInput, 'list', ['schema','inline']),
  'grid': inputByComponent(GridInput, 'input', ['model','overwrite']), 
  'subform': inputByComponent(FormInput, 'input', ['model','overwrite','resource']), 
  'currency': inputByComponent(CurrencyInput, 'input', ['slots']), 
  'image': ImageInput,
  'dynamic': DynamicInput,
  'multiple': MultipleInput,
  'object': inputByComponent(ObjectInput, 'input', ['slots']), 
}

export const Pluggable = plugin