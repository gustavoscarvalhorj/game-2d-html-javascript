import Game from "./game.js";

//load canvas
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

//load background
var background = new Image();
background.src = "./assets/wall-background.jpg";

//Game
const GAME_WIDTH = 650;
const GAME_HEIGHT = 600;
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
