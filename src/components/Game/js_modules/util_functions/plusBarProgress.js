function plusBarProgress(ctxBar,bar,imgBar,player,value){
  if(player.barProgress < 200) {
    player.barProgress+=value;
    ctxBar.clearRect(0,0,bar.width,bar.height);
    ctxBar.drawImage(imgBar, 0,0, player.barProgress, 20,0,0,player.barProgress,20);
    $('#bar').css('box-shadow','4px 4px 6px #4eb236, -4px -4px 6px #4eb236, -4px 4px 6px #4eb236, 4px -4px 6px #4eb236');
    setTimeout(function(){
      $('#bar').css('box-shadow','4px 4px 6px #00b1c1, -4px -4px 6px #00b1c1, -4px 4px 6px #00b1c1, 4px -4px 6px #00b1c1');
    },300);
  } else {
    return;
  }
}

export default plusBarProgress;
