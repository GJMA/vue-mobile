<template>
  <div class="">
    <div class="list">
      <div class="list-item" v-for="(item, index) in list" :key="index">
        <div class="item-title">
          <p class="item-ordersn">订单编号:{{item.orderSn}}</p>
        </div>
        <div class="item-content">
          <p class="item-bar">
            <span>创建时间</span>
            <span>{{item.createDate | format('yyyy/MM/dd hh:mm')}}</span>
          </p>
          <p class="item-bar">
            <span>支付时间</span>
            <span>{{item.callbackDate | format('yyyy/MM/dd hh:mm')}}</span>
          </p>
          <p class="item-bar">
            <span>车牌号</span>
            <span>{{item.carnumber}}</span>
          </p>
          <p class="item-bar">
            <span>油枪号</span>
            <span>{{item.oilStationGunSn}}</span>
          </p>
          <p class="item-bar">
            <span>应付金额</span>
            <span>￥{{item.costPrice | returnFloat}}</span>
          </p>
          <p class="item-bar">
            <span>充值卡抵扣</span>
            <span>￥{{item.rechargeCardPrice | returnFloat}}</span>
          </p>
          <p class="item-bar">
            <span>优惠金额</span>
            <span>￥{{item.platTakePrice + item.stationTakePrice | returnFloat}}</span>
          </p>
          <p class="item-bar">
            <span>实收金额</span>
            <span>￥{{item.realPrice | returnFloat}}</span>
          </p>
          <p class="item-bar">
            <span>订单性质</span>
            <span v-if="item.orderNature == 1">拉新</span>
            <span v-else>回头客</span>
          </p>
          <p class="item-bar note" v-if="item.depict">
            <span>备注</span>
            <span>{{item.depict}}</span>
          </p>
          <p class="item-total">奖励金：￥{{item.cashBack | returnFloat}}</p>
        </div>
      </div>
    </div>
    <ucar-empty :isShow="list.length === 0"></ucar-empty>
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

    name: 'UcarList',
    data() {
      return {

      }
    },
    props: {
      list: {
        type: Array,
        default () {
          return []
        }
      },
      isShow: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style>
  .note {
    /*font-weight: bold;
    color: #333;*/
  }
</style>