$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['#F7F6F4', 'black', 
		'black'],
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