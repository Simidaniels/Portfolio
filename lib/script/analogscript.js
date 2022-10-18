const deg = 6;
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

const setClock = () => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;   // rotation of the hour hand
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
}

// first time
setClock();
//update every 1000 ms
setInterval(setClock, 1000);

const switchTheme = (evt) => {
    const switchBtn = evt.target;
    if (switchBtn.textContent.toLowerCase() === 'light'){
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