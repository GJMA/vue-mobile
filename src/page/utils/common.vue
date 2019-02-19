<template>
  <div class="container">
    <!-- switch -->
    <div class="section">
      <div class="section-title">千位符</div>
      <div class="section-content">
        <p>{{getToThousands(1000000)}}</p>
      </div>
    </div>
    <div class="section">
      <div class="section-title">随机数</div>
      <div class="section-content">
        <p>{{number}}</p>
        <gjma-btn
          text="生成随机数"
          @click="randomNum"
        >
        </gjma-btn>
      </div>
    </div>
    <div class="section">
      <div class="section-title">获取URL参数</div>
      <div class="section-content">
        <p>{{urlParam('name')}}</p>
        <gjma-input
          placeholder="输入参数名"
          v-model="urlName"
        >
        </gjma-input>
      </div>
    </div>
    <!-- formatDate -->
    <div class="section">
      <div class="section-title">FormatDate</div>
      <div class="section-content">
        <p>{{time}}</p>
      </div>
    </div>
    <!-- disableBack -->
    <div class="section">
      <div class="section-title" @click="noBack">禁止返回操作</div>
    </div>
    <!-- 去除空格 -->
    <div class="section">
      <div class="section-title">删除空格</div>
      <div class="section-content">
      </div>
    </div>
    <div class="section">
      <div class="section-title"></div>
      <div class="section-content"></div>
    </div>
  </div>
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
