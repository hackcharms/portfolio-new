import { getWindowWidth, getWindowHeight } from "./functions";

export const vMouseMove = {
  created(el: HTMLElement) {
    const movementStrength = 25;
    const height = movementStrength / getWindowHeight();
    const width = movementStrength / getWindowWidth();

    document.addEventListener("mousemove", function (e) {
      const pageX = e.pageX - getWindowWidth() / 2;
      const pageY = e.pageY - getWindowHeight() / 2;
      const newValueX = width * pageX * -1;
      const newValueY = height * pageY * -1;

      const translate = `translate(${newValueX}px, ${newValueY}px)`;
      el.style.transform = translate;
    });
  },
};
