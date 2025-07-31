const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('#mobile-menu');
const themeToggleDesktop = document.querySelector('#theme-toggle-desktop');
const themeToggleMobile = document.querySelector('#theme-toggle-mobile');

function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  // Update icons for both buttons
  const darkIcons = document.querySelectorAll('.dark-icon');
  const lightIcons = document.querySelectorAll('.light-icon');
  if (theme === 'dark') {
    darkIcons.forEach(icon => icon.classList.add('hidden'));
    lightIcons.forEach(icon => icon.classList.remove('hidden'));
  } else {
    darkIcons.forEach(icon => icon.classList.remove('hidden'));
    lightIcons.forEach(icon => icon.classList.add('hidden'));
  }
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const isDark = document.body.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark');
}

// Attach event listeners to both theme toggle buttons
if (themeToggleDesktop) {
  themeToggleDesktop.addEventListener('click', toggleTheme);
}
if (themeToggleMobile) {
  themeToggleMobile.addEventListener('click', toggleTheme);
}

// Initialize theme on page load
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(savedTheme);

// Hamburger menu toggle
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('hidden');
  });
}

// Close mobile menu when a nav link is clicked
document.querySelectorAll('#mobile-menu .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.add('hidden');
  });
});