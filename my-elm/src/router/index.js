import Vue from 'vue'
import Router from 'vue-router'
import headTop from '@/components/headTop'
import TabBar from '@/components/tabbar/TabBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TabBar',
      component: TabBar
    },
    {
      path: '/index',
      name: 'index',
      component: headTop
    }
  ]
})
