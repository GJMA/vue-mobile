export const component = [
  {
    path: '/example',
    name: 'example',
    component: (resolve) => require(['../../page/component/example.vue'], resolve)
  },
  {
    path: '/cell',
    name: 'cell',
    component: (resolve) => require(['../../components/base/cell.vue'], resolve)
  },
  {
    path: '/select',
    name: 'select',
    component: (resolve) => require(['../../components/base/select.vue'], resolve)
  },
  {
    path: '/switch',
    name: 'switch',
    component: (resolve) => require(['../../components/base/switch.vue'], resolve)
  },
  {
    path: '/footer',
    name: 'footer',
    component: (resolve) => require(['../../components/base/footer/src/footer.vue'], resolve)
  },
  {
    path: '/header',
    name: 'header',
    component: (resolve) => require(['../../components/base/header/src/header.vue'], resolve)
  },
  {
    path: '/icon',
    name: 'icon',
    component: (resolve) => require(['../../components/base/icon/src/icon.vue'], resolve)
  },
  {
    path: '/tab',
    name: 'tab',
    component: (resolve) => require(['../../components/base/tabs.vue'], resolve)
  },
  {
    path: '/button',
    name: 'button',
    component: (resolve) => require(['../../components/form/button/src/button.vue'], resolve)
  },
  {
    path: '/input',
    name: 'input',
    component: (resolve) => require(['../../components/form/input.vue'], resolve)
  },
  {
    path: '/textarea',
    name: 'textarea',
    component: (resolve) => require(['../../components/form/textarea.vue'], resolve)
  },
  {
    path: '/upload',
    name: 'upload',
    component: (resolve) => require(['../../components/form/upload.vue'], resolve)
  },
  {
    path: '/keyboard',
    name: 'keyboard',
    component: (resolve) => require(['../../components/keyboard/keyboard.vue'], resolve)
  },
  {
    path: '/provinceKeyboard',
    name: 'provinceKeyboard',
    component: (resolve) => require(['../../components/keyboard/provinceKeyboard.vue'], resolve)
  },
  {
    path: '/empty',
    name: 'empty',
    component: (resolve) => require(['../../components/view/empty.vue'], resolve)
  }
]
