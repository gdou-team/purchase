import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import storage from 'good-storage'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyload from "vue-lazyload"
import './base.css'

import CityNav from './components/citynav.vue';
import HotCity from './components/hotcity.vue';
import PinYin from './components/pinyin.vue';
import CityList from './components/citylist.vue';
import Footer from './components/pagefooter.vue';
import BigGoods from './components/biggoods.vue';
import SmallGoods from './components/smallgoods.vue';
import GoodsList from './components/goods_list.vue';
import GoodsDetail from './components/goods_detail.vue';
import Header from './components/header.vue'
import Search from './components/search.vue'
import Nav from './components/nav.vue'
import Item from './components/item.vue'
import ShopList from './components/shopList.vue'
import shopContent from './components/shopContent.vue'
import NavigationElevator from './components/NavigationElevator.vue'
import ListItem from './components/listItem.vue'
import OrderList from './components/order_list.vue'
import Comment from './components/comment.vue'
import OrderDetails from './containers/orderDetails.vue'
import SelectCity from '@/containers/selectCity.vue'
import UserInfo from '@/containers/userinfo.vue'
import ChangePhone from '@/containers/changePhone.vue'
import ShopHeader from '@/components/shopheader.vue'
import ShopFooter from '@/components/shopfooter.vue'

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.component('MyHeader', Header)
Vue.component('MySearch', Search)
Vue.component('citynav', CityNav)
Vue.component('hotcity', HotCity)
Vue.component('pinyin', PinYin)
Vue.component('citylist', CityList)
Vue.component('SelectCity', SelectCity)
Vue.component('pagefooter', Footer)
Vue.component('biggoods', BigGoods)
Vue.component('smallgoods', SmallGoods)
Vue.component('goodslist', GoodsList)
Vue.component('goodsdetail', GoodsDetail)
Vue.component('orderlist', OrderList)
Vue.component('orderdetails', OrderDetails)
Vue.component('Nav', Nav)
Vue.component('Item', Item)
Vue.component('ShopList', ShopList)
Vue.component('shopContent', shopContent)
Vue.component('NavigationElevator', NavigationElevator)
Vue.component('ListItem', ListItem)
Vue.component('orderlist', OrderList)
Vue.component('UserInfo', UserInfo)
Vue.component('ChangePhone', ChangePhone)
Vue.component('Comment', Comment)
Vue.component('ShopHeader',ShopHeader)
Vue.component('ShopFooter',ShopFooter)

// 登录权限控制
router.beforeEach((to, from, next) => {
  if (!store.state.userInfo.id) {
    if(to.name == 'orderList'){
      next({name:'login'})
    }
  }
  next()
})

// 图片懒加载
Vue.use(VueLazyload, {
  loading: require("@/assets/default.png")
})

Vue.prototype.$storage = storage

// 断网通知
if (window.Notification) {
  window.addEventListener('offline', () => {
    Notification.requestPermission(() => {
      if (Notification.permission == 'granted') {
        let notification = new Notification('提示', {
          body: '网络已经断开,目前处于离线浏览中',
          icon: require("@/assets/default.png"),
          silent:true,
          tag:'notification',
          renotify:true
        })
      }
    })
  })

  window.addEventListener('online', () => {
    Notification.requestPermission(() => {
      if (Notification.permission == 'granted') {
        let notification = new Notification('提示', {
          body: '网络恢复',
          icon: require("@/assets/default.png"),
          silent:true,
          tag:'notification',
          renotify:true
        })
      }
    })
  })
}


new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  store
})
