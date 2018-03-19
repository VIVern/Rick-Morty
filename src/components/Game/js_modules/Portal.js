function Portal(ctx,img,x,y){
  this.img = img;
  this.x=x;
  this.y=y;

  this.draw = function(){
    ctx.drawImage(this.img,x,y);
  }
};

export default Portal;
