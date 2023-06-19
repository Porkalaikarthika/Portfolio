const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileMenu = document.getElementById('mobile-menu');
const menuItem = mobileMenu.getElementsByClassName('menuItems')

function toggleMenu() {
  mobileMenu.classList.toggle('visible');
  closeIcon.classList.toggle('visible');
  menuIcon.classList.toggle('hidden');
}

for(let i=0;i<menuItem.length;i++)
{
    menuItem[i].addEventListener('click',function(){
        toggleMenu();
    })
}

menuIcon.addEventListener('click', function() {
  toggleMenu();
});

closeIcon.addEventListener('click', function() {
  toggleMenu();
});
