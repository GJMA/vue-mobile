<template>
  <div v-show="show">
    <!--键盘-->
    <div class="keyCode">
      <div class="num">
        <div class="item"
          :class="{qingkong: item.id === 9}"
          v-for="(item, index) in keyCodeList" 
          :key="index" 
          @click.stop="input(item)"
        >
          {{item.value}}
        </div>
      </div>
      <!--功能按钮-->
      <div class="btns">
        <div class="btn del" @click.stop="backspace"></div>
        <div class="btn shouqi" @click="close"></div>
        <div class="btn confir" @click="confir">完成</div>
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * 自定义键盘
   * */
  export default {
    name: 'keyboardnum',
    props: {
      show: {
        type: Boolean,
        default: true
      },
      value: ''
    },
    data: function() {
      return {
        isClose: false,
        keyCodeList: [{
          id: 0,
          value: 1
        }, {
          id: 1,
          value: 2
        }, {
          id: 2,
          value: 3
        }, {
          id: 3,
          value: 4
        }, {
          id: 4,
          value: 5
        }, {
          id: 5,
          value: 6
        }, {
          id: 6,
          value: 7
        }, {
          id: 7,
          value: 8
        }, {
          id: 8,
          value: 9
        }, {
          id: 9,
          value: '清空'
        }, {
          id: 10,
          value: 0
        }, {
          id: 11,
          value: '.'
        }],
        reg: {
          priceReg: /(^[1-9]\d{0,3}(\.\d{0,2})?$)|(^0(\.\d{0,2})?$)/
        }
      }
    },
    methods: {
      /**
       * 输入
      */
      input: function(item) {
        if (item.id === 9) {
          this.$emit('backspace', '')
          return
        }
        let value = this.value + item.value
        if (this.reg.priceReg.test(value)) {
          this.$emit('input', item)
        }
      },
      close: function() {
        this.$emit('close')
      },
      backspace: function() {
        this.$emit('backspace')
      },
      confir: function() {
        this.$emit('confirm')
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