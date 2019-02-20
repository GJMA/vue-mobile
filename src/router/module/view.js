export const view = [
  {
    path: '/layout',
    name: '布局',
    component: (resolve) => require(['../../page/view/layout.vue'], resolve)
  },
  {
    path: '/keyboard',
    name: '键盘',
    component: (resolve) => require(['../../page/view/keyboard.vue'], resolve)
  },
  {
    path: '/empty',
    name: '空列表',
    component: (resolve) => require(['../../page/view/empty.vue'], resolve)
  },
  {
    path: '/mescroll',
    name: '下拉加载',
    component: (resolve) => require(['../../page/view/mescroll.vue'], resolve)
  },
  {
    path: '/imageLazyLoad',
    name: '图片懒加载',
    component: (resolve) => require(['../../page/view/imageLazyLoad.vue'], resolve)
  }
]
