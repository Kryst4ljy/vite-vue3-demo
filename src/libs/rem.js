// 基准大小
const baseSize = 75;
// 设置 rem 函数
export const setRem = () => {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  let scale = document.documentElement.clientWidth / 375;
  if (window.orientation == 180 || window.orientation == 0) {
    scale = document.documentElement.clientWidth / 375;
  }
  if (window.orientation == 90 || window.orientation == -90) {
    scale = document.documentElement.clientWidth / 667;
  }
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize =
    baseSize * Math.min(scale, 2) + "px";
};
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem();
};
