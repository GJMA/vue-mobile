<template>
  <div class="empty-list mask mask-0" v-if="show">
    <div class="mask-empty"></div>
    <div class="empty-list-con pos-center">
      <gjma-icon :name="icon" level="9"></gjma-icon>
      <h2><slot name="title"></slot></h2>
      <p><slot name="sub"></slot></p>
      <ucar-btn @click="handleClick" type="default" v-if="btnText">{{btnText}}</ucar-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'emptyList',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'emptyProduct'
    },
    iconsize: {
      type: String,
      default: '3.2rem'
    },
    btnText: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="scss">
.empty-list{
  background: #fff;
}
.empty-list-con{
  width: 100%;
  text-align: center;
  .ucar-icon{
    margin-bottom: .24rem;
  }
  > h2{
    margin-bottom: .24rem;
    font-weight: normal;
    font-size: .36rem;
  }
  > p{
    font-size: .28rem;
  }
  .ucar-btn{
    margin: .4rem auto 0;
  }
}
</style>
