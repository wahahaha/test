import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import ShoppingCart from '@/components/Shopping_Cart'
import Home from '@/components/Home'
// import Main from '@/components/Main'
import {Menu, Switch, Dropdown, Button, Icon, Layout} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(Menu)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Dropdown)
Vue.use(Layout)
Vue.use(Icon)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/shopping-cart',
      name: 'shopping-cart',
      component: ShoppingCart
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
    // {
    //   path: '/',
    //   name: 'main',
    //   component: Main
    // }
  ]
})
