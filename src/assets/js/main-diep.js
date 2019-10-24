// //paralax
$(document).ready(function() {
	$(window).bind("scroll", function() {
        console.log("aaaaa")
		parallax();
	});
});

//cho di chuyển theo chiều hướng lên
function parallax() {
    var scrollPos = $(window).scrollTop();
    $('.parallax').css('backgroundPosition', "50% " + Math.round(($('.parallax').offset().top - scrollPos) * 0.5) + "px");
	//xem them https://thachpham.com/web-development/javascript/web-design-ky-thuat-parallax-scrolling-phan-2.html
}

