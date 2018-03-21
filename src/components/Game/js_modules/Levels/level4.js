import MonsterSimple from '../MonsterSimple.js';
import MonsterSimpleSpeed from '../MonsterSimpleSpeed.js';
import MonsterShooter from '../MonsterShooter.js';
import MonsterExplosion from '../MonsterExplosion.js';
import MonsterShield from '../MonsterShield.js';

import randomNumber from '../util_functions/randomNumber.js';


import bomb from '../../../../images/bomb.png';
import shot from '../../../../images/shoot.png';
import monsterShot from '../../../../images/monsterShot.png';
import monsterShot30 from '../../../../images/monsterShot30deg.png';
import monsterShot30m from '../../../../images/monsterShot-30deg.png';
import monsterShot20 from '../../../../images/monsterShot20deg.png';
import monsterShot20m from '../../../../images/monsterShot-20deg.png';
import monsterShot2 from '../../../../images/monsterShot2.png';
import monsterShot3 from '../../../../images/monsterShot3.png';
import monsterShot320 from '../../../../images/monsterShot320deg.png';
import monsterShot320m from '../../../../images/monsterShot3-20deg.png';
import monsterShot330 from '../../../../images/monsterShot330deg.png';
import monsterShot330m from '../../../../images/monsterShot3-30deg.png';
import monsterSimple from '../../../../images/monster1.png';
import monsterSimpleHit from '../../../../images/monster1-hit.png';
import monsterShooter from '../../../../images/monster2.png';
import monsterShooterShooting from '../../../../images/monster2-shooting.png';
import monsterDeathShooter from '../../../../images/monster2Death.png';
import monsterShooterHit from '../../../../images/monster2-hit.png';
import monsterSimpleSpeed from '../../../../images/monster3.png';
import monsterExplosion from '../../../../images/monster4.png';
import monsterExplosionHit from '../../../../images/monster4-hit.png';
import monsterShield from '../../../../images/monster5.png';
import monsterDie from '../../../../images/monsterDie.png';

// monster 1
export var imgMonsterSimple = new Image();
imgMonsterSimple.src = monsterSimple;
imgMonsterSimple.width= 150;
imgMonsterSimple.height= 65;
imgMonsterSimple.frame = 75;

export var imgMonsterSimpleHit = new Image();
imgMonsterSimpleHit.src = monsterSimpleHit;
imgMonsterSimpleHit.width= 130;
imgMonsterSimpleHit.height= 65;
imgMonsterSimpleHit.frame = 65;


//monster 2

export var imgMonsterShooter = new Image();
imgMonsterShooter.src = monsterShooter;
imgMonsterShooter.width= 237;
imgMonsterShooter.height= 63;
imgMonsterShooter.frame = 79;

export var imgMonsterShooterShooting = new Image();
imgMonsterShooterShooting.src = monsterShooterShooting;
imgMonsterShooterShooting.width= 464;
imgMonsterShooterShooting.height= 56;
imgMonsterShooterShooting.frame = 116;


export var imgMonsterDeathShooter = new Image();
imgMonsterDeathShooter.src = monsterDeathShooter;
imgMonsterDeathShooter.width = 97;
imgMonsterDeathShooter.height = 50;
imgMonsterDeathShooter.frame = 48;

export var imgMonsterShooterHit = new Image();
imgMonsterShooterHit.src = monsterShooterHit;
imgMonsterShooterHit.width= 237;
imgMonsterShooterHit.height= 63;
imgMonsterShooterHit.frame = 79;


//monster 3

export var imgMonsterSimpleSpeed = new Image();
imgMonsterSimpleSpeed.src = monsterSimpleSpeed;
imgMonsterSimpleSpeed.width= 340;
imgMonsterSimpleSpeed.height= 65;
imgMonsterSimpleSpeed.frame = 84;

//monster 4

