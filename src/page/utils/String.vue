<template>
  <transition enter-active-class="animated fadeInRight">
  <div class="container">
    <div class="section">
      <div class="section-title"></div>
      <div class="section-content"></div>
    </div>
  </div>
  </transition>
</template>

<script>
import {trim} from '@/utils/String'
export default {
  name: 'utils',
  data () {
    return {
    }
  },
  mounted () {
    trim('dfd df')
  },
  methods: {
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
    // 通过 `vm` 访问组件实例
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
