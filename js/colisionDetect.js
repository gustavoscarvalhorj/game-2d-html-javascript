export default function colisionDetect(ball,gameObject){
    let topOfBall = ball.position.y;
    let bottomOfBall = ball.position.y + ball.size;
    let leftOfBall = ball.position.x;
    let rightOfBall = ball.position.x + ball.size;

    let gameObjectTop = gameObject.position.y;
    let gameObjectBottom = gameObject.position.y + gameObject.height;
    let gameObjectLeft = gameObject.position.x;
    let gameObjectRight = gameObject.position.x + gameObject.width;

    return (bottomOfBall >= gameObjectTop &&
            topOfBall <= gameObjectBottom &&
            rightOfBall >= gameObjectLeft &&
            leftOfBall <= gameObjectRight
    );
}
