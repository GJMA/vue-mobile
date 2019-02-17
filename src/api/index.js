/**
 * axios配置 2018/06/01
 * @author GJMA
 */
import Vue from 'vue'
import axios from 'axios'
import { locals } from '../utils/index.js'
import events from '../events.js'
import router from '../router/index.js'
import loading from '../components/base/loading/'
import {devUrl} from '../config.js'

let ajax = axios.create({
  baseURL: devUrl,
  timeout: 100000
})

// 拦截请求
ajax.interceptors.request.use(config => {
  let token = locals.get('UcarUser').oilStaffToken
  Vue.use(loading)
  config.headers = {
    'X-Auth-Token': token,
    'srcType': '2'
  }
  loading.open({})
  return config
}, error => {
  loading.close()
  return Promise.reject(error)
})

// 拦截响应
ajax.interceptors.response.use(response => {
  loading.close()
  if (response.data.code === -1) {
    events.$emit('change', response.data.message)
  } else if (response.data.code === -11) {
    // 跳转到登录
    router.push('/login')
  }
  let res = response.data
  return res
}, error => {
  loading.close()
  events.$emit('network')
  return Promise.reject(error)
})

export default ajax
