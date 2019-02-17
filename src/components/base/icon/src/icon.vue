<template>
  <i
    class="gjma-icon"
    :class="[
      name ? 'gjma-icon-' + name : '',
      level ? 'gjma-icon' + level : '',
    ]"
    @click="handleClick"
  >
  </i>
</template>

<script>
  /*
   * 图标组件
   * @author GJMA
   * @date 2017/08/02
   */
  export default {
    name: 'ucarIcon',
    data() {
      return {
      }
    },
    props: {
      name:{
        type:String,
        default:""
      },
      level:{
        type:String,
        default:""
      },
      size: {
        type: String,
        default: ''
      }
    },
    methods: {
      handleClick () {
        this.$emit('click')
      }
    }
  }
</script>