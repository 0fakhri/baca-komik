$(document).keydown(function(e){
    if (e.keyCode == 37) {
      alert('flag{arrow kanan untuk ke halaman admin :) }');
      window.location.href = "admin.html";
    } else if (e.keyCode == 39) {
      alert('_________*****warning*****_________ \n _________hacker detected_________ \nanda akan masuk ke halaman yang sudah masuk')
      window.location.href = "index-masuk.html";
    }
});
