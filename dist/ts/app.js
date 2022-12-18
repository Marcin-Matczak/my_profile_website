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
const cvSection = document.getElementById('cv');
const cvBox = document.querySelector('.box-11');
const skillsSection = document.getElementById('skills');
const skillsBox = document.querySelector('.box-12');
const projectsSection = document.getElementById('projects');
const projectsBox = document.querySelector('.box-9');
const backOne = () => {
    if (popupWrapper.classList.contains('active')) {
        popupWrapper.classList.remove('active');
    }
    else {
        homeSection.classList.remove('hide');
        backButton.classList.add('hide');
        gallerySection.classList.add('hide');
        certificatesSection.classList.add('hide');
        cvSection.classList.add('hide');
        skillsSection.classList.add('hide');
        projectsSection.classList.add('hide');
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
cvBox.addEventListener("click", (event) => {
    event.preventDefault();
    homeSection.classList.add('hide');
    backButton.classList.remove('hide');
    cvSection.classList.remove('hide');
});
skillsBox.addEventListener("click", (event) => {
    event.preventDefault();
    homeSection.classList.add('hide');
    backButton.classList.remove('hide');
    skillsSection.classList.remove('hide');
    setAnimation();
});
projectsBox.addEventListener("click", (event) => {
    event.preventDefault();
    homeSection.classList.add('hide');
    backButton.classList.remove('hide');
    projectsSection.classList.remove('hide');
});
backButton.addEventListener("click", (event) => {
    event.preventDefault();
    backOne();
    removeAnimation();
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
/** Certificates */
const certificates = document.querySelectorAll(".certificate");
const removeZoom = function () {
    for (let certificate of certificates) {
        certificate.classList.remove("zoom");
    }
};
const clickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    if (clickedElement.classList.contains("zoom")) {
        removeZoom();
    }
    else {
        removeZoom();
        clickedElement.classList.add("zoom");
    }
};
for (let certificate of certificates) {
    certificate.addEventListener("click", clickHandler);
}
/** Skills */
const techStackIcons = document.querySelectorAll('tbody img');
function animation() {
    let delay = 0;
    for (let i = 0; i < techStackIcons.length; i++) {
        setTimeout(() => techStackIcons[i].classList.add('move'), delay);
        delay = delay + 200;
    }
}
const removeAnimation = function () {
    for (let icon of techStackIcons) {
        icon.classList.remove('move');
    }
};
const setAnimation = function () {
    setTimeout(() => {
        animation();
    }, 300);
};
/** Projects */
{
    'use strict';
    const templates = {
        articleLink: Handlebars.compile(document.querySelector('#template-project-link').innerHTML),
        tagLink: Handlebars.compile(document.querySelector('#template-tag-link').innerHTML),
        authorLink: Handlebars.compile(document.querySelector('#template-author-link').innerHTML),
        tagCloudLink: Handlebars.compile(document.querySelector('#template-tag-cloud-link').innerHTML),
        authorCloudLink: Handlebars.compile(document.querySelector('#template-author-cloud-link').innerHTML)
    };
    const opts = {
        ArticleSelector: '.project',
        TitleSelector: '.project-title',
        TitleListSelector: '.titles',
        ArticleTagsSelector: '.project-tags .list',
        ArticleAuthorSelector: '.project-author',
        TagsListSelector: '.tags.list',
        AuthorsListSelector: '.authors',
        CloudClassCount: 5,
        CloudClassPrefix: 'tag-size-',
    };
    const titleClickHandler = function (event) {
        event.preventDefault();
        const clickedElement = this;
        const activeLinks = document.querySelectorAll('.titles a.active');
        for (let activeLink of activeLinks) {
            activeLink.classList.remove('active');
        }
        clickedElement.classList.add('active');
        const activeArticles = document.querySelectorAll('.projects-wrapper .active');
        for (let activeArticle of activeArticles) {
            activeArticle.classList.remove('active');
        }
        const articleSelector = clickedElement.getAttribute('href');
        const targetArticle = document.querySelector(articleSelector);
        targetArticle.classList.add('active');
    };
    const generateTitleLinks = function (customSelector = '') {
        const titleList = document.querySelector(opts.TitleListSelector);
        const articles = document.querySelectorAll(opts.ArticleSelector + customSelector);
        let html = '';
        for (let article of articles) {
            const articleId = article.getAttribute('id');
            const articleTitle = article.querySelector(opts.TitleSelector).innerHTML;
            const linkHTMLData = { id: articleId, title: articleTitle };
            const linkHTML = templates.articleLink(linkHTMLData);
            html = html + linkHTML;
        }
        titleList.innerHTML = html;
        const links = document.querySelectorAll('.titles a');
        for (let link of links) {
            link.addEventListener('click', titleClickHandler);
        }
    };
    generateTitleLinks();
    const calculateParams = function (tags) {
        const values = Object.values(tags);
        const max = Math.max(...values);
        const min = Math.min(...values);
        const paramObj = {
            min: `${min}`,
            max: `${max}`
        };
        return paramObj;
    };
    const calculateCloudClass = function (count, params) {
        const normalizedCount = count - params.min;
        const normalizedMax = params.max - params.min;
        const percentage = normalizedCount / normalizedMax;
        const classNumber = Math.floor(percentage * (opts.CloudClassCount - 1) + 1);
        return opts.CloudClassPrefix + classNumber;
    };
    const generateTags = function () {
        let allTags = {};
        const articles = document.querySelectorAll(opts.ArticleSelector);
        for (let article of articles) {
            const tagWrapper = article.querySelector(opts.ArticleTagsSelector);
            let html = '';
            const articleTagsArray = article.getAttribute('data-tags').split(' ');
            for (let tag of articleTagsArray) {
                const linkHTMLData = { id: tag, title: tag };
                const linkHTML = templates.tagLink(linkHTMLData);
                html = html + linkHTML;
                if (!allTags[tag]) {
                    allTags[tag] = 1;
                }
                else {
                    allTags[tag]++;
                }
                tagWrapper.innerHTML = html;
            }
            const tagList = document.querySelector(opts.TagsListSelector);
            const tagsParams = calculateParams(allTags);
            const allTagsData = { tags: [] };
            for (let tag in allTags) {
                allTagsData.tags.push({
                    tag: tag,
                    count: allTags[tag],
                    className: calculateCloudClass(allTags[tag], tagsParams)
                });
            }
            tagList.innerHTML = templates.tagCloudLink(allTagsData);
        }
    };
    generateTags();
    const tagClickHandler = function (event) {
        event.preventDefault();
        const clickedElement = this;
        const href = clickedElement.getAttribute('href');
        const tag = href.replace('#tag-', '');
        const activeTagLinks = document.querySelectorAll(`a.active[href^="#tag-"]`);
        for (let activeTagLink of activeTagLinks) {
            activeTagLink.classList.remove('active');
        }
        const tagLinks = document.querySelectorAll(`a[href="${href}"]`);
        for (let tagLink of tagLinks) {
            tagLink.classList.add('active');
        }
        generateTitleLinks('[data-tags~="' + tag + '"]');
    };
    const addClickListenersToTags = function () {
        const tagLinks = document.querySelectorAll('a[href^="#tag-"]');
        for (let tagLink of tagLinks) {
            tagLink.addEventListener('click', tagClickHandler);
        }
    };
    addClickListenersToTags();
    const generateAuthors = function () {
        let allAuthors = {};
        const articles = document.querySelectorAll(opts.ArticleSelector);
        const authorList = document.querySelector(opts.AuthorsListSelector);
        for (let article of articles) {
            const authorWrapper = article.querySelector(opts.ArticleAuthorSelector);
            let html = '';
            const author = article.getAttribute('data-author');
            const linkHTMLData = { id: author, title: author };
            const linkHTML = templates.authorLink(linkHTMLData);
            html = html + linkHTML;
            authorWrapper.innerHTML = html;
            if (!allAuthors[author]) {
                allAuthors[author] = 1;
            }
            else {
                allAuthors[author]++;
            }
        }
        const authorsParams = calculateParams(allAuthors);
        const allAuthorsData = { authors: [] };
        for (let author in allAuthors) {
            const onlyAuthor = author.replace('developed by:', '');
            allAuthorsData.authors.push({
                author: onlyAuthor,
                authorId: author,
                count: allAuthors[author],
                className: calculateCloudClass(allAuthors[author], authorsParams)
            });
        }
        authorList.innerHTML = templates.authorCloudLink(allAuthorsData);
    };
    generateAuthors();
    const authorClickHandler = function (event) {
        event.preventDefault();
        const clickedElement = this;
        const href = clickedElement.getAttribute('href');
        const author = href.replace('#author-', '');
        const activeAuthorLinks = document.querySelectorAll('a.active[href^="#author-"]');
        for (let activeAuthorLink of activeAuthorLinks) {
            activeAuthorLink.classList.remove('active');
        }
        const authorLinks = document.querySelectorAll(`a[href="${href}"]`);
        for (let authorLink of authorLinks) {
            authorLink.classList.add('active');
        }
        generateTitleLinks(`[data-author="${author}"]`);
    };
    const addClickListenersToAuthors = function () {
        const authorLinks = document.querySelectorAll('a[href^="#author-"]');
        for (let authorLink of authorLinks) {
            authorLink.addEventListener('click', authorClickHandler);
        }
    };
    addClickListenersToAuthors();
}
/** Visitors */
const counter = document.getElementById('count');
updateVisitCount();
function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/marcinm/6d7979ca-ab60-4ef7-bd3e-1e2e790d4b13/?amount=1')
        .then(res => res.json())
        .then(res => {
        counter.innerHTML = res.value;
    });
}
