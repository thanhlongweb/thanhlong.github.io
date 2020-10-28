$(".main-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'><i/>", "<i class='fa fa-angle-right'><i/>"],
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: false
});
$(".categories-slider").owlCarousel({
    loop: true,
    margin: 22,
    items: 5,
    dots: false,
    nav: true,
    navText: ["<span class='arrow_carrot-left'><span/>", "<span class='arrow_carrot-right'><span/>"],
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: false,
    responsive: {
        0: {
            items: 1,
            margin: 0
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
});