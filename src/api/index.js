/**
 * axios配置 2018/06/01
 * @author GJMA
 */
import axios from 'axios'
import router from '../router/index.js'
import {devUrl} from '../config.js'

let ajax = axios.create({
  baseURL: devUrl,
  timeout: 100000
})

// 拦截请求
ajax.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 拦截响应
ajax.interceptors.response.use(response => {
  if (response.data.code === -1) {
  } else if (response.data.code === -11) {
    // 跳转到登录
    router.push('/login')
  }
  let res = response.data
  return res
}, error => {
  return Promise.reject(error)
})

export default ajax
