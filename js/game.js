import Paddle from "./paddle.js";
import Bricks from "./bricks.js";
import Ball from "./ball.js";
import InputHandler from "./input.js";
import { buildLevel, level1 } from './level.js';

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gameObjects = [];    
  }
  
  start(){
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);

    let bricks = buildLevel(this,level1);
    this.gameObjects = [this.paddle,this.ball,...bricks];
    new InputHandler(this.paddle);
  }

  draw(ctx) {
    this.gameObjects.forEach((obj) => obj.draw(ctx));
  }

  update(deltaTime) {
    this.gameObjects.forEach((obj) => obj.update(deltaTime));
    this.gameObjects = this.gameObjects.filter(obj => ! (obj.markToDelete == true));
  }
}
