// $('#dark-mode').on('click', function(e) {
//   $.ajax({
//     url: 'http://jsonplaceholder.typicode.com/users',
//     method : "GET",
//   }).done(function(data){
//     console.log(data);
//   })
// });

$("#dark-mode").click(function(event){
      $.getJSON('demo.json', function(data) {
          console.log(data);
      });
  });
