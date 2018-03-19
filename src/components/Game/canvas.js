import mortyStatic from '../../images/playerMortyStatic.png';
import mortyShoot from '../../images/playerMortyShoot.png';
import rick from '../../images/playerRickStatic.png';
import rickShoot from '../../images/playerRickShoot.png';
import shot from '../../images/shoot.png';

import barBg from "../../images/barSmall.png";
import greenPortal from "../../images/portal.png";
import help from "../../images/help.png";

import Player from './js_modules/Player.js';
import Shoot from './js_modules/PlayerShoot.js';
import Portal from './js_modules/Portal.js';


import minusLive from './js_modules/util_functions/minusLive.js';
import fullLive from './js_modules/util_functions/fullLive.js';
import plusScore from './js_modules/util_functions/plusScore.js';
import fullBar from './js_modules/util_functions/fullBar.js';
import plusBarProgress from './js_modules/util_functions/plusBarProgress.js';
import nextLevel from './js_modules/util_functions/nextLevel.js';
import {newLevel,apearSpeed, gameState} from './js_modules/util_functions/newLevel.js';



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
  var imgShot = new Image();
  imgShot.src= shot;
  imgShot.width = 39;
  imgShot.height = 21;

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

  var waves = {
    portalOpen : false,
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
        newLevel(ctx,canvas,player,imgPlayerStatic,portal,imgPortal,monsterArray,monsterShootArray,waves);
        ctx.drawImage(imgHelp,canvas.width/2-imgHelp.width/2,canvas.height-imgHelp.height);
        return;
      }

      // for finishing level and open portal
      if(player.barProgress >=200) {
        waves.portalOpen =true;
        portal = fullBar(ctx,canvas,portal,imgPortal);
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
