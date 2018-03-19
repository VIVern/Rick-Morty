import mortyStatic from '../../images/playerMortyStatic.png';
import mortyShoot from '../../images/playerMortyShoot.png';
import rick from '../../images/playerRickStatic.png';
import rickShoot from '../../images/playerRickShoot.png';
// import bomb from '../../images/bomb.png';
import shot from '../../images/shoot.png';
// import monsterShot from '../../images/monsterShot.png';
// import monsterShot30 from '../../images/monsterShot30deg.png';
// import monsterShot30m from '../../images/monsterShot-30deg.png';
// import monsterShot20 from '../../images/monsterShot20deg.png';
// import monsterShot20m from '../../images/monsterShot-20deg.png';
// import monsterShot2 from '../../images/monsterShot2.png';
// import monsterShot3 from '../../images/monsterShot3.png';
// import monsterShot320 from '../../images/monsterShot320deg.png';
// import monsterShot320m from '../../images/monsterShot3-20deg.png';
// import monsterShot330 from '../../images/monsterShot330deg.png';
// import monsterShot330m from '../../images/monsterShot3-30deg.png';
// import monsterSimple from '../../images/monster1.png';
// import monsterSimpleHit from '../../images/monster1-hit.png';
// import monsterShooter from '../../images/monster2.png';
// import monsterShooterShooting from '../../images/monster2-shooting.png';
// import monsterDeathShooter from '../../images/monster2Death.png';
// import monsterShooterHit from '../../images/monster2-hit.png';
// import monsterSimpleSpeed from '../../images/monster3.png';
// import monsterExplosion from '../../images/monster4.png';
// import monsterExplosionHit from '../../images/monster4-hit.png';
// import monsterShield from '../../images/monster5.png';
// import monsterDie from '../../images/monsterDie.png';
import barBg from "../../images/barSmall.png";
import greenPortal from "../../images/portal.png";
import help from "../../images/help.png";

import Player from './js_modules/Player.js';
import Shoot from './js_modules/PlayerShoot.js';
import Portal from './js_modules/Portal.js';
// import MonsterSimple from './js_modules/MonsterSimple.js';
// import MonsterSimpleSpeed from './js_modules/MonsterSimpleSpeed.js';
// import MonsterShooter from './js_modules/MonsterShooter.js';
// import MonsterExplosion from './js_modules/MonsterExplosion.js';
// import MonsterShield from './js_modules/MonsterShield.js';

import minusLive from './js_modules/util_functions/minusLive.js';
import fullLive from './js_modules/util_functions/fullLive.js';
import plusScore from './js_modules/util_functions/plusScore.js';
import fullBar from './js_modules/util_functions/fullBar.js';
import plusBarProgress from './js_modules/util_functions/plusBarProgress.js';
import nextLevel from './js_modules/util_functions/nextLevel.js';
import {newLevel,apearSpeed, gameState} from './js_modules/util_functions/newLevel.js';
import {monsterShootArray,monsterArray,monstersGo} from './js_modules/Levels/level1';


