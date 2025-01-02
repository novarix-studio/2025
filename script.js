// Elemente auswählen
const modeSwitch = document.querySelector('.mode-switch');

// Dark/Light Mode umschalten
modeSwitch.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Modus beim Laden überprüfen
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});
