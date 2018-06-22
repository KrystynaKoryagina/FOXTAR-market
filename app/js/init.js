;(function($) {
    // Init ion range slider
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

    // Init slider
    $('.trending-product-carousel').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 4
    });
})(jQuery);