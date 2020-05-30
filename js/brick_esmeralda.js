import colisionDetect from './colisionDetect.js';

export default class BrickEsmeralda {
  constructor(game) {
    this.game = game;
    this.width = 65;
    this.height = 35;
    this.position = { x: 0, y: 0};

    //load background
    this.background = new Image();
    this.background.src = "./assets/brick_esmeralda.png";
  }

  draw(ctx) {
    ctx.drawImage(this.background,this.position.x,this.position.y);
  }

  
  bateuNaEsquerda(){
    let ballRight = this.game.ball.position.x + this.game.ball.size;
    let brickLeft = this.position.x;
    return (ballRight >= brickLeft);
  }

  bateuNaDireita(){
    let ballLeft = this.game.ball.position.x;
    let brickRight = this.position.x + this.width;
    return (ballLeft >= brickRight );
  }

  bateuNaParteDeBaixo(){
    let ballTop = this.game.ball.position.y;
    let brickBottom = this.position.y + this.height;
    return (ballTop >= brickBottom);
  }

  bateuNaParteDeCima(){
    let ballBottom = this.game.ball.position.y + this.game.ball.size;
    let brickTop = this.position.y;
    return (ballBottom >= brickTop);
  }

  update(deltaTime) {
    if(colisionDetect(this.game.ball,this)){
      if(this.bateuNaEsquerda()){
        this.game.ball.speed.x = -this.game.ball.speed.x;
        return;
      }

      if(this.bateuNaDireita()){
        this.game.ball.speed.x = -this.game.ball.speed.x;
        return;
      }

      if(this.bateuNaParteDeBaixo()){
        this.game.ball.speed.y = -this.game.ball.speed.y;     
        return;  
      }

      if(this.bateuNaParteDeCima()){
        this.game.ball.speed.y = -this.game.ball.speed.y;      
        return; 
      }
    }
  }
}
