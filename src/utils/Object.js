/**
 * String
 * @author GJMA
 * @date 2019-02-18
 **/

/**
 * @author GJMA
 * @date 2019-02-18
 * 深克隆 JSON
 */
export const deepCloneJson = (obj) => {
  let _obj = JSON.stringify(obj)
  let objClone = JSON.parse(_obj)
  return objClone
}

/**
 * @author GJMA
 * @date 2019-02-18
 * 深克隆 JSON
 */
export const deepClone = (obj) => {
  let objClone = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === 'object') {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // 判断obj子元素是否为对象，如果是，递归复制
        if (obj[key] && typeof obj[key] === 'object') {
          objClone[key] = deepClone(obj[key])
        } else {
          objClone[key] = obj[key]
        }
      }
    }
  }
  return objClone
}
