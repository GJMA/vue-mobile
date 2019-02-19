import Vue from 'vue'
import Router from 'vue-router'
import {index} from '@/router/module/index.js'
import {view} from '@/router/module/view.js'
import {utils} from '@/router/module/utils.js'

let routes = [].concat(index, view, utils)

Vue.use(Router)

let router = new Router({
  routes
})

export default router
