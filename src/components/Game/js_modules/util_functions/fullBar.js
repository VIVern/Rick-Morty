import Portal from '../Portal.js';

function fullBar(ctx,canvas,portal,imgPortal){
  portal = new Portal(ctx,imgPortal,0,canvas.height/2-imgPortal.height/2);
  console.log(portal);
  portal.draw();
}

export default fullBar;
