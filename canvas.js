//-------------------- Canvas config -----------------------//

var canvas = document.querySelector('.game');
var ctx=canvas.getContext('2d');

canvas.width= 1400;
canvas.height = 620;

var bar = document.querySelector('.bar');
var ctxBar=bar.getContext('2d');

bar.width = 200;
bar.height = 20;


//----------------------- Intarface style-----------------------//

var fieldMarginTop = window.innerHeight/2 - canvas.height/2;
var fieldMarginLeft = window.innerWidth/2 - canvas.width/2;

$('.startMenu').css({
  'width': canvas.width,
  'height' : canvas.height,
  'margin-top' : fieldMarginTop,
  'margin-left' : fieldMarginLeft
});

$('.gamefield').css({
  'width': canvas.width,
  'height' : canvas.height,
  'margin-top' : fieldMarginTop,
  'margin-left' : fieldMarginLeft
});

var livesHeight = $('.lives').css('height');

$('.lives').css({
  'top' : fieldMarginTop - 50,
  'left' : fieldMarginLeft + canvas.width-146
});

$('.score').css({
  'top' : fieldMarginTop - 50,
  'left' : fieldMarginLeft
});

$('.bar').css({
  'top' : fieldMarginTop - 30,
  'left' : fieldMarginLeft + (canvas.width/2-100)
})

$('.gameIntarface').css({
  'width': canvas.width,
  'height' : canvas.height,
  'margin-top' : fieldMarginTop,
  'margin-left' : fieldMarginLeft
});

//------------- Used images -------------------------------//


//Players
var imgPlayerMortyStatic = new Image();
imgPlayerMortyStatic.src='images/playerMortyStatic.png';
imgPlayerMortyStatic.width = 85;
imgPlayerMortyStatic.height = 84;

var imgPlayerMortyShoot = new Image();
imgPlayerMortyShoot.src = 'images/playerMortyShoot.png';
imgPlayerMortyShoot.width = 85;
imgPlayerMortyShoot.height = 80;
imgPlayerMortyShoot.xShoot = 50;
imgPlayerMortyShoot.yShoot = 50;

var imgPlayerRickStatic = new Image();
imgPlayerRickStatic.src='images/playerRickStatic.png';
imgPlayerRickStatic.width = 97;
imgPlayerRickStatic.height = 114;

var imgPlayerRickShoot = new Image();
imgPlayerRickShoot.src = 'images/playerRickShoot.png';
imgPlayerRickShoot.width = 97;
imgPlayerRickShoot.height = 114;
imgPlayerRickShoot.xShoot = 60;
imgPlayerRickShoot.yShoot = 80;


//shots pictures
var imgShot = new Image();
imgShot.src= 'images/shoot.png';
imgShot.width = 39;
imgShot.height = 21;

var imgMonsterShot = new Image();
imgMonsterShot.src= 'images/monsterShot.png';
imgMonsterShot.width = 33;
imgMonsterShot.height = 8;

var imgMonsterShot30 = new Image();
imgMonsterShot30.src = 'images/monsterShot30deg.png';
imgMonsterShot30.width = 33;
imgMonsterShot30.height = 24;

var imgMonsterShot30m = new Image();
imgMonsterShot30m.src = 'images/monsterShot-30deg.png';
imgMonsterShot30m.width = 33;
imgMonsterShot30m.height = 24;

var imgMonsterShot20 = new Image();
imgMonsterShot20.src = 'images/monsterShot20deg.png';
imgMonsterShot20.width = 33;
imgMonsterShot20.height = 17;

var imgMonsterShot20m = new Image();
imgMonsterShot20m.src = 'images/monsterShot-20deg.png';
imgMonsterShot20m.width = 33;
imgMonsterShot20m.height = 17;

//Monsters
var imgMonster = new Image();
imgMonster.src = 'images/monster2.png';
imgMonster.width= 237;
imgMonster.height= 63;
imgMonster.frame = 79;

