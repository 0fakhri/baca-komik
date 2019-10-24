var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
      document.getElementById("navbar").style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;
}

document.addEventListener('mousemove', logKey);
function logKey(e) {
   if(e.clientY<88){
     document.getElementById("navbar").style.opacity = "1";
   } else {
     document.getElementById("navbar").style.opacity = "0";
   }
}
