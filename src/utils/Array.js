/**
 * Array
 * @author GJMA
 * @date 2019-02-18
 **/

/**
 * @author GJMA
 * @date 2019-02-18
 * 元素在数组中的位置
 */
export const trim = (str) => {
  let result = str.replace(/\s/g, '')
  return result
}

/**
 * @author GJMA
 * @date 2019-02-18
 * 删除数组中指定的元素
 */
export const deleteArrayItem = (item) => {
  return item
}

/**
 * @author GJMA
 * @date 2019-02-18
 * 去重
 */
// 双循环
export const distinct = (arr) => {
  let result = []
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        j = ++i
      }
    }
    result.push(arr[i])
  }
  return result
}

// indexOf
export const distinctByIndexOf = (arr) => {
  let result = []
  let len = arr.length || 0
  for (let i = 0; i < len; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i])
    }
  }
  return result
}

// filter
export const distinctByFilter = (arr) => {
  let result = arr.filter((element, index, self) => {
    return self.indexOf(element) === index
  })
  return result
}

// obj
export const distinctByObj = (arr) => {
  let obj = {}
  let result = []
  let len = arr.length || 0
  for (let i = 0; i < len; i++) {
    let key = arr[i]
    if (!obj[key]) {
      obj[key] = true
      result.push(arr[i])
    }
  }
  return result
}

// Set
export const distinctBySet = (arr) => {
  return Array.from(new Set(arr))
}

/**
 * @author GJMA
 * @date 2019-02-18
 * 排序/sort
 */

// 冒泡排序
export const BubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    // 决定每一轮比较多少次
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr
}

export const changeSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    // 次数
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
      }
    }
  }
  return arr
}

// 二分法
export const twoSort = (arr) => {
  // 最后当数组长度只有一的时候，不再往下执行
  if (arr.length <= 1) {
    return arr
  }
  let middle = arr.splice(Math.floor(arr.length / 2), 1)
  let leftArr = []
  let rightArr = []
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) <= middle) {
      // 把比中间值小的放一个数组
      leftArr.push(arr[i])
    } else {
      // 把比中间值大的放另一个数组
      rightArr.push(arr[i])
    }
  }
  // concat() 方法用于连接两个或多个数组。
  // 再对小数组继续回调上面的分组方法
  return twoSort(leftArr).concat(middle, twoSort(rightArr))
}
