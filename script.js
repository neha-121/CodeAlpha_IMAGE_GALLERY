let currentSlideIndex = 1;

function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function showSlide(index) {
    let slides = document.getElementsByClassName('lightbox-image');
    if (index > slides.length) {
        currentSlideIndex = 1;
    }
    if (index < 1) {
        currentSlideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[currentSlideIndex - 1].style.display = 'block';
}

function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}

function changeSlide(step) {
    showSlide(currentSlideIndex += step);
}

// Initialize the first slide
showSlide(currentSlideIndex);
