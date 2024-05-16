function throttle(fn, delay) {
  let waiting = false
  let saveArg = null
  return function fu() {
    if (waiting) {
      saveArg = arguments
      return
    }
    fn.apply(this, arguments)
    waiting = true
    setTimeout(function() { 
      waiting = false 
      if (saveArg) {
        fu.apply(this, saveArg)
        saveArg = null
      }
    }, delay)
  }
}
module.exports = throttle;