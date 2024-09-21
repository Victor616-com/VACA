/* ----- Display data from jason file on screen ---- */

let listProductMenusHTML = document.querySelector('.items-container-menu');
let listProductSidesHTML = document.querySelector('.items-container-sides');
let listProductSnacksHTML = document.querySelector('.items-container-snacks');
let listProductBurritosHTML = document.querySelector('.items-container-burritos');

let listProducts = [];
let listProductsSides = [];
let listProductsSnacks = [];
let listProductsBurritos = [];

let carts = [];
let listCartHTML = document.querySelector('#cart-items-container-flex-box');
let iconCartSpan = document.querySelector('#cart-icon span');

const addDataToHTML = () => {

    
/* ----- Display data in the Menus sections ---- */

    if(listProductsMenus.length > 0) {
        listProductsMenus.forEach(product => {
            let newMenusProduct = document.createElement('div');
            newMenusProduct.classList.add('item');
            newMenusProduct.innerHTML = `
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
            listProductMenusHTML.appendChild(newMenusProduct);

            let cowSticker = newMenusProduct.querySelector('.cow-sticker');
            let chickenSticker = newMenusProduct.querySelector('.chicken-sticker');
            let pigSticker = newMenusProduct.querySelector('.pig-sticker');
            
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


/* ----- Display data in the Sides sections ---- */

    if(listProductsSides.length > 0) {
        listProductsSides.forEach(product => {
            let newSideProduct = document.createElement('div');
            newSideProduct.classList.add('item');
            newSideProduct.dataset.id = product.id;
            newSideProduct.innerHTML = `
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
                    <button class="add-item-to-cart">Add to cart | ${product.price} kr</button>
                </div>
            `;
            listProductSidesHTML.appendChild(newSideProduct);

            let cowSticker = newSideProduct.querySelector('.cow-sticker');
            let chickenSticker = newSideProduct.querySelector('.chicken-sticker');
            let pigSticker = newSideProduct.querySelector('.pig-sticker');
            
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

/* ----- Display data in the Snacks sections ---- */

    if(listProductsSnacks.length > 0) {
        listProductsSnacks.forEach(product => {
            let newSnacksProduct = document.createElement('div');
            newSnacksProduct.classList.add('item');
            newSnacksProduct.dataset.id = product.id;
            newSnacksProduct.innerHTML = `
                <div class="sticker-container">
                    <img src="resources/img/cow-sticker.svg" alt="cow-sticker" class="cow-sticker">
                    <img src="resources/img/chiken-sticker.svg" alt="chiken-sticker" class="chicken-sticker">
                    <img src="resources/img/pig-sticker.svg" alt="pig-sticker" class="pig-sticker">
                    <img src="resources/img/shrimp-sticker.svg" alt="shrimp-sticker" class="shrimp-sticker">
                </div>

                <div class="item-image-container">
                    <div class="image-cropper"><img src="${product.image}" class="item-image"></div>
                </div>
                        
                <div class="card-body">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <button class="add-item-to-cart">Add to cart | ${product.price} kr</button>
                </div>
            `;
            listProductSnacksHTML.appendChild(newSnacksProduct);

            let cowSticker = newSnacksProduct.querySelector('.cow-sticker');
            let chickenSticker = newSnacksProduct.querySelector('.chicken-sticker');
            let pigSticker = newSnacksProduct.querySelector('.pig-sticker');
            let shrimpSticker = newSnacksProduct.querySelector('.shrimp-sticker');
            
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
            if (product.shrimp === false && shrimpSticker) {
                shrimpSticker.style.display = 'none';
            }
        })
    }
/* ----- Display data in the Burritos sections ---- */

if(listProductsBurritos.length > 0) {
    listProductsBurritos.forEach(product => {
        let newBurritosProduct = document.createElement('div');
        newBurritosProduct.classList.add('item');
        newBurritosProduct.dataset.id = product.id;
        newBurritosProduct.innerHTML = `
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
                <button class="add-item-to-cart">Add to cart | ${product.price} kr</button>
            </div>
        `;
        listProductBurritosHTML.appendChild(newBurritosProduct);

        let cowSticker = newBurritosProduct.querySelector('.cow-sticker');
        let chickenSticker = newBurritosProduct.querySelector('.chicken-sticker');
        let pigSticker = newBurritosProduct.querySelector('.pig-sticker');
        
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

document.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('add-item-to-cart')){
        let product_id = positionClick.closest('.item').dataset.id;
        addToCart(product_id);
    }
});

const addToCart = (product_id) => {
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
    if (carts.length <= 0) {
        carts.push({
            product_id: product_id,
            quantity: 1
        });
    } else if (positionThisProductInCart < 0) {
        carts.push({
            product_id: product_id,
            quantity: 1
        });
    } else {
        carts[positionThisProductInCart].quantity += 1;
    }
    addCartToHTML();
};

const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    let totalPrice = 0;
    let cartTotal = document.querySelector('#cart-bottom span');
    if (carts.length > 0) {
        carts.forEach(cart => {
            totalQuantity += cart.quantity;
            let newCart = document.createElement('div');
            newCart.classList.add('item-in-cart');
            newCart.dataset.id = cart.product_id;
            
            let info = listProducts.find((value) => value.id == cart.product_id);
            if (!info) return; // Handle case where product is not found

            totalPrice += info.price * cart.quantity;
            newCart.innerHTML = `
            <div class="item-left-section">
                 <div class="delete-button"><img src="resources/img/delete.svg" alt="trash-can"></div>
                <div class="image-cropper"><img src="${info.image}"></div>
                <h2>${info.name}</h2>
                <img src="resources/img/edit.svg" alt="edit" class="edit-icon">
            </div>
            <div class="item-right-section">
                <div class="increse-decrese">
                    <img class="min" src="resources/img/-.svg" alt="-">
                    <h2>${cart.quantity}</h2>
                    <img class="plus" src="resources/img/+.svg" alt="+">
                </div>
                <h2 class="total-item">${info.price * cart.quantity} kr.</h2> 
            </div>
            `;
            listCartHTML.appendChild(newCart);
        });
    }
    iconCartSpan.innerText = totalQuantity;
    cartTotal.innerText = totalPrice + ' kr.';
};

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('min') || positionClick.classList.contains('plus')) {
        let product_id = positionClick.closest('.item-in-cart').dataset.id;
        let type = positionClick.classList.contains('plus') ? 'plus' : 'minus';
        changeQuantity(product_id, type);
    }
});

const changeQuantity = (product_id, type) => {
    let positionItemInCart = carts.findIndex((value) => value.product_id == product_id); // Fixed comparison
    if (positionItemInCart >= 0) {
        switch (type) {
            case 'plus':
                carts[positionItemInCart].quantity += 1;
                break;
            default:
                let valueChange = carts[positionItemInCart].quantity - 1;
                if (valueChange > 0) {
                    carts[positionItemInCart].quantity = valueChange;
                } else {
                    carts.splice(positionItemInCart, 1); 
                }
                break;
        }
    } 
    addCartToHTML();
};

const initApp = () => {
    fetch('products.json')
    .then(response => response.json())
    .then(data => {

        const rangeStart = 0;
        const rangeEnd = 6;
        listProducts = data;
        listProductsMenus = data.slice(0, 6);
        listProductsSides = data.slice(6, 12);
        listProductsSnacks = data.slice(12, 16);
        listProductsBurritos = data.slice(16, 24);
        addDataToHTML();
        
    })
}

initApp();


/* -------- Header java --------- */

/*var lastScrollTOp = 0;
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