<template>
  <transition enter-active-class="animated fadeInRight">
  <div class="container">
    <div class="menu-list">
      <gjma-cell
        v-for="(item, index) in list"
        :key="index"
        :title="item.name"
        :to="item.path"
      >
      </gjma-cell>
    </div>
  </div>
  </transition>
</template>

<script>
import {view} from '@/router/module/view.js'
export default {
  name: 'views',
  data () {
    return {
      list: view
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
