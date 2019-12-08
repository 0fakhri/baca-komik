$(document).ready(function(){
 $.ajaxSetup({ cache: false });
 $('#search').keyup(function(){
  $('#result').html('');
  $('#state').val('');
  var searchField = $('#search').val();
  var expression = new RegExp(searchField, "i");
  $.getJSON('demo.json', function(data) {
    console.log('dapet akses')
   $.each(data, function(key, value){
    if (value.nama.search(expression) != -1 || value.pengarang.search(expression) != -1)
    {
        console.log('dapet akses 2')
     $('#result').append('<li class="list-group-item link-class"><img src="'+value.gambar+'" height="40" width="40" class="img-thumbnail" /> '+value.nama+' | <span class="text-muted">'+value.pengarang+'</span></li>');
    }
   });   
  });
 });
 
 $('#result').on('click', 'li', function() {
  var click_text = $(this).text().split('|');
  $('#search').val($.trim(click_text[0]));
  $("#result").html('');
 });
});

function hilang(){
  $("#result").html('');
}