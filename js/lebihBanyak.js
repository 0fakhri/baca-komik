var tampilBanyak = false;
$(document).ready(function() {
  $(".btn-banyak").click(function(){
    $("#banyak").slideToggle();
    if(tampilBanyak){
      $(".btn-banyak > a").text("Tampilkan lebih banyak");
      tampilBanyak = false;
      $(".btn-banyak > i").removeClass("fa-rotate-180");
    }else{
      $(".btn-banyak > a").text("Tampilkan lebih sedikit");
      tampilBanyak = true;
      $(".btn-banyak > i").addClass("fa-rotate-180");
    }
  });
});
