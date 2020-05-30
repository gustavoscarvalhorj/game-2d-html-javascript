export default class Ball {
  constructor(game) {
    this.game = game;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.size = 16;
    this.position = { x: 1, y: 1 };
    this.speed = { x: 5, y: 3 };

    //load background
    this.background = new Image();
    this.background.src = "./assets/ball.png";
  }

  draw(ctx) {
    ctx.drawImage(this.background,this.position.x,this.position.y);
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    let positionX = this.position.x + this.size;
    let positionY = this.position.y + this.size;

    if(positionY >= this.game.gameHeight){
      this.position.y = -this.position.y + 1; 
    }

    if(this.position.y <= 0){
      this.speed.y = -this.speed.y;
    }

    if(positionX >= this.game.gameWidth || this.position.x <= 0){
      this.speed.x = -this.speed.x;
    }
  }
}
