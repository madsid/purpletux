// jshint devel:true
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 5) {
            $('.navbar-purpletux').css({ "background-color": '#8d189f', 'padding-top': '3px', 'opacity': '0.94' });
        }
        if ($(window).scrollTop() < 5) {
            $('.navbar-purpletux').css({ "background-color": 'transparent', 'padding-top': '40px', 'opacity': '1' });
        }
    });

    
});