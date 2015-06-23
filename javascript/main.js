$(document).ready(function() {
	$('#fullpage').fullpage({
		verticalCentered: false,
		slidesNavigation: true,
		scrollOverflow: true
	});
	//MENU ACTIVATION
	$('#menu-close, #menu a').click(function(){
		$('#menu-overlay').removeClass('active');
	});
	$('#menu-open').click(function(){
		$('#menu-overlay').addClass('active');
	});
	//MENU NAVLINKS
	$('#menu a, #sidenav li a').click(function(){
		var $to = $(this).attr('id');
		$to = $to.replace('toSect','');
		$to = parseInt($to);
		$.fn.fullpage.silentMoveTo($to);
	});
});