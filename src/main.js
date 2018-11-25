
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
import Nav from './components/nav.vue'
import Item from './components/item.vue'
import ShopList from './components/shopList.vue'
import shopContent from './components/shopContent.vue'
import NavigationElevator from './components/NavigationElevator.vue'
import ListItem from './components/listItem.vue'

import SelectCity from '@/containers/selectCity.vue'


Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.component('MyHeader',Header)
Vue.component('MySearch',Search)
Vue.component('citynav',CityNav)
Vue.component('hotcity',HotCity)
Vue.component('pinyin',PinYin)
Vue.component('citylist',CityList)
Vue.component('SelectCity',SelectCity)
Vue.component('pagefooter',Footer)
Vue.component('biggoods',BigGoods)
Vue.component('smallgoods',SmallGoods)
Vue.component('Nav',Nav)
Vue.component('Item',Item)
Vue.component('ShopList',ShopList)
Vue.component('shopContent',shopContent)
Vue.component('NavigationElevator',NavigationElevator)
Vue.component('ListItem',ListItem)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
