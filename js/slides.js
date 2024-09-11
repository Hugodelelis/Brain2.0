const slides = document.querySelector('.slides');
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

setInterval(nextSlide, 10000);