//-------------------- Canvas config -----------------------//


var canvas = document.querySelector('canvas');
var ctx=canvas.getContext('2d');

canvas.width= window.innerWidth-500;
canvas.height = window.innerHeight-300;


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

$('.gameIntarface').css({
  'width': canvas.width,
  'height' : canvas.height,
  'margin-top' : fieldMarginTop,
  'margin-left' : fieldMarginLeft
});

//------------- Used images -------------------------------//

var imgPlayerStatic = new Image();
imgPlayerStatic.src='playerStatic.png';
imgPlayerStatic.width = 97;
imgPlayerStatic.height = 114;

var imgPlayerShoot = new Image();
imgPlayerShoot.src = 'playerShoot.png';
imgPlayerShoot.width = 97;
imgPlayerShoot.height = 114;

var imgShoot = new Image();
imgShoot.src= 'shoot.png';
imgShoot.width = 39;
imgShoot.height = 21;


var imgMonster = new Image();
imgMonster.src = 'monster1.png';
imgMonster.width= 90;
imgMonster.height= 79;




//-------------- Variables --------------------------------//

var keyboard = {
  down: false,
  up: false,
  right: false,
  left: false,
  pause: false
}

var player;
var shootArray;
var monsterArray;


//------------ Objects in game-----------------------------//

function Player(x,y,dx,dy,live,score) {
  this.x = x;
  this.y = y;
  this.dx= dx;
  this.dy =dy;

  this.active = false;

  this.live = live;
  this.score = 0;

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
    if(keyboard.down == true && this.y < canvas.height-116) {
      this.y+=4;
    }

    //move left
    if(keyboard.left == true && this.x > 0) {
      this.x-=4;
    }

    //move right
    if(keyboard.right == true && this.x < canvas.width-97) {
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
    ctx.drawImage(imgShoot,this.x,this.y);
  }

  this.update = function() {
    this.x+=dx;

    this.draw();
  }
}

function Monster(x,y,dx,dy) {
  this.x = x;
  this.y = y;
  this.dx= dx;
  this.dy = dy;

  this.draw = function(){
    ctx.drawImage(imgMonster,this.x,this.y);
  }

  this.update = function(){
    this.x-=dx;
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
    keyboard.pause=true;
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
    },200);
  }
})

window.addEventListener('keypress',function(event){
  //shoot
  if(event.keyCode == 32) {
    shootArray.push(new Shoot(player.x+60,player.y+70,4)); // random numbers to fix;
    player.active=true;
  }

});


//----------------------Intarface events ---------------//

$('.continue').on('click', function(){
  keyboard.pause =false;
  $('.gameIntarface').toggleClass('hide');
  $('.lives').removeClass('hide');
  $('.score').removeClass('hide');
  animation();
});

$('.restart').on('click', function(){
  player = new Player(300,300,2,2,5,0);
  shootArray =[];
  monsterArray = [];
  fullLive();
  getScore();
  $('.gameIntarface').toggleClass('hide');
  $('.lives').removeClass('hide');
  $('.score').removeClass('hide');
  keyboard.pause = false;
  animation();
});

$('.exit').on('click', function(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  $('.gameIntarface').toggleClass('hide');
  $('.startMenu').removeClass('hide');
});

$('.start').on('click', function(){
  player = new Player(300,300,2,2,5);
  shootArray =[];
  monsterArray = [];
  fullLive();
  getScore();
  keyboard.pause = false;
  $('.startMenu').addClass('hide');
  $('.lives').removeClass('hide');
  $('.score').removeClass('hide');
  animation();
});



//-------------- Utility Functions ---------------------//

function getDistance(x1,y1,x2,y2) {
  return Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
}

function minusLive() {
  let lives = $('.lives li[data-live="true"]');
  lives[lives.length-1].classList.remove('hasLive');
  lives[lives.length-1].classList.add('noLive');
  lives[lives.length-1].setAttribute('data-live', false);

}

function fullLive(){
  let lives = $('.lives li[data-live="false"]');
  for(let i=0; i<lives.length; i++){
    lives[i].classList.remove('noLive');
    lives[i].classList.add('hasLive');
    lives[i].setAttribute('data-live', true);
  }
}

function getScore(){
  $('.score').html(`Score: ${player.score}`);
}

//------------------Animation--------------------------//

setInterval(function(){
  if(keyboard.pause != true){
      monsterArray.push(new Monster(canvas.width,Math.random()*canvas.height,2,2));
  }
},2000);

function animation(){
  if(keyboard.pause == true){
      $('.gameIntarface').toggleClass('hide');
      $('.lives').addClass('hide');
      $('.score').addClass('hide');
      return;
    }
  if(player.live !=0){
    requestAnimationFrame(animation);
    ctx.clearRect(0,0, canvas.width, canvas.height);

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

    for( let i=0; i<monsterArray.length; i++){
      if(monsterArray[i].x < 0){
        monsterArray.splice(i,1);
      }
      monsterArray[i].update();
    }


    // shooting
    for(let i = 0 ; i<monsterArray.length; i++){
      if(monsterArray.length !=0){
        for(let j =0 ; j<shootArray.length; j++){
            if((monsterArray[i].x-shootArray[j].x-imgShoot.width<0) && (shootArray[j].y+imgShoot.height>monsterArray[i].y) && (shootArray[j].y < monsterArray[i].y+imgMonster.height)){
              monsterArray.splice(i,1);
              shootArray.splice(j,1);
              player.score+=10;
              getScore();
            }
        }
      }
    }

    // monter hits player;

    for(let i = 0; i<monsterArray.length; i++){
      if(((monsterArray[i].x < player.x+imgPlayerStatic.width-10 && monsterArray[i].x > player.x) || (monsterArray[i].x+imgMonster.width > player.x && monsterArray[i].x+imgMonster.width <player.x + imgPlayerStatic.width-10)) && ((monsterArray[i].y < player.y+imgPlayerStatic.height && monsterArray[i].y > player.y) || (monsterArray[i].y+imgMonster.height > player.y && monsterArray[i].y+imgMonster.width < player.y + imgPlayerStatic.height))){
        monsterArray.splice(i,1);
        player.x = 200;
        player.y = 200;
        player.live -=1;
        minusLive();
      }
    }
  }
  else{
    $('.gameIntarface').toggleClass('hide');
  }
}
