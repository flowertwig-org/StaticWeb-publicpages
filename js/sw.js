$(document).ready(function() {
    $('.only-mobile').on('click', function (event) {
        event.preventDefault();
        $('.only-mobile').next().toggleClass('visible');
    });

    $('.in-page-read-more').on('click', function (event) {
        event.preventDefault();
        var link = $(this);
        link.closest('.in-page-read-container').find('.in-page-more-text').addClass('visible');
        link.addClass('hidden');
    });

});