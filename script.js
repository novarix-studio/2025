// Navigation umschalten
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.querySelectorAll('span').forEach(span => span.classList.toggle('active'));
});

// Script für den Umschalter zwischen Dark- und Light-Mode
const toggleButton = document.querySelector('.dark-mode-toggle');
const body = document.body;

// Prüfen, ob der Dark-Mode in localStorage gespeichert ist und anwenden
window.addEventListener('load', () => {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }
});

// Beim Klick den Dark-Mode umschalten und speichern
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Speichern des Modus in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
});