var imgMonsterDeath = new Image();
imgMonsterDeath.src = 'images/monster2Death.png';
imgMonsterDeath.width = 76;
imgMonsterDeath.height = 39;
imgMonsterDeath.frame = 38;

//Intarface stuf
var imgBar = new Image();
imgBar.src = "images/barSmall.png";
imgBar.width = 200;
imgBar.Height = 20;

var imgPortal = new Image();
imgPortal.src = "images/portal.png";
imgPortal.width = 94;
imgPortal.height = 250;

var imgHelp = new Image();
imgHelp.src = "images/help.png";
imgHelp.width = 200;
imgHelp.height = 123;

//-------------- Variables --------------------------------//

var keyboard = {
  down: false,
  up: false,
  right: false,
  left: false,
}

var gameState = {
  pause: false,
  newLevel : true
}

var waves = {
  wave1 : true,
  wave2: false,
  wave3: false,
  wave4: false,
  wave5: false
}

var player;
var imgPlayerStatic;
var imgPlayerShoot;
var shootArray;
var monsterArray;
var monsterShootArray;
var monstersGo;
var portal;
var goPortalSpeed=0;
var apearSpeed = 0;


//------------ Objects in game-----------------------------//

function Player(x,y,dx,dy,live,score,progressBar) {
  this.x = x;
  this.y = y;
  this.dx= dx;
  this.dy =dy;

  this.active = false;

  this.live = live;
  this.score = score;
  this.barProgress = progressBar;

  this.draw = function() {
    if(this.active == false){
      ctx.drawImage(imgPlayerStatic,this.x,this.y);
    }
    else if(this.active == true) {
      ctx.drawImage(imgPlayerShoot,this.x,this.y);
    }
  }

  this.update = function() {

    // move up
    if(keyboard.up == true && this.y > 0) {
        this.y-=4;
    }

    //move down
    if(keyboard.down == true && this.y < canvas.height-imgPlayerStatic.height) {
      this.y+=4;
    }

    //move left
    if(keyboard.left == true && this.x > 0) {
      this.x-=4;
    }

    //move right
    if(keyboard.right == true && this.x < canvas.width-imgPlayerStatic.width) {
      this.x+=4;
    }

    this.draw();
  }
}

function Shoot(x,y,dx) {
  this.x = x;
  this.y = y;
  this.dx= dx;

  this.draw = function() {
    ctx.drawImage(imgShot,this.x,this.y);
  }

  this.update = function() {
    this.x+=dx;

    this.draw();
  }
}

function MonsterShoot(img,x,y,dx,dy,damage) {
  this.img = img
  this.x = x;
  this.y = y;
  this.dx= dx;
  this.dy= dy;
  this.damage = damage;

  this.draw = function() {
    ctx.drawImage(this.img,this.x,this.y);
  }

  this.update = function() {
    this.x-=this.dx;
    this.y-=this.dy;
    this.draw();
  }
}

function Portal(x,y){
  this.x=x;
  this.y=y;

  this.draw = function(){
    ctx.drawImage(imgPortal,x,y);
  }
}

function MonsterSimple(img,x,y,dx,dy,scoreValue,barValue,health,damage) {
  this.img = img;
  this.x = x;
  this.y = y;
  this.dx= dx;
  this.dy = dy;
  this.score = scoreValue;
  this.barProgress = barValue;
  this.health = health;
  this.damage = damage;
  this.live = true;

  this.frame=0;
  this.animSpeed=0;

  this.draw = function(){
    if(this.img == imgMonster){
      if(this.animSpeed > 4){
        this.frame = (this.frame===this.img.frame ? 0 : this.frame+this.img.frame);
        this.animSpeed = 0;
      }
      ctx.drawImage(this.img,this.frame,0,this.img.frame,this.img.height,this.x,this.y,this.img.frame,this.img.height); //fix random frame geometry
      this.animSpeed+=1;
    }
    if(this.img == imgMonsterDeath){
      this.frame = 0;
      if(this.animSpeed > 8){
        this.frame=this.img.frame;
      }
      ctx.drawImage(this.img,this.frame,0,this.img.frame,this.img.height,this.x,this.y,this.img.frame,this.img.height); //fix random frame geometry
      this.animSpeed+=1;
      this.x+=dx;
    }
  }

  this.death = function (){
    ctx.drawImage(imgMonsterDeath,this.x,this.y);
  }

  this.update = function(){
    this.x-=dx;
    this.draw();
  }
}

