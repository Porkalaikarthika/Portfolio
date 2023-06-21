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

const showButton=getElementsByClassName('details-button');
  const modal=getElementById('modal');
  
    showButton.addEventListener('click',()=>{
      
        modal.classList.toggle('show');
       });
    
    

const projects =[
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'desktop-img/snap1.png',    
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '#',
    sourceLink: '#'
  },
  {
    name: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: 'project2.jpg',
    technologies: ['React', 'Node.js'],
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/project2'
  },
  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    image: 'project2.jpg',
    technologies: 'React, Node.js',
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/project2'
  },
  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: 'project2.jpg',
    technologies: 'React, Node.js',
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/project2'
  }
];

const seeProject1= document.querySelector('#seeProject1');
  seeProject1.addEventListener('click', () => {
    ShowModal(0);
  });
const seeProject2= document.querySelector('#seeProject2');
  seeProject2.addEventListener('click', () => {
    ShowModal(1);
  });
const seeProject3= document.querySelector('#seeProject3');
  seeProject3.addEventListener('click', () => {
    ShowModal(2);
  });
const seeProject4= document.querySelector('#seeProject4');
  seeProject4.addEventListener('click', () => {
    ShowModal(3);
  });
 
  function ShowModal (index)
  {
    document.getElementById('popupName').textContent=projects[index].name;
    document.getElementById('popupImage').setAttribute('src', projects[index].image);
    document.getElementById('popupDescription').textContent=projects[index].description;
    document.getElementById('tech1').textContent=projects[index].technologies[0];
    document.getElementById('tech2').textContent=projects[index].technologies[1];
    document.getElementById('tech3').textContent=projects[index].technologies[2];
  }
   
  
  
  


// const projectsContainer = document.getElementById('projects');

//     projects.forEach(project => {
//     const projectElement = document.createElement('div');
    
//     const detailsButton = projectElement.querySelector('.details-button');
//       detailsButton.addEventListener('click', () => {
//         showPopup(project);
//       });
//       projectsContainer.appendChild(projectElement);
//     });

//     const popup = document.getElementById('projectDetailsPopup');
//     const popupName = document.getElementById('popupName');
//     const popupDescription = document.getElementById('popupDescription');
//     const popupImage = document.getElementById('popupImage');
//     const popupTechnologies = document.getElementById('popupTechnologies');
//     const popupLiveLink = document.getElementById('popupLiveLink');
//     const popupSourceLink = document.getElementById('popupSourceLink');
//     const closePopupButton = document.querySelector('.close-button');
    
//     function showPopup(project) {
//       popupName.textContent = project.name;
//       popupDescription.textContent = project.description;
//       popupImage.src = project.image;
//       popupTechnologies.textContent = project.technologies;
//       popupLiveLink.href = project.liveLink;
//       popupSourceLink.href = project.sourceLink;
//       popup.style.display = 'block';
//     }

//     function closePopup() {
//       popup.style.display = 'none';
//     }

//     closePopupButton.addEventListener('click', closePopup);