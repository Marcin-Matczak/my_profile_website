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
    switchThemeButton.src = "../src/images/icons/moon.png";
    gitImgBox.src = "../src/images/icons/git-dark.png";
    profileImg.src = "../src/images/icons/profile.png"; 
  } else {
    switchThemeButton.src = "../src/images/icons/sun.png";
    gitImgBox.src = "../src/images/icons/github-light.png";
    profileImg.src = "../src/images/icons/profile-dark.png"; 
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

const gallerySection: HTMLElement = document.getElementById('gallery');

const backButton: HTMLElement = document.getElementById('back-btn');

const galleryBox: HTMLMapElement = document.querySelector('.box-2');

const backOne = () => {
  if(popupWrapper.classList.contains('active')){
    popupWrapper.classList.remove('active')
  } else {
    homeSection.classList.remove('hide');
    backButton.classList.add('hide');
    gallerySection.classList.add('hide');  
  }
}

galleryBox.addEventListener("click", (event)=> {
  event.preventDefault();
  homeSection.classList.add('hide');
  backButton.classList.remove('hide');
  gallerySection.classList.remove('hide');
})

backButton.addEventListener("click", (event)=> {
  event.preventDefault();
  backOne();
})


/** Gallery */

const thumbnails: NodeList = document.querySelectorAll(".gallery img");
const popupWrapper: HTMLElement = document.querySelector('.popup');
const popupWindow: HTMLImageElement = document.querySelector('.popup__img');
const nextPhotoButton: HTMLElement = document.querySelector('.next');
const previousPhotoButton: HTMLElement = document.querySelector('.previous');


let currentImgSrc: number;

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", (event) => {
    popupWrapper.classList.add('active');
    popupWindow.src = event.target.src;
    currentImgSrc = index;
  })
});

nextPhotoButton.addEventListener("click", () => {
  if(currentImgSrc === thumbnails.length -1) {
    currentImgSrc = 0;
  } else {
    currentImgSrc++;
  }
  popupWindow.src = thumbnails[currentImgSrc].src;
});

previousPhotoButton.addEventListener("click", () => {
  if(currentImgSrc === 0) {
    currentImgSrc = thumbnails.length -1;
  } else {
    currentImgSrc--;
  }
  popupWindow.src = thumbnails[currentImgSrc].src;
});