function nextLevel(ctx, goPortalSpeed , player, imgPlayerStatic){
  let s = goPortalSpeed;
  if(s<imgPlayerStatic.width){
    ctx.drawImage(imgPlayerStatic, s,0,imgPlayerStatic.width-s,imgPlayerStatic.height,player.x,player.y,imgPlayerStatic.width-s,imgPlayerStatic.height);
  }
}

export default nextLevel;
