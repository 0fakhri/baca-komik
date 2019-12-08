$(document).ready(function() {
	var form = $('.masuk form button');

	form.on('click', function (event) {
		kosong = false;
		event.preventDefault();
		var inputan = $(".konten").find("input");
		console.log(inputan);
		inputan.each(function(index, el) {
			if ($(el).val() == "") {
        console.log('kosong');
        kosong = true;
			}
			else{
				console.log('terisi');
      }
		});
		if(kosong){
			$('.content2').css('opacity', '1');
			$('.content2').css('visibility','visible');
		}
		else{
			window.location.href = "index-masuk.html";
		}
	});
});
function closemasuk(){
    $('.content2').css('opacity', '0');
    $('.content2').css('visibility','hidden');
}
