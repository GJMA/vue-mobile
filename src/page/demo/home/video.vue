<template>
  <transition enter-active-class="animated fadeInRight">
    <!-- list -->
    <gjma-mescroll
      class="video"
      :pageSize="params.pageSize"
      @load="loadList"
    >
      video
      <div class="item" v-for="(item, index) in 12" :key="index">
        <gjma-video
          poster="https://ucar-oss.oss-cn-beijing.aliyuncs.com/feedback/1550651447093_02917df0c6af414a9158edd424fab73d.jpeg">
        </gjma-video>
        <div class="title">你见过超燃超励志的视频有哪些？</div>
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
    playVideo (index) {
      let videoList = document.querySelectorAll('video')
      console.log(videoList[index].duration)
      videoList[index].play()
      console.log(videoList)
    },
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
.video {
  background: #fff;
}
.item {
  padding: .24rem .32rem;
}

</style>
