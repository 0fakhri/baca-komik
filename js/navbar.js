var x = $("#bar");
var y = $("#find");
function bar() {
   if (x.css("display") == "none") {
     x.css("display","block");
     y.css("display","none");
   } else {
     x.css("display","none");
   }
  }
  function find() {
     if (y.css("display") === "none") {
       y.css("display","block");
       x.css("display","none");
     } else {
       y.css("display","none");
     }
    }
//anjir garai erros... ;v
    // nitip c sementara :v
    // function animateValue(id, start, end, duration) {
    //   var range = end - start;
    //   var current = start;
    //   var increment = +10;
    //   var stepTime = Math.abs(Math.floor(duration / range));
    //   var obj = $(id);
    //   var timer = setInterval(function() {
    //       current += increment;
    //       obj.innerHTML = current;
    //       if (current == end) {
    //           clearInterval(timer);
    //       }
    //   }, stepTime);
    // }

    // animateValue("counter", 0, 1200, 1000);
