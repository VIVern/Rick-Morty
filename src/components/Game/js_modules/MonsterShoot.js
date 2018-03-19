function MonsterShoot(ctx,img,x,y,dx,dy,damage) {
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

export default MonsterShoot;
