$(function () {

  $('.header__burger').on('click', function () {
    $('.nav').slideToggle();
  });

  $(".form__input-date").flatpickr({
    minDate: "today",
    dateFormat: "d-m-y",
    defaultDate: "today",
  });

  let swiper1 = new Swiper('.promotions__items', {

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      820: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      }
    },
    loop: true,
    navigation: {
      prevEl: '.promotions__button-prev',
      nextEl: '.promotions__button-next'
    },

  });

  let swiper2 = new Swiper('.rooms__images-container', {

    grabCursor: true,
    pagination: {
      el: '.swiper-pagination'
    },
    type: 'bullets',
    clickable: true,
    navigation: {
      prevEl: '.rooms__button-prev1',
      nextEl: '.rooms__button-next1'
    },

  });

});