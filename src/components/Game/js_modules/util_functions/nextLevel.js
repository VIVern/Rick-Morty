var level= {
  next : false,
}

function nextLevel(ctx, goPortalSpeed , player, imgPlayerStatic,levels){
  let s = goPortalSpeed;
  if(s<imgPlayerStatic.width){
    ctx.drawImage(imgPlayerStatic, s,0,imgPlayerStatic.width-s,imgPlayerStatic.height,player.x,player.y,imgPlayerStatic.width-s,imgPlayerStatic.height);
  }
  if(goPortalSpeed == imgPlayerStatic.width) {
    level.next = true;
    setTimeout(()=>{
      level.next = false
    },30)
    let score =player.score;
    $('.resultScore span').html(`0`);
    let k = 0;
    let countScore = setInterval(function(){
      if(k>score) {
          $('.resultScore span').html(`${score}`);
          clearInterval(countScore);
          return;
      }
      $('.resultScore span').html(`${k}`);
      k+=50;
    },20)
  }
}

export  {nextLevel,level};
