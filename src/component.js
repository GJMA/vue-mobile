/**
 *全局注册组件 2017/04/24
 *@author GJMA
 */
import Vue from 'vue'

// BASE
import gjmaIcon from './components/base/icon/src/icon'
import gjmaFooter from './components/base/footer/src/footer'
import gjmaTab from './components/base/tabs.vue'
import gjmaSwitch from './components/base/switch.vue'
import gjmaSelect from './components/base/select.vue'
import gjmaDialog from './components/base/dialog.vue'
import gjmaCell from './components/base/cell.vue'
import gjmaVideo from './components/base/video.vue'

// FORM
import gjmaInput from './components/form/input.vue'
import gjmaTextarea from './components/form/textarea.vue'
import gjmaButton from './components/form/button/src/button.vue'
import gjmaUpload from './components/form/upload.vue'

// Function
import gjmaMescroll from './components/function/mescroll.vue'
import gjmaLazyLoad from './components/function/lazyLoad.vue'

// Keyboard
import gjmaKeyboard from './components/keyboard/keyboard.vue'
import gjmaProvinceKeyboard from './components/keyboard/provinceKeyboard.vue'

// View
import gjmaEmpty from './components/view/empty.vue'

Vue.component('gjmaIcon', gjmaIcon)
Vue.component('gjmaTab', gjmaTab)
Vue.component('gjmaFooter', gjmaFooter)
Vue.component('gjmaSwitch', gjmaSwitch)
Vue.component('gjmaSelect', gjmaSelect)
Vue.component('gjmaDialog', gjmaDialog)
Vue.component('gjmaCell', gjmaCell)
Vue.component('gjmaVideo', gjmaVideo)

// FORM
Vue.component('gjmaInput', gjmaInput)
Vue.component('gjmaTextarea', gjmaTextarea)
Vue.component('gjmaUpload', gjmaUpload)
Vue.component('gjmaButton', gjmaButton)

// Function
Vue.component('gjmaMescroll', gjmaMescroll)
Vue.component('gjmaLazyLoad', gjmaLazyLoad)

// Keyboard
Vue.component('gjmaKeyboard', gjmaKeyboard)
Vue.component('gjmaProvinceKeyboard', gjmaProvinceKeyboard)

// View
Vue.component('gjmaEmpty', gjmaEmpty)
