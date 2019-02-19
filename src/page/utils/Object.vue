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
import {deepClone} from '@/utils/Object'
export default {
  name: 'utils',
  data () {
    return {
    }
  },
  mounted () {
    let obj = {}
    deepClone(obj)
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
