
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

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

import Header from './components/header.vue'
import Search from './components/search.vue'

import SelectCity from '@/containers/selectCity.vue'


Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.component('MyHeader',Header)
Vue.component('MySearch',Search)
Vue.component('citynav',CityNav)
Vue.component('hotcity',HotCity)
Vue.component('pinyin',PinYin)
Vue.component('citylist',CityList)
<<<<<<< HEAD
Vue.component('SelectCity',SelectCity)
=======
Vue.component('pagefooter',Footer)
Vue.component('biggoods',BigGoods)
Vue.component('smallgoods',SmallGoods)
>>>>>>> 3d978d1152c11f7fb7f023464f5586913db37b1f

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
