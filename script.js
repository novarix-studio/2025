// Funktion zum Umschalten des Dark Modes
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

// Funktion zum Öffnen des Burger-Menüs
function toggleBurgerMenu() {
    const burgerMenu = document.getElementById('burger-menu');
    burgerMenu.classList.toggle('show');
}

// Funktion zum Schließen des Burger-Menüs
function closeBurgerMenu() {
    const burgerMenu = document.getElementById('burger-menu');
    burgerMenu.classList.remove('show');
}
