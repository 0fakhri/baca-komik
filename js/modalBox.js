

function readURL(input) {
       if (input.files && input.files[0]) {
           let reader = new FileReader();
           reader.onload = function (e) {
               $('#blah').attr('src', e.target.result);
               let size = $(".fileSize")[0].files[0].size;
               size = Math.floor(size/1024)
               alert(size + "KB")
           };
           reader.readAsDataURL(input.files[0]);
       }
   }

//fungsi dropdown menu

$(document).ready(function() {
  $(".kanan>i").click(function(){
    $("#dropdown").slideToggle();
  });
});
function closeDrop(){
  if($("#dropdown").css("display") != "none"){
    $("#dropdown").slideToggle();
  }
}

var terbuka;
function tambahKomik() {
    $("#tambah").fadeToggle();
    terbuka = "#tambah";
    }
function verif() {
    $("#verif").fadeToggle();
    terbuka = "#verif";
    }
function uang() {
    $("#uang").fadeToggle();
    terbuka = "#uang";
    }
function profil() {
    $("#profil").fadeToggle();
    terbuka = "#profil";
    }
function keluarAkun() {
  $("#keluarAkun").fadeToggle();
    terbuka = "#keluarAkun";
  }
function tutup() {
    $(terbuka).fadeToggle();
    }
