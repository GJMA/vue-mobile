import Vue from 'vue'
import Router from 'vue-router'
import {index} from '@/router/module/index.js'
import {view} from '@/router/module/view.js'

let routes = [].concat(index, view)

Vue.use(Router)

let router = new Router({
  routes
})

export default router
