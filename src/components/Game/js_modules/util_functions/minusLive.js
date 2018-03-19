function minusLive(player,damage) {
  player.live-=damage;
  let lives =document.querySelectorAll('#lives li[data-live="true"]');
  for(let i = lives.length-1 , j = 0; j<damage; i--,j++){
    lives[i].classList.remove('hasLive');
    lives[i].classList.add('noLive');
    lives[i].setAttribute('data-live', false);
  }

}

export default minusLive;
