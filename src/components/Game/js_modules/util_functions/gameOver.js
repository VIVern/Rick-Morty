
var state= {
  gameOver : false,
}

function gameOver(player){
  state.gameOver = true;
  let score =player.score;
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
  setTimeout(()=>{
      state.gameOver = false;
  },30)
}


export {gameOver,state};
