<template>
  <transition name="fade">
    <div class="keyboard" v-show="show">
      <div class="keyboard-title flex-center">
        <h4>请选择归属地</h4>
        <span class="keyboard-title-close" @touchstart.prevent="close">取消</span>
      </div>
      <div class="flex-center flex-wrap" style="flex-wrap: wrap;">
        <span
          class="keyboard-item"
          v-for="(item, index) in list"
          :key="index"
          :class="[province === item.abbreviation ? 'isSelected' : '']"
          @touchstart.prevent="selectValue(item.abbreviation)"
        >
          {{item.abbreviation}}
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
import {PROVINCE_LIST} from '../../data/index.js'
export default {
  name: 'provinceKeyboard',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    province: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      list: PROVINCE_LIST
    }
  },
  mounted () {
  },
  methods: {
    // 设置值
    selectValue (value) {
      this.$emit('click', value)
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.keyboard {
  position: fixed;
  z-index: 9999;
  right: 0;
  bottom: 0;
  left: 0;
  background: #e8e7e7;
  padding: .08rem;
  .keyboard-title {
    position: relative;
    height: .88rem;
    text-align: center;
    font-size: .32rem;
    &-close {
      position: absolute;
      right: .16rem;
      font-size: .24rem;
    }
  }
  .keyboard-item {
    width: .6rem;
    height: .8rem;
    line-height: .8rem;
    background: #fff;
    margin: .06rem;
    text-align: center;
    border-radius: .06rem;
    font-weight: bold;
  }
}
.isSelected {
  background: #e3211d!important;
  color: #fff!important;
}
</style>
