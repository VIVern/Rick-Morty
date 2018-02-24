$('.player').on('click',function(){
  if($(this).hasClass('check')){
    return;
  }else {
    $('.check').removeClass('check');
    $(this).addClass('check');
  }
})
