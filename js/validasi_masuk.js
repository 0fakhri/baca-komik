function validasi(){
  var isMail = false;
  var isPass = false;
  var mail = document.getElementById("myemail");
  var pass = document.getElementById("mypass");
  var cek = mail;
  var isEmail = false;
        if (mail.value.length>0){
      document.getElementById("email").style.display = "none";
      isMail = true;
      for (var i = 0; i < cek.value.length; i++){
            var ch = cek.value.charAt(i);
            if(ch == "@"){
              isEmail = true;
              break;
              }
           }
        if (isEmail == false){
          document.getElementById("email1").style.display = "block";
        } else{
          document.getElementById("email1").style.display = "none";
        }
    }else{
      document.getElementById("email").style.display = "block";
      document.getElementById("email1").style.display = "none";
    }
    if (pass.value.length>0){
        document.getElementById("pass").style.display = "none";
        isPass = true;
      }else{
        document.getElementById("pass").style.display = "block";
      }

  //lanjut ke halaman selanjutnya
  if(isMail == true && isPass == true && isEmail==true){
    window.location.href = "index-masuk.html";
  }
}
