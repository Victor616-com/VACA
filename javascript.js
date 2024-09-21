/* ----- Display data from jason file on screen ---- */

let listProductHTML = document.querySelector('.items-container-menu');

let listProducts = [];
const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if(listProducts.length > 0) {
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
                <div class="sticker-container">
                    <img src="resources/img/cow-sticker.svg" alt="cow-sticker" class="cow-sticker">
                    <img src="resources/img/chiken-sticker.svg" alt="chiken-sticker" class="chicken-sticker">
                    <img src="resources/img/pig-sticker.svg" alt="pig-sticker" class="pig-sticker">
                </div>

                <div class="item-image-container">
                    <div class="image-cropper"><img src="${product.image}" class="item-image"></div>
                </div>
                        
                <div class="card-body">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <h3>${product.price} kr</h3>
                </div>
            `;
            listProductHTML.appendChild(newProduct);

            let cowSticker = newProduct.querySelector('.cow-sticker');
            let chickenSticker = newProduct.querySelector('.chicken-sticker');
            let pigSticker = newProduct.querySelector('.pig-sticker');
            
            // Hide the stickers based on the product's meat content
            if (product.beef === false && cowSticker) {
                cowSticker.style.display = 'none';
            }
            if (product.chicken === false && chickenSticker) {
                chickenSticker.style.display = 'none';
            }
            if (product.pork === false && pigSticker) {
                pigSticker.style.display = 'none';
            }
        })
    }
}


const initApp = () => {
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        listProducts = data;
        addDataToHTML();
        
    })
}
initApp();



/* -------- Header java --------- */

var lastScrollTOp = 0;
const navbar = document.getElementById('header');
window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop > lastScrollTOp) {
        navbar.classList.add('sticky');
        console.log('scroll down');
    } else {
        navbar.classList.remove('sticky');
        console.log('scroll up');
    }
    lastScrollTOp = scrollTop
})

/* ------ Open / CLose Cart ------ */

const openCartButtons = document.querySelectorAll('[data-cart-target]');
const closeCartButtons = document.querySelectorAll('[data-cart-close]');
const overlay = document.getElementById('overlay');
const stopScroll = document.getElementById('all-content-container');

openCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const cart = document.querySelector(button.dataset.cartTarget);
        openCart(cart)
        
    })
})

closeCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const cart = button.closest('#cart')
        closeCart(cart)
    })
})

function openCart(cart) {
    if (cart == null) return
    cart.classList.add('active')
    overlay.classList.add('active')
    stopScroll.classList.add('active')
}
function closeCart(cart) {
    if (cart == null) return
    cart.classList.remove('active')
    overlay.classList.remove('active')
    stopScroll.classList.remove('active')
}



//document.body.style.overflow = 'hidden';