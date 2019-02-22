export const routerView = [
  {
    path: '/nesting',
    name: '路由嵌套',
    components: {
      default: (resolve) => require(['../../page/router/nesting.vue'], resolve),
      a: (resolve) => require(['../../page/router/example.vue'], resolve)
    },
    children: [
      {
        path: '',
        name: '路由嵌套0',
        component: (resolve) => require(['../../page/router/nesting1.vue'], resolve)
      },
      {
        path: '2',
        name: '路由嵌套1',
        component: (resolve) => require(['../../page/router/nesting2.vue'], resolve)
      },
      {
        path: '3',
        name: '路由嵌套2',
        component: (resolve) => require(['../../page/router/nesting3.vue'], resolve)
      },
      {
        path: '4',
        name: '路由嵌套3',
        component: (resolve) => require(['../../page/router/nesting4.vue'], resolve)
      }
    ]
  }
]
