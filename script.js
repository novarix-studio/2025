// Navigation Menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

// Settings Menu
const settingsIcon = document.querySelector('#settings-icon');
const settingsMenu = document.querySelector('#settings-menu');
const settingsClose = document.querySelector('#settings-close');

settingsIcon.addEventListener('click', () => {
    settingsMenu.classList.toggle('hidden');
});

settingsClose.addEventListener('click', () => {
    settingsMenu.classList.add('hidden');
});

// Dark Mode Toggle
const darkModeToggle = document.querySelector('#dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load Dark Mode State
window.addEventListener('load', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});