export var imgMonsterExplosion = new Image();
imgMonsterExplosion.src = monsterExplosion;
imgMonsterExplosion.width= 340;
imgMonsterExplosion.height= 65;
imgMonsterExplosion.frame = 84;

export var imgMonsterExplosionHit = new Image();
imgMonsterExplosionHit.src = monsterExplosionHit;
imgMonsterExplosionHit.width= 174;
imgMonsterExplosionHit.height= 65;
imgMonsterExplosionHit.frame = 87;

// monster 5

export var imgMonsterShield = new Image();
imgMonsterShield.src = monsterShield;
imgMonsterShield.width= 380;
imgMonsterShield.height= 103;
imgMonsterShield.frame = 95;

export var imgMonsterDie = new Image();
imgMonsterDie.src= monsterDie;
imgMonsterDie.width = 122;
imgMonsterDie.height = 50 ;
imgMonsterDie.frame = 61 ;

export var imgBomb = new Image();
imgBomb.src= bomb;
imgBomb.width = 21;
imgBomb.height = 27;
imgBomb.frame = 21;

export var imgShot = new Image();
imgShot.src= shot;
imgShot.width = 39;
imgShot.height = 21;

export var imgMonsterShot = new Image();
imgMonsterShot.src= monsterShot;
imgMonsterShot.width = 33;
imgMonsterShot.height = 8;

export var imgMonsterShot30 = new Image();
imgMonsterShot30.src = monsterShot30;
imgMonsterShot30.width = 33;
imgMonsterShot30.height = 24;

export var imgMonsterShot30m = new Image();
imgMonsterShot30m.src = monsterShot30m;
imgMonsterShot30m.width = 33;
imgMonsterShot30m.height = 24;

export var imgMonsterShot20 = new Image();
imgMonsterShot20.src = monsterShot20;
imgMonsterShot20.width = 33;
imgMonsterShot20.height = 17;

export var imgMonsterShot20m = new Image();
imgMonsterShot20m.src = monsterShot20m;
imgMonsterShot20m.width = 33;
imgMonsterShot20m.height = 17;


export var imgMonsterShot2 = new Image();
imgMonsterShot2.src= monsterShot2;
imgMonsterShot2.width = 33;
imgMonsterShot2.height = 8;

export var imgMonsterShot3 = new Image();
imgMonsterShot3.src= monsterShot3;
imgMonsterShot3.width = 45;
imgMonsterShot3.height = 21;

export var imgMonsterShot320 = new Image();
imgMonsterShot320.src = monsterShot320;
imgMonsterShot320.width = 50;
imgMonsterShot320.height = 36;

export var imgMonsterShot320m = new Image();
imgMonsterShot320m.src = monsterShot320m;
imgMonsterShot320m.width = 50;
imgMonsterShot320m.height = 36;

export var imgMonsterShot330 = new Image();
imgMonsterShot330.src = monsterShot330;
imgMonsterShot330.width = 50;
imgMonsterShot330.height = 36;

export var imgMonsterShot330m = new Image();
imgMonsterShot330m.src = monsterShot330m;
imgMonsterShot330m.width = 50;
imgMonsterShot330m.height = 36;

var monstersGo;

function level4(ctx,canvas,gameState,monsterArray,monsterShootArray,waves){
  if(waves.wave1 == true){
    monstersGo = setInterval(function(){
      if(waves.portalOpen) clearInterval(monstersGo);
      if(gameState.pause != true && gameState.newLevel != true && waves.tick !=25){
          monsterArray.push(new MonsterShooter(ctx,monsterShootArray,imgMonsterShot2,imgMonsterShooter,undefined,imgMonsterDeathShooter,imgMonsterShooterShooting,canvas.width,randomNumber(0,(canvas.height-imgMonsterShooter.height)),1,0,43,10,1,1));
      } else if(gameState.pause != true){
        waves.tick=0;
        clearInterval(monstersGo);
      }
      if(gameState.pause != true){
        waves.tick+=1;
      }
    },2000);
  }
}

export {level4};
