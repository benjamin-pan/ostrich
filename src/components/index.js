import ostrichHeader from './head'
import ostrichComments from './os-comments'
import ostrichDiscuss from './os-discuss'
import ostrichHotNews from './os-hot-news'
import ostrichAuthor from './os-author'
import ostrichShortArticle from './os-short-article'
import ostrichShortFlash from './os-short-flash'
import ostrichShortTitle from './os-short-title'
import ostrichEnterpriseColumn from './os-enterprise-column'
import ostrichShortCard from './os-short-card'
import ostrichHotLabels from './os-hot-labels'

const components = [
  ostrichHeader,
  ostrichComments,
  ostrichDiscuss,
  ostrichHotNews,
  ostrichAuthor,
  ostrichShortArticle,
  ostrichShortFlash,
  ostrichShortTitle,
  ostrichEnterpriseColumn,
  ostrichShortCard,
  ostrichHotLabels
]

export default {
  install (Vue, options) {
    components.forEach((component) => {
      Vue.component(component.name, component);
    });
  }
}
