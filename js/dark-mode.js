var isdark;

$(document).ready(function(){
  $("#dark-mode").click(function(){
    toggleDarkLight();
  });
});

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    $(document.documentElement).attr('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        $("#dark-mode").css("background", "#444");
        isdark =true;
    } else {
      $("#dark-mode").css("background", "#ccc");
        isdark = false;
    }
}
function toggleDarkLight(){
  console.log(!isdark);
  if (isdark){
      $(document.documentElement).attr('data-theme', 'light');
      $("#dark-mode").css("background", "#ccc");
      localStorage.setItem('theme', 'light');
      isdark = false;
    }
    else {
      $(document.documentElement).attr('data-theme', 'dark');
      $("#dark-mode").css("background", "#444");
      localStorage.setItem('theme', 'dark');
      isdark = true;
    }
}
