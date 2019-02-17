<template>
  <div class="container">
    <router-view></router-view>
    <gjma-footer :list="footList"></gjma-footer>
  </div>
</template>

<script>
import {formatTime} from '@/utils'
export default {
  name: 'auditing',
  data () {
    return {
      footList: [
        {
          to: '/',
          name: '首页'
        },
        {
          to: '/utils',
          name: '方法'
        }
      ]
    }
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
