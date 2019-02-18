<template>
  <transition enter-active-class="animated fadeInRight">
    <div class="container">
      <h4>Compontents</h4>
      <h4>Utils</h4>
      <h4>View</h4>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      showDialog: false,
      tabList: [
        {
          id: 0,
          name: '全职'
        },
        {
          id: 1,
          name: '兼职'
        }
      ]
    }
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
