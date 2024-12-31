// Navigation umschalten
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Zahnrad-Popup
const settingsIcon = document.getElementById('settings-icon');
const settingsPopup = document.getElementById('settings-popup');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('settings-close');

settingsIcon.addEventListener('click', () => {
    settingsPopup.classList.add('active');
    overlay.classList.add('active');
});

closeButton.addEventListener('click', () => {
    settingsPopup.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    settingsPopup.classList.remove('active');
    overlay.classList.remove('active');
});

// Darkmode umschalten
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Darkmode aus LocalStorage laden
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.removeItem('theme');
    }
});
