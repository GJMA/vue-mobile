import ajax from './index.js'

/**
 * getCode1
 * @param {string} phone
 * @method POST
*/
export const getCode = params => {
  return ajax.post('mpOilStaff/v7/getWxCheckCode', params)
}

/**
 * login 2
 * @param {string} checkCode 验证码
 * @param {string} phone 手机号
*/
export const login = params => {
  return ajax.post('mpOilStaff/login', params)
}
/**
 * 验证油站人员是否已注册
 * */
export const checkStaffExist = params => {
  return ajax.get('mpOilStaff/checkStaffExist', {params: params})
}
/**
 * register 3
 * @param {string} checkCode 验证码
 * @param {number} oilStationId 油站ID
 * @param {string} phone 手机号
 * @param {string} realName 真实姓名
 * @method POST
*/
export const register = params => {
  return ajax.post('mpOilStaff/register', params)
}

/**
 * getStatus 4 获取审核状态
 * @method GET
*/
export const getStatus = () => {
  return ajax.get('mpOilStaff/getStaffCheckStatus')
}

/**
 * oilList 5
 * @param {string} stationName 油站名称
 * @param {number} pageNum 页码
 * @param {number} pageSize 条数
 * @method GET
*/
export const getOilList = params => {
  return ajax.get('mpOilStaff/getOilStations', {params: params})
}

/**
 * modify 6
 * @param {string} realName 真实姓名
 * @method POST
*/
export const modify = params => {
  return ajax.post('mpOilStaff/updateStaffName', params)
}

// ucenter 个人中心
/**
 * getPrice 7 获取四个金额
 * @method GET
*/
export const getPrice = () => {
  return ajax.get('mpStaffCenter/getCashBackCount')
}

/**
 * getGoldList 8 奖励金列表
 * @param {string} orderNature 奖励金类型
 * @param {number} pageNum
 * @param {number} pageSize
 * @method GET
 */
export const getGoldList = params => {
  return ajax.get('mpStaffCenter/getCashBackList', {params: params})
}

/**
 * getAccountList 9 获取提现列表
 * @param {number} pageNum
 * @param {number} pageSize
 * @method GET
*/
export const getAccountList = params => {
  return ajax.get('account/accountBalance', {params: params})
}

/**
 * getOrderList 10 订单列表
 * @param {string} search 关键字
 * @param {string} createDateBegin 开始时间
 * @param {string} createDateEnd 结束时间
 * @param GET
*/
export const getOrderList = params => {
  return ajax.get('mpStaffCenter/getOrderList', {params: params})
}

/**
 * addCard 11 添加银行卡
 * @param {string} bankCarSn
 * @param {string} bankName
 * @param {string} checkCode
 * @param {string} mobilePhone
 * @param {string} realName
 * @param {string} staffidCard
 * @method POST
*/
export const addCard = params => {
  return ajax.post('bankCard/addBankCard', params)
}

/**
 * getCardList 12 获取银行卡
 * @param {string}
 * @method GET
*/
export const getCardList = () => {
  return ajax.get('bankCard/BankCardlist')
}
/**
 * setDefaultCard 13
 * @param {string} oldOilStaffCardID
 * @param {string} newOilStaffCardID
 * @method GET
 */
export const setDefaultCard = (params) => {
  return ajax.post('bankCard/setDefaultCard', params)
}

/**
 * putPrice 14 提现
 * @param {string} bankName
 * @param {string} bankCarSn
 * @param {string} price
 * @method POST
*/
export const putPrice = params => {
  return ajax.post('account/getMoney', params)
}

/**
 * check 15 验单
 * @param {number} oilStationID
 * @param {string} orderSn 油站名称
 * @method POST
*/
export const check = params => {
  return ajax.post('mpVerifyOrder/verifyOrder', params)
}

/**
 * checkDetail 16 验单详情
 * @param {number} cashBackDetailID
 * @method GET
*/
export const checkDetail = params => {
  return ajax.get('mpStaffCenter/getcashBackDetailList', {params: params})
}

/**
 * 获取js-sdk信息 17
 */
export const getSign = params => {
  return ajax.get('mpScan/getSign' + params)
}

/**
 * 获取js-sdk信息 17
 */
export const getSignByPost = params => {
  return ajax.post('mpScan/getStationSign', params)
}

/**
 * 获取js-sdk信息 17
 */
export const getQrCode = () => {
  return ajax.get('/mpStaffCenter/getStaffQrCodeUrl')
}
