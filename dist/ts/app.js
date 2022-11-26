/** Theme switch functionality */
const switchThemeButton = document.getElementById('themeImg');
const gitImgBox = document.getElementById('gitImg');
const profileImg = document.getElementById('profileImg');
function getCurrentTheme() {
    let theme = window.matchMedia('(prefere-color-scheme: light)').matches ? 'light' : 'dark';
    localStorage.getItem('marcin_theme') ? theme = localStorage.getItem('marcin_theme') : null;
    return theme;
}
function loadTheme(theme) {
    const root = document.querySelector(':root');
    if (theme === 'light') {
        switchThemeButton.src = "../src/images/icons/moon.png";
        gitImgBox.src = "../src/images/icons/git-dark.png";
        profileImg.src = "../src/images/icons/profile.png";
    }
    else {
        switchThemeButton.src = "../src/images/icons/sun.png";
        gitImgBox.src = "../src/images/icons/github-light.png";
        profileImg.src = "../src/images/icons/profile-dark.png";
    }
    root.setAttribute('theme-mode', `${theme}`);
}
switchThemeButton.addEventListener("click", (event) => {
    event.preventDefault();
    let theme = getCurrentTheme();
    if (theme === 'dark') {
        theme = 'light';
    }
    else {
        theme = 'dark';
    }
    localStorage.setItem('marcin_theme', `${theme}`);
    loadTheme(theme);
});
window.addEventListener('DOMContentLoaded', () => {
    loadTheme(getCurrentTheme());
});
/** Contact form handling */
const contactContent = document.getElementById('contentForm');
const btnForm = document.querySelector('.btn-form');
const formFunctionality = document.getElementById('form');
const infoMessage = document.getElementById('info-msg');
function mailSent() {
    contactContent.classList.add('hide');
    infoMessage.classList.remove('hide');
}
function placeOrder(form) {
    setTimeout(form.submit(), 3500);
}
btnForm.addEventListener('click', (event) => {
    event.preventDefault();
    mailSent();
    placeOrder(formFunctionality);
});
/** Home buttons functionality */
const homeSection = document.getElementById('home');
const gallerySection = document.getElementById('gallery');
const backButton = document.getElementById('back-btn');
const galleryBox = document.querySelector('.box-2');
const certificatesBox = document.querySelector('.box-8');
const certificatesSection = document.getElementById('certificates');
const backOne = () => {
    if (popupWrapper.classList.contains('active')) {
        popupWrapper.classList.remove('active');
    }
    else {
        homeSection.classList.remove('hide');
        backButton.classList.add('hide');
        gallerySection.classList.add('hide');
        certificatesSection.classList.add('hide');
    }
};
galleryBox.addEventListener("click", (event) => {
    event.preventDefault();
    homeSection.classList.add('hide');
    backButton.classList.remove('hide');
    gallerySection.classList.remove('hide');
});
certificatesBox.addEventListener("click", (event) => {
    event.preventDefault();
    homeSection.classList.add('hide');
    backButton.classList.remove('hide');
    certificatesSection.classList.remove('hide');
});
backButton.addEventListener("click", (event) => {
    event.preventDefault();
    backOne();
});
/** Gallery */
const thumbnails = document.querySelectorAll(".gallery img");
const popupWrapper = document.querySelector('.popup');
const popupWindow = document.querySelector('.popup__img');
const nextPhotoButton = document.querySelector('.next');
const previousPhotoButton = document.querySelector('.previous');
let currentImgSrc;
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", (event) => {
        popupWrapper.classList.add('active');
        popupWindow.src = event.target.src;
        currentImgSrc = index;
    });
});
nextPhotoButton.addEventListener("click", () => {
    if (currentImgSrc === thumbnails.length - 1) {
        currentImgSrc = 0;
    }
    else {
        currentImgSrc++;
    }
    popupWindow.src = thumbnails[currentImgSrc].src;
});
previousPhotoButton.addEventListener("click", () => {
    if (currentImgSrc === 0) {
        currentImgSrc = thumbnails.length - 1;
    }
    else {
        currentImgSrc--;
    }
    popupWindow.src = thumbnails[currentImgSrc].src;
});
//** Gallery Home-Box */
const photoChangingBox = document.getElementById('photoSlider');
const photoSliderArray = [];
let randomNumber = Math.floor(Math.random() * 15) + 1; // losowa liczba od 0 do 15
for (let thumbnail of thumbnails) {
    const imgSrc = thumbnail.getAttribute('src');
    photoSliderArray.push(imgSrc);
}
const changeSlide = function () {
    randomNumber++;
    if (randomNumber > 14) {
        randomNumber = 0;
    }
    let randomIndexOfArray = photoSliderArray[randomNumber];
    photoChangingBox.src = randomIndexOfArray;
    setTimeout(changeSlide, 5000);
};
changeSlide();
/** Clock */
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);
setDate();
