const Mock = require('mockjs')

// Mock.mock('http://test.ucarlinkin.com/webmp/mpOilStaff/v7/getWxCheckCode', /post|get/i, {name: 'zhang'})
Mock.mock('http://test.ucarlinkin.com/webmp/test/imgList', /post|get/i, {
  code: 0,
  data: {
    'list|50-100': [{
      'img': 'https://ucar-oss.oss-cn-beijing.aliyuncs.com/feedback/1550651447093_02917df0c6af414a9158edd424fab73d.jpeg'
    }],
    message: ''
  }
})

Mock.mock('http://test.ucarlinkin.com/webmp/orderDetail', /post|get/i, {
  code: 0,
  data: {
    carColonyType: '京',
    carId: 16907,
    carNumber: '555555',
    costPrice: 5,
    dealTime: '2019.01.11 13:41',
    dealTimeStamp: 1547185300515,
    detailPayType: 'WX',
    detailPayTypeStr: '微信',
    oilStationGunId: 256,
    oilStationGunSn: '1号枪',
    oilStationId: 255,
    oilStationName: '千里马油站',
    oilType: '92#',
    orderId: 34633,
    orderSn: '19087185302241',
    orderStatus: '支付成功',
    payTime: '2019.01.11 13:41',
    payTimeStamp: 1547185308296,
    realPrice: 5,
    rechargeCardDiscountPrice: 0,
    rechargeCardPrice: 0,
    rechargeCardType: 0,
    rechargeCardTypeStr: '未知卡类型',
    userAppraiseId: 0,
    userAppraiseResponse: {},
    userCouponPrice: 0,
    userId: 16953,
    wxIsDivision: 0,
    wxPayType: 1
  },
  message: ''
})
