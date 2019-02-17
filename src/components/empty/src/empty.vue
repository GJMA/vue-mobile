<template>
  <div class="empty" v-show="isShow">
    <div class="icon-empty"></div>
    <p>{{title}}</p>
  </div>
</template>

<script>
  /*
   *----------------------------
   * 导航组件
   *----------------------------
   * @author GJMA
   * @date 2018/06/27
   * 
   */

  export default {

    name: 'UcarEmpty',
    data() {
      return {

      }
    },
    props: {
      title: {
        type: String,
        default: "暂无列表"
      },
      isShow: {
        type: Boolean,
        default: false
      }
    }
  }
</script>