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
//anjir garai erros... ;v
    // nitip c sementara :v
    // function animateValue(id, start, end, duration) {
    //   var range = end - start;
    //   var current = start;
    //   var increment = +10;
    //   var stepTime = Math.abs(Math.floor(duration / range));
    //   var obj = document.getElementById(id);
    //   var timer = setInterval(function() {
    //       current += increment;
    //       obj.innerHTML = current;
    //       if (current == end) {
    //           clearInterval(timer);
    //       }
    //   }, stepTime);
    // }

    // animateValue("counter", 0, 1200, 1000);
