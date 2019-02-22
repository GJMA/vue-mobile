<template>
  <div class="flex-around tab">
    <div class="tab-item flex-1"
      v-for="(item, key) in list"
      :key="key"
      :class="{active: isActive === item.path}"
      @click="handleClick(item)"
    >
      {{item.name}}
      <span></span>
    </div>
  </div>
</template>

<script>
/**
 * 导航组件
 * @author GJMA
 * @date 2018/11/19
 */
export default {
  name: 'gjmaTab',
  data () {
    return {
      isActive: ''
    }
  },
  props: {
    router: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  mounted () {
    this.isActive = this.$route.path
  },
  methods: {
    handleClick (item) {
      if (this.router) {
        this.isActive = item.path
        this.$router.push(item.path)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.router-link-active {
  color: red;
}
// tab切换
.tab {
  height: .88rem;
  background: #fff;
  color: #757575;
  font-size: .28rem;
  &-item {
    height: .88rem;
    line-height: .88rem;
    position: relative;
    text-align: center;
  }
  .active {
    color: #dd1f15;
    font-weight: bold;
    span {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 1rem;
      height: .04rem;
      background: #de2014;
      margin-left: -.5rem;
    }
  }
}
</style>
