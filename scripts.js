


//typed.js

const typed = new Typed('.multiple-text', {
    strings: ['Full-Stack Developer', 'Kotlin, .NET MVC, React, PHP', 'OracleDB, MySQL, MSSQL' , 'Grafik Tasarım'],
    typeSpeed: 80,
    backSpeed: 10,
    backDelay: 300,
    loop: true
});


//scroll reveal

ScrollReveal({ 
    distance: '200px',
    duration: 500,
    delay: 20,
    reset: true

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-box, .project-box', { origin: 'bottom' });
ScrollReveal().reveal('.social-icons, .btn-group', { origin: 'left' });

//toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//Scroll active

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height)
        {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    //sticky navbar

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //click navbar links

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};