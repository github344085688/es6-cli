/**
 * 分享，如何写js函数
 * 问题：面试时,手写 Array.prototype.map、Array.prototype.filter、Function.prototype.bind，再如手写一个基础排序算法
 * 这些东西都是函数（如何写类），有一个特点：简单，好记，但容易忘。如果单凭记忆的话，比较消耗精力，有没有搞一遍，就能记住的
 * 分享我的方法，写函数是有步骤，不是无脑一行一行写的。至少分个123步吧（当然，算法学的好，这个忽略，但是我们写普通函数也没必要用到高深的算法）
 * 第 1 步，函数是什么函数，函数入参、出参是什么
 * 第 2 步，函数特征1，有几个循环
 * 第 3 步，函数特征2，可有可无，在设计上有特别变量，或者逻辑
 */


// 插入排序，有个特点，数组2个元素比较，前一个大于后一个，那么后一个值等于前面一个，最终第1个元素没有交换值，需要一个临时值来替换。
// 第 1 步，返回函数
function insertSort(arr) {
  const len = arr.length
  let temp
  // 第 2 步，2个循环体
  for (let i = 1; i < len; i++) {
    let j = i
    temp = arr[i]
    while (j > 0 && arr[j - 1] > temp) {
      // 第 3 步 有个特点，数组2个元素比较，前一个大于后一个，那么后一个值等于前面一个，最终第1个元素没有交换值，需要一个临时值来替换。
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
  return arr
}

function ArrMap (arr, fn) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = fn(arr[i], index, arr)
  }
  return newArr
}
