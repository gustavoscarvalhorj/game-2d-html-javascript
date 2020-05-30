import colisionDetect from './colisionDetect.js';

export default class Paddle {
  constructor(game) {
    this.game = game;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.maxSpeed = 10;
    this.speed = 0;
    this.width = 160;
    this.height = 15;
    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height - 10
    };

    //load background
    this.background = new Image();
    this.background.src = "./assets/paddle.png";

    this.direction = "";
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
    this.direction = "left";
  }

  moveRight() {
    this.speed = this.maxSpeed;
    this.direction = "right";
  }

  stop() {
    this.speed = 0;
    this.direction = "";
  }

  draw(ctx) {
    ctx.drawImage(this.background,this.position.x,this.position.y);
  }

  update(deltaTime) {
    if (!deltaTime) return;
    this.position.x += this.speed;

    if (this.position.x <= 0) this.position.x = 0;

    if (this.position.x + this.width >= this.gameWidth)
      this.position.x = this.gameWidth - this.width;

    if(colisionDetect(this.game.ball,this)){
        if(this.direction == "left"){
          this.game.ball.speed.y = -this.game.ball.speed.y;
          this.game.ball.speed.x = (this.game.ball.speed.x > 0) ? this.game.ball.speed.x * -1 : this.game.ball.speed.x;
          return;
        }

        if(this.direction == "right"){
          this.game.ball.speed.y = -this.game.ball.speed.y;
          this.game.ball.speed.x = (this.game.ball.speed.x < 0) ? this.game.ball.speed.x * -1 : this.game.ball.speed.x;
          return;
        }

        this.game.ball.speed.y = -this.game.ball.speed.y;
        return;
    }
  }
}
