var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20, 
  freeMode: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 5,
    },
  },
});


const buttons = document.querySelectorAll();
buttons.forEach(button => {
  button.addEventListener('click', () => {
    swiper.slideNext();
  });
});