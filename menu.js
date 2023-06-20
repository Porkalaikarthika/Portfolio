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

const projects =[
  {
    name: 'Project 1',
    description: 'This is the first project',
    image: 'project1.jpg',
    technologies: 'HTML, CSS, JavaScript',
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/project1'
  },
  {
    name: 'Project 2',
    description: 'This is the second project',
    image: 'project2.jpg',
    technologies: 'React, Node.js',
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/project2'
  },
  {
    name: 'Project 2',
    description: 'This is the second project',
    image: 'project2.jpg',
    technologies: 'React, Node.js',
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/project2'
  },
  {
    name: 'Project 2',
    description: 'This is the second project',
    image: 'project2.jpg',
    technologies: 'React, Node.js',
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/project2'
  }
];

const projectsContainer = document.getElementById('projects');

    projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.innerHTML = `
      <h2>${project.name}</h2>
      <p>${project.description}</p>
      <img src="${project.image}" alt="${project.name}">
      <button class="details-button">See Project</button>
    `;

    const detailsButton = projectElement.querySelector('.details-button');
      detailsButton.addEventListener('click', () => {
        showPopup(project);
      });
      projectsContainer.appendChild(projectElement);
    });

    const popup = document.getElementById('projectDetailsPopup');
    const popupName = document.getElementById('popupName');
    const popupDescription = document.getElementById('popupDescription');
    const popupImage = document.getElementById('popupImage');
    const popupTechnologies = document.getElementById('popupTechnologies');
    const popupLiveLink = document.getElementById('popupLiveLink');
    const popupSourceLink = document.getElementById('popupSourceLink');
    const closePopupButton = document.querySelector('.close-button');
    
    function showPopup(project) {
      popupName.textContent = project.name;
      popupDescription.textContent = project.description;
      popupImage.src = project.image;
      popupTechnologies.textContent = project.technologies;
      popupLiveLink.href = project.liveLink;
      popupSourceLink.href = project.sourceLink;
      popup.style.display = 'block';
    }

    function closePopup() {
      popup.style.display = 'none';
    }

    closePopupButton.addEventListener('click', closePopup);