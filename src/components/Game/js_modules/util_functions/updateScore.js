function updateScore(player){
  $('#score').html(`Score: ${player.score}`);
  $('.resultScore span').html(`${player.score}`);
}

export default updateScore;
