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
const homeButton = document.getElementById('back-btn');
const galleryBox = document.querySelector('.box-2');
galleryBox.addEventListener("click", (event) => {
    event.preventDefault();
    homeSection.classList.add('hide');
    homeButton.classList.remove('hide');
    gallerySection.classList.remove('hide');
});
homeButton.addEventListener("click", (event) => {
    event.preventDefault();
    homeSection.classList.remove('hide');
    homeButton.classList.add('hide');
    gallerySection.classList.add('hide');
});
/** Gallery */
