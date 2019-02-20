<template>
  <div class="container">
    <gjma-lazy-load
      :list="list"
    >
    </gjma-lazy-load>
  </div>
</template>

<script>
import {getImgList} from '@/api/api.js'
export default {
  name: 'layout',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    getImgList().then((res) => {
      this.list = res.data.list
    })
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
img {
  width: 100%;
}
</style>
