$(document).ready(function() {
	var form = $('button');
  kosong = false;
  
	form.on('click', function (event) {
		event.preventDefault();
		var inputan = $(".konten").find("input");
		console.log(inputan);
		inputan.each(function(index, el) {
			if ($(el).val() == "") {
        console.log('inpus');
        
        kosong = true;
			}
			else{
				console.log('asku');
      }
      if(kosong){
        console.log('sasa')
        $('#email').css('display','block');
      }
      else{
        $('#email').css('display','none')
      }
		});
	});
});
