document.addEventListener('DOMContentLoaded', function() {
    // Initialize Slick Carousel
    $("#latestNewsCarousel").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Equal height for cards
    function setEqualHeight() {
        var maxHeight = 0;
        $('#latestNewsCarousel .card').each(function() {
            $(this).css('height', 'auto'); // Reset height
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        });
        $('#latestNewsCarousel .card').height(maxHeight);
    }

    // Call setEqualHeight after the carousel is initialized
    $('#latestNewsCarousel').on('setPosition', function() {
        setEqualHeight();
    });

    // Call setEqualHeight on window resize
    $(window).on('resize', function() {
        setEqualHeight();
    });

    // Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // Initialize Bootstrap popovers
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })

    // Ensure dropdowns work
    var dropdownTriggerList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
    var dropdownList = dropdownTriggerList.map(function (dropdownTriggerEl) {
        return new bootstrap.Dropdown(dropdownTriggerEl)
    })

    console.log('Wales Gene Park website loaded successfully!')
});