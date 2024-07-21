document.addEventListener("DOMContentLoaded", function() {
    anime({
        targets: '.section',
        opacity: [0, 1],
        translateY: [30, 0],
        delay: anime.stagger(300, {start: 500}),
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.team-card',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(300, {start: 800}),
        easing: 'easeOutExpo'
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});
