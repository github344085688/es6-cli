/**
 * 分享，如何写js函数
 * 问题：面试时,手写 Array.prototype.map、Array.prototype.filter、Function.prototype.bind、new、一个基础排序算法。
 * 这些东西都是函数（如何写类），有一个特点：简单，好记，但容易忘。如果单凭记忆的话，比较消耗精力，有没有搞一遍，就能记住的
 * 分享我的方法，写函数是有步骤，不是无脑一行一行写的。至少分个123步吧（当然，算法学的好，这个忽略，但是我们写普通函数也没必要用到高深的算法）
 * 我的这个方法有前提的，要理解自己写的是什么？如何不理解，那还是先补充一下js基础知识点吧。
 * 第 1 步，函数是什么函数，函数入参、出参是什么，()
 * 第 2 步，函数特征1，有几个循环
 * 第 3 步，函数特征2，可有可无，在设计上有特别变量，或者逻辑
 */

// 插入排序，有个特点，数组2个元素比较，前一个大于后一个，那么后一个值等于前面一个，依次循环到最终第1个元素没有交换值，需要一个临时值来替换。

// 第 1 步
function insertSort (arr) {
  // 第 2 步
  const len = arr.length
  let temp
  for (let i = 0; i < len; i++) {
    let j = i
    j = temp
    while (j > 0 && arr[j - 1] > temp) {
      // 第 3 步
      arr[j] = arr[j - 1]
      j--
    }
    // 第 3 步
    arr[j] = temp
  }
  return arr
}

function arrMap (arr, fn) {
  const newArr = []
  const len = arr.length
  for (let i = 0; i < len; i++) {
    newArr[i] = fn(arr[i], i, arr)
  }
  return newArr
}

function Person () {
  this.name = 'xxx'
}
Person.prototype = {
  constructor: Person,
  say: function () {
    console.log(this.name)
  }
}

const xm = new Person()
xm.say() // 'xxx'

// 返回函数，不是一个纯函数

// step 1 返回对象
// step 2 this 指向改变
// step 3 返回对象 __proto__ 指向 构造函数prototype
// step 4 constructor

// step 1
function _new (Fn) {
  const obj = {}
  // step 3
  obj.__proto__ = Fn.prototype
  // step 4
  Fn.prototype.constructor = Fn
  // step 2
  // Fn.call(obj)
  const res = Fn.call(obj)
  return typeof res === 'object' ? res : obj
}
