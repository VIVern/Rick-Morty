function Player(keyboard,canvas,ctx,imgPlayerStatic,imgPlayerShoot,x,y,dx,dy,live,score,progressBar) {
  this.imgPlayerStatic = imgPlayerStatic;
  this.imgPlayerShoot = imgPlayerShoot;
  this.x = x;
  this.y = y;
  this.dx= dx;
  this.dy =dy;

  this.active = false;
  this.shoot= true;

  this.live = live;
  this.score = score;
  this.barProgress = progressBar;

  this.draw = function() {
    if(this.active == false){
      ctx.drawImage(this.imgPlayerStatic,this.x,this.y);
    }
    else if(this.active == true) {
      ctx.drawImage(this.imgPlayerShoot,this.x,this.y);
    }
  }

  this.update = function() {

    // move up
    if(keyboard.up == true && this.y > 0) {
        this.y-=4;
    }

    //move down
    if(keyboard.down == true && this.y < canvas.height-this.imgPlayerStatic.height) {
      this.y+=4;
    }

    //move left
    if(keyboard.left == true && this.x > 0) {
      this.x-=4;
    }

    //move right
    if(keyboard.right == true && this.x < canvas.width-this.imgPlayerStatic.width) {
      this.x+=4;
    }

    this.draw();
  }
}

export default Player;
