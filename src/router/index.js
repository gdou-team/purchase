import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/home'
import SelectCity from '@/containers/selectCity.vue'
import Login from '@/containers/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path:'selectCity',
          name:'selectCity',
          component:SelectCity
        }
      ]
    },
    {
      path:'/login',
      name: 'login',
      component: Login,
    },
    {
      path:'/',
      redirect:'/login'
    }
  ]
})
