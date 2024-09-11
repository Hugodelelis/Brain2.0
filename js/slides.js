const slides = document.querySelector('.slides');
const dotsContainer = document.querySelector('.navigation-dots');
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slide').length;
let autoSlideInterval;
let autoSlideTimeout;

for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        moveToSlide(i);
        resetAutoSlide();
    });
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

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 10000); // 10 segundos
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval); 
    clearTimeout(autoSlideTimeout);

    autoSlideTimeout = setTimeout(startAutoSlide, 10000);
}

slides.addEventListener('transitionend', resetAutoSlide);
dotsContainer.addEventListener('click', resetAutoSlide);

startAutoSlide();
