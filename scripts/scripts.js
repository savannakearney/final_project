$(document).ready(function() {

  function hideAll() {
     $('#Boston').hide();
     $('#Louisville').hide();
     $('#Charleston').hide();
     $('#Savannah').hide();
   }

  $('.sub').hide();

   hideAll();

   $('.city').click(function(){
   	$('.subphoto').hide();
     $(this).parent().find('.subphoto').show();
   });


 $('.subphoto').click(function() {
   $('.sub').hide();
   $(this).parent().find('.sub').show();
  });




});
