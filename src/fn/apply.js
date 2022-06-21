/**
 * apply
 * 1、原来的函数在apply内部完成
 * 2、原函数的参数，需要处理一下
 * 3、函数的this指向发生改变
 * 4、不是一个纯函数， 必须依赖function.prototype
 */


// 示例
window.name = 'xm'
const person = {
  name: 'xh'
}

function say(age) {
  console.log(this.name, arg)
}
say(18) // xm 18

say.call(person, 20)

// 分析第 4 步
Function.prototype.myApply = function (ctx, args) {
  // ctx 不存在就是指向全局对象
  const self = ctx || window
  // 分析第 2 步
  args = args || []

  // 分析： 第 3 步
  self.fn = this // 叫做隐式绑定
  delete self.fn

  // 分析：第1步
  const res = self.fn(...args)

  return res
}
