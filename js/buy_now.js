function validateemail(){ 
    var x=document.my_form.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf("."); 
    var name=document.my_form.name.value;  
    var address=document.my_form.address.value;  
    var city=document.my_form.city.value; 
    var zip_code=document.my_form.zip_code.value;  
    var num=document.my_form.number.value; 
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        return false;
    }else if(name==null || name==""){  
        alert("Name can't be blank");  
        return false;

    }else if(address==null || address==""){  
        alert("address can't be blank"); 
        return false; 

    }else if(city==null || city==""){  
        alert("city can't be blank");  
        return false;

    }else if(zip_code==null || zip_code==""){  
        alert("zip_code can't be blank"); 
        return false; 

    }else if(num==null || num==""){  
        alert("Phone Number can't be blank"); 
        return false; 

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