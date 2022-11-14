/** Theme switch functionality */

const switchThemeButton = document.getElementById('themeImg') as HTMLImageElement;

const gitImgBox = document.getElementById('gitImg') as HTMLImageElement;

const profileImg = document.getElementById('profileImg') as HTMLImageElement;

function getCurrentTheme(){
  let theme = window.matchMedia('(prefere-color-scheme: light)').matches ? 'light' : 'dark';
  localStorage.getItem('marcin_theme') ? theme = localStorage.getItem('marcin_theme') : null;
  return theme;
}

function loadTheme(theme: string) {
  const root = document.querySelector(':root');
  if(theme === 'light'){
    switchThemeButton.src = "./images/moon.png";
    gitImgBox.src = "./images/git-dark.png";
    profileImg.src = "./images/profile.png"; 
  } else {
    switchThemeButton.src = "./images/sun.png";
    gitImgBox.src = "./images/github-light.png";
    profileImg.src = "./images/profile-dark.png"; 
  }
  root.setAttribute('theme-mode', `${theme}`);
}

switchThemeButton.addEventListener("click", (event) =>{
  event.preventDefault();
  let theme: string = getCurrentTheme();
  if(theme === 'dark'){
    theme = 'light'
  } else {
    theme = 'dark'
  }
  localStorage.setItem('marcin_theme', `${theme}`);
  loadTheme(theme);
});

window.addEventListener('DOMContentLoaded', () => {
  loadTheme(getCurrentTheme());
});


/** Contact form handling */

const contactContent: HTMLElement = document.getElementById('contentForm');

const btnForm: HTMLElement = document.querySelector('.btn-form');

const formFunctionality = document.getElementById('form') as HTMLFormElement;

const infoMessage: HTMLElement = document.getElementById('info-msg');

function mailSent() {
  contactContent.classList.add('hide');
  infoMessage.classList.remove('hide');
}

function placeOrder(form){
  setTimeout(form.submit(), 3500);
}

btnForm.addEventListener('click', (event)=> {
  event.preventDefault();
  mailSent();  
  placeOrder(formFunctionality);
});


/** Home button functionality */

const homeSection: HTMLElement = document.getElementById('home');
console.log('home', homeSection);

const homeButton: HTMLElement = document.getElementById('home-btn');
console.log('button', homeButton);

const galleryBox: HTMLMapElement = document.querySelector('.box-2');
console.log('gallery', galleryBox);


galleryBox.addEventListener("click", (event)=> {
  event.preventDefault();
  homeSection.classList.add('hide');
  homeButton.classList.remove('hide');
})

homeButton.addEventListener("click", (event)=> {
  event.preventDefault();
  homeSection.classList.remove('hide');
  homeButton.classList.add('hide');
})