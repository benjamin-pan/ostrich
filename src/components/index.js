import ostrichHeader from './head'

const components = [
  ostrichHeader
]

export default {
  install (Vue, options) {
    components.forEach((component) => {
      Vue.component(component.name, component);
    });
  }
}