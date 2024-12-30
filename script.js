// Navigation umschalten
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.querySelectorAll('span').forEach(span => span.classList.toggle('active'));
});

// Dunkelmodus umschalten
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    document.querySelectorAll('header, footer').forEach(element => element.classList.toggle('dark-mode'));

    // Modus speichern
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
});

// Beim Laden den Modus überprüfen
window.addEventListener('load', () => {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        document.querySelectorAll('header, footer').forEach(element => element.classList.add('dark-mode'));
    }
});
