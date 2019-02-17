/**
 * Number
 * @author GJMA
 * @date 2019-02-14
 **/

/**
 * @author GJMA
 * @date 2019-02-14
 * 生成随机数
 */
export const GetRandomNum = (Min, Max) => {
  let Range = Max - Min;
  let Rand = Math.random();
  return(Min + Math.round(Rand * Range));
}

/**
 * @author GJMA
 * @date 2019-02-14
 * 千位符
 */
export const toThousands = (num) => {
  var number = (num || 0).toString(), temp = num.length % 3
  switch (temp) {
    case 1:
      number = '00' + number;
      break
    case 2:
      number = '0' + number
      break
  }
  return number.match(/\d{3}/g).join(',').replace(/^0+/, '')
}
