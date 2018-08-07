// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Components from './components/index.js';
import {getRequest} from './assets/common/api.js';
import "@/assets/iconfont/iconfont.css";
import './mixins'

Vue.use(ElementUI)
Vue.use(Components)
Vue.prototype.getRequest = getRequest;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
