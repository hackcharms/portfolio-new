import { getWindowWidth, getWindowHeight } from './functions'

export const mouseMove = {
  inserted(el) {
    const movementStrength = 15
    const height = movementStrength / getWindowHeight()
    const width = movementStrength / getWindowWidth()

    document.addEventListener('mousemove', function(e) {
      const pageX = e.pageX - getWindowWidth() / 2
      const pageY = e.pageY - getWindowHeight() / 2
      const newValueX = width * pageX * -1
      const newValueY = height * pageY * -1

      const translate = `translate(${newValueX}px, ${newValueY}px)`
      el.style.webkitTransform = translate
      el.style.MozTransform = translate
      el.style.msTransform = translate
      el.style.OTransform = translate
      el.style.transform = translate
    })
  }
}
