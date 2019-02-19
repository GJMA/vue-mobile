/**
 * String
 * @author GJMA
 * @date 2019-02-18
 **/

/**
 * @author GJMA
 * @date 2019-02-18
 * 删除空格
 */
export const trim = (str) => {
  let result = str.replace(/\s/g, '')
  return result
}
