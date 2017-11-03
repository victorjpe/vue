import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Order from '@/components/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    }
  ]
})
