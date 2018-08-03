import ostrichHeader from './head'
import ostrichComments from './os-comments'
import ostrichDiscuss from './os-discuss'
import ostrichHotNews from './os-hot-news'

const components = [
  ostrichHeader,
  ostrichComments,
  ostrichDiscuss,
  ostrichHotNews
]

export default {
  install (Vue, options) {
    components.forEach((component) => {
      Vue.component(component.name, component);
    });
  }
}
