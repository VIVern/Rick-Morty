function MonsterSimple(ctx,img,imgHit,imgDeath,x,y,dx,dy,scoreValue,barValue,health,damage) {
  this.img = img;
  this.imgHit = imgHit;
  this.imgDeath = imgDeath;
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
  this.frameCount=0;

  this.draw = function(){
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


  this.update = function(){
    this.x-=dx;
    this.draw();
  }
}

export default MonsterSimple;
