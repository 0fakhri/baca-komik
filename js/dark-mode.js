
var isdark = false;
function toggleDarkLight(){
  console.log(isdark);
  if (isdark){
      document.documentElement.setAttribute('data-theme', 'light');
      document.getElementById("dark-mode").style.background = "#ccc";
      localStorage.setItem('theme', 'light');
      isdark = false;
    }
    else {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.getElementById("dark-mode").style.background = "#444";
      localStorage.setItem('theme', 'dark');
      isdark = true;
    }
}
