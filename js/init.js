import Game from "./game.js";

//load canvas
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

//load background
var background = new Image();
background.src = "./assets/wall-background.jpg";

//Game
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const GAME_WIDTH = vw;
const GAME_HEIGHT = vh;
document.querySelector("canvas").style.width = vw;
document.querySelector("canvas").style.height = vh;
let game = new Game(GAME_WIDTH,GAME_HEIGHT);
game.start();

//Game Loop
let lastTime = 0;
function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  ctx.drawImage(background,0,0);   
  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();
