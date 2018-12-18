import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/home'
import Login from '@/components/login.vue'
import Register from '@/components/register.vue'
import LoginAndRegister from '@/containers/loginAndRegist.vue'
import OrderList from '@/containers/OrderList.vue'
import UserInfo from '@/containers/userinfo.vue'
import GoodList from '@/containers/goodList.vue'
import GoodDetail from '@/containers/goodDetail.vue'
import Map from '@/containers/map.vue'
import NotFound from '@/containers/notFound.vue'
import OrderDetails from '@/containers/orderDetails.vue'
import Vanni from '@/components/HelloWorld.vue'
import HomeContent from '@/containers/HomePage.vue'
import Order from '@/components/order.vue'
import OrderPay from '@/components/orderPay.vue'
import shopSettled from '@/containers/shopSettled.vue'
import SettledIn from '@/containers/settledIn.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'homeContent',
          name: 'homeContent',
          component: HomeContent
        },
        {
          path: 'goodList',
          name: 'goodList',
          component: GoodList
        },
        {
          path: 'goodDetail/:id',
          name: 'goodDetail',
          component: GoodDetail
        },
        {
          path: 'map',
          name: 'map',
          component: Map
        },
        {
          path: '/',
          redirect: 'homeContent'
        }
      ]
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: OrderList
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/orderPay',
      name: 'orderPay',
      component: OrderPay
    },
    {
      path: '/settledIn',
      name: 'settledIn',
      component: SettledIn
    },
    {
      path:'/shopSettled',
      name:'shopSettled',
      component:shopSettled
    },
    {
      path: '/loginandregister',
      name: 'loginandregister',
      component: LoginAndRegister,
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'register',
          name: 'register',
          component: Register
        },
        {
          path: '/',
          redirect: 'login'
        }
      ]
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/vanni',
      name: 'vanni',
      component: Vanni,
      children: [
        {
          path: 'orderlist',
          name: 'orderlist',
          component: OrderList
        }, {
          path: 'userinfo',
          name: 'userinfo',
          component: UserInfo
        }, {
          path: 'orderdetails',
          name: 'orderdetails',
          component: OrderDetails
        },{
          path:'order',
          name:'order',
          component:Order
        },{
          path:'shopSettled',
          name:'shopSettled',
          component:shopSettled
        }
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
