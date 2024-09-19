// Language switcher
function switchLanguage(lang) {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/[a-z]{2}\//, `/${lang}/`);
    window.location.href = newPath;
  }
  
  // Initialize slick carousel
  $(document).ready(function(){
    $('.news-carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });
  
  // Fixed header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#main-header').addClass('fixed');
    } else {
      $('#main-header').removeClass('fixed');
    }
  });