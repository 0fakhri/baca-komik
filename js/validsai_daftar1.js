var isEmail = false;
function validasi(){
  var cek = document.getElementById("mymail");
  isEmail = false;
  for (var i = 0; i < cek.value.length; i++){
      var ch = cek.value.charAt(i);
      if(ch == "@"){
        isEmail = true;
        break;
        }
     }
  if (isEmail == false){
    document.getElementById("email").style.display = "block";
  } else{
    document.getElementById("email").style.display = "none";
  }
}
  //lanjut ke halaman selanjutnya
function lanjut(){
  if(isEmail==true){
    window.location.href = "daftar2.html";
  }
}
