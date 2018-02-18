//-------------------- Canvas config -----------------------//

var canvas = document.querySelector('canvas');
var ctx=canvas.getContext('2d');

canvas.width= window.innerWidth-100;
canvas.height = window.innerHeight-100;

//------------- Used images -------------------------------//

var imgPlayerStatic = new Image();
imgPlayerStatic.src='playerStatic.png';

var imgPlayerShoot = new Image();
imgPlayerShoot.src = 'playerShoot.png';

var imgShoot = new Image();
imgShoot.src= 'shoot.png';

var imgMonster = new Image();
imgMonster.src = 'monster1.png';


//-------------- Variables --------------------------------//

var keyboard = {
  down: false,
  up: false,
  right: false,
  left: false
}

var player = new Player(300,300,2,2);
var shootArray =[];

var monsterArray = [];

setInterval(function(){
  monsterArray.push(new Monster(canvas.width,Math.random()*canvas.height,2,2));
  console.log(monsterArray);
},2000)


//------------ Objects in game-----------------------------//

function Player(x,y,dx,dy) {
  this.x = x;
  this.y = y;
  this.dx= dx;
  this.dy =dy;
  this.active = false;

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

function Shoot(x,y,dx,dy) {
  this.x = x;
  this.y = y;
  this.dx= dx;
  this.dy =dy;

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
    shootArray.push(new Shoot(player.x+60,player.y+70,2,2,4,'red'));
    player.active=true;
  }
});


//------------------Animation--------------------------//

function animation(){
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


}

animation();
