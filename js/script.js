const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carousel = document.querySelector('.carousel');
let index = 0;

function moveCarousel() {
    const totalItems = carousel.children.length;
    index = (index + 1) % totalItems;
    carousel.style.transform = `translateX(-${index * 220}px)`;
}

let autoMove = setInterval(moveCarousel, 2000);

prevBtn.addEventListener('click', () => {
    clearInterval(autoMove);
    index = (index > 0) ? index - 1 : carousel.children.length - 1;
    carousel.style.transform = `translateX(-${index * 220}px)`;
    autoMove = setInterval(moveCarousel, 2000);
});

nextBtn.addEventListener('click', () => {
    clearInterval(autoMove);
    index = (index + 1) % carousel.children.length;
    carousel.style.transform = `translateX(-${index * 220}px)`;
    autoMove = setInterval(moveCarousel, 2000);
});   