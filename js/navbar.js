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

