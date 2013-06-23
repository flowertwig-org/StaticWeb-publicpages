(function($) {

    var page = $('<div>', {
        'class': 'sw-page',
        'data-sw-page-id': '/about'
    });
    var content = $('<div class="container content"><div class="hero-unit"><h2>To be written</h2><p>This part has not been written yet, please feel free to come with suggestions :)</p></div></div>');
    page.append(content);

    $('body').swPages('add', page);
})(jQuery);