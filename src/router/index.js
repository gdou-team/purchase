import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/home'
import Login from '@/components/login.vue'
import Register from '@/components/register.vue'
import LoginAndRegister from '@/containers/loginAndRegist.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
      ]
    },
    {
      path:'/loginandregister',
      name: 'loginandregister',
      component: LoginAndRegister,
      children:[
        {
          path:'login',
          name:'login',
          component:Login
        },
        {
          path:'register',
          name:'register',
          component:Register
        },
        {
          path:'/',
          redirect:'login'
        }
      ]
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
