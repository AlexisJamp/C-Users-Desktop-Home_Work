// Дз 31

const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

let currentIndex = 0;

function nextSlide() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = images.length - 1;
    }
    updateSlide();
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 0;
    }
    updateSlide();
}

function updateSlide() {
    const image = document.querySelector('.slider-image');
    image.alt = images[currentIndex];
    image.src = images[currentIndex];
}
