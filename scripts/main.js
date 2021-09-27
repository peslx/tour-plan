const swiper = new Swiper(".swiper", {
  // Optional parameters

  // direction: "vertical",
  loop: true,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
});

const reviewsSlider = new Swiper(".reviews-slider", {
  loop: true,
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
});

// $.stellar({
//   horizontalOffset: 50,
//   verticalOffset: 0,
//   responsive: true,
// });

$(".parallax-window").parallax({ imageSrc: "../img/newsletter.jpg" });
jQuery(window).trigger("resize").trigger("scroll");
