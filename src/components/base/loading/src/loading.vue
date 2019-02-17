<template>
  <div class="loading" v-show="isloading">
    <div class="mask" >
      <div class="spinner" :class="{active:!isMask}"></div>
       <div class="text">{{text}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ZfLoading',
  data () {
    return {
      isloading: false,
      isMask: true,
      text: ''
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>
