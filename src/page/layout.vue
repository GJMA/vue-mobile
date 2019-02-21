<template>
  <div class="container">
    <gjma-cell
        title="template"
        to="/index"
      >
    </gjma-cell>
    <gjma-cell
        title="demo"
        to="/demo"
      >
    </gjma-cell>
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
