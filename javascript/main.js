$(document).ready(function() {
	$('#fullpage').fullpage({
		verticalCentered: false,
		slidesNavigation: true,
		scrollOverflow: true
	});
	//MENU ACTIVATION
	$('#menu-open').click(function(){
		$('#menu-overlay').addClass('active');
		$.fn.fullpage.setAllowScrolling(false);
		$.fn.fullpage.setKeyboardScrolling(false);
	});
	$('#menu-close, #menu a').click(function(){
		$('#menu-overlay').removeClass('active');
		$.fn.fullpage.setAllowScrolling(true);
		$.fn.fullpage.setKeyboardScrolling(true);
	});
	//MENU NAVLINKS
	$('#menu a, #sidenav li a').click(function(){
		var $to = $(this).attr('id');
		$to = $to.replace('toSect','');
		$to = parseInt($to);
		$.fn.fullpage.silentMoveTo($to);
	});
	//TERMS OF USE
	$('#open-terms').click(function(){
		$('.terms-wrapper').addClass('active');
		$.fn.fullpage.setAllowScrolling(false);
		$.fn.fullpage.setKeyboardScrolling(false);
	});
	$('#close-terms a').click(function(){
		$('.terms-wrapper').removeClass('active');
		$.fn.fullpage.setAllowScrolling(true);
		$.fn.fullpage.setKeyboardScrolling(true);
	});
});