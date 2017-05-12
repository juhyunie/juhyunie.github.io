$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['#F2DEBE', 'white', 
		'#0052E2'],
		keyboardScrolling: true,
		scrollingSpeed: 900,
		controlArrows: true,

	});

	$('.triangle').click(function(){$('#sources').toggle();});
	$('.triangle').on("click", function (event) {
    $('.triangle-img').toggleClass('rotate');
    $('.triangle-img').toggleClass('rotate-reset');
});


});