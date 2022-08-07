import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/threads',
      name: 'PageThreads',
      component: resolve => require(['@/pages/PageThreads.vue'], resolve)
    },
    {
      path: '/auth',
      name: 'PageAuth',
      component: resolve => require(['@/pages/PageAuth.vue'], resolve)
    },
    {
      path: '/post',
      name: 'PagePost',
      component: resolve => require(['@/pages/PagePost.vue'], resolve)
    }
  ]
})