$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 80) { // Adjust the value to change when the header becomes transparent
            $('#main-header').addClass('transparent-header');
        } else {
            $('#main-header').removeClass('transparent-header');
        }
    });
});  