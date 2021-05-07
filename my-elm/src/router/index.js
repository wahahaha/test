import Vue from 'vue'
import Router from 'vue-router'
import headTop from '@/components/headTop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'headTop',
      component: headTop
    }
  ]
})
