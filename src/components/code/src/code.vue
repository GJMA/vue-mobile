<template>
  <div class="code" @click="getCode">
    <template v-if="!isCode">获取验证码</template>
    <template v-else>{{time}}s后重新获取</template>
  </div>
</template>

<script>
  /*
   * 获取验证码
   * @author GJMA
   * @date 2018/07/02
   */
  import {checkStaffExist, getCode } from '../../../api/api.js'
  import {getBrowser} from '../../../utils/index.js'
  import md5 from 'js-md5'
  import {SIGN_KEY, verison} from '../../../config.js'
  import events from '../../../events.js'
  export default {
    name: 'ucarCode',
    data() {
      return {
        isCode: false,
        time: 60,
        timer: null,
        reg: {
          phone: /^[0-9]{11}$/
        }
      }
    },
    props: {
      phone: {
        type: String,
        default: ""
      },
      type: {
        type: String,
        default: '2'
      }
    },
    methods: {
      /**
       * getCode
       * @param {number} phone 手机号
       */
      getCode() {
        if (!this.reg.phone.test(this.phone)) {
          events.$emit('change', '手机号格式不对')
          return
        }
        if(this.isCode) {
          return
        }
        if (this.type != 2) {
          checkStaffExist({phone: this.phone}).then((res) => {
            if (res.code === 0) {
              if (this.type == res.data) {
                this.code()
              } else {
                events.$emit('change', res.message)
              }
            }
          })
        } else {
          this.code()
        }
      },
      code () {
        let time = new Date().getTime()
        let currentUrl = window.location.href
        let preUrl = document.referrer
        let openId = 'o18KL1n3DEGewlvtJo3GFqJKHJCY'
        let browserType = 'safari'
        let sign = md5(this.phone + '$' + time + '$' + SIGN_KEY + '$' + openId + '$' + verison + '$' + currentUrl).toLowerCase()
        let params = {
          currentUrl: currentUrl,
          openId: openId,
          phone: this.phone,
          sign: sign,
          time: time,
          preUrl: preUrl,
          version: verison,
          wxBrowserType: browserType
        }
        getCode(params).then((res) => {
          if(res.code === 0) {
            // 成功后的操作
            this.isCode = true
            events.$emit('change', '短信发送成功，请注意查收')
            // 开启定时器
            // 如果存在，先清除定时器
            if(this.timer) {
              clearInterval(this.timer)
            }
            this.timer = setInterval(() => {
              this.time--
              if(this.time === 0) {
                this.time = 60
                clearInterval(this.timer)
                this.timer = null
                this.isCode = false
              }
            }, 1000)
          }
        })
      }
    },
    mounted: function() {
    }
  }
</script>
