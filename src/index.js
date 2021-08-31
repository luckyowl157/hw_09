import menuData from "./menu.json";
import menuTemplate from "./templates/menu.hbs";

//import css file
import '../src/styles.css';

let root = document.querySelector('.js-menu');
let markup = menuTemplate(menuData);

root.innerHTML = markup;

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };



let switchBtn = document.querySelector("#theme-switch-toggle");
let bodyRf = document.querySelector('body');

switchBtn.addEventListener('change', checkboxHandler);


function checkboxHandler(event) {
  event.preventDefault();
  bodyRf.classList.toggle(Theme.DARK);
  localStorage.setItem('theme', bodyRf.classList);
  localStorage.setItem('ifCheckboxIsChecked', switchBtn.checked);
}


