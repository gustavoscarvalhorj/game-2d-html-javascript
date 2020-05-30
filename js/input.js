export default class InputHandler {
  constructor(paddle) {
    this.handlerKeydown(paddle);
    this.handlerKeyup(paddle);
  }

  handlerKeydown(paddle) {
    document.addEventListener("keydown", event => {
      var code = event.keyCode;
      switch (code) {
        case 37:
          paddle.moveLeft();
          break;
        case 39:
          paddle.moveRight();
          break;
        default:
          break;
      }
    });
  }

  handlerKeyup(paddle) {
    document.addEventListener("keyup", event => {
      var code = event.keyCode;
      switch (code) {
        case 37:
          if (paddle.speed < 0) paddle.stop();
          break;
        case 39:
          if (paddle.speed > 0) paddle.stop();
          break;
        default:
          break;
      }
    });
  }
}
