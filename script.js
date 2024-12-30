// Funktion zum Umschalten des Dunkelmodus
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Wechsel zwischen Dunkelmodus und Hellem Modus
toggleButton.addEventListener('click', () => {
    // Umschalten der Klasse für Dunkelmodus
    body.classList.toggle('dark-mode');

    // Speichern des Modus in localStorage, damit er beim nächsten Laden erhalten bleibt
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
});

// Überprüfen, ob der Dunkelmodus beim Laden der Seite aktiviert werden soll
window.addEventListener('load', () => {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }
});
