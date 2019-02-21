import {demoFooter} from '@/router/module/demoFooter'
import {footer} from '@/router/module/footer'
export const index = [
  {
    path: '/',
    component: (resolve) => require(['../../page/layout.vue'], resolve)
  },
  {
    path: '/index',
    component: (resolve) => require(['../../page/home/index.vue'], resolve),
    children: footer
  },
  {
    path: '/demo',
    component: (resolve) => require(['../../page/demo/layout.vue'], resolve),
    children: demoFooter
  }
]
