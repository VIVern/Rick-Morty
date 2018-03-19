import {level1} from '../Levels/level1.js';
import Portal from '../Portal.js';


var apearSpeed = 0;
var gameState = {
  pause: false,
  newLevel : true,
}


function newLevel(ctx,canvas,player,imgPlayerStatic,portal,imgPortal,monsterArray,monsterShootArray,waves){
  if(apearSpeed<=imgPlayerStatic.width){
    portal = new Portal(ctx,imgPortal,0,canvas.height/2-imgPortal.height/2);
    portal.draw();
    player.x = portal.x+imgPortal.width/2;
    player.y = portal.y+imgPortal.height/2-imgPlayerStatic.height/2;
    ctx.drawImage(imgPlayerStatic,imgPlayerStatic.width-apearSpeed,0,apearSpeed,imgPlayerStatic.height,player.x,player.y,apearSpeed,imgPlayerStatic.height);
    apearSpeed+=1;
  } else if(player.x <= imgPortal.width+100){
    player.x += player.dx;
    player.update();
  } else {
      gameState.newLevel = false;
      apearSpeed = 0;
      level1(ctx,canvas,gameState,monsterArray,monsterShootArray,waves);
    }
}

export {newLevel,apearSpeed,gameState};
