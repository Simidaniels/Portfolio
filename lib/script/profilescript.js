window.alert('Hello');
const switchTheme = (evt) => {
    const switchBtn = evt.target;
    if (switchBtn.textContent.toLowerCase() === 'light') {
        switchBtn.textContent = 'dark';
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        switchBtn.textContent = 'light';
        document.documentElement.setAttribute('data-theme', 'light')
    }
};      // Switching the inner text from dark to light.

const switchModeBtn = document.querySelector('.switch-btn');

switchModeBtn.addEventListener('click', switchTheme, false);

let currentTheme = 'dark';

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    switchModeBtn.textContent = currentTheme;
};      // switching the theme