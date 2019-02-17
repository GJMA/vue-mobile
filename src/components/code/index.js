/**
 * 获取验证码
 */

// import Vue from 'vue'
import ucarCode from './src/code'

ucarCode.install = function (Vue) {
  Vue.component(ucarCode.name, ucarCode)
}

export default ucarCode
