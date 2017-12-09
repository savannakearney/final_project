$(document).ready(function() {



 $(".content").hide();



    $('.city').click(function(){
      $(".content").hide();
      $(this).parent().next().show();
      $('.sub').hide();
    });


  $('.subphoto').click(function() {
    $('.sub').hide();
    $(this).next().slideDown();
   });




 });
