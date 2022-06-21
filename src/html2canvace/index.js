import html2canvas from 'html2canvas'

// js 截图
export function takeScreenshot () {
  html2canvas(document.getElementById('view'), {
    // width: 300,
    // height: 300
  }).then(canvas => {
    console.log(canvas.toDataURL('image/png'))
    document.body.appendChild(canvas)
  })
}
