document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. SCROLL ANIMATIONS
       ========================================= */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));


    /* =========================================
       2. SLIDER LOGIC
       ========================================= */
    const track = document.getElementById('track');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');

    let currentIndex = 0;
    const totalSlides = 4; // We have 4 slides in this version

    function updateSlide() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    if(btnNext) {
        btnNext.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlide();
        });
    }

    if(btnPrev) {
        btnPrev.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlide();
        });
    }


    /* =========================================
       3. SUN / SHADOW EFFECT (Interactive Hero)
       ========================================= */
    const heroText = document.querySelector('.hero h1');

    document.addEventListener('mousemove', (e) => {
        if(!heroText) return;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        // Divide by 40 for a subtle, high-end feel
        const xWalk = (centerX - e.clientX) / 40;
        const yWalk = (centerY - e.clientY) / 40;

        heroText.style.textShadow = `
            ${xWalk}px ${yWalk}px 25px rgba(0, 0, 0, 0.7)
        `;
    });
});
