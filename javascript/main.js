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
	//DYNAMIC HEADER TEXT
	var sections = [
		{
			title: 'Penthouse 901',
			min: 0,
			max: 0
		},{
			title: 'Penthouse 901',
			min: 1,
			max: 3
		},{
			title: 'Floor Plan',
			min: 4,
			max: 4
		},{
			title: 'Property Features',
			min: 5,
			max: 10
		},{
			title: 'Neighborhood',
			min: 11,
			max: 13
		},{
			title: 'Contact Us',
			min: 14,
			max: 14
		}
	], $htext = $('#htext');
	
	function updateHeader() {
		var $view = $('body').attr('class');
		$view = $view.replace(/fp-viewing-/,'').replace(/-slide\d+/,'');
		$view = parseInt($view);
		
		for(var i = 0; i < sections.length; i++){
			if ($view >= sections[i].min && $view <= sections[i].max){
				$htext.text(sections[i].title);
			}	
		}
	}
	setInterval(updateHeader,1);
	
});

