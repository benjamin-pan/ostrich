<<<<<<< HEAD
import ostrichHeader from './head'
import ostrichComments from './os-comments'
import ostrichDiscuss from './os-discuss'
import ostrichHotNews from './os-hot-news'
import ostrichBase from './footer'

const components = [
  ostrichHeader,
  ostrichComments,
  ostrichDiscuss,
  ostrichHotNews,
  ostrichBase
=======
import osHeader from './head'
import osComments from './os-comments'
import osDiscuss from './os-discuss'
import osHotNews from './os-hot-news'
import osAuthor from './os-author'
import osShortArticle from './os-short-article'
import osShortFlash from './os-short-flash'
import osShortTitle from './os-short-title'
import osEnterpriseColumn from './os-enterprise-column'
import osShortCard from './os-short-card'
import osHotLabels from './os-hot-labels'
import osAdvertising from './os-advertising'
import osShare from './os-share'
import osHotActivity from './os-hot-activity'

const components = [
  osHeader,
  osComments,
  osDiscuss,
  osHotNews,
  osAuthor,
  osShortArticle,
  osShortFlash,
  osShortTitle,
  osEnterpriseColumn,
  osShortCard,
  osHotLabels,
  osAdvertising,
  osShare,
  osHotActivity
>>>>>>> 0a2ec35576ed792707cda7a90f91083431e11520
]

export default {
  install (Vue, options) {
    components.forEach((component) => {
      Vue.component(component.name, component);
    });
  }
}
