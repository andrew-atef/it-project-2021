let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name:'BLue Dress',
        tag:'bluedress',
        price:40,
        incart:0
    },{
        name:'Pink Toy',
        tag:'toypink',
        price:15,
        incart:0
    },{
        name:'Light Red Dress',
        tag:'lightreddress',
        price:75,
        incart:0
    },{
        name:'Golden Watch',
        tag:'goldwatch',
        price:70,
        incart:0
    },{
        name:'Red Dress',
        tag:'red',
        price:60,
        incart:0
    },{
        name:'BLue Dress',
        tag:'bluedress',
        price:40,
        incart:0
    },{
        name:'Pink Toy',
        tag:'toypink',
        price:15,
        incart:0
    },{
        name:'Light Red Dress',
        tag:'lightreddress',
        price:75,
        incart:0
    },{
        name:'Golden Watch',
        tag:'goldwatch',
        price:70,
        incart:0
    },{
        name:'Red Dress',
        tag:'red',
        price:60,
        incart:0
    },    {
        name:'Laptop',
        tag:'laptop',
        price:960,
        incart:0
    },{
        name:'Pink Shoes',
        tag:'pinkshoes',
        price:40,
        incart:0
    },{
        name:'Black TShirt',
        tag:'blacktshirt',
        price:40,
        incart:0
    },{
        name:'Silver Watch',
        tag:'silverwatch',
        price:40,
        incart:0
    },{
        name:'Red Dress',
        tag:'red',
        price:40,
        incart:0
    },    {
        name:'Purple Shoes',
        tag:'purpleshoes',
        price:40,
        incart:0
    },{
        name:'Blue Toy',
        tag:'toyblue',
        price:10,
        incart:0
    },{
        name:'Tv',
        tag:'tv',
        price:900,
        incart:0
    },{
        name:'Rose Dress',
        tag:'rose',
        price:100,
        incart:0
    },{
        name:'Black watch',
        tag:'watch4',
        price:70,
        incart:0
    },{
        name:'Black Bag',
        tag:'bag2',
        price:60,
        incart:0
    },{
        name:'Brown Bag',
        tag:'bag3',
        price:50,
        incart:0
    },{
        name:'White Shoes',
        tag:'shoes1',
        price:60,
        incart:0
    },{
        name:'Purple Shoes',
        tag:'shoes3',
        price:65,
        incart:0
    },{
        name:'Green T-shirt',
        tag:'T-shirt4',
        price:60,
        incart:0
    },    {
        name:'Grey T-shirt',
        tag:'T-shirt1',
        price:50,
        incart:0
    },{
        name:'Black T-shirt',
        tag:'T-shirt5',
        price:60,
        incart:0
    },{
        name:'Black Watch',
        tag:'watch11',
        price:30,
        incart:0
    },{
        name:'Brown Watch',
        tag:'watch10',
        price:55,
        incart:0
    },{
        name:'Red Shoes',
        tag:'shoes9',
        price:49,
        incart:0
    },{
        name:'Grey Shoes',
        tag:'shoes5',
        price:45,
        incart:0
    },{
        name:'Black Shoes',
        tag:'shoes8',
        price:60,
        incart:0
    },{
        name:'Laptop',
        tag:'comp2',
        price:1000,
        incart:0
    },{
        name:'Laptop',
        tag:'comp3',
        price:1200,
        incart:0
    },{
        name:'Laptop',
        tag:'comp4',
        price:950,
        incart:0
    },    {
        name:'Laptop',
        tag:'comp5',
        price:1000,
        incart:0
    },{
        name:'Camera',
        tag:'elec1',
        price:1220,
        incart:0
    },{
        name:'Mic',
        tag:'elec2',
        price:950,
        incart:0
    },{
        name:'Micro Card',
        tag:'elec3',
        price:600,
        incart:0
    },{
        name:'Earbuds',
        tag:'elec4',
        price:1650,
        incart:0
    },    {
        name:'TV',
        tag:'TV1',
        price:1250,
        incart:0
    },{
        name:'Camera',
        tag:'camera',
        price:2000,
        incart:0
    },{
        name:'Camera',
        tag:'camera2',
        price:2220,
        incart:0
    },{
        name:'Green Toy',
        tag:'toy1',
        price:10,
        incart:0
    },{
        name:'Hand Toy',
        tag:'toy2',
        price:15,
        incart:0
    },{
        name:'Bear Toy',
        tag:'toy3',
        price:8,
        incart:0
    },{
        name:'Spider Man Toy',
        tag:'toy4',
        price:10,
        incart:0
    },{
        name:'Ball Toy',
        tag:'toy5',
        price:5,
        incart:0
    },{
        name:'Book Toy',
        tag:'toy6',
        price:12,
        incart:0
    },{
        name:'Hooku Toy',
        tag:'toy7',
        price:11,
        incart:0
    },    {
        name:'Note Toy',
        tag:'toy8',
        price:10,
        incart:0
    },{
        name:'Slime Toy',
        tag:'toy9',
        price:14,
        incart:0
    },{
        name:'Flower Toy',
        tag:'toy10',
        price:20,
        incart:0
    }
];

for(let i=0 ; i< carts.length ; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onloadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent= productNumbers;
    };
}


function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent= productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent=1;
    }
    setItems(product);
}

function setItems(product){
    let cartItems =localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);
    if(cartItems!= null){
        if(cartItems[product.tag]==undefined){
            cartItems={
                ...cartItems,
                [product.tag]:product
            };
        }
        cartItems[product.tag].inCart+=1;
    }else{
        product.inCart=1;
        cartItems ={
            [product.tag]:product
        };
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
    if(cartCost!=null){
        cartCost=parseInt(cartCost);
        localStorage.setItem('totalCost',cartCost+
        product.price);
    }else{
        localStorage.setItem('totalCost',product.price);
    }


}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer= document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    if(cartItems && productContainer ){
        productContainer.innerHTML='';
        Object.values(cartItems).map(item =>{
            productContainer.innerHTML+= `
            <div class="product">
                <ion-icon name="close-circle-outline"></ion-icon>
                <img src="../media/images/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>
            <div class="price">$${item.price},00</div> 
            <div class="quantity">
                <ion-icon name="arrow-back-circle-outline"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            </div> 
            <div class="total">
                $${item.inCart * item.price },00
            </div>        
            `;
        });

        productContainer.innerHTML+=`
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    basket total
                </h4>
                <h4 class="basketTotal">
                    $${cartCost},00
                </h4 >
            </div>  
        `;
    };

}

onloadCartNumbers();
displayCart();

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


