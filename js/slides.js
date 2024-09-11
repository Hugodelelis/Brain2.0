const slides = document.querySelector('.slides');
const dotsContainer = document.querySelector('.navigation-dots');
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slide').length;

for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => moveToSlide(i));
    dotsContainer.appendChild(dot);
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function moveToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateSlider();
}

function updateSlider() {
    slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
    updateDots();
}

setInterval(nextSlide, 10000); 

