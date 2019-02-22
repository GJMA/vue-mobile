<template>
  <transition enter-active-class="animated fadeInRight">
    <div class="flex flex-v height-100">
      <!-- header -->
      <div class="fixed-header pd-t-24">
        <div class="header flex">
          <gjma-input
            iconLeft="logo"
          >
          </gjma-input>
          <gjma-button
            text="提问"
            icon="logo"
            myStyle="width: 2rem; background: #f2f2f2; color: #333"
          >
          </gjma-button>
        </div>
        <gjma-tab :list="tabList" :router="true"></gjma-tab>
      </div>
      <!-- list -->
      <div class="flex-1 list pd-t-24" style="overflow: auto; width: 100%; background: #f2f2f2;">
        <router-view></router-view>
      </div>
    </div>
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
      },
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
