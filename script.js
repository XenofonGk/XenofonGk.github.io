
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

// Click Events
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Keyboard Support
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

const heroSection = document.querySelector('.hero');
const heroText = document.querySelector('.hero h1');

heroSection.addEventListener('mousemove', (e) => {
    // 1. Get the width and height of the window
    const { offsetWidth: width, offsetHeight: height } = heroSection;

    // 2. Get mouse position
    let { offsetX: x, offsetY: y } = e;

    // 3. Fix for hovering over children elements
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    // 4. Calculate how far mouse is from the center (The "Walk")
    // If mouse is left (-), shadow goes right (+). 
    // We divide by a factor (e.g., 20) to keep the shadow contained.
    const xWalk = Math.round((width / 2 - x) / 20);
    const yWalk = Math.round((height / 2 - y) / 20);

    // 5. Apply the Shadow
    // drop-shadow(x-offset y-offset blur color)
    heroText.style.filter = `drop-shadow(${xWalk}px ${yWalk}px 10px rgba(0,0,0,0.8))`;
});

// Reset when mouse leaves (optional, brings shadow back to center)
heroSection.addEventListener('mouseleave', () => {
    heroText.style.filter = `drop-shadow(0px 0px 10px rgba(0,0,0,0.5))`;
});
