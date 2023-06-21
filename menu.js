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

//----------------contact form validation-----------------------
// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent form from being submitted

  // Get the email input value and convert it to lower case
  const emailInput = document.getElementById("email");
  const email = emailInput.value.toLowerCase();

  // Check if the email is in lower case
  if (email === emailInput.value) {
    // Validation is OK, submit the form
    document.getElementById("myForm").submit();
  } else {
    // Validation failed, show error message
    const errorMessage = "Email must be in lower case.";
    const errorElement = document.getElementById("error");
    errorElement.textContent = errorMessage;
  }
}

// Add form submission event listener
const form = document.getElementById("myForm");
form.addEventListener("submit", handleSubmit);


