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

const burger = $("#burger");
burger.click((e) => {
  // console.log($(".navbar-bottom"));
  $(".menu-button").toggleClass("menu-button--active");
  $(".menu-button__line").toggleClass("menu-button__line--active");
  $(".navbar-bottom").toggleClass("navbar-bottom--visible");
});

$(".parallax-window").parallax({ imageSrc: "img/newsletter.jpg" });

jQuery(window).trigger("resize").trigger("scroll");
