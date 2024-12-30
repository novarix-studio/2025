// Navigation umschalten
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.querySelectorAll('span').forEach(span => span.classList.toggle('active'));
});

// Script für den Umschalter zwischen Dark- und Light-Mode
const toggleButton = document.querySelector('.dark-mode-toggle');
const body = document.body; // body muss korrekt definiert sein

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Ändert den Text des Buttons je nach Modus
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark'); // Speichern des Dark Mode
    } else {
        toggleButton.textContent = 'Dark Mode';
        localStorage.removeItem('theme'); // Entfernen, falls nicht Dark Mode
    }
});

// Beim Laden den Modus überprüfen
window.addEventListener('load', () => {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Light Mode'; // Sicherstellen, dass der Text synchron ist
    } else {
        toggleButton.textContent = 'Dark Mode';
    }
});
