(function (doc, win) {
  let scale = 1.0
  if (window.devicePixelRatio && window.devicePixelRatio >= 2) {
    scale = 1 / window.devicePixelRatio
  }
  let docEl = doc.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    if (clientWidth >= 750) {
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
    } else {
      docEl.style.fontSize = 100 * scale * (clientWidth / 750) + 'px'
    }
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
