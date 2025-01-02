// Elemente auswählen
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const settingsToggle = document.querySelector('.settings-toggle');
const settingsPopup = document.querySelector('.settings-popup');
const settingsClose = document.querySelector('.settings-close');
const toggleButton = document.querySelector('.toggle-theme');

// Burger-Menü umschalten
navToggle.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', isActive);
});

// Einstellungen-Popup öffnen/schließen
settingsToggle.addEventListener('click', () => {
    const isShown = settingsPopup.classList.toggle('show');
    settingsToggle.setAttribute('aria-expanded', isShown);
});
settingsClose.addEventListener('click', () => settingsPopup.classList.remove('show'));

// Dark/Light Mode umschalten
toggleButton.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Modus beim Laden überprüfen
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});
