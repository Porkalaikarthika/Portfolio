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

const techList = document.getElementById('techList');
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
  },
];
document.getElementById('close-popup').addEventListener('click', () => {
  modal.classList.toggle('show');
});

function ShowModal(index) {
  document.getElementById('popupName').textContent = projects[index].name;
  document.getElementById('popupImage').setAttribute('src', projects[index].image);
  document.getElementById('popupDescription').textContent = projects[index].description;  
  document.getElementById('popupLive').setAttribute('href', projects[index].liveLink);
  document.getElementById('popupSource').setAttribute('href', projects[index].sourceLink);
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
}

const modal = document.getElementById('modal');
const showButton1 = document.getElementById('seeProject1');
showButton1.addEventListener('click', () => {
  modal.classList.toggle('show');
  ShowModal(0);
});
const showButton2 = document.getElementById('seeProject2');
showButton2.addEventListener('click', () => {
  modal.classList.toggle('show');
  ShowModal(1);
});
const showButton3 = document.getElementById('seeProject3');
showButton3.addEventListener('click', () => {
  modal.classList.toggle('show');
  ShowModal(2);
});
const showButton4 = document.getElementById('seeProject4');
showButton4.addEventListener('click', () => {
  modal.classList.toggle('show');
  ShowModal(3);
});
