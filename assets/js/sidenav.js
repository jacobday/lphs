function openNav() {
  document.getElementById("sidenav").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
  document.getElementById("main").style.filter = "blur(3px)";
  $('body').addClass('stop-scrolling')
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
  document.getElementById("main").style.filter = "blur(0px)";
  $('body').removeClass('stop-scrolling')
}