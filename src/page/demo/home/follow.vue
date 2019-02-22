<template>
  <transition enter-active-class="animated fadeInRight">
      <!-- list -->
        <gjma-mescroll
          :pageSize="params.pageSize"
          @load="loadList"
        >
          <div
            class="list-item mr-b-24"
            v-for="(item, index) in 50"
            :key="index"
          >
            <div class="list-item-info flex">
              <img class="mr-r-16" src="../../../assets/logo.png" alt="">
              <span>vczh赞同了回答·6分钟前</span>
            </div>
            <div class="title">
              如何看待纪晓岚与和珅的经典对白？
            </div>
            <div class="list-item-content mr-b-24 rows-ellipsis">
              d的地方德里克考虑到附近的路口附近迪斯科浪费角度上考虑附近的是否角度上考虑
              打开了附近的是了迪斯科浪费角度上考虑分解为妇女加快了速度反抗军的理科生的
              的看法登上了飞机迪斯科浪费加快了王府井了打算离开房间打算离开房间饿哦我i附
            </div>
            <div class="list-item-set flex-between">
              <span>848 赞同·101 评论</span>
              <span>更多</span>
            </div>
          </div>
        </gjma-mescroll>
  </transition>
</template>

<script>
import {demoFooter} from '@/router/module/demoFooter'
import {GetRandomNum} from '@/utils/Number.js'
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
