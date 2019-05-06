document.body.classList.add('js-loading');

window.addEventListener("load", showPage, false);

function showPage() {
  document.body.classList.remove('js-loading');
  $('.load-text').html('Loaded');
  $('.spinner').css('opacity', '0');
  $('.load-text').css('top', '1%');
  $('.load-img').css('display', 'none');
  $('.preloader').slideUp(800);
}