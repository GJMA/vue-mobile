import Vue from 'vue'
import Router from 'vue-router'
import {index} from '@/router/module/index.js'
import {view} from '@/router/module/view.js'
import {utils} from '@/router/module/utils.js'
import {component} from '@/router/module/component.js'
import {routerView} from '@/router/module/router.js'

let routes = [].concat(index, view, utils, component, routerView)

Vue.use(Router)

let router = new Router({
  routes
})

export default router
