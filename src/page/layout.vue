<template>
  <div class="container">
    <router-view></router-view>
    <gjma-footer></gjma-footer>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
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
