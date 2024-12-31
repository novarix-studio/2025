// Burger-Menü Umschalten
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Einstellungen öffnen/schließen
const settingsIcon = document.getElementById('settings-icon');
const settingsMenu = document.getElementById('settings-menu');
const settingsClose = document.getElementById('settings-close');

settingsIcon.addEventListener('click', () => {
    settingsMenu.classList.toggle('hidden');
});

settingsClose.addEventListener('click', () => {
    settingsMenu.classList.add('hidden');
});

// Dark Mode Umschalten
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
});

// Dark Mode Zustand laden
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});
