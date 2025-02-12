let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.main_menu');
let themeToggler = document.querySelector('#theme-toggler');

// Toggle menu
menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
});

// Close menu on scroll
window.addEventListener('scroll', () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
});

// Theme toggle functionality
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('active');
    let isActive = document.body.classList.contains('active');

    themeToggler.classList.toggle('fa-sun', isActive);
    themeToggler.classList.toggle('fa-moon', !isActive);
});
