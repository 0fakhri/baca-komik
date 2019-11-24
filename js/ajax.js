$('#dark-mode').on('click', function(e) {
  $.ajax({
    url: 'http://jsonplaceholder.typicode.com/users',
    method : "GET",
  }).done(function(data){
    console.log(data);
  })
});
