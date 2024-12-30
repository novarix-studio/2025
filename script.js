// Navigation umschalten
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.querySelectorAll('span').forEach(span => span.classList.toggle('active'));
});

// Script für den Umschalter zwischen Dark- und Light-Mode
const toggleButton = document.querySelector('.dark-mode-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Ändert den Text des Buttons je nach Modus
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode';
    } else {
        toggleButton.textContent = 'Dark Mode';
    }
});


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
