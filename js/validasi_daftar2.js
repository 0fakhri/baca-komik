var iskAngka = false;
var iskBesar = false;
var iskKecil = false;
var isPendek = false;
var isPanjang = false;
// validasi
function validasi(){
          var cek = document.getElementById("pass");
          var cek2 = document.getElementById("pass2");
          document.getElementById("samain").style.display = "none";
            isPendek = false;
            isPanjang = false;

            if (cek.value.length>12){
              isPendek = true;
              cek.value = "";
            }else if(cek.value.length<5){
              isPendek = true;
            }
              //cek ada tidaknya angka huruf kecil besar
              iskKecil = false;
              for (var i = 0; i < cek.value.length; i++){
                var ch = cek.value.charAt(i);
                if(ch >= "a" && ch <= "z"){
                  iskKecil = true;
                  break;
                  }
               }
               iskBesar = false;
               for (var i = 0; i < cek.value.length; i++){
               var ch = cek.value.charAt(i);
               if(ch >= "A" && ch <= "Z"){
                 iskBesar = true;
                 break;
                 }
              }
              iskAngka = false;
              for (var i = 0; i < cek.value.length; i++){
              var ch = cek.value.charAt(i);
              if(ch >= "0" && ch <= "9"){
                iskAngka = true;
                break;
                }
             }
             //cek ketika ada dangka huruf kecil dan besar kalau ada jadikan display block atau terlihat
             if (iskKecil == false){
               document.getElementById("kKecil").style.display = "block";
             } else{
               document.getElementById("kKecil").style.display = "none";
             }
             if (iskBesar == false){
               document.getElementById("kBesar").style.display = "block";
             } else{
               document.getElementById("kBesar").style.display = "none";
             }
             if (iskAngka == false){
               document.getElementById("kAngka").style.display = "block";
             } else{
               document.getElementById("kAngka").style.display = "none";
             }

          if (isPanjang == true || isPendek == true){
            document.getElementById("panjangPendek").style.display = "block";
          } else{
            document.getElementById("panjangPendek").style.display = "none";
          }
        }

function validasi2(){
  if(pass.value == pass2.value){
    document.getElementById("samain").style.display = "none";
  }else{
      document.getElementById("samain").style.display = "block";
  }
}
//lanjut ke halaman selanjutnya
function lanjut(){
  if(isPanjang == false && isPendek == false && iskKecil == true && iskBesar==true && iskAngka==true){
    window.location.href = "masuk.html";
  }
}
