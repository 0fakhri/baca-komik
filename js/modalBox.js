var tulisan = ""

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
    tulisan = "selamat! Komik berhasil ditambahkan dan telah tersimpan dalam sistem.";
    $(".content > p").text(tulisan);
    }
function verif() {
    $("#verif").fadeToggle();
    terbuka = "#verif";
    tulisan = "selamat! verifikasi berhasil dan telah tersimpan dalam sistem.";
    $(".content > p").text(tulisan);
    }
function uang() {
    $("#uang").fadeToggle();
    terbuka = "#uang";
    tulisan = "selamat! topup berhasil, menunggu transfer.";
    $(".content > p").text(tulisan);
    }
function profil() {
    $("#profil").fadeToggle();
    terbuka = "#profil";
    tulisan = "selamat! edit profil berhasil dan telah tersimpan.";
    $(".content > p").text(tulisan);
    }
function keluarAkun() {
  $("#keluarAkun").fadeToggle();
    terbuka = "#keluarAkun";
  }
function tutup() {
    $(terbuka).fadeToggle();
    }
function signout(){
      window.location.href = "index.html";
    }
function verifikasi(){
      $('.content').css('opacity', '1');
      $('.content').css('visibility','visible');
    }
function closeverif(){
      $('.content').css('opacity', '0');
      $('.content').css('visibility','hidden');
    }
