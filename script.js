// Funktion zum Umschalten des Dunkelmodus
const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', () => {
    // Hier wird die Klasse 'dark-mode' zum Body-Element hinzugefügt oder entfernt
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    toggleButton.classList.toggle('dark-mode');

    // Speichern des Modus in localStorage, damit er beim nächsten Laden erhalten bleibt
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
});

// Überprüfen, ob der Dunkelmodus beim Laden der Seite aktiviert werden soll
window.addEventListener('load', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        toggleButton.classList.add('dark-mode');
    }
});
