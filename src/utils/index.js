/**
 * utils 公共方法库
*/
export const ls = {
  obj: window.localStorage || false,
  set: function (key, val) {
    var arr = {}
    if (this.obj) {
      if (Array.isArray(val)) {
        for (var item in val) {
          arr[item] = val[item]
        }
        val = '<array>' + JSON.stringify(arr)
      } else if (typeof val === 'object') {
        // 为对象设置标识
        val = '<json>' + JSON.stringify(val)
      }
      this.obj.setItem(key, val)
      return this.get(key)
    }
    return false
  },
  get: function (key) {
    var result
    if (this.obj) {
      result = this.obj.getItem(key)
      if (!result) {
        return false
      }
      if (result.substr(0, 6) === '<json>') {
        // 返回对象
        return JSON.parse(result.slice(6))
      } else if (result.substr(0, 7) === '<array>') {
        // 返回数组
        var obj = JSON.parse(result.slice(7))
        var arr = []
        for (var item in obj) {
          arr.push(obj[item])
        }
        return arr
      } else {
        // 返回字符串
        return result
      }
    }
    return false
  }
}

/**
 * @author GJMA
 * @date 2018-06-20
 * 防抖动
 */
export const debounce = function (func, sleep) {
  let timeID = null
  return function () {
    clearTimeout(timeID)
    timeID = setTimeout(func, sleep)
  }
}
/**
 * 获取URL参数
 */
export const getUrlParam = function (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}

export const formatTime = (date,fmt) => {
  var date = new Date(date)
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}