/**
 *全局注册组件 2017/04/24
 *@author GJMA
 */
import Vue from 'vue'

// BASE
import gjmaIcon from './components/base/icon/src/icon'
import gjmaFooter from './components/base/footer/src/footer'
import gjmaBtn from './components/btn/src/btn'
import gjmaTab from './components/base/tabs.vue'
import gjmaSwitch from './components/base/switch.vue'
import gjmaSelect from './components/base/select.vue'
import gjmaDialog from './components/base/dialog.vue'
import gjmaCell from './components/base/cell.vue'

// FORM
import gjmaInput from './components/form/input.vue'
import gjmaTextarea from './components/form/textarea.vue'
import gjmaUpload from './components/form/upload.vue'

Vue.component('gjmaIcon', gjmaIcon)
Vue.component('gjmaTab', gjmaTab)
Vue.component('gjmaBtn', gjmaBtn)
Vue.component('gjmaFooter', gjmaFooter)
Vue.component('gjmaSwitch', gjmaSwitch)
Vue.component('gjmaSelect', gjmaSelect)
Vue.component('gjmaDialog', gjmaDialog)
Vue.component('gjmaCell', gjmaCell)

// FORM
Vue.component('gjmaInput', gjmaInput)
Vue.component('gjmaTextarea', gjmaTextarea)
Vue.component('gjmaUpload', gjmaUpload)
