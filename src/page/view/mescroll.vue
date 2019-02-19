<template>
  <div class="container">
    <gjma-mescroll
      :pageSize="params.pageSize"
      @load="loadList"
    >
      <div v-for="(item, index) in list" :key="index" style="height: 1rem;">{{item}}</div>
    </gjma-mescroll>
  </div>
</template>

<script>
import {GetRandomNum} from '@/utils/Number.js'
export default {
  name: 'mescroll',
  data () {
    return {
      showEmpty: false,
      params: {
        pageSize: 50
      },
      list: []
    }
  },
  mounted () {
  },
  methods: {
    loadList (page, mescroll) {
      // 请求的列表数据
      let arr = []
      for (let i = 0; i < page.size; i++) {
        arr.push(GetRandomNum(1, 100))
      }
      // 如果是第一页需手动制空列表
      if (page.num === 1) {
        if (arr.length <= 0) {
          this.showEmpty = true
        } else {
          this.showEmpty = false
        }
        this.list = []
      }
      // 把请求到的数据添加到列表
      this.list = this.list.concat(arr)
      // 数据渲染成功后,隐藏下拉刷新的状态
      this.$nextTick(() => {
        mescroll.endSuccess(arr.length)
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
    // 通过 `vm` 访问组件实例
    })
  },
  beforeRouteLeave (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
    // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteLeave方法
    console.log('level')
    this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave() // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
    next()
  }
}
</script>

<style lang="scss" scoped>
</style>
