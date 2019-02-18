<template>
  <div class="flex flex-v" style="max-height: 100%; overflow: hidden">
    <div class="flex-1" style="overflow: auto; width: 100%;">
      <div
        v-for="(item, index) in num" :key="index"
      >
        {{item + '-' + index}}
      </div>
    </div>
    <div style="width: 100%; margin-top: .32rem;">
      <gjma-btn @click="addNum"></gjma-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      num: 0
    }
  },
  methods: {
    addNum () {
      this.num = this.num + 10
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
