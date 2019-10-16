var x = document.getElementById("bar");
var y = document.getElementById("find");
function bar() {
   if (x.style.display === "none") {
     x.style.display = "block";
     y.style.display = "none";
   } else {
     x.style.display = "none";
   }
  }
  function find() {
     if (y.style.display === "none") {
       y.style.display = "block";
       x.style.display = "none";
     } else {
       y.style.display = "none";
     }
    }
