$(document).ready(function() {
    $('.only-mobile').on('click', function (event) {
        event.preventDefault();
        $('.only-mobile').next().toggleClass('visible');
    });
});