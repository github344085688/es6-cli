/**
 * 手写 js 中 call、apply、bind？
 * 学习的意义： 首先， 强调前端开发不会使用这三， 都不会影响你工作（搬砖）。那为什么要学了。 我觉得有3点原因
 * 第 1 点：应付面试，这是最常见问题原因，靠背就能过掉这题（当然，我不是说明我要靠背去手写，这样没意义）。
 * 第 2 点：工作多年作为一位老师傅或面试官，必须能够硬气回答出来。
 *    很多人回答， 这东西没必要花时间深究， 在面试的时候搞一下嘛。 这样的回答，不免显得太普普通通了。
 *    作为一名好程序员，面对这类技术题，我们要自己理解，不应该随口说面试时搞一搞。
 *    而且每次面试搞一搞不也浪费时间吗？一次过终身过
 *  第 3 点：程序员的基础能力是coding，进阶能力应该是设计。说白点，这个题考的是函数设计
 */

/**
 * Function.prototype 的方法中的 this 的指向谁
 */

Function.prototype.say = function () {
  console.log('这里的this指向谁', this)
}

function a () {
  // todo
}

a.say() // 打印：这里的this指向谁 function a { /* todo */}















// Function.__proto__===Function.prototype文章 https://github.com/jawil/blog/issues/13
