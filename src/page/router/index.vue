<template>
  <transition enter-active-class="animated fadeInRight">
    <div class="container">
      <gjma-cell
        v-for="(item, index) in list"
        :key="index"
        :title="item.name"
        :to="item.path"
      >
      </gjma-cell>
      <gjma-footer :list="list"></gjma-footer>
    </div>
  </transition>
</template>

<script>
import {routerView} from '@/router/module/router'
export default {
  name: 'index',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.list = routerView
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
.desc {
  background: #fff;
  line-height: .4rem;
  padding: .24rem .32rem;
  text-indent: 2em;
  color: #79797b;
  font-size: .28rem;
}
</style>
