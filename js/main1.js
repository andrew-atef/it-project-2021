let mainImg=document.getElementById('main-img');

function rose(){
   mainImg.src = "../media/images/rose.jpg";
}

function blue(){
   mainImg.src = "../media/images/blue.jpg";
}
function red(){
   mainImg.src = "../media/images/red.jpg";
}

let mainImg2=document.getElementById('main2-img');

function red2(){
   mainImg2.src = "../media/images/red2.jpg";
}

function offblue(){
   mainImg2.src = "../media/images/offblue.jpg";
}
function pink(){
   mainImg2.src = "../media/images/pink.jpg";
}

let mainImg3=document.getElementById('main3-img');

function gold(){
   mainImg3.src = "../media/images/watch3.jpg";
}

function rose2(){
   mainImg3.src = "../media/images/watch1.jpg";
}
function lightblue(){
   mainImg3.src = "../media/images/watch2.jpg";
}

let mainImg4=document.getElementById('main4-img');

function sky(){
   mainImg4.src = "../media/images/dress3.jpg";
}

function brown(){
   mainImg4.src = "../media/images/dress2.jpg";
}
function white(){
   mainImg4.src = "../media/images/dress1.jpg";
}

let mainImg5=document.getElementById('main5-img');

function black(){
   mainImg5.src = "../media/images/watch5.jpg";
}

function darkblue(){
   mainImg5.src = "../media/images/watch4.jpg";
}
function lightgold(){
   mainImg5.src = "../media/images/watch6.jpg";
}

let mainImg6=document.getElementById('main6-img');

function purple(){
   mainImg6.src = "../media/images/watch7.jpg";
}

function brown2(){
   mainImg6.src = "../media/images/watch8.jpg";
}
function black2(){
   mainImg6.src = "../media/images/watch9.jpg";
}

let mainImg7=document.getElementById('main7-img');
function black3(){
   mainImg7.src = "../media/images/shoes7.jpg";
}

function white2(){
   mainImg7.src = "../media/images/shoes6.jpg";
}
function gray(){
   mainImg7.src = "../media/images/shoes5.jpg";
}

let mainImg8=document.getElementById('main8-img');
function gray2(){
   mainImg8.src = "../media/images/T-shirt1.jpg";
}

function rose3(){
   mainImg8.src = "../media/images/T-shirt2.jpg";
}
function green(){
   mainImg8.src = "../media/images/T-shirt3.jpg";
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