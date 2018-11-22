
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './base.css'
import CityNav from './components/citynav.vue';
import HotCity from './components/hotcity.vue';
import PinYin from './components/pinyin.vue';
import CityList from './components/citylist.vue';
import Footer from './components/pagefooter.vue';
import BigGoods from './components/biggoods.vue';
import SmallGoods from './components/smallgoods.vue';

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.component('citynav',CityNav)
Vue.component('hotcity',HotCity)
Vue.component('pinyin',PinYin)
Vue.component('citylist',CityList)
Vue.component('pagefooter',Footer)
Vue.component('biggoods',BigGoods)
Vue.component('smallgoods',SmallGoods)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
