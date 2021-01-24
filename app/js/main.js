$(function () {

  $(".form__input-date").flatpickr({
    minDate: "today",
    dateFormat: "d-m-y",
    defaultDate: "today",
  });

  new Swiper('.promotions__items', {

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

});