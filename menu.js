const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMenu() {
  mobileMenu.classList.toggle('visible');
  menuIcon.classList.toggle('hidden');
}

menuIcon.addEventListener('click', function() {
  toggleMenu();
});

closeIcon.addEventListener('click', function() {
  toggleMenu();
});
