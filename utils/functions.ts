export const getWindowWidth = function () {
  const el = document.documentElement;
  const body = document.getElementsByTagName("body")[0];

  return window.innerWidth || el.clientWidth || body.clientWidth;
};

export const getWindowHeight = function () {
  const el = document.documentElement;
  const body = document.getElementsByTagName("body")[0];
  return window.innerHeight || el.clientHeight || body.clientHeight;
};
