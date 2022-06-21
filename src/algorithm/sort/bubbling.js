/**
 * 冒泡排序函数
 * 第 1 步，返回函数
 * 第 2 步，2个循环体
 * 第 3 步，数组2个相邻元素，比较后交换位置
 */

function bubblingSort (arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 1; j < len - i; j++) {
      if (arr[j] < arr[j - 1]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      }
    }
  }
  return arr
}

export default bubblingSort
