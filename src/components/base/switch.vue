<template>
  <p class="ucar-switch" @click="changeStatus" :class="getStatus">
    <span class="ucar-switch-status"></span>
  </p>
</template>

<script>
export default {
  name: 'gjmaSwitch',
  props: {
    status: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    changeStatus () {
      this.$emit('changeStatus')
    }
  },
  computed: {
    getStatus () {
      let switchClass = ''
      this.status ? switchClass = 'switch-open' : switchClass = 'switch-close'
      return switchClass
    }
  }
}
</script>

<style lang="scss" scoped>
// 开关
.ucar-switch {
  position: relative;
  width: 1rem;
  height: .48rem;
  border-radius: .25rem;
  &-status {
    position: absolute;
    top: .05rem;
    width: .36rem;
    height: .36rem;
    border-radius: 50%;
    transition: left 2s;
    -webkit-transition: left .3s;
  }
}
.switch-open {
  border: .01rem solid #ed3112;
  .ucar-switch-status {
    left: 56%;
    background: #ed3112;
  }
}
.switch-close {
  border: .01rem solid #e3e3e3;
  .ucar-switch-status {
    left: 5%;
    background: #e3e3e3;
  }
}
</style>
