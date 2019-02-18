<template>
  <div class="container">
    <div>键盘</div>
    <div class="section">
      <div class="section-title" @click="showKeyboard=!showKeyboard">数字(金额)键盘</div>
      <div class="section-content">
        {{value}}
        <gjma-keyboard
          :show="showKeyboard"
          :value="value"
          @input="setValue"
        >
        </gjma-keyboard>
      </div>
    </div>
    <div class="section">
      <div class="section-title" @click="showProvinceKeyboard=!showProvinceKeyboard">归属地键盘</div>
      <div class="section-content">
        {{province}}
        <gjma-province-keyboard
          :show="showProvinceKeyboard"
          :value="province"
          @close="showProvinceKeyboard=false"
          @click="setProvinceValue"
        >
        </gjma-province-keyboard>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      showKeyboard: false,
      showProvinceKeyboard: true,
      value: '',
      province: '京'
    }
  },
  methods: {
    addNum () {
      this.num = this.num + 10
    },
    setValue (value) {
      this.value = value
    },
    setProvinceValue (value) {
      this.province = value
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
.menu-list {
  &-item {
    line-height: .88rem;
    padding: 0 .32rem;
    font-size: .28rem;
  }
}
</style>
