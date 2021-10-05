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

$(".parallax-window").parallax({ imageSrc: "img/newsletter.jpg" });
jQuery(window).trigger("resize").trigger("scroll");

// function send(event, php) {
//   console.log("Отправка запроса");
//   event.preventDefault ? event.preventDefault() : (event.returnValue = false);
//   var req = new XMLHttpRequest();
//   req.open("POST", php, true);
//   req.onload = function () {
//     if (req.status >= 200 && req.status < 400) {
//       json = JSON.parse(this.response); // Ебанный internet explorer 11
//       console.log(json);

//       // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
//       if (json.result == "success") {
//         // Если сообщение отправлено
//         alert("Сообщение отправлено");
//       } else {
//         // Если произошла ошибка
//         alert("Ошибка. Сообщение не отправлено");
//       }
//       // Если не удалось связаться с php файлом
//     } else {
//       alert("Ошибка сервера. Номер: " + req.status);
//     }
//   };

//   // Если не удалось отправить запрос. Стоит блок на хостинге
//   req.onerror = function () {
//     alert("Ошибка отправки запроса");
//   };
//   req.send(new FormData(event.target));
// }

$(document).ready(function () {
  const burger = $("#burger");
  burger.click((e) => {
    // console.log($(".navbar-bottom"));
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
});
