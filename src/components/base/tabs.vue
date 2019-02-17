<template>
  <div class="flex-around tab">
    <div class="tab-item flex-1"
      v-for="(item, key) in list"
      :class="{active: isActive === item.id}"
      :key="key"
      @click="handleClick(item.id)"
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
      isActive: 0
    }
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    handleClick (id) {
      this.isActive = id
      this.$emit('click', id)
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
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
