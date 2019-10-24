
var isdark = false;
function toggleDarkLight(){
  console.log(isdark);
  if (isdark){
      document.documentElement.setAttribute('data-theme', 'light');
      isdark = false;
    }
    else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      isdark = true;
    }
}
