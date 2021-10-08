const swiper = new Swiper(".swiper", {
  loop: true,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

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

$(".parallax-window").parallax({ imageSrc: "img/newsletter.jpg" });
jQuery(window).trigger("resize").trigger("scroll");

$(document).ready(function () {
  const burger = $("#burger");
  burger.click((e) => {
    // console.log($(".navbar-bottom"));
    $(".navbar-menu").toggleClass("navbar-menu--mobile");
    $(".menu-button").toggleClass("menu-button--active");
    $(".menu-button__line").toggleClass("menu-button__line--active");
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  let modalBtn = $("[data-toggle=modal]");
  const closeBtn = $(".modal__close");
  const modalWrapper = $(".modal__wrapper");
  const modalWindow = $(".modal__window");
  modalBtn.click(() => {
    modalWrapper.addClass("modal__wrapper--visible");
    modalWindow.addClass("modal__window--visible");
  });

  closeBtn.click(() => {
    modalWrapper.removeClass("modal__wrapper--visible");
    modalWindow.removeClass("modal__window--visible");
  });

  $(document).keydown(function (e) {
    if (e.key === "Escape") {
      modalWrapper.removeClass("modal__wrapper--visible");
      modalWindow.removeClass("modal__window--visible");
    }
  });
});

$(".validate-form").each(function () {
  $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "Your name must contain at least two symbols",
      },

      phone: {
        required: "Entering phone-number is necessary",
      },

      email: {
        required: "We need your email to contact you",
        // email: "Your email address must be in the format of name@domain.com",
      },
      msg: {
        required: "Describe your problem or ask question",
      },
    },
  });

  $(".phone_with_ddd").mask("+7 (999) 999-99-99");
  AOS.init();
});
