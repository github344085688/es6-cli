/**
 * call
 * 1、原来的函数执行在call内部完成
 * 2、原函数的参数，需要处理一下
 * 3、函数的this指向发生改变
 * 4、call 不是一个纯函数，是一个面向过程，且必须依赖 Function.prototype 的方法this指向
 */


// 示例
window.name = 'xm'
const person = {
  name: 'xh'
}
function say (age) {
  console.log(this.name, arg)
}
say(18) // xm 18

say.call(person, 20)

// 构造函数有没可能是返回函数
Function.prototype.myCall = function (ctx, ...args) {
  // ctx 不存在就是指向全局对象
  const self = ctx || window
  // 分析第 2 步
  // args = args || [] // 可以直接注释掉，args 默认值为[]
  // 另外，不建议使用 arguments，单独多出 arguments 这个东西很容易引起歧义

  // 分析： 第 3 步
  self.fn = this // 叫做隐式绑定
  delete self.fn

  // 分析：第1步
  const res = self.fn(...args)

  return res
}

