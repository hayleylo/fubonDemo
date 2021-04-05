$(function () {
	const $btnTop = $("#btn-top");
  $(window).scroll(function (event) {
    let scroll = $(window).scrollTop();
    	if (scroll > 200) {
    		$btnTop.fadeIn();
    	} else {
    		$btnTop.fadeOut();
    	}
	});
  $btnTop.click(function(e) {
  	e.preventDefault();
  	$("html, body").animate({ scrollTop: 0 });
  });
});