
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './base.css'

import Header from './components/header.vue'
import Search from './components/search.vue'

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.component('MyHeader',Header)
Vue.component('MySearch',Search)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
