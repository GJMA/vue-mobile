export const footer = [
  {
    path: '/index',
    name: '首页',
    component: (resolve) => require(['../../page/home/index.vue'], resolve)
  },
  {
    path: '/component',
    name: '组件',
    component: (resolve) => require(['../../page/component/index.vue'], resolve)
  },
  {
    path: '/utils',
    name: '方法',
    component: (resolve) => require(['../../page/utils/index.vue'], resolve)
  },
  {
    path: '/view',
    name: '页面',
    component: (resolve) => require(['../../page/view/index.vue'], resolve)
  }
]
