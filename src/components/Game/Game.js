export default function(){
  player = new Player(300,300,2,2,5,0,0);
  shootArray =[];
  monsterShootArray =[];
  monsterArray = [];
  goPortalSpeed = 0;
  apearSpeed = 0;
  clearInterval(monstersGo);
  waves = {
    tick : 0,
    wave1 : true,
    wave2: false,
    wave3: false,
    wave4: false,
    wave5: false
  }
  gameState.newLevel = true;
  //ctxBar.clearRect(0,0,bar.width,bar.height);
  fullLive();
  updateScore();
}
