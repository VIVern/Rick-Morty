function Shoot(ctx,imgShot,x,y,dx) {
  this.imgShot = imgShot;
  this.x = x;
  this.y = y;
  this.dx= dx;

  this.draw = function() {
    ctx.drawImage(this.imgShot,this.x,this.y);
  }

  this.update = function() {
    this.x+=dx;

    this.draw();
  }
}

export default Shoot;
