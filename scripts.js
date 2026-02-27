// Typed.js — Hero text animation
const typed = new Typed('.multiple-text', {
    strings: [
        'Full-Stack Developer',
        'React Native &amp; .NET',
        'Oracle &amp; MSSQL &amp; PostgreSQL',
        'Mobil &amp; Masaüstü Çözümler'
    ],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2500,
    startDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: false
});

// ScrollReveal — Scroll animations
ScrollReveal({
    distance: '60px',
    duration: 800,
    delay: 100,
    reset: false,
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});

ScrollReveal().reveal('.badge', { origin: 'top', delay: 100 });
ScrollReveal().reveal('.home-content h1', { origin: 'left', delay: 200 });
ScrollReveal().reveal('.hero-desc', { origin: 'left', delay: 300 });
ScrollReveal().reveal('.btn-group', { origin: 'bottom', delay: 400 });
ScrollReveal().reveal('.social-icons', { origin: 'bottom', delay: 500 });
ScrollReveal().reveal('.home-img', { origin: 'right', delay: 400 });

ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.about-text p', { origin: 'left', interval: 150 });
ScrollReveal().reveal('.stat-card', { origin: 'right', interval: 150 });
ScrollReveal().reveal('.skill-category', { origin: 'bottom', interval: 150 });
ScrollReveal().reveal('.project-card', { origin: 'bottom', interval: 150 });

// Toggle mobile navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky header
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close mobile menu on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
