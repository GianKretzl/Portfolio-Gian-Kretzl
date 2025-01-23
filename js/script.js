let spinner = document.getElementById('spinner');
let body = document.querySelector('body');

body.style.overflow = 'hidden';

if (spinner) {
    window.addEventListener('load', () => {
        setTimeout(() => { 
            spinner.remove();
            body.style.overflow = ''; 
        }, 1300); 
    });
}

/* function toTop */

function toTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Adiciona uma animação suave ao scroll
    });
}
document.querySelectorAll('nav a, .footer-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = 95; 

        window.scrollTo({
            top: targetElement.offsetTop - offset, 
            behavior: 'smooth' 
        });
    });
});

const menuToggle = document.getElementById('menu-toggle');
const menuDesktop = document.querySelector('.menu-desktop');

menuToggle.addEventListener('click', () => {
    menuDesktop.classList.toggle('open');
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navMenu = document.querySelector('header nav ul');
    navMenu.classList.toggle('show');
});

