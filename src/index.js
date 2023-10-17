import components from './components/index' 
import inputs from './components/inputs/index' 
 

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
    features: []
  }
}

const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop]
        console.log(`Crud${component.__name}`)
        Vue.component(`Crud${component.__name}`, component)
      }
    }
  }
}

const {
  CodeInput,
  JsonInput,
  // EditorInput,
  GridInput,
  FormInput,
  ToggleInput,
  TagsInput,
  RepeaterInput,
  // DateRangeInput,
  CurrencyInput,
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
  'autocomplete': AutocompleteInput,
  'toggle': inputByComponent(ToggleInput, 'input', ['boolean']),
  'tags': inputByComponent(TagsInput, 'input', ['output']),
  'hasMany': inputByComponent(RepeaterInput, 'list', ['schema','inline']),
  'grid': inputByComponent(GridInput, 'input', ['model','overwrite']), 
  'subform': inputByComponent(FormInput, 'input', ['model','overwrite','resource']), 
  // 'daterange': inputByComponent(DateRangeInput, 'input', ['format']), 
  'currency': inputByComponent(CurrencyInput, 'input', ['slots']), 
  'image': ImageInput,
  'dynamic': DynamicInput,
  'multiple': MultipleInput,
}

export const Pluggable = plugin