$(function() {
  $('#a').hover(function() {
    $('.topnav').css('box-shadow', '0 4px 8px rgba(255,102,0,1)');
  }, function() {
    $('.topnav').css('box-shadow', '');
  });
});