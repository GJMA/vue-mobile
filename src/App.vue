<template>
  <div id="app">
    <div class="message-tip" v-show="isShow">{{message}}</div>
    <div class="network" v-if="network">
      <img class="network-img" src="./assets/images/404.png.png"/>
      <p>抱歉，出现错误了</p>
      <img @click="reload" class="network-btn" src="./assets/images/404-btn.png.png"/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import events from './events.js'
export default {
  name: 'App',
  data () {
    return {
      isShow: false,
      network: false,
      message: '',
      timer: null
    }
  },
  methods: {
    reload () {
      location.reload()
    }
  },
  created () {
    events.$on('network', () => {
      this.network = true
    })
    events.$on('change', (param) => {
      this.isShow = true
      this.message = param
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, 3000)
    })
  }
}
</script>

<style>
#app {
  height: 100%
}
</style>
