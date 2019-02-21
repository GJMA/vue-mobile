/**
 * axios配置 2018/06/01
 * @author GJMA
 */
import axios from 'axios'
import {devUrl} from '../config.js'
import loading from '../components/base/loading/'

let ajax = axios.create({
  baseURL: devUrl,
  timeout: 100000
})

// 拦截请求
ajax.interceptors.request.use(config => {
  loading.open({})
  return config
}, error => {
  return Promise.reject(error)
})

// 拦截响应
ajax.interceptors.response.use(response => {
  let res = response.data
  return res
}, error => {
  return Promise.reject(error)
})

export default ajax
