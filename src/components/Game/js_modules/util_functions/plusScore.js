import updateScore from './updateScore.js';

function plusScore(player,value=0){
  player.score+=value;
  updateScore(player);
}

export default plusScore;
