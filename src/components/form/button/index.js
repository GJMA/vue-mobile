/**
 * 获取验证码
 */

// import Vue from 'vue'
import ucarBtn from './src/btn'

ucarBtn.install = function (Vue) {
  Vue.component(ucarBtn.name, ucarBtn)
}

export default ucarBtn
