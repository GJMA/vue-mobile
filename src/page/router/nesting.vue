<template>
  <transition enter-active-class="animated fadeInRight">
    <div class="container">
      <gjma-tab :list="tabList" :router="true"></gjma-tab>
      <router-view></router-view>
      <router-view name="a"></router-view>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      list: [],
      tabList: [
        {
          id: 0,
          name: '关注',
          path: '/nesting'
        },
        {
          id: 1,
          name: '推荐',
          path: '/nesting/2'
        },
        {
          id: 2,
          name: '热榜',
          path: '/nesting/3'
        },
        {
          id: 3,
          name: '视频',
          path: '/nesting/4'
        }
      ]
    }
  },
  mounted () {
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