export default function(props){
  //-------------------- Canvas config -----------------------//


  var canvas = document.querySelector('#game');
  var ctx=canvas.getContext('2d');
  canvas.width= 1400;
  canvas.height = 620;
  //
  var bar = document.querySelector('#bar');
  var ctxBar=bar.getContext('2d');
  //
  bar.width = 200;
  bar.height = 20;


  //------------- Used images -------------------------------//

  //Players
  var imgPlayerMortyStatic = new Image();
  imgPlayerMortyStatic.src= mortyStatic;
  imgPlayerMortyStatic.width = 85;
  imgPlayerMortyStatic.height = 84;

  var imgPlayerMortyShoot = new Image();
  imgPlayerMortyShoot.src = mortyShoot;
  imgPlayerMortyShoot.width = 85;
  imgPlayerMortyShoot.height = 80;
  imgPlayerMortyShoot.xShoot = 50;
  imgPlayerMortyShoot.yShoot = 50;

  var imgPlayerRickStatic = new Image();
  imgPlayerRickStatic.src= rick;
  imgPlayerRickStatic.width = 97;
  imgPlayerRickStatic.height = 114;

  var imgPlayerRickShoot = new Image();
  imgPlayerRickShoot.src = rickShoot;
  imgPlayerRickShoot.width = 97;
  imgPlayerRickShoot.height = 114;
  imgPlayerRickShoot.xShoot = 60;
  imgPlayerRickShoot.yShoot = 80;


  //shots pictures

  // var imgBomb = new Image();
  // imgBomb.src= bomb;
  // imgBomb.width = 21;
  // imgBomb.height = 27;
  // imgBomb.frame = 21;
  //
  var imgShot = new Image();
  imgShot.src= shot;
  imgShot.width = 39;
  imgShot.height = 21;
  //
  // var imgMonsterShot = new Image();
  // imgMonsterShot.src= monsterShot;
  // imgMonsterShot.width = 33;
  // imgMonsterShot.height = 8;
  //
  // var imgMonsterShot30 = new Image();
  // imgMonsterShot30.src = monsterShot30;
  // imgMonsterShot30.width = 33;
  // imgMonsterShot30.height = 24;
  //
  // var imgMonsterShot30m = new Image();
  // imgMonsterShot30m.src = monsterShot30m;
  // imgMonsterShot30m.width = 33;
  // imgMonsterShot30m.height = 24;
  //
  // var imgMonsterShot20 = new Image();
  // imgMonsterShot20.src = monsterShot20;
  // imgMonsterShot20.width = 33;
  // imgMonsterShot20.height = 17;
  //
  // var imgMonsterShot20m = new Image();
  // imgMonsterShot20m.src = monsterShot20m;
  // imgMonsterShot20m.width = 33;
  // imgMonsterShot20m.height = 17;
  //
  //
  // var imgMonsterShot2 = new Image();
  // imgMonsterShot2.src= monsterShot2;
  // imgMonsterShot2.width = 33;
  // imgMonsterShot2.height = 8;
  //
  // var imgMonsterShot3 = new Image();
  // imgMonsterShot3.src= monsterShot3;
  // imgMonsterShot3.width = 45;
  // imgMonsterShot3.height = 21;
  //
  // var imgMonsterShot320 = new Image();
  // imgMonsterShot320.src = monsterShot320;
  // imgMonsterShot320.width = 50;
  // imgMonsterShot320.height = 36;
  //
  // var imgMonsterShot320m = new Image();
  // imgMonsterShot320m.src = monsterShot320m;
  // imgMonsterShot320m.width = 50;
  // imgMonsterShot320m.height = 36;
  //
  // var imgMonsterShot330 = new Image();
  // imgMonsterShot330.src = monsterShot330;
  // imgMonsterShot330.width = 50;
  // imgMonsterShot330.height = 36;
  //
  // var imgMonsterShot330m = new Image();
  // imgMonsterShot330m.src = monsterShot330m;
  // imgMonsterShot330m.width = 50;
  // imgMonsterShot330m.height = 36;

  //Monsters

  // // monster 1
  // var imgMonsterSimple = new Image();
  // imgMonsterSimple.src = monsterSimple;
  // imgMonsterSimple.width= 150;
  // imgMonsterSimple.height= 65;
  // imgMonsterSimple.frame = 75;
  //
  // var imgMonsterSimpleHit = new Image();
  // imgMonsterSimpleHit.src = monsterSimpleHit;
  // imgMonsterSimpleHit.width= 130;
  // imgMonsterSimpleHit.height= 65;
  // imgMonsterSimpleHit.frame = 65;
  //
  //
  // //monster 2
  //
  // var imgMonsterShooter = new Image();
  // imgMonsterShooter.src = monsterShooter;
  // imgMonsterShooter.width= 237;
  // imgMonsterShooter.height= 63;
  // imgMonsterShooter.frame = 79;
  //
  // var imgMonsterShooterShooting = new Image();
  // imgMonsterShooterShooting.src = monsterShooterShooting;
  // imgMonsterShooterShooting.width= 464;
  // imgMonsterShooterShooting.height= 56;
  // imgMonsterShooterShooting.frame = 116;
  //
  //
  // var imgMonsterDeathShooter = new Image();
  // imgMonsterDeathShooter.src = monsterDeathShooter;
  // imgMonsterDeathShooter.width = 97;
  // imgMonsterDeathShooter.height = 50;
  // imgMonsterDeathShooter.frame = 48;
  //
  // var imgMonsterShooterHit = new Image();
  // imgMonsterShooterHit.src = monsterShooterHit;
  // imgMonsterShooterHit.width= 237;
  // imgMonsterShooterHit.height= 63;
  // imgMonsterShooterHit.frame = 79;
  //
  //
  // //monster 3
  //
  // var imgMonsterSimpleSpeed = new Image();
  // imgMonsterSimpleSpeed.src = monsterSimpleSpeed;
  // imgMonsterSimpleSpeed.width= 340;
  // imgMonsterSimpleSpeed.height= 65;
  // imgMonsterSimpleSpeed.frame = 84;
  //
  // //monster 4
  //
  // var imgMonsterExplosion = new Image();
  // imgMonsterExplosion.src = monsterExplosion;
  // imgMonsterExplosion.width= 340;
  // imgMonsterExplosion.height= 65;
  // imgMonsterExplosion.frame = 84;
  //
  // var imgMonsterExplosionHit = new Image();
  // imgMonsterExplosionHit.src = monsterExplosionHit;
  // imgMonsterExplosionHit.width= 174;
  // imgMonsterExplosionHit.height= 65;
  // imgMonsterExplosionHit.frame = 87;
  //
  // // monster 5
  //
  // var imgMonsterShield = new Image();
  // imgMonsterShield.src = monsterShield;
  // imgMonsterShield.width= 380;
  // imgMonsterShield.height= 103;
  // imgMonsterShield.frame = 95;
  //
  // var imgMonsterDie = new Image();
  // imgMonsterDie.src= monsterDie;
  // imgMonsterDie.width = 122;
  // imgMonsterDie.height = 50 ;
  // imgMonsterDie.frame = 61 ;

  //Intarface stuf
  var imgBar = new Image();
  imgBar.src = barBg;
  imgBar.width = 200;
  imgBar.Height = 20;

  var imgPortal = new Image();
  imgPortal.src = greenPortal;
  imgPortal.width = 94;
  imgPortal.height = 250;

  var imgHelp = new Image();
  imgHelp.src = help;
  imgHelp.width = 200;
  imgHelp.height = 123;


  //-------------- Variables --------------------------------//


  var keyboard = {
    down: false,
    up: false,
    right: false,
    left: false,
  }

  // var gameState = {
  //   pause: false,
  //   newLevel : true
  // }

  var waves = {
    tick : 0,
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
  var p;
  var goPortalSpeed=0;
  // var apearSpeed = 0;

  gameStart();


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

    //shoot
    if(event.keyCode == 32) {
      if(player.shoot != false){
        //document.querySelector('.shootSound').play();
        shootArray.push(new Shoot(ctx,imgShot,player.x+imgPlayerShoot.xShoot,player.y+imgPlayerShoot.yShoot,4)); // speed fix may be;
        player.active=true;
      }
      player.shoot = false;
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
      player.shoot=true;
      setTimeout(function(){
        player.active = false;
      },400);
    }

  })


  //----------------------Intarface events ---------------//

  function gameStart(){
    // Player picker
    // document.querySelector('.mainSound').pause();
    if(props.chosen == "rick"){
      imgPlayerStatic = imgPlayerRickStatic;
      imgPlayerShoot = imgPlayerRickShoot;
    }
    if(props.chosen == "morty"){
      imgPlayerStatic = imgPlayerMortyStatic;
      imgPlayerShoot = imgPlayerMortyShoot;
    }
    reset();
    gameState.pause = false;
    animation();
  };

  //-------------- Utility Functions ---------------------//


  function reset(){
    player = new Player(keyboard,canvas,ctx,imgPlayerStatic,imgPlayerShoot,300,300,2,2,5,0,0);
    shootArray =[];
    monsterShootArray =[];
    monsterArray = [];
    goPortalSpeed = 0;
    //apearSpeed = 0;
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
    plusScore(player);
  }


  function gameOver(){
    clearInterval(monstersGo);
    $('.gameOver').toggleClass('hide');
    let score =+$('.resultScore span').text();
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




  // ------------------------------------------------GameLevels






  // function level1(){
  //   if(waves.wave1 == true){
  //     monstersGo = setInterval(function(){
  //       if(gameState.pause != true && gameState.newLevel != true && waves.tick !=10){
  //         monsterArray.push(new MonsterSimple(ctx,imgMonsterSimple,imgMonsterSimpleHit,imgMonsterDeathShooter,canvas.width,randomNumber(0,(canvas.height-imgMonsterShooter.height)),1,0,1,50,2,1));
  //       } else if(gameState.pause != true){
  //         waves.wave1 = false;
  //         waves.wave2 =true;
  //         waves.tick=0;
  //         clearInterval(monstersGo);
  //         setTimeout(function(){
  //           level1();
  //         },5000);
  //       }
  //       if(gameState.pause != true){
  //         waves.tick+=1;
  //       }
  //     },2000);
  //   }
  //   if(waves.wave2 == true){
  //     monstersGo = setInterval(function(){
  //       if(gameState.pause != true && gameState.newLevel != true && waves.tick !=15){
  //         monsterArray.push(new MonsterSimpleSpeed(ctx,imgMonsterSimpleSpeed,imgMonsterSimpleHit,imgMonsterDeathShooter,canvas.width,randomNumber(0,(canvas.height-imgMonsterShooter.height)),3,0,5,2,1,2));
  //       } else if(gameState.pause != true){
  //         waves.wave2 = false;
  //         waves.wave3 =true;
  //         waves.tick=0;
  //         clearInterval(monstersGo);
  //         setTimeout(function(){
  //           level1();
  //         },5000);
  //       }
  //       if(gameState.pause != true){
  //         waves.tick+=1;
  //       }
  //     },1000);
  //   }
  //   if(waves.wave3 == true){
  //     monstersGo = setInterval(function(){
  //       if(gameState.pause != true && gameState.newLevel != true && waves.tick !=15){
  //         monsterArray.push(new MonsterShield(ctx,canvas,imgMonsterShield,imgMonsterShooter,imgMonsterShooterHit,imgBomb,canvas.width,randomNumber(0,(canvas.height-imgMonsterShooter.height)),2,0,10,2,2,1));
  //       } else if(gameState.pause != true){
  //         waves.wave3 = false;
  //         waves.wave4 =true;
  //         waves.tick=0;
  //         clearInterval(monstersGo);
  //         setTimeout(function(){
  //           level1();
  //         },5000);
  //       }
  //       if(gameState.pause != true){
  //         waves.tick+=1;
  //       }
  //     },2000);
  //   }
  //   if(waves.wave4 == true){
  //     monstersGo = setInterval(function(){
  //       if(gameState.pause != true && gameState.newLevel != true && waves.tick !=25){
  //           monsterArray.push(new MonsterShooter(ctx,monsterShootArray,imgMonsterShot2,imgMonsterShooter,undefined,imgMonsterDeathShooter,imgMonsterShooterShooting,canvas.width,randomNumber(0,(canvas.height-imgMonsterShooter.height)),1,0,10,50,1,1));
  //       } else if(gameState.pause != true){
  //         waves.wave4 = false;
  //         waves.wave5 =true;
  //         waves.tick=0;
  //         clearInterval(monstersGo);
  //         setTimeout(function(){
  //           level1();
  //         },5000);
  //       }
  //       if(gameState.pause != true){
  //         waves.tick+=1;
  //       }
  //     },2000);
  //   }
  //   if(waves.wave5 == true){
  //     monstersGo = setInterval(function(){
  //       if(gameState.pause != true && gameState.newLevel != true && waves.tick !=25){
  //           monsterArray.push(new MonsterExplosion(ctx,[imgMonsterShot3 ,imgMonsterShot330,imgMonsterShot330m],monsterShootArray,imgMonsterExplosion,imgMonsterExplosionHit,imgMonsterDeathShooter,canvas.width,randomNumber(0,(canvas.height-imgMonsterShooter.height)),2,0,20,2,2,1));
  //       } else if(gameState.pause != true){
  //         waves.wave5 = false;
  //         waves.tick=0;
  //         clearInterval(monstersGo);
  //         setTimeout(function(){
  //           level1();
  //         },5000);
  //       }
  //       if(gameState.pause != true){
  //         waves.tick+=1;
  //       }
  //     },1500);
  //   }
  // }




  //------------------Animation--------------------------//



  function animation(){
    if(gameState.pause == true){
      document.querySelector('.continue span').addEventListener('click', function(){
        gameState.pause =false;
        animation();
      })
      return;
    }

    // Has live then game continues
    if(player.live >0){
      requestAnimationFrame(animation);
      ctx.clearRect(0,0, canvas.width, canvas.height);

      if(gameState.newLevel == true) {
        newLevel(ctx,canvas,player,imgPlayerStatic,portal,imgPortal,monstersGo,monsterArray,monsterShootArray,waves);
        ctx.drawImage(imgHelp,canvas.width/2-imgHelp.width/2,canvas.height-imgHelp.height);
        return;
      }

      // for finishing level and open portal
      if(player.barProgress >=200) {
        console.log(p);
        clearInterval(monstersGo);
        fullBar(ctx,canvas,p,imgPortal);
        console.log(p);
        if((player.x < portal.x+imgPortal.width/10*6 && player.x >= portal.x) && (player.y+imgPlayerStatic.height > portal.y+imgPortal.height/4 && player.y<portal.y+imgPortal.height/5*4)){
          player.x = portal.x+imgPortal.width/2;
          player.y = portal.y+imgPortal.height/2-imgPlayerStatic.height/2;
          nextLevel(ctx,goPortalSpeed,player,imgPlayerStatic);
          goPortalSpeed++;
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
          minusLive(player,monsterArray[i].damage);
          monsterArray.splice(i,1);
        }
        monsterArray[i].update();
      }


      // Player shooting
      for(let i = 0 ; i<monsterArray.length; i++){
        if(monsterArray.length !=0){
          for(let j =0 ; j<shootArray.length; j++){
              if((monsterArray[i].x-shootArray[j].x-imgShot.width<0) && (shootArray[j].y+imgShot.height>monsterArray[i].y) && (shootArray[j].y < monsterArray[i].y+monsterArray[i].img.height)){
                if(monsterArray[i].shield != true){
                  monsterArray[i].health-=1;
                  monsterArray[i].hit = true;
                }
                if(monsterArray[i].live == true){
                  shootArray.splice(j,1);
                }
                if(monsterArray[i].health == 0){
                  monsterArray[i].live=false;
                  monsterArray[i].animSpeed =0;
                  let die = i;                              // FIX bug with stay after death;
                  if(monsterArray[i].afterDeath !=true){
                    setTimeout(function(){
                      monsterArray.splice(die,1);
                    },300);
                  }
                  plusScore(player,monsterArray[i].score);
                  plusBarProgress(ctxBar,bar,imgBar,player,monsterArray[i].barProgress);
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
          minusLive(player,monsterArray[i].damage);
          monsterArray.splice(i,1);
        }
      }

      // monster shoot player;
      for(let i = 0; i<monsterShootArray.length; i++){
        if(((monsterShootArray[i].x < player.x+imgPlayerStatic.width-5 && monsterShootArray[i].x > player.x) || (monsterShootArray[i].x+monsterShootArray[i].img.frame > player.x && monsterShootArray[i].x+monsterShootArray[i].img.frame <player.x + imgPlayerStatic.width-5)) && ((monsterShootArray[i].y < player.y+imgPlayerStatic.height-5 && monsterShootArray[i].y > player.y+5) || (monsterShootArray[i].y+monsterShootArray[i].img.height > player.y+10 && monsterShootArray[i].y+monsterShootArray[i].img.height < player.y + imgPlayerStatic.height-10))){
          player.x = 200;
          player.y = 200;
          minusLive(player,monsterShootArray[i].damage);
          monsterShootArray.splice(i,1);
        }
      }

    }
    else{
      gameOver();
    }
  }
}
