const switchThemeButton = document.querySelector(".box-13");
function getCurrentTheme() {
    let theme = window.matchMedia('(prefere-color-scheme: dark)').matches ? 'dark' : 'light';
    localStorage.getItem('my_page.theme') ? theme = localStorage.getItem('my_page.theme') : null;
    return theme;
}
function loadTheme(theme) {
    const root = document.querySelector(':root');
    if (theme === 'light') {
        switchThemeButton.innerHTML = "MOON";
    }
    else {
        switchThemeButton.innerHTML = "SUN";
    }
    root.setAttribute('color-scheme', `${theme}`);
}
switchThemeButton.addEventListener("click", () => {
    let theme = getCurrentTheme();
    if (theme === 'dark') {
        theme = 'light';
    }
    else {
        theme = 'dark';
    }
    localStorage.setItem('my_page.theme', `${theme}`);
    loadTheme(theme);
});
window.addEventListener('DOMContentLoaded', () => {
    loadTheme(getCurrentTheme());
});
