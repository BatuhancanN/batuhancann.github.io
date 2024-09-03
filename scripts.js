//typed.js

const typed = new Typed('.multiple-text', {
    strings: ['Full-Stack Developer', 'Kotlin, C# WPF, React, PHP', 'OracleDB, MySQL, MSSQL' , 'Grafik Tasarım'],
    typeSpeed: 40,
    backSpeed: 20,
    backDelay: 350,
    loop: true
});


//scroll reveal

ScrollReveal({ 
    distance: '200px',
    duration: 800,
    delay: 20,
    reset: true

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-box, .project-box', { origin: 'bottom' });
ScrollReveal().reveal('.social-icons, .btn-group', { origin: 'left' });

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}