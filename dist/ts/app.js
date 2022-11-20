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
/** Home button functionality */
const homeSection = document.getElementById('home');
const gallerySection = document.getElementById('gallery');
const backButton = document.getElementById('back-btn');
const galleryBox = document.querySelector('.box-2');
const backOne = () => {
    if (popupWrapper.classList.contains('active')) {
        popupWrapper.classList.remove('active');
    }
    else {
        homeSection.classList.remove('hide');
        backButton.classList.add('hide');
        gallerySection.classList.add('hide');
    }
};
galleryBox.addEventListener("click", (event) => {
    event.preventDefault();
    homeSection.classList.add('hide');
    backButton.classList.remove('hide');
    gallerySection.classList.remove('hide');
});
backButton.addEventListener("click", (event) => {
    event.preventDefault();
    backOne();
});
/** Gallery */
const thumbnails = document.querySelectorAll(".gallery img");
const popupWrapper = document.querySelector('.popup');
const popupWindow = document.querySelector('.popup__img');
const photoIdArray = [];
for (let thumbnail of thumbnails) {
    const photoName = thumbnail.getAttribute('src').replace("../src/images/gallery/", "");
    const photoLink = "../src/images/gallery/" + `${photoName}`;
    photoIdArray.push(photoLink);
    thumbnail.addEventListener("click", () => {
        popupWindow.src = photoLink;
        popupWrapper.classList.add('active');
    });
}
console.log(photoIdArray);
const nextPhotoButton = document.querySelector('.next');
console.log(nextPhotoButton);
const previousPhotoButton = document.querySelector('.previous');
console.log(previousPhotoButton);
