<template>
  <div class="menu-cell flex-between" @click="openUrl">
    <gjma-icon class="menu-cell-icon" v-if="icon" :name="icon" level="5"></gjma-icon>
    <div class="flex flex-1">
      <div class="title flex flex-1">
        {{title}}
      </div>
    </div>
    <span class="desc">
      <slot name="desc"></slot>
    </span>
    <gjma-icon v-if="showArrow" name="arrowRight" level="2"></gjma-icon>
  </div>
</template>

<script>
/**
 * 导航组件
 * @author GJMA
 * @date 2018/11/19
 */
export default {
  name: 'zfCell',
  data () {
    return {}
  },
  props: {
    icon: '',
    title: {
      type: String,
      default: '菜单项'
    },
    icon: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    to: String,
    showArrow: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    openUrl () {
      if (this.to) {
        this.$router.push(this.to)
      }
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.desc {
  margin-right: .16rem;
}
</style>
