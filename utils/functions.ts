import * as dayjs from "dayjs";
export function getTotalYear(dateYYMMDD: string): string {
  return dayjs().diff(dateYYMMDD, "years", true)?.toFixed(1);
}

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
