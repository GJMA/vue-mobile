<template>
  <div class="container">
    <!-- switch -->
    <div class="section">
      <div class="section-title">千位符</div>
      <div class="section-content flex">
        {{toThousands(1000000)}}
      </div>
    </div>
    <div class="section">
      <div class="section-title">随机数</div>
      <div class="section-content flex">
        {{number}}
        <span @click="randomNum">生成随机数</span>
      </div>
    </div>

    <div class="section">
      <div class="section-title"></div>
      <div class="section-content"></div>
    </div>
  </div>
</template>

<script>
import {formatTime} from '@/utils'
import {toThousands, GetRandomNum} from '@/utils/Number'
export default {
  name: 'auditing',
  data () {
    return {
      number: 0
    }
  },
  mounted () {
  },
  methods: {
    randomNum (Min, Max) {
      this.number = GetRandomNum(1, 100)
    },
    toThousands (num) {
      var num = (num || 0).toString(), temp = num.length % 3
      switch (temp) {
        case 1:
          num = '00' + num;
          break
        case 2:
          num = '0' + num
          break
      }
      return num.match(/\d{3}/g).join(',').replace(/^0+/, '')
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
