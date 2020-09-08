const DOM = {}
const body = document.querySelector('body')

export default function (index, preview) {
  let option = {
    scale: 1, // 初始缩放值
    ratio: 0.075, // 缩放率
    rotate: 0, // 旋转后角度
    imgIndex: index
  }
  if (!Object.prototype.hasOwnProperty.call(DOM, 'previewDiv')) {
    DOM.previewDiv = document.createElement('div')
    let previewBox = `<div class="preview_wrapping">
                        <div class="close_icon"><i class="el-icon-circle-close"></i></div>
                        <div class="prev_left"><i class="el-icon-arrow-left"></i></div>
                        <div class="prev_right"><i class="el-icon-arrow-right"></i></div>
                        <div class="btm_actions_box">
                          <i class="el-icon-zoom-out zoom-out"></i><i class="el-icon-zoom-in zoom-in"></i><i class="el-icon-refresh-left rotate-left"></i><i class="el-icon-refresh-right rotate-right"></i>
                        </div>
                        <div class="preview_box">
                          <img src="${preview[option.imgIndex].url}">
                        </div>
                      </div>
                      `
    DOM.previewDiv.innerHTML = previewBox
    body.append(DOM.previewDiv)
    setTimeout(() => { // 第一次创建dom 延迟执行动画
      document.querySelector('.preview_wrapping').classList.add('preview_fade')
    }, 10)

    let img = document.querySelector('.preview_wrapping img')
  
    document.querySelector('.close_icon').addEventListener('click', () => { // 关闭预览
      console.log('Preview Box: handle close')
      document.querySelector('.preview_wrapping').classList.remove('preview_fade')
      setTimeout(() => { // 关闭预览后 延迟复位
        option = {
          scale: 1,
          ratio: 0.075,
          rotate: 0,
          imgIndex: 0
        }
        img.style.transform = `scale(1) rotate(0deg)`
      }, 300)
      // document.querySelector('body').removeChild(DOM.previewDiv)
    }, false)
    document.querySelector('.zoom-out').addEventListener('click', () => { // 缩小
      if (option.scale >= 0.10) {
        option.scale = (option.scale - option.ratio).toFixed(3)
        console.log('Preview Box: handle zoom-out ', option.scale)
        img.style.transform = `scale(${option.scale}) rotate(${option.rotate}deg)`
      }
    }, false)
    document.querySelector('.zoom-in').addEventListener('click', () => { // 放大
      if (option.scale <= 1.90) {
        option.scale = (+option.scale + +option.ratio).toFixed(3)
        console.log('Preview Box: handle zoom-in ', option.scale)
        img.style.transform = `scale(${option.scale}) rotate(${option.rotate}deg)`
      }
    }, false)
    document.querySelector('.rotate-left').addEventListener('click', () => { // 左转90°
      option.rotate = option.rotate - 90
      console.log('Preview Box: handle rotate-left ', option.rotate + '°')
      img.style.transform = `scale(${option.scale}) rotate(${option.rotate}deg)`
    }, false)
    document.querySelector('.rotate-right').addEventListener('click', () => { // 右转90°
      option.rotate = option.rotate + 90
      console.log('Preview Box: handle rotate-right ', option.rotate + '°')
      img.style.transform = `scale(${option.scale}) rotate(${option.rotate}deg)`
    }, false)
    document.querySelector('.prev_left').addEventListener('click', () => { // 向左切换
      if (option.imgIndex === 0) {
        option.imgIndex = preview.length - 1
        img.src = `${preview[option.imgIndex].url}`
      } else {
        option.imgIndex --
        img.src = `${preview[option.imgIndex].url}`
      }
      option = {
        scale: 1,
        ratio: 0.075,
        rotate: 0,
        imgIndex: option.imgIndex
      }
      img.style.transform = `scale(1) rotate(0deg)`
    }, false)
    document.querySelector('.prev_right').addEventListener('click', () => { // 向右切换
      if (option.imgIndex === preview.length - 1) {
        option.imgIndex = 0
        img.src = `${preview[option.imgIndex].url}`
      } else {
        option.imgIndex ++
        img.src = `${preview[option.imgIndex].url}`
      }
      option = {
        scale: 1,
        ratio: 0.075,
        rotate: 0,
        imgIndex: option.imgIndex
      }
      img.style.transform = `scale(1) rotate(0deg)`
    }, false)
  } else {
    let previewBox = `<div class="preview_wrapping">
      <div class="close_icon"><i class="el-icon-circle-close"></i></div>
      <div class="prev_left"><i class="el-icon-arrow-left"></i></div>
      <div class="prev_right"><i class="el-icon-arrow-right"></i></div>
      <div class="btm_actions_box">
        <i class="el-icon-zoom-out zoom-out"></i><i class="el-icon-zoom-in zoom-in"></i><i class="el-icon-refresh-left rotate-left"></i><i class="el-icon-refresh-right rotate-right"></i>
      </div>
      <div class="preview_box">
        <img src="${preview[option.imgIndex].url}">
      </div>
    </div>
    `
    DOM.previewDiv.innerHTML = previewBox
    setTimeout(() => { // 第一次创建dom 延迟执行动画
    document.querySelector('.preview_wrapping').classList.add('preview_fade')
    }, 10)
    
    let img = document.querySelector('.preview_wrapping img')
  
    document.querySelector('.close_icon').addEventListener('click', () => { // 关闭预览
      console.log('Preview Box: handle close')
      document.querySelector('.preview_wrapping').classList.remove('preview_fade')
      setTimeout(() => { // 关闭预览后 延迟复位
        option = {
          scale: 1,
          ratio: 0.075,
          rotate: 0,
          imgIndex: 0
        }
        img.style.transform = `scale(1) rotate(0deg)`
      }, 300)
      // document.querySelector('body').removeChild(DOM.previewDiv)
    }, false)
    document.querySelector('.zoom-out').addEventListener('click', () => { // 缩小
      if (option.scale >= 0.10) {
        option.scale = (option.scale - option.ratio).toFixed(3)
        console.log('Preview Box: handle zoom-out ', option.scale)
        img.style.transform = `scale(${option.scale}) rotate(${option.rotate}deg)`
      }
    }, false)
    document.querySelector('.zoom-in').addEventListener('click', () => { // 放大
      if (option.scale <= 1.90) {
        option.scale = (+option.scale + +option.ratio).toFixed(3)
        console.log('Preview Box: handle zoom-in ', option.scale)
        img.style.transform = `scale(${option.scale}) rotate(${option.rotate}deg)`
      }
    }, false)
    document.querySelector('.rotate-left').addEventListener('click', () => { // 左转90°
      option.rotate = option.rotate - 90
      console.log('Preview Box: handle rotate-left ', option.rotate + '°')
      img.style.transform = `scale(${option.scale}) rotate(${option.rotate}deg)`
    }, false)
    document.querySelector('.rotate-right').addEventListener('click', () => { // 右转90°
      option.rotate = option.rotate + 90
      console.log('Preview Box: handle rotate-right ', option.rotate + '°')
      img.style.transform = `scale(${option.scale}) rotate(${option.rotate}deg)`
    }, false)
    document.querySelector('.prev_left').addEventListener('click', () => { // 向左切换
      if (option.imgIndex === 0) {
        option.imgIndex = preview.length - 1
        img.src = `${preview[option.imgIndex].url}`
      } else {
        option.imgIndex --
        img.src = `${preview[option.imgIndex].url}`
      }
      option = {
        scale: 1,
        ratio: 0.075,
        rotate: 0,
        imgIndex: option.imgIndex
      }
      img.style.transform = `scale(1) rotate(0deg)`
    }, false)
    document.querySelector('.prev_right').addEventListener('click', () => { // 向右切换
      if (option.imgIndex === preview.length - 1) {
        option.imgIndex = 0
        img.src = `${preview[option.imgIndex].url}`
      } else {
        option.imgIndex ++
        img.src = `${preview[option.imgIndex].url}`
      }
      option = {
        scale: 1,
        ratio: 0.075,
        rotate: 0,
        imgIndex: option.imgIndex
      }
      img.style.transform = `scale(1) rotate(0deg)`
    }, false)
  }
}