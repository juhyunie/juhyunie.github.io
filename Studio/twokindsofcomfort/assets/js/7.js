$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['#0052E2', '#F2DEBE', 
		'white'],
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