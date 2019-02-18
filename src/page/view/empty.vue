<template>
  <div class="container">
    <gjma-empty
      :show="true"
      icon="logo"
    >
      <div slot="title">暂无数据</div>
      <div slot="sub">暂无数据</div>
    </gjma-empty>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      showKeyboard: false,
      showProvinceKeyboard: true,
      value: '0',
      province: '京'
    }
  },
  methods: {
    addNum () {
      this.num = this.num + 10
    },
    setValue (value) {
      this.value = value
    },
    setProvinceValue (value) {
      this.province = value
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
.menu-list {
  &-item {
    line-height: .88rem;
    padding: 0 .32rem;
    font-size: .28rem;
  }
}
</style>
