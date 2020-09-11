const DOM = {}
const body = document.querySelector('body')
let timer = null

export default function() {
  if (Object.prototype.hasOwnProperty.call(DOM, 'dialogDiv')) {
    clearTimeout(timer)
    timer = null
    body.removeChild(DOM.dialogDiv)
    delete DOM.dialogDiv
  }

  let option = {}
  option = {
    ...arguments[0]
  }

  DOM.dialogDiv = document.createElement('div')
  let dialogWrap = `<div class="dialog_wrapping">
                    <div class="dialog_box">
                      <div class="dialog_top">
                        <span class="dialog_title">${option.title}</span>
                        <i class="dialog_close iconfont icon-notice-close"></i>
                      </div>
                      <div class="dialog_mid">
                        <i class="iconfont icon-confirm"></i>
                        <span>${option.message}</span>
                      </div>
                      <div class="mid_btm">
                        <div class="btn_box">
                          <button class="th_cancel th_button th_btn_small">取消</button><button class="th_confirm th_button th_btn_primary th_btn_small">确定</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  `
  DOM.dialogDiv.innerHTML = dialogWrap
  body.append(DOM.dialogDiv)

  let dialogWrapping = DOM.dialogDiv.children[0]
  let dialogBox = DOM.dialogDiv.children[0].children[0]

  document.querySelector('.dialog_close').addEventListener('click', () => {
    dialogBox.classList.remove('dialog_box_fade')
    dialogWrapping.classList.remove('dialog_fade')
    setTimeout(() => {
      clearTimeout(timer)
      timer = null
      body.removeChild(DOM.dialogDiv)
      delete DOM.dialogDiv
    }, 300)
    option.cancel()
  }, false)
  // document.querySelector('.dialog_wrapping').addEventListener('click', () => {
  //   dialogBox.classList.remove('dialog_box_fade')
  //   dialogWrapping.classList.remove('dialog_fade')
  //   setTimeout(() => {
  //     clearTimeout(timer)
  //     timer = null
  //     body.removeChild(DOM.dialogDiv)
  //     delete DOM.dialogDiv
  //   }, 300)
  //   option.cancel()
  // }, true)
  document.querySelector('.th_cancel').addEventListener('click', () => {
    dialogBox.classList.remove('dialog_box_fade')
    dialogWrapping.classList.remove('dialog_fade')
    setTimeout(() => {
      clearTimeout(timer)
      timer = null
      body.removeChild(DOM.dialogDiv)
      delete DOM.dialogDiv
    }, 300)
    option.cancel()
  }, false)

  document.querySelector('.th_confirm').addEventListener('click', () => {
    dialogBox.classList.remove('dialog_box_fade')
    dialogWrapping.classList.remove('dialog_fade')
    setTimeout(() => {
      clearTimeout(timer)
      timer = null
      body.removeChild(DOM.dialogDiv)
      delete DOM.dialogDiv
    }, 300)
    option.success()
  }, false)
 
  

  setTimeout(() => { // 第一次创建dom 延迟执行动画
    dialogWrapping.classList.add('dialog_fade')
    dialogBox.classList.add('dialog_box_fade')
  }, 50)
}