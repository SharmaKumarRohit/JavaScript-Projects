const prod = document.querySelector('.products');
const mainCart = document.querySelector('.cart');
const price = document.querySelector('.price');

const products = [
    {headline: "Mouse", subHeadline: "Gaming Mouse", price: 1599, image: "./img/Mouse.webp"},
    {headline: "Lamp", subHeadline: "Light for your home", price: 1999, image: "./img/Lamp.webp"},
    {headline: "Gaming Mouse", subHeadline: "Multi Role Mouse", price: 1199, image: "./img/GamingMouse.webp"},
]

const popular = [
    {headline: "HP Latop", subHeadline: "Best Price", price: 52999, image: "./img/Laptop.webp"},
    {headline: "Wood Chair", subHeadline: "Stool Wood", price: 15000, image: "./img/WoodChair.webp"},
    {headline: "White Chair", subHeadline: "Chair was White", price: 10000, image: "./img/WhiteChair.webp"},
]

const cart = [];
let total = 0;

function showProducts() {
    let temp = "";
    products.forEach((product, index) => {
        temp += `<div class="cards">
                    <div class="prod__image">
                        <img src="${product.image}" alt="">
                    </div>
                    <div class="prod__info">
                        <h3>${product.headline}</h3>
                        <p>${product.subHeadline}</p>
                        <h5>₹${(product.price).toLocaleString()}</h5>
                        <button data-index="${index}" class="add">
                            <i data-index="${index}" class="add ri-add-fill"></i>
                        </button>
                    </div>
                </div>`;
    })

    prod.innerHTML = temp;
}

function showPopular() {
    let temp = "";
    popular.forEach(pop => {
        temp += `<div class="pop__cards">
                    <div class="pop__image">
                        <img src="${pop.image}" alt="">
                    </div>
                    <div class="pop__info">
                        <h3>${pop.headline}</h3>
                        <p>${pop.subHeadline}</p>
                        <h5>₹${(pop.price).toLocaleString()}</h5>
                    </div>
                </div>`;
    })
    document.querySelector('.popular__products').innerHTML = temp;
}

function addToCart() {
    prod.addEventListener('click', e => {
        if(e.target.classList.contains('add')) {
            cart.push(products[e.target.dataset.index]);
        }
    })
}

function showCart() {
    document.querySelector('header').addEventListener('click', e => {
        if(e.target.classList.contains('carticon')) {
            mainCart.style.display = "block";
        }
        if(e.target.classList.contains('close')) {
            mainCart.style.display = "none";
        }

        let temp = "";
        cart.forEach((prod, index) => {
            temp += `<div class="cart__item">
                        <div class="cart__image">
                            <img src="${prod.image}" alt="">
                        </div>
                        <div class="cart__info">
                            <h3>${prod.headline}</h3>
                            <h5>₹${(prod.price).toLocaleString()}</h5>
                        </div>
                        <button data-index="${index}" class="delete__item">&#8722;</button>
                    </div>`;
        })

        document.querySelector('.inner__cart').innerHTML = temp;
        total = cart.reduce((accumulator, currentPrice) => (accumulator + currentPrice.price), 0);
        price.innerHTML = total.toLocaleString();
    })
}

function deleteCartItem() {
    mainCart.addEventListener('click', e => {
        if(e.target.classList.contains('delete__item')) {
            cart.splice(e.target.dataset.index, 1);
        }
        price.innerHTML = total.toLocaleString();
    })
}

deleteCartItem();
showCart();
addToCart();
showProducts();
showPopular();