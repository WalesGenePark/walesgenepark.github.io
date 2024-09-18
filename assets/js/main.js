$(document).ready(function() {
    const carousel = $('.news-carousel');
    const items = $('.news-item');
    const dotsContainer = $('.carousel-dots');
    let currentIndex = 0;
  
    // Create dots
    items.each((index) => {
      dotsContainer.append(`<div class="dot" data-index="${index}"></div>`);
    });
  
    const dots = $('.dot');
    dots.first().addClass('active');
  
    function updateCarousel(index) {
      currentIndex = index;
      carousel.css('transform', `translateX(-${currentIndex * 100}%)`);
      dots.removeClass('active').eq(currentIndex).addClass('active');
    }
  
    function nextSlide() {
      updateCarousel((currentIndex + 1) % items.length);
    }
  
    dots.on('click', function() {
      updateCarousel($(this).data('index'));
    });
  
    setInterval(nextSlide, 5000);
  });