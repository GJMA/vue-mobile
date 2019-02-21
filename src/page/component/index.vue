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
import {component} from '@/router/module/component.js'
export default {
  name: 'components',
  data () {
    return {
      list: component
    }
  },
  methods: {
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
