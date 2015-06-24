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
		var $to = $(this).attr('class');
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
			max: 3,
			subs: [
				{
					name: 'Terrace',
					index: 1
				},{
					name: 'Great Room',
					index: 2
				},{
					name: 'Kitchen',
					index: 3
				}
			]
		},{
			title: 'Floor Plan',
			min: 4,
			max: 4
		},{
			title: 'Property Features',
			min: 5,
			max: 10,
			subs: [
				{
					name: 'Service',
					index: 6
				},
				{
					name: 'Pool',
					index: 7
				},
				{
					name: 'Fitness',
					index: 8
				},
				{
					name: 'Dining',
					index: 9
				},
				{
					name: 'More',
					index: 10
				}
			]
		},{
			title: 'Neighborhood',
			min: 11,
			max: 13,
			subs: [
				{
					name: 'Santa Monica Beach',
					index: 11
				},
				{
					name: 'Santa Monica Place',
					index: 12
				},
				{
					name: 'Tongva Park',
					index: 13
				}
			]
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
	function updateAccordion(){
		var $view = $('body').attr('class');
		$view = $view.replace(/fp-viewing-/,'').replace(/-slide\d+/,'');
		$view = parseInt($view);
		
		for(var j = 0; j < sections.length; j++){
			if ($view >= sections[i].min && $view <= sections[i].max){
				var $index = sections[j].min;
				$('to')
			}
			if(typeof sections[j].subs != "undefined"){
				for(var k = 0; k < sections[j].subs.length; k++){
					var $subIndex = sections[j].subs[k].index;
					if($view == $subIndex){
						$('#toSect'+($subIndex+1)).addClass('active');
					}else{
						$('#toSect'+($subIndex+1)).removeClass('active');
					}
				}
			}
		}
	}
	setInterval(updateHeader,1);
	
});

