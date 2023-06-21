const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileMenu = document.getElementById('mobile-menu');
const menuItem = mobileMenu.getElementsByClassName('menuItems');

function toggleMenu() {
  mobileMenu.classList.toggle('visible');
  closeIcon.classList.toggle('visible');
  menuIcon.classList.toggle('hidden');
}

for (let i = 0; i < menuItem.length; i += 1) {
  menuItem[i].addEventListener('click', () => {
    toggleMenu();
  });
}

menuIcon.addEventListener('click', () => {
  toggleMenu();
});

closeIcon.addEventListener('click', () => {
  toggleMenu();
});

// ----------------contact form validation-----------------------

function handleSubmit(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const email = emailInput.value.toLowerCase();

  if (email === emailInput.value) {
    document.getElementById('Form').submit();
  } else {
    const errorMessage = 'Email must be in lower case, Form is not submitted';
    const errorElement = document.getElementById('error');
    errorElement.textContent = errorMessage;    
  }
}

const form = document.getElementById("Form");
form.addEventListener("submit", handleSubmit);