function MonsterSimpleSpeed(img,x,y,dx,dy,scoreValue,barValue,health,damage) {
  this.img = img;
  this.x = x;
  this.y = y;
  this.dx= dx;
  this.dy = dy;
  this.score = scoreValue;
  this.barProgress = barValue;
  this.health = health;
  this.damage = damage;
  this.live = true;

  this.frame=0;
  this.animSpeed=0;

  this.draw = function(){
    if(this.img == imgMonster){
      if(this.animSpeed > 4){
        this.frame = (this.frame===this.img.frame ? 0 : this.frame+this.img.frame);
        this.animSpeed = 0;
      }
      ctx.drawImage(this.img,this.frame,0,this.img.frame,this.img.height,this.x,this.y,this.img.frame,this.img.height); //fix random frame geometry
      this.animSpeed+=1;
    }
    if(this.img == imgMonsterDeath){
      this.frame = 0;
      if(this.animSpeed > 8){
        this.frame=this.img.frame;
      }
      ctx.drawImage(this.img,this.frame,0,this.img.frame,this.img.height,this.x,this.y,this.img.frame,this.img.height); //fix random frame geometry
      this.animSpeed+=1;
      this.x+=dx;
    }
  }

  this.death = function (){
    ctx.drawImage(imgMonsterDeath,this.x,this.y);
  }

  this.update = function(){
    this.x-=dx;
    this.draw();
  }
}

function MonsterShooter(img,x,y,dx,dy,scoreValue,barValue,health,damage) {
  this.img = img;
  this.x = x;
  this.y = y;
  this.dx= dx;
  this.dy = dy;
  this.score = scoreValue;
  this.barProgress = barValue;
  this.health = health;
  this.damage = damage;
  this.live = true;

  this.frame=0;
  this.animSpeed=0;
  this.shootSpeed =0;

  this.draw = function(){
    if(this.img == imgMonster){
      if(this.animSpeed > 4){
        this.frame = (this.frame===this.img.frame ? 0 : this.frame+this.img.frame);
        this.animSpeed = 0;
      }
      ctx.drawImage(this.img,this.frame,0,this.img.frame,this.img.height,this.x,this.y,this.img.frame,this.img.height); //fix random frame geometry
      this.animSpeed+=1;
    }
    if(this.img == imgMonsterDeath){
      this.frame = 0;
      if(this.animSpeed > 8){
        this.frame=this.img.frame;
      }
      ctx.drawImage(this.img,this.frame,0,this.img.frame,this.img.height,this.x,this.y,this.img.frame,this.img.height); //fix random frame geometry
      this.animSpeed+=1;
      this.x+=dx;
    }
  }

  this.death = function (){
    ctx.drawImage(imgMonsterDeath,this.x,this.y);
  }

  this.shoot = function(){
    if(this.shootSpeed > 100 && this.live==true){
      monsterShootArray.push(new MonsterShoot(imgMonsterShot,this.x,this.y,3,0,1));
      this.shootSpeed = 0;
    }
    this.shootSpeed+=1;
  }

  this.update = function(){
    this.x-=dx;
    this.shoot();
    this.draw();
  }
}

