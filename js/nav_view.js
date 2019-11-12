var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    $("#navbar").css("opacity","0");
  } else {
    $("#navbar").css("opacity","1");
  }
  prevScrollpos = currentScrollPos;
}

document.addEventListener('mousemove', logKey);
function logKey(e) {
   if(e.clientY<88){
     $("#navbar").css("opacity","1");
   } else {
     $("#navbar").css("opacity","0");
   }
}
