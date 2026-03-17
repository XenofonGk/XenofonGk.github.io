/* ============================================
   MAIN.JS — Three.js starfield + GSAP scroll
   ============================================ */

// ─── THREE.JS SETUP ───────────────────────────

const canvas   = document.getElementById('bg');
const scene    = new THREE.Scene();
const camera   = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
camera.position.z = 50;

// ─── STAR FIELD ───────────────────────────────

const STAR_COUNT = 6000;
const positions  = new Float32Array(STAR_COUNT * 3);

for (let i = 0; i < STAR_COUNT; i++) {
  positions[i * 3]     = (Math.random() - 0.5) * 1800; // x
  positions[i * 3 + 1] = (Math.random() - 0.5) * 1800; // y
  positions[i * 3 + 2] = (Math.random() - 0.5) * 1800; // z
}

const starGeo = new THREE.BufferGeometry();
starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const starMat = new THREE.PointsMaterial({
  color:          0xffffff,
  size:           0.8,
  sizeAttenuation: true,
  transparent:    true,
  opacity:        0.75,
});

const stars = new THREE.Points(starGeo, starMat);
scene.add(stars);

// ─── SCROLL TRACKING ──────────────────────────

let scrollY        = 0;
let prevScrollY    = 0;
let scrollVelocity = 0;
let smoothScrollY  = 0;

window.addEventListener('scroll', () => {
  prevScrollY    = scrollY;
  scrollY        = window.scrollY;
  scrollVelocity = Math.abs(scrollY - prevScrollY);
});

// ─── ANIMATION LOOP ───────────────────────────

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  const t = clock.getElapsedTime();

  // Smooth scroll lerp
  smoothScrollY += (scrollY - smoothScrollY) * 0.06;

  // Idle drift rotation
  stars.rotation.x = t * 0.007;
  stars.rotation.y = t * 0.011;

  // Camera moves forward + sideways as you scroll
  camera.position.z = 50 - smoothScrollY * 0.022;
  camera.position.x = Math.sin(smoothScrollY * 0.0004) * 4;
  camera.position.y = -smoothScrollY * 0.003;

  // Warp effect: stars stretch/brighten on fast scroll
  starMat.size    = 0.8 + Math.min(scrollVelocity * 0.09, 2.8);
  starMat.opacity = 0.75 + Math.min(scrollVelocity * 0.008, 0.2);

  renderer.render(scene, camera);
}

animate();

// ─── RESIZE ───────────────────────────────────

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// ─── GSAP ANIMATIONS ──────────────────────────

gsap.registerPlugin(ScrollTrigger);

// Hero — plays on load
gsap.timeline({ delay: 0.2 })
  .from('.hero-tag',  { y: 20,  opacity: 0, duration: 0.7 })
  .from('#hero h1',   { y: 60,  opacity: 0, duration: 1.0 }, '-=0.3')
  .from('.hero-sub',  { y: 30,  opacity: 0, duration: 0.7 }, '-=0.4')
  .from('.btn-primary', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
  .from('.scroll-hint', { opacity: 0, duration: 1.0 }, '-=0.1');

// About
gsap.from('#about .section-tag', {
  scrollTrigger: { trigger: '#about', start: 'top 78%' },
  x: -30, opacity: 0, duration: 0.6,
});
gsap.from('#about h2', {
  scrollTrigger: { trigger: '#about', start: 'top 73%' },
  y: 40, opacity: 0, duration: 0.8, delay: 0.1,
});
gsap.from('.about-text p', {
  scrollTrigger: { trigger: '#about', start: 'top 68%' },
  y: 25, opacity: 0, duration: 0.7, stagger: 0.2, delay: 0.2,
});
gsap.from('.stat', {
  scrollTrigger: { trigger: '#about', start: 'top 62%' },
  x: 20, opacity: 0, duration: 0.6, stagger: 0.15, delay: 0.3,
});

// Skills
gsap.from('#skills .section-tag', {
  scrollTrigger: { trigger: '#skills', start: 'top 78%' },
  x: -30, opacity: 0, duration: 0.6,
});
gsap.from('#skills h2', {
  scrollTrigger: { trigger: '#skills', start: 'top 73%' },
  y: 40, opacity: 0, duration: 0.8, delay: 0.1,
});
gsap.from('.skill-group', {
  scrollTrigger: { trigger: '#skills', start: 'top 68%' },
  y: 30, opacity: 0, duration: 0.7, stagger: 0.12, delay: 0.2,
});
gsap.from('.tags span', {
  scrollTrigger: { trigger: '#skills', start: 'top 62%' },
  scale: 0.75, opacity: 0, duration: 0.4, stagger: 0.04, delay: 0.4,
});

// Projects
gsap.from('#projects .section-tag', {
  scrollTrigger: { trigger: '#projects', start: 'top 78%' },
  x: -30, opacity: 0, duration: 0.6,
});
gsap.from('#projects h2', {
  scrollTrigger: { trigger: '#projects', start: 'top 73%' },
  y: 40, opacity: 0, duration: 0.8, delay: 0.1,
});
gsap.from('.card', {
  scrollTrigger: { trigger: '#projects', start: 'top 68%' },
  y: 55, opacity: 0, duration: 0.8, stagger: 0.15, delay: 0.2,
});

// Contact
gsap.from('#contact .section-tag, #contact h2, .contact-sub', {
  scrollTrigger: { trigger: '#contact', start: 'top 78%' },
  y: 30, opacity: 0, duration: 0.8, stagger: 0.12,
});
gsap.from('.contact-btns a', {
  scrollTrigger: { trigger: '#contact', start: 'top 70%' },
  scale: 0.88, opacity: 0, duration: 0.6, stagger: 0.12, delay: 0.35,
});
gsap.from('.contact-loc', {
  scrollTrigger: { trigger: '#contact', start: 'top 65%' },
  opacity: 0, duration: 0.7, delay: 0.6,
});

// ─── NAV — HIDE ON SCROLL DOWN ────────────────

const nav = document.getElementById('nav');
let lastY = 0;

window.addEventListener('scroll', () => {
  const currentY = window.scrollY;

  if (currentY < 100) {
    nav.style.transform = 'translateY(0)';
  } else if (currentY > lastY) {
    nav.style.transform = 'translateY(-100%)';   // scrolling down → hide
  } else {
    nav.style.transform = 'translateY(0)';        // scrolling up → show
  }

  lastY = currentY;
});

// ─── SMOOTH ANCHOR SCROLL ─────────────────────

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
