<template>
  <transition enter-active-class="animated fadeInRight">
      <!-- list -->
        <gjma-mescroll
          :pageSize="params.pageSize"
          @load="loadList"
        >
          hot
        </gjma-mescroll>
  </transition>
</template>

<script>
import {demoFooter} from '@/router/module/demoFooter'
import {GetRandomNum} from '@/utils/Number.js'
console.log(demoFooter)
export default {
  name: 'index',
  data () {
    return {
      showDialog: false,
      list: [],
      params: {
        pageSize: 50
      }
    }
  },
  mounted () {
    this.list = demoFooter
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
  }
}
</script>

<style lang="scss" scoped>
.fixed-header {
  background: #fff;
  padding: .16rem .24rem 0;
}
.header {
  background: #ccc;
  border-radius: .06rem;
}
.list {
  &-item {
    background: #fff;
    padding: .16rem .24rem;
    &-info {
      img {
        width: .4rem;
        height: .4rem;
        border-radius: 50%;
      }
    }
    &-content {
      font-size: .26rem;
    }
  }
}
</style>
