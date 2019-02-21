export const demoFooter = [
  {
    path: '/zhIndex',
    name: '知乎首页',
    component: (resolve) => require(['../../page/demo/home/index.vue'], resolve)
  },
  // {
  //   path: '/component',
  //   name: '想法',
  //   component: (resolve) => require(['../../page/component/index.vue'], resolve)
  // },
  // {
  //   path: '/utils',
  //   name: '通知',
  //   component: (resolve) => require(['../../page/utils/index.vue'], resolve)
  // },
  {
    path: '/ucenter',
    name: '我的',
    component: (resolve) => require(['../../page/demo/ucenter/index.vue'], resolve)
  }
]
