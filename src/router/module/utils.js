export const utils = [
  {
    path: '/common',
    name: '公用',
    component: (resolve) => require(['../../page/utils/common.vue'], resolve)
  },
  {
    path: '/String',
    name: '字符串',
    component: (resolve) => require(['../../page/utils/String.vue'], resolve)
  },
  {
    path: '/Array',
    name: '数组',
    component: (resolve) => require(['../../page/utils/Array.vue'], resolve)
  },
  {
    path: '/Object',
    name: '对象',
    component: (resolve) => require(['../../page/utils/Object.vue'], resolve)
  }
]
