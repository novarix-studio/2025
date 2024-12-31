// Toggle für den  Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // Speichern des Themas
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
}

// Überprüfen, ob Dark Mode gespeichert ist
window.addEventListener('load', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

// Burger Menü Umschaltung
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.querySelectorAll('span').forEach(span => span.classList.toggle('active'));
});

// Einstellungen Pop-up
const settingsIcon = document.getElementById('settings-icon');
const settingsPopup = document.getElementById('settings-popup');
const settingsClose = document.getElementById('settings-close');

// Öffnen des Pop-ups
settingsIcon.addEventListener('click', () => {
    settingsPopup.style.visibility = 'visible';
    settingsPopup.style.opacity = 1;
});

// Schließen des Pop-ups
settingsClose.addEventListener('click', () => {
    settingsPopup.style.visibility = 'hidden';
    settingsPopup.style.opacity = 0;
});
