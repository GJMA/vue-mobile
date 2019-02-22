<template>
  <transition enter-active-class="animated fadeInRight">
    <div class="container">
      <div>vue-example</div>
    </div>
  </transition>
</template>

<script>
import {footer} from '@/router/module/footer'
export default {
  name: 'index',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.list = footer
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
