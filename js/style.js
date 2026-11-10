// ===== Random hero wallpaper =====
(function randomHeroWallpaper() {
  const heroOverlay = document.querySelector('.hero-overlay');
  if (!heroOverlay) return;

  const wallpapers = [
    'img/wall1.png',
    'img/wall2.png'
  ];
  const chosen = wallpapers[Math.floor(Math.random() * wallpapers.length)];

  heroOverlay.style.backgroundImage =
    'linear-gradient(90deg, rgba(10,6,3,.85) 0%, rgba(10,6,3,.5) 45%, rgba(10,6,3,.15) 100%),' +
    ' url("' + chosen + '")';
})();

// ===== Header scroll effect =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===== Mobile menu toggle =====
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
  });

  // Close menu when a link is clicked
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
    });
  });
}

// ===== Active nav link on click =====
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// ===== Simple fade-in on scroll =====
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const fadeInElements = document.querySelectorAll(
  '.collection-card, .product-card, .section-title, .story-content, .feature'
);

fadeInElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity .7s ease, transform .7s ease';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeInElements.forEach(el => observer.observe(el));