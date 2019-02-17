/**
 * 获取验证码
 */

// import Vue from 'vue'
import ucarList from './src/list'

ucarList.install = function (Vue) {
  Vue.component(ucarList.name, ucarList)
}

export default ucarList
