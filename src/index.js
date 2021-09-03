import menuData from "../src/menu.json";
import menuTemplate from "./templates/menu.hbs";

//import css file
import './styles.css';

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
  
  changeTheme();

function checkboxHandler(event) {
  event.preventDefault();
  bodyRf.classList.toggle(Theme.DARK);
  localStorage.setItem('theme', bodyRf.classList);
  localStorage.setItem('ifCheckboxIsChecked', switchBtn.checked);
  
}

function changeTheme() {
  let getThemes = localStorage.getItem('theme');
  let isChecked = localStorage.getItem('ifCheckboxIsChecked');
  console.log('Current theme is', getThemes);
if(getThemes) {
  bodyRf.classList.add(getThemes);
  switchBtn.checked = isChecked;

}
}

