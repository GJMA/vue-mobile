<template>
  <div class="gjmaFooter flex">
    <router-link tag="div"
      class="flex-1"
      v-for="(item, index) in list" :key="index"
      :to="item.path"
    >
      {{item.name}}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'zfFooter',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
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
.router-link-active {
  text-decoration: none;
  color: red;
}
.gjmaFooter {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: .88rem;
  line-height: .88rem;
  background: #fff;
  margin: 0 auto;
   box-shadow:1px 2px 3px 1px #f2f2f2 inset;
  font-size: .24rem;
  div {
    text-align: center;
  }
}
</style>
