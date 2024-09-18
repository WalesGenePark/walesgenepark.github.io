$(document).ready(function() {
  const carousel = $('.news-carousel');
  const items = $('.news-item');
  const dotsContainer = $('.carousel-dots');
  let currentIndex = 0;
  const itemsPerSlide = 3; // Number of items per slide

  // Create dots
  const totalSlides = Math.ceil(items.length / itemsPerSlide);
  for (let i = 0; i < totalSlides; i++) {
    dotsContainer.append(`<div class="dot" data-index="${i}"></div>`);
  }

  const dots = $('.dot');
  dots.first().addClass('active');

  function updateCarousel(index) {
    currentIndex = index;
    const translateX = -(currentIndex * 100 / totalSlides);
    carousel.css({
      'transform': `translateX(${translateX}%)`,
      'transition': 'transform 0.5s ease'
    });
    dots.removeClass('active').eq(currentIndex).addClass('active');
  }

  function nextSlide() {
    updateCarousel((currentIndex + 1) % totalSlides);
  }

  dots.on('click', function() {
    updateCarousel($(this).data('index'));
  });

  setInterval(nextSlide, 5000);
});