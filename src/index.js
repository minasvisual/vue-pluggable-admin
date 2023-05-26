import components from './components/index' 
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

export default plugin