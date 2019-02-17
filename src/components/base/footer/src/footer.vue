<template>
  <div class="gjmaFooter flex">
    <div
      class="flex-1"
      v-for="(item, index) in list" :key="index"
      @click="handleClick(item)"
    >
      {{item.name}}
    </div>
      <slot>
        
      </slot>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'zfFooter',
  props:{
    list: {
      type: Array,
      default: () => {
        return []
      }
    }     
  },
  methods: {
    handleClick (item) {
      router.push(item.to)
    }
  }
  }
</script>

<style lang="scss" scoped>
.gjmaFooter {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: .88rem;
  line-height: .88rem;
  background: #fff;
  margin: 0 auto;
  font-size: .24rem;
  div {
    text-align: center;
  }
}
</style>

