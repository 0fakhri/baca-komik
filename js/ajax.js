$('#dark-mode').on('click', function(e) {
  $.ajax({
    url: 'demo.json',
    filetype : "json",
  }).done(function(data){
    console.log(data);
  })
});

$("#dark-mode").click(function(event){
      $.getJSON('demo.json', function(data) {
          console.log(data);
      });
  });
