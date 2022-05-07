/* themes*/

let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('style');

if (style == null) {
  setTheme('light');
} else {
  setTheme(style);
}

for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    setTheme(theme);
  });
}

function setTheme(theme) {
  if (theme == 'light') {
    document.getElementById('switcher-id').href = '../css/light_theme.css';
  }else if (theme == 'dark') {
    document.getElementById('switcher-id').href = '../css/dark_theme.css';
  }
  localStorage.setItem('style', theme);
}