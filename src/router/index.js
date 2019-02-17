import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
base:'/webwxstaff/',
  routes: [
    {
      path: '/',
      component: (resolve) => require(['../page/layout.vue'], resolve),
      children: [
        {
          path: '/',
          name: 'example',
          component: (resolve) => require(['../page/template.vue'], resolve),
        },
        {
          path: '/utils',
          name: 'utils',
          component: (resolve) => require(['../page/utils/index.vue'], resolve)
        }
      ]
    }
  ]
})
