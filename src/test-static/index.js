import imgDemo from '../assets/images/demo.jpg'
import helloWorld from '@assets/js/helloWorld.js'

window.onload = function () {
  helloWorld()
  const img = document.createElement('img')
  img.onload = function () {
    document.body.appendChild(img)
  }
  img.src = imgDemo
}
