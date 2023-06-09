// Custom inputs
// import CodeInput from './code.vue'
// import JsonInput from './json.vue'
// import EditorInput from './editor.vue'
import ToggleInput from './toggle.vue'
import TagsInput from './tags.vue'
import RepeaterInput from './repeater.vue' 
import DateRange from './daterange.vue' 
import CurrencyInput from './currency.vue' 
import { autocomplete } from './autocomplete'
import { image } from './image'
import { dynamic } from './dynamic'
import { multiple } from './multiple'

export default {
  // CodeInput, 
  // EditorInput,
  ToggleInput,
  TagsInput,
  RepeaterInput,
  // DateRange,
  CurrencyInput,
  // AutocompleteInput: autocomplete,
  ImageInput: image,
  DynamicInput: dynamic,
  MultipleInput: multiple,
}