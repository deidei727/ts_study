// 获取画布信息
let canvas: HTMLCanvasElement = document.querySelector("canvas");

// 将画布宽高设置为可视区域大小、设置背景颜色
canvas.width = screen.availWidth;
canvas.height = screen.availHeight;
// canvas.style.backgroundColor = 'black'

// 设置画布是2d画布,定义要下的什么雨，下多少雨
let ctx = canvas.getContext("2d");
let content: string[] = "nihao".split("");
let Arr: number[] = new Array(canvas.width / 10).fill(0);
const rain = ():void=> {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0f0";

  // 开始下雨，每一个小格都要下雨
  Arr.forEach((item, index) => {
    ctx.fillText(
      content[Math.floor(content.length * Math.random())],
      index * 10,
      item + 5
    );
    Arr[index] =
      item > canvas.height || item > 10000 * Math.random() ? 0 : item + 10;
  });
};
setInterval(rain, 60);
