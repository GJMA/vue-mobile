<template>
  <div class="height-100" style="height: 100%">
    <mescroll-vue class="flex-1"
      ref="mescroll"
      :down="mescrollDown"
      :up="mescrollUp"
      @init="mescrollInit">
      <div class="oil-station-list">
        <slot>

        </slot>
      </div>
    </mescroll-vue>
  </div>
</template>

<script>
import 'mescroll.js/mescroll.min.css'
import MescrollVue from 'mescroll.js/mescroll.vue'
export default {
  name: 'mescroll',
  props: {
    pageSize: {
      type: Number,
      default: 5
    },
    test: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      mescroll: null, // mescroll实例对象
      mescrollDown: {},
      mescrollUp: { // 上拉加载的配置.
        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
        // 以下是一些常用的配置,当然不写也可以的.
        isBounce: false, // 此处禁止ios回弹
        page: {
          num: 0, // 当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: this.pageSize // 每页数据条数,默认10
        },
        htmlNodata: '<p class="upwarp-nodata">-- 无更多数据 --</p>',
        noMoreSize: 5, // 如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据
        toTop: {
          // 回到顶部按钮
          src: '../../static/mescroll/mescroll-totop.png', // 图片路径,默认null,支持网络图
          offset: 300 // 列表滚动300px才显示回到顶部按钮
        }
      }
    }
  },
  components: {
    MescrollVue
  },
  mounted () {
  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit (mescroll) {
      this.mescroll = mescroll // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback (page, mescroll) {
      this.$emit('load', page, mescroll)
    }
  },
  beforeRouteEnter (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
    next(vm => {
      // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
      vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter() // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
    })
  },
  beforeRouteLeave (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
    // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteLeave方法
    this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave() // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
    next()
  }
}
</script>
