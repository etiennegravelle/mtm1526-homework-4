// JavaScript Document

$(document).ready(function() {
	
	$('#tab-group > div').not('.current').hide();
	
	var tabToShow = $('#tab-group .current');
		
	
	$('.tab-buttons a').on('click', function (ev) {
		
		$(tabToShow).hide();
		tabToShow = $(this).attr('href');
		$(tabToShow).show('slide');
		console.log(tabToShow);
		$('.current').removeClass('current');
		$(tabToShow).addClass('current');
		var current = $('#tab-group .current').index();
		
	});
});