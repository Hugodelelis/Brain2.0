const slides = document.querySelector('.slides');
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slide').length;

// Função para ir ao próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

// Função para ir ao slide anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

// Muda de slide automaticamente a cada 10 segundos
setInterval(nextSlide, 10000);