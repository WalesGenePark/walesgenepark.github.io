document.addEventListener('DOMContentLoaded', function() {
    // Initialize Owl Carousel
    $("#latestNewsCarousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: false, // Disable navigation arrows
        dots: true, // Enable navigation dots
        dotsEach: 1, // Show a dot for each item
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        },
        onInitialized: carouselInitialized
    });

    function carouselInitialized(event) {
        var element = event.target;
        var items = event.item.count;
        var size = event.page.size;
        
        // Equalize card heights
        var maxHeight = 0;
        $(element).find('.card').each(function() {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        });
        $(element).find('.card').height(maxHeight);
    }

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

    console.log('Wales Gene Park website loaded successfully!')
});

// Example function for handling form submissions (if needed)
function handleFormSubmit(event) {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted!');
}

// Example function for loading more content (if needed)
function loadMoreContent() {
    // Add your logic to load more content here
    console.log('Loading more content...');
}