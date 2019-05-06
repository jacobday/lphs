$(function() {
  $('#lp-logo').hover(function() {
    $('.topnav').css('box-shadow', '0 4px 8px rgba(255,102,0,1)');
  }, function() {
    $('.topnav').css('box-shadow', '');
  });
});

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});


$(function() {
  $('.btonagel').hover(function() {
    $('#btonagel').css('height', '412px');
    $('#btonagel').css('width', '208px');
    $('#btonagel').css('opacity', '1');
}, function() {
    $('#btonagel').css('height', '0');
    $('#btonagel').css('width', '0');
    $('#btonagel').css('opacity', '0');

  });
});

$(function() {
  $('.supp').hover(function() {
    $('#supp').css('height', '412px');
    $('#supp').css('width', '208px');
    $('#supp').css('opacity', '1');
 }, function() {
    $('#supp').css('height', '0');
    $('#supp').css('width', '0');
    $('#supp').css('opacity', '0');
  });
});

$(function() {
  $('.kstaats').hover(function() {
    $('#kstaats').css('height', '412px');
    $('#kstaats').css('width', '208px');
    $('#kstaats').css('opacity', '1');
 }, function() {
    $('#kstaats').css('height', '0');
    $('#kstaats').css('width', '0');
    $('#kstaats').css('opacity', '0');
  });
});

$(function() {
  $('.cschafer').hover(function() {
    $('#cschafer').css('height', '412px');
    $('#cschafer').css('width', '208px');
    $('#cschafer').css('opacity', '1');
 }, function() {
    $('#cschafer').css('height', '0');
    $('#cschafer').css('width', '0');
    $('#cschafer').css('opacity', '0');
 });
});

$(function() {
  $('.hwireman').hover(function() {
    $('#hwireman').css('height', '412px');
    $('#hwireman').css('width', '208px');
    $('#hwireman').css('opacity', '1');
}, function() {
    $('#hwireman').css('height', '0');
    $('#hwireman').css('width', '0');
    $('#hwireman').css('opacity', '0');
  });
});