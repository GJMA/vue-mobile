<template>
  <transition enter-active-class="animated fadeInRight">
    <div class="menu-list">
      <gjma-cell
        v-for="(item, index) in list"
        :key="index"
        :title="item.name"
        :to="item.path"
      >
      </gjma-cell>
    </div>
  </transition>
</template>

<script>
import {getUrlParam, formatTime, disabledBack} from '@/utils/'
import {toThousands, GetRandomNum} from '@/utils/Number'
import {utils} from '@/router/module/utils.js'
export default {
  name: 'utils',
  data () {
    return {
      number: 0,
      urlName: '',
      time: '',
      list: utils
    }
  },
  mounted () {
    setInterval(() => {
      this.time = formatTime(new Date(), 'yyyy-MM-dd hh:mm:ss')
    }, 1000)
  },
  methods: {
    randomNum (Min, Max) {
      this.number = GetRandomNum(1, 100)
    },
    getToThousands (num) {
      return toThousands(num)
    },
    urlParam () {
      return getUrlParam(this.urlName)
    },
    // 禁止返回按钮
    noBack () {
      disabledBack()
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
</style>
