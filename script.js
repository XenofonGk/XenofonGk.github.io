document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. SLIDER LOGIC
       ========================================= */
    const track = document.getElementById('track');
    
    // Variables match the new HTML IDs (btnPrev, btnNext)
    const buttonPrev = document.getElementById('btnPrev');
    const buttonNext = document.getElementById('btnNext');

    let currentIndex = 0;
    const totalSlides = 6; 

    function updateSlide() {
        // Moves the track left by 100% * index
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        // Loops: 0 -> 1 -> ... -> 5 -> 0
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlide();
    }

    function prevSlide() {
        // Loops: 0 -> 5 -> 4...
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlide();
    }

    // Click Events
    if(buttonNext) buttonNext.addEventListener('click', nextSlide);
    if(buttonPrev) buttonPrev.addEventListener('click', prevSlide);

    // Keyboard Events
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });


    /* =========================================
       2. SUN / SHADOW EFFECT
       ========================================= */
    const heroText = document.querySelector('.hero h1');

    document.addEventListener('mousemove', (e) => {
        if(!heroText) return;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Divide by 25 for subtle effect
        // Negative sign moves shadow opposite to mouse (Light Source logic)
        const xWalk = (centerX - e.clientX) / 25;
        const yWalk = (centerY - e.clientY) / 25;

        heroText.style.textShadow = `
            ${xWalk}px ${yWalk}px 15px rgba(0, 0, 0, 0.9)
        `;
    });

});
