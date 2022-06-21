/**
 * 选择排序
 * 第 1 步，返回函数
 * 第 2 步，2个循环体
 * 第 3 步，找最小值，交换位置
 */

function selectSort (arr) {
  const len = arr.length
  let minIndex
  for (let i = 0; i < len; i++) {
    minIndex = i
    for (let j = 0; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
  }
  return arr
}