function MonsterExplosion(img,x,y,dx,dy,scoreValue,barValue,health,damage) {
  this.img = img;
  this.x = x;
  this.y = y;
  this.dx= dx;
  this.dy = dy;
  this.score = scoreValue;
  this.barProgress = barValue;
  this.health = health;
  this.damage = damage;
  this.live = true;
  this.boom = true;

  this.frame=0;
  this.animSpeed=0;
  this.shootSpeed =0;

  this.draw = function(){
    if(this.img == imgMonster){
      if(this.animSpeed > 4){
        this.frame = (this.frame===this.img.frame ? 0 : this.frame+this.img.frame);
        this.animSpeed = 0;
      }
      ctx.drawImage(this.img,this.frame,0,this.img.frame,this.img.height,this.x,this.y,this.img.frame,this.img.height); //fix random frame geometry
      this.animSpeed+=1;
    }
    if(this.img == imgMonsterDeath){
      this.frame = 0;
      if(this.animSpeed > 8){
        this.frame=this.img.frame;
      }
      ctx.drawImage(this.img,this.frame,0,this.img.frame,this.img.height,this.x,this.y,this.img.frame,this.img.height); //fix random frame geometry
      this.animSpeed+=1;
      this.x+=dx;
    }
  }

  this.death = function (){
    ctx.drawImage(imgMonsterDeath,this.x,this.y);
  }

  this.explosion = function(){
    if(this.live==false && this.boom == true){
      monsterShootArray.push(new MonsterShoot(imgMonsterShot,this.x,this.y,3,0,1));
      monsterShootArray.push(new MonsterShoot(imgMonsterShot20,this.x,this.y,3,1,1));
      monsterShootArray.push(new MonsterShoot(imgMonsterShot20m,this.x,this.y,3,-1,1));
      monsterShootArray.push(new MonsterShoot(imgMonsterShot30,this.x,this.y,3,2,1));
      monsterShootArray.push(new MonsterShoot(imgMonsterShot30m,this.x,this.y,3,-2,1));
      this.boom = false;
    }
  }

  this.update = function(){
    this.x-=dx;
    this.explosion();
    this.draw();
  }
}
// -------------------- Keyboard events------------------//

window.addEventListener('keydown', function(event){
  // go up
  if(event.keyCode == 38){
    keyboard.up = true;
  };

  // go down
  if(event.keyCode == 40){
    keyboard.down = true;
  };

  // go left
  if(event.keyCode == 37){
    keyboard.left = true;
  };

  //go right
  if(event.keyCode == 39){
    keyboard.right = true;
  };

  // pause

  if(event.keyCode == 27) {
    gameState.pause=true;
  }

});

window.addEventListener('keyup', function(event){
  // up
  if(event.keyCode == 38){
    keyboard.up = false;
  };

  // down
  if(event.keyCode == 40){
    keyboard.down = false;
  }

  // left
  if(event.keyCode == 37){
    keyboard.left = false;
  };

  // right
  if(event.keyCode == 39){
    keyboard.right = false;
  };

  // space
  if(event.keyCode == 32){
    setTimeout(function(){
      player.active = false;
    },400);
  }
})

window.addEventListener('keypress',function(event){
  //shoot
  if(event.keyCode == 32) {
    document.querySelector('.shootSound').play();
    shootArray.push(new Shoot(player.x+imgPlayerShoot.xShoot,player.y+imgPlayerShoot.yShoot,4)); // random numbers to fix;
    player.active=true;
  }

});


//----------------------Intarface events ---------------//

$('.continue span').on('click', function(){
  gameState.pause =false;
  $('.gameIntarface').toggleClass('hide');
  $('.lives').removeClass('hide');
  $('.score').removeClass('hide');
  $('.bar').removeClass('hide');
  animation();
});

$('.restart span').on('click', function(){
  reset();
  $('.gameIntarface').toggleClass('hide');
  $('.lives').removeClass('hide');
  $('.score').removeClass('hide');
  $('.bar').removeClass('hide');
  gameState.pause = false;
  animation();
});

