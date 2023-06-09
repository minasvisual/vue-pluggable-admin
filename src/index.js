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
        Vue.component(`Crud${component.__name}`, component)
      }
    }
  }
}

const {
  CodeInput,
  JsonInput,
  // EditorInput,
  ToggleInput,
  TagsInput,
  RepeaterInput,
  DateRange,
  CurrencyInput,
  // AutocompleteInput,
  ImageInput,
  DynamicInput,
  MultipleInput,
} = inputs 

export const CustomInputs = {
  // 'link': inputByComponent(LinkComponent),
  // 'autocomplete': AutocompleteInput,
  // 'code': inputByComponent(CodeInput, 'input'),
  // 'json': inputByComponent(JsonInput, 'input'),
  // 'editor': inputByComponent(EditorInput, 'input'),
  'toggle': inputByComponent(ToggleInput, 'input', ['boolean']),
  'tags': inputByComponent(TagsInput, 'input', ['output']),
  'hasMany': inputByComponent(RepeaterInput, 'list', ['schema','inline']),
  // 'grid': inputByComponent(GridInput, 'input', ['model','overwrite']), 
  // 'daterange': inputByComponent(DateRange, 'input', ['format']), 
  'currency': inputByComponent(CurrencyInput, 'input',), 
  'image': ImageInput,
  'dynamic': DynamicInput,
  'multiple': MultipleInput,
}

export const Pluggable = plugin