<template>
  <div>
    <div class="numBox flex" :style="{height: height}" @click="setNum" style="text-align: center;">
      <!--输入的金额-->
      <template >
        {{value}}
      </template>
      <!--占位符-->
      <template v-if="value === '' && !isCursor">
        <span class="placeholder">{{placeholder}}</span>
      </template>
      <!--光标-->
      <span v-if="isCursor" class="curson"></span>
    </div>
  </div>
</template>

<script>
  /**
   * 自定义输入框
   * @param {String} placeholder 占位符
   * */
  export default {
    name: 'customInput',
    props: {
      height: {
        type: String,
        default: '.88rem'
      },
      placeholder: {
        type: String,
        default: '￥请输入提现金额'
      },
      value: '',
      isCursor: {
        type: Boolean,
        default: false
      }
    },
    data: function() {
      return {
      }
    },
    watch: {
      value (value) {
      }
    },
    
    mounted: function() {
    },
    methods: {
      setNum: function() {
        this.$emit('showKeyboard')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .numBox {
    display: -webkit-flex!important;
    display: flex;
    background: #fff;
    font-size: .46rem;
    color: #333;
  }
  .numBox .placeholder {
    color: #757575;
  }
  .numBox .curson {
    width: 2px;
    height: 20px;
    /*background: #ccc;*/
    background: red;
    -webkit-animation: twinkle 2s infinite!important;
    animation: twinkle .8s infinite;
  }
  
  .keyCode {
    display: -webkit-flex;
    display: flex;
    justify-content: flex-start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #e8e7e7;
    padding-top: .12rem;
  }
  
  .keyCode .num {
    width: 6rem;
    display: -webkit-box;
    display: -webkit-flex!important;
    display: -ms-flexbox;
    display: flex;
    justify-content: flex-start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .keyCode .num .item {
    width: 1.9rem;
    height: .92rem;
    line-height: .92rem;
    background: #fff;
    margin-left: .1rem;
    margin-bottom: .12rem;
    border-radius: .06rem;
    text-align: center;
    box-shadow:2px 0px 0px rgba(211,210,210,1);
    font-size: .48rem;
    font-weight: bold;
  }
  .keyCode .num .qingkong {
    font-size: .32rem;
  }
  
  .keyCode .btns {
    width: 1.5rem;
    height: 4.16rem;
    padding-left: .1rem;
    text-align: center;
    
  }
  .keyCode .btns .btn {
    width: 1.3rem;
    height: .92rem;
    line-height: .92rem;
    margin-bottom: .12rem;
    border-radius: .06rem;
    -webkit-box-shadow: 2px 0px 0px rgba(211,210,210,1);
    box-shadow: 2px 0px 0px rgba(211,210,210,1);
  }
  .keyCode .btns .del {
    background: #fff url(../../assets/icon/icon-shanchu.png) no-repeat center center;
    background-size: .5rem .5rem;
  }
  .keyCode .btns .shouqi {
    background: #fff url(../../assets/icon/icon-shouqi.png) no-repeat center center;
    background-size: .5rem .5rem;
  }
  .keyCode .btns .confir {
    height: 1.96rem;
    line-height: 1.96rem;
    background: #fff;
    margin: 0;
  }
  @keyframes twinkle {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @-webkit-keyframes twinkle
  /* Safari 和 Chrome */
  
  {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>