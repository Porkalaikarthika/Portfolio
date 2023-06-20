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

const Projects ={
  card1: {
    name: 'Project 1',
    description: 'This is the first project',
    image: 'project1.jpg',
    technologies: 'HTML, CSS, JavaScript',
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/project1'
  },
  card2: {
    name: 'Project 2',
    description: 'This is the second project',
    image: 'project2.jpg',
    technologies: 'React, Node.js',
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/project2'
  },
  card3: {
    name: 'Project 2',
    description: 'This is the second project',
    image: 'project2.jpg',
    technologies: 'React, Node.js',
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/project2'
  },
  card4: {
    name: 'Project 2',
    description: 'This is the second project',
    image: 'project2.jpg',
    technologies: 'React, Node.js',
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/project2'
  }
};

const projectsContainer = document.getElementById('projects');

for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    
  }
}