export const demoFooter = [
  {
    path: '/zhIndex/:id',
    name: '知乎首页',
    component: (resolve) => require(['../../page/demo/home/index.vue'], resolve),
    children: [
      {
        path: 'follow',
        name: '关注',
        component: (resolve) => require(['../../page/demo/home/follow.vue'], resolve)
      },
      {
        path: 'recommend',
        name: '推荐',
        component: (resolve) => require(['../../page/demo/home/recommend.vue'], resolve)
      },
      {
        path: 'hot',
        name: '热榜',
        component: (resolve) => require(['../../page/demo/home/hot.vue'], resolve)
      },
      {
        path: 'video',
        name: '视频',
        component: (resolve) => require(['../../page/demo/home/video.vue'], resolve)
      }
    ]
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
