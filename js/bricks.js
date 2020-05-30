import colisionDetect from './colisionDetect.js';

export default class Bricks {
  constructor(game) {
    this.game = game;
    this.width = 65;
    this.height = 35;
    this.position = { x: 0, y: 0};

    //load background
    this.background = new Image();
    this.background.src = "./assets/bricks.png";
  }

  draw(ctx) {
    ctx.drawImage(this.background,this.position.x,this.position.y);
  }

  bateuNaEsquerda(){
    let ballRight = this.game.ball.position.x + this.game.ball.size;
    let brickLeft = this.position.x;
    let brickMiddle = this.position.x + this.width / 2;
    return (ballRight >= brickLeft && ballRight <= brickMiddle);
  }

  bateuNaDireita(){
    let ballLeft = this.game.ball.position.x;
    let brickRight = this.position.x + this.width;
    let brickMiddle = this.position.x + this.width / 2;
    return (ballLeft >= brickRight && ballLeft >= brickMiddle);
  }

  bateuNaParteDeBaixo(){
    let ballTop = this.game.ball.position.y;
    let brickBottom = this.position.y + this.height;
    let brickMiddle = this.position.y + this.width / 2;
    return (ballTop >= brickBottom && ballTop >= brickMiddle);
  }

  update(deltaTime) {
    if(colisionDetect(this.game.ball,this)){
      this.markToDelete = true;
      this.game.ball.speed.y = this.game.ball.speed.y * -1;
      
      if(this.bateuNaEsquerda() || this.bateuNaDireita()){
        this.game.ball.speed.x = -this.game.ball.speed.x;
        this.game.ball.speed.y = this.game.ball.speed.y * -1;
        return;
      }
    }
  }
}
