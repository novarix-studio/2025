// Navigation umschalten (Burger Menü)
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.querySelectorAll('span').forEach(span => span.classList.toggle('active'));
});

// Settings Popup umschalten
const settingsToggle = document.querySelector('.settings-toggle');
const settingsPopup = document.querySelector('.settings-popup');
const settingsClose = document.querySelector('.settings-close');

// Öffnen des Settings-Popups
settingsToggle.addEventListener('click', () => {
    settingsPopup.classList.toggle('show');
});

// Schließen des Settings-Popups
settingsClose.addEventListener('click', () => {
    settingsPopup.classList.remove('show');
});

// Dark/Light Mode umschalten
const toggleButton = document.querySelector('.toggle-theme');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Dark Mode im Local Storage speichern
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
});

// Beim Laden den Modus überprüfen
window.addEventListener('load', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});
