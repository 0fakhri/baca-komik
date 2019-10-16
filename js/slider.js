const bungkus = document.querySelector(".tengah");
const  allbox = bungkus.children;
console.log(allbox);
let awal=0;
let akhir=4;

function kanan_klik(){
  console.log("jalan kanan");
  if(akhir<allbox.length-1){
    awal+=1;
    akhir+=1;
  }
  console.log(akhir);
  if(awal == 0){
    document.querySelector(".kiri_panah").style.color = "white";

  } else{
    document.querySelector(".kiri_panah").style.color = "black";
  }
  if(akhir == allbox.length-1){
    document.querySelector(".kanan_panah").style.color = "white";
  } else {
    document.querySelector(".kanan_panah").style.color = "black";
  }
  for (let i = 0; i<= allbox.length-1;i++){
    if(i>=awal && i<=akhir){
      allbox[i].style.display = "inline-block";
    } else{
      allbox[i].style.display = "none";
    }
  }
}
function kiri_klik(){
  console.log("jalan kiri");
  if(awal>0){
    awal-=1;
    akhir-=1;
  }
  if(awal == 0){
    document.querySelector(".kiri_panah").style.color = "white";
  } else{
    document.querySelector(".kiri_panah").style.color = "black";
  }
  if(akhir == allbox.length-1){
    document.querySelector(".kanan_panah").style.color = "white";
  } else {
    document.querySelector(".kanan_panah").style.color = "black";
  }
  for (let i = 0; i<= allbox.length-1;i++){
    if(i>=awal && i<=akhir){
      allbox[i].style.display = "inline-block";
    } else{
      allbox[i].style.display = "none";
    }
  }
}
