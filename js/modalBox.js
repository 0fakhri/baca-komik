var z = document.getElementById("dropdown");

function readURL(input) {
       if (input.files && input.files[0]) {
           var reader = new FileReader();

           reader.onload = function (e) {
               $('#blah').attr('src', e.target.result);
               var size = $(".fileSize")[0].files[0].size;
               size = Math.floor(size/1024)
               alert(size + "KB")

           };

           reader.readAsDataURL(input.files[0]);
       }
   }

function drop() {
     if (z.style.display === "none") {
       z.style.display = "block";
     } else {
       z.style.display = "none";
     }
    }
function closeDrop(){
  z.style.display = "none";
}

function tambahKomik() {
    document.getElementById("tambah").style.display = "flex";
    }
function verif() {
    document.getElementById("verif").style.display = "flex";
    }
function uang() {
    document.getElementById("uang").style.display = "flex";
    }
function profil() {
    document.getElementById("profil").style.display = "block";
    }
function tutup() {
    document.getElementById("tambah").style.display = "none";
    document.getElementById("verif").style.display = "none";
    document.getElementById("uang").style.display = "none";
    document.getElementById("profil").style.display = "none";
    }
