import MonsterShoot from './MonsterShoot.js';

function MonsterShooter(ctx,monsterShootArray,imgShot,img,imgHit,imgDeath,imgShoot,x,y,dx,dy,scoreValue,barValue,health,damage) {
  this.img = img;
  this.imgHit = imgHit;
  this.imgDeath = imgDeath;
  this.imgShoot = imgShoot;
  this.imgShot = imgShot;
  this.x = x;
  this.y = y;
  this.dx= dx;
  this.dy = dy;
  this.score = scoreValue;
  this.barProgress = barValue;
  this.health = health;
  this.damage = damage;
  this.live = true;
  this.afterDeath = false;
  this.shield = false;
  this.hit = false;

  this.frame=0;
  this.animSpeed=0;
  this.shootSpeed =0;

  this.draw = function(){
    if(this.shootSpeed >=130 && this.live == true){
      if(this.animSpeed > 5){
        this.frame = (this.frame===this.imgShoot.width ? 0 : this.frame+this.imgShoot.frame);
        this.animSpeed = 0;
      }
      ctx.drawImage(this.imgShoot,this.frame,0,this.imgShoot.frame,this.imgShoot.height,this.x,this.y,this.imgShoot.frame,this.imgShoot.height); //fix random frame geometry
      this.animSpeed+=1;
      if(this.shootSpeed == 150){
        this.frame =0;
      }
      return;
    }

    if(this.live == true && this.hit == false){
      if(this.animSpeed > 4){
        this.frame = (this.frame===this.img.frame ? 0 : this.frame+this.img.frame);
        this.animSpeed = 0;
      }
      ctx.drawImage(this.img,this.frame,0,this.img.frame,this.img.height,this.x,this.y,this.img.frame,this.img.height); //fix random frame geometry
      this.animSpeed+=1;
    }

    if(this.live == true && this.hit == true){
      this.frame = 0;
      if(this.animSpeed > 8){
        this.frame=this.imgHit.frame;
      }
      if(this.animSpeed >20){
        this.hit = false;
        this.animSpeed = 0;
        this.frame = 0;
        return;
      }
      ctx.drawImage(this.imgHit,this.frame,0,this.imgHit.frame,this.imgHit.height,this.x,this.y,this.imgHit.frame,this.imgHit.height); //fix random frame geometry
      this.animSpeed+=1;
      this.x+=dx;
    }

    if(this.live == false){
      this.frame = 0;
      if(this.animSpeed > 8){
        this.frame=this.imgDeath.frame;
      }
      ctx.drawImage(this.imgDeath,this.frame,0,this.imgDeath.frame,this.imgDeath.height,this.x,this.y,this.imgDeath.frame,this.imgDeath.height); //fix random frame geometry
      this.animSpeed+=1;
      this.x+=dx;
    }
  }


  this.shoot = function(){
    if(this.shootSpeed == 130) {
      this.animSpeed = 0;
      this.frame = 0;
    }
    if(this.shootSpeed == 140 && this.live==true){
      monsterShootArray.push(new MonsterShoot(ctx,this.imgShot,this.x,this.y+40,3,0,1));
      monsterShootArray.push(new MonsterShoot(ctx,this.imgShot,this.x+50,this.y+35,3,0,1));
    }
    if(this.shootSpeed > 150){
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

export default MonsterShooter;
