var tulisan = ""
function readURL_tambahkomik(input) {
       if (input.files && input.files[0]) {
           let reader = new FileReader();
           reader.onload = function (e) {
               $('#blah1').attr('src', e.target.result);
               let size = $(".fileSize1")[0].files[0].size;
               size = Math.floor(size/1024)
               $("#size1").text("Ukuran file : "+size + "KB")
           };
           reader.readAsDataURL(input.files[0]);
       }
   }
function readURL_verifakun(input) {
      if (input.files && input.files[0]) {
          let reader = new FileReader();
          reader.onload = function (e) {
              $('#blah2').attr('src', e.target.result);
              let size = $(".fileSize2")[0].files[0].size;
              size = Math.floor(size/1024)
              $("#size2").text("Ukuran file : "+size + "KB")
          };
          reader.readAsDataURL(input.files[0]);
      }
  }
function readURL_editakun(input) {
       if (input.files && input.files[0]) {
           let reader = new FileReader();
           reader.onload = function (e) {
               $('#blah3').attr('src', e.target.result);
               let size = $(".fileSize3")[0].files[0].size;
               size = Math.floor(size/1024)
               $("#size3").text("Ukuran file : "+size + "KB")
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

function tengokIsi(){
  event.preventDefault();
  var kosong = false
  var inputan = $(terbuka +" > .modal-konten > form").find("input");
  console.log(inputan);
  inputan.each(function(index, el) {
    if ($(el).val() == "") {
      console.log('ada yang kosong nih');
      kosong = true;
    }
    else{
      console.log('terisi');
    }
  });
  return kosong;
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
  if(tengokIsi()){
    $('.content2').css('opacity', '1');
    $('.content2').css('visibility','visible');
  }else {
    $('.content').css('opacity', '1');
    $('.content').css('visibility','visible');
  }
}
function closeverif(){
  if(tengokIsi()){
    $('.content2').css('opacity', '0');
    $('.content2').css('visibility','hidden');
  }else {
    $('.content').css('opacity', '0');
    $('.content').css('visibility','hidden');
    tutup();
  }
}
