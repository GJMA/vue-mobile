<template>
<transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
  <div class="keyboard flex" v-show="show">
    <div class="flex flex-1" style="flex-wrap: wrap;">
      <span
        class="keyboard-item"
        v-for="(item, index) in list"
        :class="item === '清空' ? 'qingkong' : ''"
        :key="index"
        @touchstart.prevent="input(item)"
        >
        {{item}}
      </span>
    </div>
    <div class="keyboard-btn flex flex-v flex-between">
      <span class="backspace" @touchstart.prevent="backspace">---</span>
      <span class="confirm" :class="activeBtn" @touchstart.prevent="confirm">确定</span>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'priceKeyboard',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    value: {
      default: ''
    },
    minPrice: {
      default: 10
    }
  },
  data () {
    return {
      list: [],
      reg: {
        priceReg: /(^[1-9]\d{0,3}(\.\d{0,2})?$)|(^0(\.\d{0,2})?$)/
      }
    }
  },
  mounted () {
    this.list = [1, 2, 3, 4, 5, 6, 7, 8, 9, '清空', 0, '.']
  },
  methods: {
    // 设置值
    input (num) {
      if (num === '清空') {
        this.$emit('input', '')
        return
      }
      let value = this.value.toString() + num
      if (this.reg.priceReg.test(value)) {
        this.$emit('input', value)
      }
    },
    // 删除值
    backspace () {
      let index = this.value.length - 1
      let number = this.value.substring(0, index)
      this.$emit('input', number)
    },
    confirm () {
      if (parseFloat(this.value || 0) >= this.minPrice) {
        this.$emit('confirm')
      } else {
        // this.ucarToast({text: '请输入' + this.minPrice + '-9999之间的数字'})
      }
    }
  },
  computed: {
    activeBtn () {
      let value = this.value || 0
      return parseFloat(value) >= this.minPrice ? 'confirmActive' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.keyboard {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #e8e7e7;
  padding: .08rem .08rem 0 .08rem;
  &-item {
    flex-wrap: wrap;
    width: 1.9rem;
    height: .92rem;
    line-height: .92rem;
    background: #fff;
    margin-right: .08rem;
    margin-bottom: .08rem;
    border-radius: .06rem;
    text-align: center;
    font-weight: bold;
  }
  &-btn {
    position: absolute;
    top: .08rem;
    bottom: .08rem;
    right: .08rem;
    width: 1.29rem;
    .confirm,
    .backspace {
      width: 1.29rem;
      height: 1.96rem;
      line-height: 1.96rem;
      background: #fff;
      border-radius: .06rem;
      text-align: center;
      font-weight: bold;
      font-size: .32rem;
    }
    .confirmActive {
      background: #e3211d;
      color: #fff;
    }
    .backspace {
      height: .92rem;
      line-height: .92rem;
    }
  }
}
</style>
