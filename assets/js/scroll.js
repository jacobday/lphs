

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$(document).ready(function(){
    var outerContent = $('.news-row');
    var innerContent = $('.news-row > div');
    
    outerContent.scrollLeft(550);
    $("html, body").animate({ scrollTop: 0 }, "slow");
});