var z = document.getElementById("dropdown");
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
    document.getElementById("profil").style.display = "flex";
    }
function tutup() {
    document.getElementById("tambah").style.display = "none";
    document.getElementById("verif").style.display = "none";
    document.getElementById("uang").style.display = "none";
    document.getElementById("profil").style.display = "none";
    }