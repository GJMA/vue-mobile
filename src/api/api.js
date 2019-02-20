import ajax from './index.js'

/**
 * getCode1
 * @param {string} phone
 * @method POST
*/
export const getImgList = () => {
  return ajax.get('test/imgList')
}
