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
    const errorMessage = 'The Email has to be in lower case, Form is not submitted';
    const errorElement = document.getElementById('error');
    errorElement.textContent = errorMessage;
  }
}

const form = document.getElementById('Form');
form.addEventListener('submit', handleSubmit);

const techList = document.getElementById('techList');
const modal = document.getElementById('modal');
const projects = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'desktop-img/snap1.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    liveLink: '#',
    sourceLink: '#',
    imgSrcMobile: 'desktop-img/Snap1.png',
    imgSrcDesktop: 'desktop-img/Snap1.png',
  },
  {
    name: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: 'desktop-img/Snap2.png',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    client: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    liveLink: '#',
    sourceLink: '#',
    imgSrcMobile: 'desktop-img/Snap2.png',
    imgSrcDesktop: 'desktop-img/Snap2.png',
  },
  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    image: 'desktop-img/Snap3.png',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    client: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    liveLink: '#',
    sourceLink: '#',
    imgSrcMobile: 'desktop-img/Snap3.png',
    imgSrcDesktop: 'desktop-img/Snap3.png',
  },
  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: 'desktop-img/Snap4.png',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    client: 'Uber',
    role: 'Lead Developer',
    year: '2018',
    liveLink: '#',
    sourceLink: '#',
    imgSrcMobile: 'desktop-img/Snap4.png',
    imgSrcDesktop: 'desktop-img/Snap4.png',
  },
];
document.getElementById('close-popup').addEventListener('click', () => {
  modal.classList.remove('show');
});

function ShowModal(index) {
  document.getElementById('popupName').textContent = projects[index].name;
  document.getElementById('popupImage').setAttribute('src', projects[index].image);
  document.getElementById('popupDescription').textContent = projects[index].description;
  document.getElementById('client').textContent = projects[index].client;
  document.getElementById('role').textContent = projects[index].role;
  document.getElementById('year').textContent = projects[index].year;

  techList.innerHTML = '';
  projects[index].technologies.forEach((technologies) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.innerText = technologies;
    button.classList.add('smallbtn');
    li.appendChild(button);
    techList.appendChild(li);
  });

  const liveButtonContainer = document.querySelector('.liveButton');
  liveButtonContainer.innerHTML = '';

  const liveButton = document.createElement('a');
  liveButton.href = projects[index].liveLink;
  liveButton.classList.add('buttonlrg');
  liveButton.innerHTML = `
    See Live
    <img src="img/Icon.png" alt="See Live Icon">
  `;

  const sourceButton = document.createElement('a');
  sourceButton.href = projects[index].sourceLink;
  sourceButton.classList.add('buttonlrg');
  sourceButton.innerHTML = `
    See Source
    <img src="img/live.png" alt="See Source Icon">
  `;

  liveButtonContainer.appendChild(liveButton);
  liveButtonContainer.appendChild(sourceButton);
}

const projectsContainer = document.getElementById('projects-container');

projects.forEach((project, index) => {
  const projectSection = document.createElement('section');
  projectSection.classList.add('card');
  if (index === 1 || 3) {
    projectSection.classList.add('rev');
  }

  const imgMobile = document.createElement('img');
  imgMobile.classList.add('mimg', 'projectImg');
  imgMobile.src = project.imgSrcMobile;
  projectSection.appendChild(imgMobile);

  const imgDesktop = document.createElement('img');
  imgDesktop.classList.add('dimg', 'projectImg');
  imgDesktop.src = project.imgSrcDesktop;
  projectSection.appendChild(imgDesktop);

  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('description');
  projectSection.appendChild(descriptionDiv);

  const titleHeading = document.createElement('h4');
  titleHeading.classList.add('heading');
  titleHeading.textContent = project.name;
  descriptionDiv.appendChild(titleHeading);

  const ul = document.createElement('ul');
  ul.classList.add('list');
  descriptionDiv.appendChild(ul);

  const canopyLi = document.createElement('li');
  canopyLi.classList.add('bullet');
  canopyLi.textContent = `${project.client}`;
  ul.appendChild(canopyLi);

  const roleLi = document.createElement('li');
  roleLi.classList.add('bullet');
  roleLi.textContent = `${project.role}`;
  ul.appendChild(roleLi);

  const yearLi = document.createElement('li');
  yearLi.classList.add('bullet');
  yearLi.textContent = `${project.year}`;
  ul.appendChild(yearLi);

  const descriptionParagraph = document.createElement('p');
  descriptionParagraph.textContent = project.description;
  descriptionDiv.appendChild(descriptionParagraph);

  const technologiesList = document.createElement('ul');
  technologiesList.classList.add('buttonList');
  project.technologies.forEach((technology) => {
    const technologyLi = document.createElement('li');
    const technologyButton = document.createElement('button');
    technologyButton.classList.add('smallbtn');
    technologyButton.textContent = technology;
    technologyLi.appendChild(technologyButton);
    technologiesList.appendChild(technologyLi);
  });
  descriptionDiv.appendChild(technologiesList);

  const seeProjectButton = document.createElement('button');
  seeProjectButton.classList.add('buttonlrg', 'details-button');
  seeProjectButton.id = `seeProject${index + 1}`;
  seeProjectButton.textContent = 'See project';
  seeProjectButton.addEventListener('click', () => {
    modal.classList.add('show');
    ShowModal(index);
  });
  descriptionDiv.appendChild(seeProjectButton);
  projectsContainer.appendChild(projectSection);
});