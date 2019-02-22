<template>
  <transition enter-active-class="animated fadeInRight">
    <div class="container">
     3
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
          path: '/foo'
        },
        {
          id: 1,
          name: '推荐',
          path: 'recommend'
        },
        {
          id: 2,
          name: '热榜',
          path: 'hot'
        },
        {
          id: 3,
          name: '视频',
          path: 'video'
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
