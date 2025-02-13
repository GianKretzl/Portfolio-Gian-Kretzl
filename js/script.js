// Controla a exibição do spinner e a rolagem do corpo da página
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

// Função para rolar suavemente até o topo da página
function toTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}
// Adiciona comportamento suave ao clicar em links de navegação
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
        // Recolher o menu sanduíche após clicar no link
        const navMenu = document.querySelector('header nav ul');
        navMenu.classList.remove('show');
        
    });
});

// Controle da exibição do menu sanduíche
const menuToggle = document.getElementById('menu-toggle');
const menuDesktop = document.querySelector('.menu-desktop');

menuToggle.addEventListener('click', () => {
    menuDesktop.classList.toggle('open');    
    // Alternar a exibição do menu sanduíche
    const navMenu = document.querySelector('header nav ul');
    navMenu.classList.toggle('show');
});