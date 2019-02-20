import Vue from 'vue'
import App from './App'
import router from './router'

// 引入样式
import './assets/scss/common.scss'
import './assets/css/animate.css'
import './assets/js/layout.js'
import './component.js'
import './filters/index.js'
import '@/mock/mock.js'
import store from './store/index.js'

Vue.config.productionTip = false

router.beforeEach((to, form, next) => {
  document.title = to.name
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
