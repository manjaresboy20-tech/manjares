const themeToggle = document.getElementById('themeToggle');
const rootElement = document.documentElement;
const contactForm = document.getElementById('contactForm');
const notification = document.getElementById('notification');

function setTheme(isDark) {
    if (isDark) {
        rootElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = 'Light Mode';
    } else {
        rootElement.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = 'Dark Mode';
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setTheme(isDark);
}

themeToggle.addEventListener('click', () => {
    const isDark = !rootElement.classList.contains('dark-mode');
    setTheme(isDark);
});

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    notification.classList.remove('hidden');
    setTimeout(() => notification.classList.add('hidden'), 3200);
    contactForm.reset();
});

window.addEventListener('DOMContentLoaded', () => {
    loadTheme();
});
