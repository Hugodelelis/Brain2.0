var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {

      320: {
          slidesPerView: 1,
      },

      689: {
          slidesPerView: 2,
      },

      968: {
          slidesPerView: 3,
      },

      1331: {
          slidesPerView: 4,
      },

      1582: {
          slidesPerView: 5,
      },
  }
});

const buttons = document.querySelectorAll();
buttons.forEach(button => {
  button.addEventListener('click', () => {
    swiper.slideNext();
  });
});