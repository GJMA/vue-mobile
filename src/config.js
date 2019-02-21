/**
 * 基本配置文件
 * 1.接口地址
 * 2.开发环境 -- true  false
 * 3.当前版本号
 * */

/**
 * 版本号
 **/
let verison = 'V1.0.0'
const ISTEST = true

let host = ISTEST
  ? 'http://test.ucarlinkin.com/'
  : 'http://ucar.ucarlinkin.com/'

/**
 * 是否为开发环境
 * */
let ISDEV = false

/**
 * 配置跨域
 * */
let devUrl = ISDEV ? '/target' : host + ''

module.exports = {
  host,
  ISTEST,
  devUrl,
  verison
}
