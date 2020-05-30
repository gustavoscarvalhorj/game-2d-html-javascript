export { buildLevel, level1 };
import Bricks from './bricks.js';
import BrickEsmeralda from './brick_esmeralda.js';

function buildLevel(game,level){
  var bricks = [];
  for(var i = 0; i <= level.length - 1; i++){
    for(var j = 0; j <= level[i].length - 1; j++){
      if(level[i][j] == 1){
        var brick = new Bricks(game);
        brick.position.x = brick.width * j;
        brick.position.y = brick.height * i;
        bricks.push(brick);
      }

      if(level[i][j] == 2){
        var brick = new BrickEsmeralda(game);
        brick.position.x = brick.width * j;
        brick.position.y = brick.height * i;
        bricks.push(brick);
      }
    }
  }
  return bricks;
}

let level1 = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,1,1,1,1,1,1,1,1,0],
  [0,1,0,0,0,0,0,0,1,0],
  [0,1,0,0,1,1,0,0,1,0],
  [0,1,0,1,1,1,1,0,1,0],
  [0,1,1,1,1,1,1,1,1,0],
  [0,1,0,1,1,1,1,0,1,0],
  [0,1,0,0,1,1,0,0,1,0],
  [0,1,0,0,0,0,0,0,1,0],
  [0,1,1,1,1,1,1,1,1,0],
]

