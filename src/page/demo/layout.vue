<template>
  <transition enter-active-class="animated fadeInRight">
    <div class="height-100">
      <router-view></router-view>
      <gjma-footer :list="list"></gjma-footer>
    </div>
  </transition>
</template>

<script>
import {demoFooter} from '@/router/module/demoFooter'
export default {
  name: 'index',
  data () {
    return {
      showDialog: false,
      list: [],
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
  mounted () {
    this.list = demoFooter
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
