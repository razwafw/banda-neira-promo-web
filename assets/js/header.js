$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > $("#main-content").position().top + 10) { 
            $('#main-header').addClass('transparent-header');
        } else {
            $('#main-header').removeClass('transparent-header');
        }
    });
});  