<template>
  <div>
    <div class="numBox flex" :style="{height: height}" @click="setNum" style="text-align: center;">
      <!--输入的金额-->
      <template v-if="!isPlaceholder">
        {{value}}
      </template>
      <!--占位符-->
      <template v-else>
        <span class="placeholder">{{placeholder}}</span>
      </template>
      <!--光标-->
      <span v-if="isKey" class="curson"></span>
    </div>
    <!--键盘-->
    <div class="keyCode" v-if="isKey">
      <div class="num">
        <div class="item" :class="{qingkong: item.id === 9}" v-for="(item, index) in keyCodeList" :key="index" @click.stop="input(item)">{{item.value}}</div>
      </div>
      <!--功能按钮-->
      <div class="btns">
        <div class="btn del" @click.stop="cancal"></div>
        <div class="btn shouqi" @click="qx"></div>
        <div class="btn confir" @click="confir">完成</div>
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * 自定义键盘
   * @param {String} placeholder 占位符
   * 
   * */
  export default {
    name: 'keyCode',
    data: function() {
      return {
        isClose: false,
        isPlaceholder: true,
        isKey: false,
        value: '',
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
        }]
      }
    },
    watch: {
      value: function(value, oldValue) {
        if(value === '') {
        } else {
          this.isPlaceholder = false
        }
        this.$emit('change', value)
      },
      price: function(value) {
        this.isPlaceholder = false
        this.value = value
      }
    },
    props: {
      height: {
        type: String,
        default: '.88rem'
      },
      placeholder: {
        type: String,
        default: '123'
      },
      price: ''

    },
    mounted: function() {
      this.value = this.price
    },
    methods: {
      setNum: function() {
        this.isClose = false
        this.isKey = true
        this.isPlaceholder = false
      },
      close () {
        if (this.value == '') {
          this.isPlaceholder = true
        }
        this.isKey = false
      },
      input: function(item) {
        if (item.id === 9) {
          this.value = ''
          return
        }
        let arr = this.value.toString().split('.')
        let len = arr.length
        // 如果输入的为.
        if (item.id === 11) {
          if (this.value === '') {
            this.value = '0.'
          } else if (len === 1){
            this.value += '.'
          }
          return
        }
        if (this.value === '0' && item.id !== 11) {
          this.value = item.value
          return
        }
        if (len === 1 && arr[0].length === 4 || len === 2 && arr[1].length == 2) {
          return          
        }
        this.value += item.value.toString()
      },
      qx: function() {
        if (this.value == '') {
          this.isPlaceholder = true
        }
        this.isKey = false
      },
      cancal: function() {
        var len = this.value.toString().length - 1
        this.value = this.value.toString().substring(0, len)
        if (this.value === '') {
          this.isPlaceholder = false
        }
      },
      changeValue (value) {
        this.value = value
        this.isPlaceholder = false
        this.isKey = true
      },
      confir: function() {
        if (this.value == '') {
          this.isPlaceholder = true
        }
        this.isKey = false
        this.$emit('click', this.value)
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