$('.exit span').on('click', function(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  $('.lives').addClass('hide');
  $('.score').addClass('hide');
  $('.bar').addClass('hide');
  $('.gameIntarface').toggleClass('hide');
  $('.startMenu').removeClass('hide');
  document.querySelector('.mainSound').play();
});

$('.start span').on('click', function(){
  reset();
  gameState.pause = false;

  // Player picker
  document.querySelector('.mainSound').pause();
  if(document.querySelector('.check').hasAttribute('data-rick')){
    imgPlayerStatic = imgPlayerRickStatic;
    imgPlayerShoot = imgPlayerRickShoot;
  }
  if(document.querySelector('.check').hasAttribute('data-morty')){
    imgPlayerStatic = imgPlayerMortyStatic;
    imgPlayerShoot = imgPlayerMortyShoot;
  }

  $('.startMenu').addClass('hide');
  $('.lives').removeClass('hide');
  $('.score').removeClass('hide');
  $('.bar').removeClass('hide');
  animation();
});



//-------------- Utility Functions ---------------------//

function randomNumber(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

function getDistance(x1,y1,x2,y2) {
  return Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
}

function reset(){
  player = new Player(300,300,2,2,5,0,0);
  shootArray =[];
  monsterShootArray =[];
  monsterArray = [];
  goPortalSpeed = 0;
  apearSpeed = 0;
  clearInterval(monstersGo);
  gameState.newLevel = true;
  ctxBar.clearRect(0,0,bar.width,bar.height);
  fullLive();
  updateScore();
}

function minusLive(damage) {
  player.live-=damage;
  let lives = $('.lives li[data-live="true"]');
  for(let i = lives.length-1 , j = 0; j<damage; i--,j++){
    lives[i].classList.remove('hasLive');
    lives[i].classList.add('noLive');
    lives[i].setAttribute('data-live', false);
  }

}

function fullLive(){
  let lives = $('.lives li[data-live="false"]');
  for(let i=0; i<lives.length; i++){
    lives[i].classList.remove('noLive');
    lives[i].classList.add('hasLive');
    lives[i].setAttribute('data-live', true);
  }
}

function plusScore(value){
  player.score+=value;
  updateScore();
}

function plusBarProgress(value){
  if(player.barProgress < 200) {
    player.barProgress+=value;
    updateBar(player.barProgress);
  } else {
    return;
  }
}

function fullBar(){
  portal = new Portal(0,canvas.height/2-imgPortal.height/2);
  portal.draw();
}

function updateScore(){
  $('.score').html(`Score: ${player.score}`);
}

function updateBar(updateValue){
  ctxBar.clearRect(0,0,bar.width,bar.height);
  ctxBar.drawImage(imgBar, 0,0, updateValue, 20,0,0,updateValue,20);
  $('.bar').css('box-shadow','4px 4px 6px #4eb236, -4px -4px 6px #4eb236, -4px 4px 6px #4eb236, 4px -4px 6px #4eb236');
  setTimeout(function(){
    $('.bar').css('box-shadow','4px 4px 6px #00b1c1, -4px -4px 6px #00b1c1, -4px 4px 6px #00b1c1, 4px -4px 6px #00b1c1');
  },300);
}

function nextLevel(c){
  c = goPortalSpeed;
  if(c<imgPlayerStatic.width){
    ctx.drawImage(imgPlayerStatic, c,0,imgPlayerStatic.width-c,imgPlayerStatic.height,player.x,player.y,imgPlayerStatic.width-c,imgPlayerStatic.height);
    goPortalSpeed++;
  }
}

function newLevel(){
  if(apearSpeed<=imgPlayerStatic.width){
    portal = new Portal(0,canvas.height/2-imgPortal.height/2);
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
      level1();

    }
}

// GameLevels

function level1(){
  let tick=0;
  if(waves.wave1 == true){
    monstersGo = setInterval(function(){
      if(gameState.pause != true && gameState.newLevel != true && tick !=10){
        monsterArray.push(new MonsterSimple(imgMonster,canvas.width,randomNumber(0,(canvas.height-imgMonster.height)),1,0,15,1,2,1));
      } else{
        waves.wave1 = false;
        waves.wave2 =true;
        tick=0;
        clearInterval(monstersGo);
        level1();
      }
      tick+=1;
    },2000);
  }
  if(waves.wave2 == true){
    monstersGo = setInterval(function(){
      if(gameState.pause != true && gameState.newLevel != true && tick !=15){
        monsterArray.push(new MonsterSimpleSpeed(imgMonster,canvas.width,randomNumber(0,(canvas.height-imgMonster.height)),3,0,15,1,1,2));
      } else{
        waves.wave2 = false;
        waves.wave3 =true;
        tick=0;
        clearInterval(monstersGo);
        level1();
      }
      tick+=1;
    },1000);
  }
  if(waves.wave3 == true){
    monstersGo = setInterval(function(){
      if(gameState.pause != true && gameState.newLevel != true && tick !=15){
        monsterArray.push(new MonsterShooter(imgMonster,canvas.width,randomNumber(0,(canvas.height-imgMonster.height)),2,0,15,1,1,1));
      } else{
        waves.wave3 = false;
        waves.wave4 =true;
        tick=0;
        clearInterval(monstersGo);
        level1();
      }
      tick+=1;
    },2000);
  }
  if(waves.wave4 == true){
    monstersGo = setInterval(function(){
      if(gameState.pause != true && gameState.newLevel != true && tick !=30){
        monsterArray.push(new MonsterExplosion(imgMonster,canvas.width,randomNumber(0,(canvas.height-imgMonster.height)),2,0,15,1,1,1));
      } else{
        waves.wave4 = false;
        waves.wave5 =true;
        tick=0;
        clearInterval(monstersGo);
      }
      tick+=1;
    },1000);
  }
  if(waves.wave5 == true){
    monstersGo = setInterval(function(){
      if(gameState.pause != true && gameState.newLevel != true && tick !=30){
        let r = randomNumber(1,12);
        if(r<=3){
          monsterArray.push(new MonsterSimple(imgMonster,canvas.width,randomNumber(0,(canvas.height-imgMonster.height)),1,0,15,1,2,1));
        }
        if(r>3 && r<=6){
          monsterArray.push(new MonsterSimpleSpeed(imgMonster,canvas.width,randomNumber(0,(canvas.height-imgMonster.height)),3,0,15,1,1,2));
        }
        if(r>6 && r<=9){
          monsterArray.push(new MonsterShooter(imgMonster,canvas.width,randomNumber(0,(canvas.height-imgMonster.height)),2,0,15,1,1,1));
        }
        if(r>9 && r<=12){
          monsterArray.push(new MonsterExplosion(imgMonster,canvas.width,randomNumber(0,(canvas.height-imgMonster.height)),2,0,15,1,1,1));
        }
      } else{
        waves.wave5 = false;
        tick=0;
        clearInterval(monstersGo);
        level1();
      }
      tick+=1;
    },1000);
  }
}

//------------------Animation--------------------------//



function animation(){
  if(gameState.pause == true){
    $('.gameIntarface').toggleClass('hide');
    $('.lives').addClass('hide');
    $('.score').addClass('hide');
    $('.bar').addClass('hide');
    return;
  }

  // Has live then game continues
  if(player.live >0){
    requestAnimationFrame(animation);
    ctx.clearRect(0,0, canvas.width, canvas.height);

    if(gameState.newLevel == true) {
      newLevel();
      ctx.drawImage(imgHelp,canvas.width/2-imgHelp.width/2,canvas.height-imgHelp.height);
      return;
    }

    // for finishing level and open portal
    if(player.barProgress >=200) {
      clearInterval(monstersGo);
      fullBar();
      if((player.x < portal.x+imgPortal.width/10*6 && player.x >= portal.x) && (player.y+imgPlayerStatic.height > portal.y+imgPortal.height/4 && player.y<portal.y+imgPortal.height/5*4)){
        player.x = portal.x+imgPortal.width/2;
        player.y = portal.y+imgPortal.height/2-imgPlayerStatic.height/2;
        nextLevel();
        return;
      }
    }

    // game
    player.update();

    for (let i = 0; i < shootArray.length; i++) {
      if(shootArray[i].x>canvas.width){
        shootArray.splice(i,1);
      }
      if(shootArray.length == 0){
        break;
      }
      else {
        shootArray[i].update();
      }
    };

    for (let i = 0; i < monsterShootArray.length; i++) {
      if(monsterShootArray[i].x<0 || monsterShootArray[i].y<0 || monsterShootArray[i].y>canvas.height){
        monsterShootArray.splice(i,1);
      }
      if(monsterShootArray.length == 0){
        break;
      }
      else {
        monsterShootArray[i].update();
      }
    };

    for( let i=0; i<monsterArray.length; i++){
      if(monsterArray[i].x < 0){
        minusLive(monsterArray[i].damage);
        monsterArray.splice(i,1);
      }
      monsterArray[i].update();
    }


    // Player shooting
    for(let i = 0 ; i<monsterArray.length; i++){
      if(monsterArray.length !=0){
        for(let j =0 ; j<shootArray.length; j++){
            if((monsterArray[i].x-shootArray[j].x-imgShot.width<0) && (shootArray[j].y+imgShot.height>monsterArray[i].y) && (shootArray[j].y < monsterArray[i].y+imgMonster.height)){
              monsterArray[i].health-=1;
              if(monsterArray[i].live == true){
                shootArray.splice(j,1);
              }
              if(monsterArray[i].health == 0){
                monsterArray[i].live=false;
                monsterArray[i].img = imgMonsterDeath;
                setTimeout(function(){
                  monsterArray.splice(i,1);
                },300)
                plusScore(monsterArray[i].score);
                plusBarProgress(monsterArray[i].barProgress);
              }
            }
        }
      }
    }

    // monter hits player;

    for(let i = 0; i<monsterArray.length; i++){
      if(((monsterArray[i].x < player.x+imgPlayerStatic.width-20 && monsterArray[i].x > player.x) || (monsterArray[i].x+monsterArray[i].img.frame > player.x && monsterArray[i].x+monsterArray[i].img.frame <player.x + imgPlayerStatic.width-20)) && ((monsterArray[i].y < player.y+imgPlayerStatic.height-10 && monsterArray[i].y > player.y+10) || (monsterArray[i].y+monsterArray[i].img.height-10 > player.y+10 && monsterArray[i].y+monsterArray[i].img.height-10 < player.y + imgPlayerStatic.height-10))){
        player.x = 200;
        player.y = 200;
        minusLive(monsterArray[i].damage);
        monsterArray.splice(i,1);
      }
    }

    // monster shoot player;
    for(let i = 0; i<monsterShootArray.length; i++){
      if(((monsterShootArray[i].x < player.x+imgPlayerStatic.width-5 && monsterShootArray[i].x > player.x) || (monsterShootArray[i].x+monsterShootArray[i].img.frame > player.x && monsterShootArray[i].x+monsterShootArray[i].img.frame <player.x + imgPlayerStatic.width-5)) && ((monsterShootArray[i].y < player.y+imgPlayerStatic.height-5 && monsterShootArray[i].y > player.y+5) || (monsterShootArray[i].y+monsterShootArray[i].img.height > player.y+10 && monsterShootArray[i].y+monsterShootArray[i].img.height < player.y + imgPlayerStatic.height-10))){
        player.x = 200;
        player.y = 200;
        minusLive(monsterShootArray[i].damage);
        monsterShootArray.splice(i,1);
      }
    }

  }
  else{
    clearInterval(monstersGo);
    $('.gameIntarface').toggleClass('hide');
  }
}
