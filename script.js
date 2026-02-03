/* =========================================
   1. SLIDER LOGIC
   ========================================= */
const track = document.getElementById('track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalSlides = 6; 

function updateSlide() {
    // Moves the track left by 100% * index
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    // (0 + 1) % 6 = 1 ... (5 + 1) % 6 = 0 (Loops back to start)
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    // (0 - 1 + 6) % 6 = 5 (Loops to end)
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}

// Click Listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

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
    // 1. Get the center of the screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // 2. Calculate distance of mouse from center
    // We divide by 20 to make the movement subtle and smooth.
    // Negative sign (-) makes shadow move Opposite to the "Sun" (Mouse).
    const xWalk = (centerX - e.clientX) / 20;
    const yWalk = (centerY - e.clientY) / 20;

    // 3. Apply the shadow
    // Format: h-shadow v-shadow blur color
    heroText.style.textShadow = `
        ${xWalk}px ${yWalk}px 15px rgba(0, 0, 0, 0.9)
    `;
});
