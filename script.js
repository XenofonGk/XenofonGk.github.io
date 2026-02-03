/* =========================================
   1. SLIDER LOGIC
   ========================================= */
const track = document.getElementById('track');
// Rename variables to avoid conflict with HTML IDs
const btnPrev = document.getElementById('prevBtn'); 
const btnNext = document.getElementById('nextBtn');

let currentIndex = 0;
const totalSlides = 6; 

function updateSlide() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}

// Click Listeners (Use the new variable names)
btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

// Keyboard Listeners
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});


/* =========================================
   2. SUN / SHADOW EFFECT
   ========================================= */
const heroText = document.querySelector('.hero h1');

document.addEventListener('mousemove', (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const xWalk = (centerX - e.clientX) / 20;
    const yWalk = (centerY - e.clientY) / 20;

    heroText.style.textShadow = `
        ${xWalk}px ${yWalk}px 15px rgba(0, 0, 0, 0.9)
    `;
});
