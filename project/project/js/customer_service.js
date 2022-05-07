function talk(){
    var know = {
      "Hi" : "Hello, Developers Community Here.",
      "Hello":"Hello, Developers Community Here.",
      "hi" : "Hello, Developers Community Here.",
      "hello":"Hello, Developers Community Here.",
      "How are you" : "Good :)",
      "Thank you" : "You are welcome.."
    };
    
    var user = document.getElementById('userBox').value;
      document.getElementById('chatLog').innerHTML = user + "<br>";
      document.getElementById('chatLog').style=("padding-left:10px; font-size: 22px;");
    if (user in know) {
      document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
      document.getElementById('chatLog').innerHTML = "We will get back to you in one hour. <br>";
    }
}

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