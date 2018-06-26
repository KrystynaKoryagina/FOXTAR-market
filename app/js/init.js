;(function($) {
    // Init ion range slider
    if ($('#price-range').length) {
        $('#price-range').ionRangeSlider({
            type: 'double',
            grid: false,
            min: 0,
            max: 1000,
            from: 0,
            to: 600,
            prefix: "$",
            hide_min_max: true
        });
    }

    // Init slider
    if ($('.trending-product-carousel').length) {
        $('.trending-product-carousel').slick({
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 4,
            slidesToScroll: 4
        });
    }

    // Init form styler
    if ($('.select-styler, .input-file-styler').length) {
        $('.select-styler, .input-file-styler').styler({
            fileBrowse: 'Choose file',
            filePlaceholder: 'No File Choosen'
        });
    }

    // Init slicknav
    if($('.header-nav').length) {
        $('.header-nav').slicknav({
            appendTo: '.bottom-header .container',
            label: ''
        });
    }

})(jQuery);