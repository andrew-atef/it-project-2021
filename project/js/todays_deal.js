addToCartButton = document.querySelectorAll(".add-to-cart-button");  
document.querySelectorAll('.add-to-cart-button').forEach(function(addToCartButton) {  
  addToCartButton.addEventListener('click', function() {  
    addToCartButton.classList.add('added');  
    setTimeout(function(){  
      addToCartButton.classList.remove('added');  
    }, 1000);  
  });  
}); 


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