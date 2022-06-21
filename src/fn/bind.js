/**
 * bind
 * 1、是返回函数
 * 2、原函数的参数，需要处理一下
 * 3、函数的this指向发生改变
 * 4、不是一个纯函数，必须依赖Function.prototype
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

say.bind(person, 20)()

// 分析第 4 步
Function.prototype.myBind = function (ctx, ...args) {
  // 首先判断是不是函数调用该方法，如果不是，则抛出异常
  if (typeof this !== "function") throw new TypeError('Error');
  // ctx 不存在就是指向全局对象
  const self = ctx || window
  // 分析第 2 步
  // args = args || [] // 可以直接注释掉，args 默认值为[]

  // 分析： 第 3 步
  self.fn = this // 叫做隐式绑定

  // 分析：第1步
  const res = function () {
    const ress = self.fn(...args)
     delete self.fn
     return ress
  }

  return res
}

Function.prototype.myBind2 = function (ctx, ...args) {
  return function () {
    return fn.apply(ctx, args)
  }
}

