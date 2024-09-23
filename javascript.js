
let listProductMenusHTML = document.querySelector('.items-container-menu');
let listProductSidesHTML = document.querySelector('.items-container-sides');
let listProductSnacksHTML = document.querySelector('.items-container-snacks');
let listProductBurritosHTML = document.querySelector('.items-container-burritos');
let listProductTacosHTML = document.querySelector('.items-container-tacos');
let listProductBowlsHTML = document.querySelector('.items-container-bowls');
let listProductQuesadilliaHTML = document.querySelector('.items-container-quesadilla');
let listProductVeganHTML = document.querySelector('.items-container-veg');
let listProductDessertHTML = document.querySelector('.items-container-dessert');
let listProductDipsHTML = document.querySelector('.items-container-dips');
let listProductWaterHTML = document.querySelector('.items-container-water');
let listProductSodaHTML = document.querySelector('.items-container-soda');
let listProductBeerHTML = document.querySelector('.items-container-beer');

let listProducts = [];
let listProductsSides = [];
let listProductsSnacks = [];
let listProductsBurritos = [];
let listProductsTacos = [];
let listProductsBowls = [];
let listProductsQuesadilla = [];
let listProductsVegan = [];
let listProductsDessert = [];
let listProductsDips = [];
let listProductsWater = [];
let listProductsSoda = [];
let listProductsBeer = [];

let carts = [];
let listCartHTML = document.querySelector('#cart-items-container-flex-box');
let iconCartSpan = document.querySelector('#cart-icon span');

const addDataToHTML = () => {

/* ----- Display data from jason file on screen ---- */

    /* ----- Display data in the Menus section ---- */
    if(listProductsMenus.length > 0) {
        listProductsMenus.forEach(product => {
            let newMenusProduct = document.createElement('div');
            newMenusProduct.classList.add('item');
            newMenusProduct.dataset.id = product.id;
            newMenusProduct.innerHTML = `
                <div class="sticker-container">
                    <img src="resources/img/cow-sticker.svg" alt="cow-sticker" class="cow-sticker">
                    <img src="resources/img/chiken-sticker.svg" alt="chiken-sticker" class="chicken-sticker">
                    <img src="resources/img/pig-sticker.svg" alt="pig-sticker" class="pig-sticker">
                </div>

                <div class="item-image-container">
                    <div class="image-cropper"><img src="${product.image}" class="item-image"></div>
                </div>
                        
                <div class="card-body" class="menu-item">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <h3>${product.price} kr</h3>
                </div>
            `;
            listProductMenusHTML.appendChild(newMenusProduct);
            newMenusProduct.classList.add('menu-item'); 
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

    /* ----- Display data in the Sides section ---- */
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

    /* ----- Display data in the Snacks section ---- */
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

    /* ----- Display data in the Burritos section ---- */
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
    
    /* ----- Display data in the Tacos section ---- */
    if(listProductsTacos.length > 0) {
        listProductsTacos.forEach(product => {
            let newTacosProduct = document.createElement('div');
            newTacosProduct.classList.add('item');
            newTacosProduct.dataset.id = product.id;
            newTacosProduct.innerHTML = `
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
            listProductTacosHTML.appendChild(newTacosProduct);

            let cowSticker = newTacosProduct.querySelector('.cow-sticker');
            let chickenSticker = newTacosProduct.querySelector('.chicken-sticker');
            let pigSticker = newTacosProduct.querySelector('.pig-sticker');
            
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

    /* ----- Display data in the Bowls section ---- */
    if(listProductsBowls.length > 0) {
        listProductsBowls.forEach(product => {
            let newBowlsProduct = document.createElement('div');
            newBowlsProduct.classList.add('item');
            newBowlsProduct.dataset.id = product.id;
            newBowlsProduct.innerHTML = `
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
            listProductBowlsHTML.appendChild(newBowlsProduct);

            let cowSticker = newBowlsProduct.querySelector('.cow-sticker');
            let chickenSticker = newBowlsProduct.querySelector('.chicken-sticker');
            let pigSticker = newBowlsProduct.querySelector('.pig-sticker');
            
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

    /* ----- Display data in the Quesadilla section ---- */
    if(listProductsQuesadilla.length > 0) {
        listProductsQuesadilla.forEach(product => {
            let newQuesadillaProduct = document.createElement('div');
            newQuesadillaProduct.classList.add('item');
            newQuesadillaProduct.dataset.id = product.id;
            newQuesadillaProduct.innerHTML = `
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
            listProductQuesadilliaHTML.appendChild(newQuesadillaProduct);

            let cowSticker = newQuesadillaProduct.querySelector('.cow-sticker');
            let chickenSticker = newQuesadillaProduct.querySelector('.chicken-sticker');
            let pigSticker = newQuesadillaProduct.querySelector('.pig-sticker');
            
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

    /* ----- Display data in the Veg section ---- */
    if(listProductsVegan.length > 0) {
        listProductsVegan.forEach(product => {
            let newVeganProduct = document.createElement('div');
            newVeganProduct.classList.add('item');
            newVeganProduct.dataset.id = product.id;
            newVeganProduct.innerHTML = `
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
            listProductVeganHTML.appendChild(newVeganProduct);

            let cowSticker = newVeganProduct.querySelector('.cow-sticker');
            let chickenSticker = newVeganProduct.querySelector('.chicken-sticker');
            let pigSticker = newVeganProduct.querySelector('.pig-sticker');
            
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

    /* ----- Display data in the Dessert section ---- */
    if(listProductsDessert.length > 0) {
        listProductsDessert.forEach(product => {
            let newDessertProduct = document.createElement('div');
            newDessertProduct.classList.add('item');
            newDessertProduct.dataset.id = product.id;
            newDessertProduct.innerHTML = `
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
            listProductDessertHTML.appendChild(newDessertProduct);

            let cowSticker = newDessertProduct.querySelector('.cow-sticker');
            let chickenSticker = newDessertProduct.querySelector('.chicken-sticker');
            let pigSticker = newDessertProduct.querySelector('.pig-sticker');
            
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

    /* ----- Display data in the Dips section ---- */
    if(listProductsDips.length > 0) {
        listProductsDips.forEach(product => {
            let newDipsProduct = document.createElement('div');
            newDipsProduct.classList.add('item');
            newDipsProduct.dataset.id = product.id;
            newDipsProduct.innerHTML = `
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
            listProductDipsHTML.appendChild(newDipsProduct);

            let cowSticker = newDipsProduct.querySelector('.cow-sticker');
            let chickenSticker = newDipsProduct.querySelector('.chicken-sticker');
            let pigSticker = newDipsProduct.querySelector('.pig-sticker');
            
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

    /* ----- Display data in the Water section ---- */
    if(listProductsWater.length > 0) {
        listProductsWater.forEach(product => {
            let newWaterProduct = document.createElement('div');
            newWaterProduct.classList.add('item');
            newWaterProduct.dataset.id = product.id;
            newWaterProduct.innerHTML = `
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
            listProductWaterHTML.appendChild(newWaterProduct);

            let cowSticker = newWaterProduct.querySelector('.cow-sticker');
            let chickenSticker = newWaterProduct.querySelector('.chicken-sticker');
            let pigSticker = newWaterProduct.querySelector('.pig-sticker');
            
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

    /* ----- Display data in the Soda section ---- */
    if(listProductsSoda.length > 0) {
        listProductsSoda.forEach(product => {
            let newSodaProduct = document.createElement('div');
            newSodaProduct.classList.add('item');
            newSodaProduct.dataset.id = product.id;
            newSodaProduct.innerHTML = `
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
            listProductSodaHTML.appendChild(newSodaProduct);

            let cowSticker = newSodaProduct.querySelector('.cow-sticker');
            let chickenSticker = newSodaProduct.querySelector('.chicken-sticker');
            let pigSticker = newSodaProduct.querySelector('.pig-sticker');
            
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

    /* ----- Display data in the Beer section ---- */
    if(listProductsBeer.length > 0) {
        listProductsBeer.forEach(product => {
            let newBeerProduct = document.createElement('div');
            newBeerProduct.classList.add('item');
            newBeerProduct.dataset.id = product.id;
            newBeerProduct.innerHTML = `
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
            listProductBeerHTML.appendChild(newBeerProduct);

            let cowSticker = newBeerProduct.querySelector('.cow-sticker');
            let chickenSticker = newBeerProduct.querySelector('.chicken-sticker');
            let pigSticker = newBeerProduct.querySelector('.pig-sticker');
            
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


/* ----- Add to cart javascript ---- */
document.addEventListener('click', (event) => {
    let positionClick = event.target;
    let positionClickMenu = event.target.closest('.menu-item') 


    /* ----- Code for opening menus editor ---- */
    if(positionClickMenu){
        let product_id = positionClickMenu.closest('.item').dataset.id;
        if(product_id == 1) {
            let menuEditor = document.getElementById('menu-editor-burrito');
            menuEditor.classList.add('editor-active');
            overlay.classList.add('active');
        }
    }
    


    /* ----- Code for add to cart button -----*/
    if(positionClick.classList.contains('add-item-to-cart')){
        let product_id = positionClick.closest('.item').dataset.id;
        addToCart(product_id);
        positionClick.classList.add('onclick');
    }
});


/* ----- Function that adds a product to the shopping cart or increases its quantity if it’s already in the cart.  -----*/
const addToCart = (product_id) => {
    // findIndex(): This method searches the carts array for an item where the product_id matches the input product_id.
    // If the product is not found, findIndex returns -1.
    // If the product is found, it returns the index of the product within the carts array.
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
    addCartToMemory();
};

/* ----- Function that stores the cart in the local memory ---- */
const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(carts));
}

/* ----- Function that updates the cart ---- */
const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    let totalPrice = 0;
    let cartTotal = document.querySelector('#cart-bottom span');
    if (carts.length > 0) {
        carts.forEach(cart => {
            totalQuantity += cart.quantity;

            let newCart = document.createElement('div');
            //let emptyText = document.createElement('h1');    // If I want to add text when the cart is empty
            //emptyText.classList.add('empty-text');
            newCart.classList.add('item-in-cart');
            newCart.dataset.id = cart.product_id;
            
            let info = listProducts.find((value) => value.id == cart.product_id);
            if (!info) return; // Handle case where product is not found

            totalPrice += info.price * cart.quantity;

            newCart.innerHTML = `
            <div class="item-left-section">
                 <div class="delete-button"><img src="resources/img/delete.svg" alt="trash-can" class="deleteButton" ></div>
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

            /*emptyText.innerHTML = `
            Wooow so much empty
            `*/ // For adding text if the cart is empty

            listCartHTML.appendChild(newCart);

            // With this I can add text when empty
            //listCartHTML.appendChild(emptyText);
        });
    }
    iconCartSpan.innerText = totalQuantity;
    cartTotal.innerText = totalPrice + ' kr.';
};

/* ----- Function for - , + , and Delete buttons in the cart ---- */
listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;

    // For - and +
    if (positionClick.classList.contains('min') || positionClick.classList.contains('plus')) {
        let product_id = positionClick.closest('.item-in-cart').dataset.id;
        let type = positionClick.classList.contains('plus') ? 'plus' : 'minus'; // If the class of the button that is pressed is .plus, 'type' gets assigned plus
        changeQuantity(product_id, type);
    }

    // For delete button
    if (positionClick.classList.contains('deleteButton')){
        let product_id = positionClick.closest('.item-in-cart').dataset.id;
        deleteItemInCart(product_id);
    }
});

/* ----- The delete item function ---- */
const deleteItemInCart = (product_id, type) => {
    let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
    if (positionItemInCart >= 0) {
        carts.splice(positionItemInCart, 1);
    }
    addCartToHTML();
    addCartToMemory();
}

/* ----- The change quantity function ---- */
const changeQuantity = (product_id, type) => {
    let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
    if (positionItemInCart >= 0) {
        switch (type) {
            case 'plus': // Checks if the button pressed 
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
    addCartToMemory();
};

/* ----- Function that retrives the JSON file with the products ---- */
const initApp = () => {
    fetch('products.json')
    .then(response => response.json())
    .then(data => {

        listProducts = data;
        listProductsMenus = data.slice(0, 6);
        listProductsSides = data.slice(6, 12);
        listProductsSnacks = data.slice(12, 16);
        listProductsBurritos = data.slice(16, 24);
        listProductsTacos = data.slice(24, 25);
        listProductsBowls = data.slice(25, 28);
        listProductsQuesadilla = data.slice(28, 29);
        listProductsVegan = data.slice(29, 41);
        listProductsDessert = data.slice(41, 43);
        listProductsDips = data.slice(43, 51);
        listProductsWater = data.slice(51, 53);
        listProductsSoda = data.slice(53, 65);
        listProductsBeer = data.slice(65, 66);
        addDataToHTML();
        

        // Get the cart from the memory and convert from JSON to array  
        if(localStorage.getItem('cart')) {
            carts = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }

    })
}
initApp(); // Runs the function


/* -------- Code for hiding part of header when scrolling down --------- */
// I noticed some errors when using the tablet so I commented this out

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

const openCartButtons = document.querySelectorAll('[data-cart-target]'); // I can assign any button to be a open cart button
const closeCartButtons = document.querySelectorAll('[data-cart-close]'); // I can assign any button to be a close cart button
const overlay = document.getElementById('overlay');
const stopScroll = document.getElementById('all-content-container');
const bodyStopScroll = document.querySelector('body');
const editor = document.querySelector('#menu-editor-burrito');

// Says what the open cart buttons do
openCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const cart = document.querySelector(button.dataset.cartTarget);
        openCart(cart)
        
    })
})

//Says what the close cart buttons do
closeCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const cart = document.querySelector('#cart');
        closeCart(cart)
    })
})


function openCart(cart) {
    if (cart == null) return
    cart.classList.add('active')
    overlay.classList.add('active')
    bodyStopScroll.classList.add('active')
}
function closeCart(cart) {
    if (cart == null) return
    cart.classList.remove('active')
    overlay.classList.remove('active')
    bodyStopScroll.classList.remove('active')
    editor.classList.remove('editor-active')
}


const editorOptionsNew = document.querySelectorAll('.nested');

editorOptionsNew.forEach(option => {
    option.addEventListener('click', function(event) {
        this.classList.toggle('list-active');
        event.stopPropagation();
    })
})

const multiplier = document.querySelector('.multiplier');
const editorMultiplierButton = document.querySelectorAll('.editor-muliplier-button');
const editorAddToCartButton = document.querySelector('.add-to-cart-button-editor');
const editorTotal = document.querySelector('.total-editor');

let multiplierValue = 1; // Example initial value
let totalValue = multiplierValue * 149;

editorMultiplierButton.forEach(option => {
    option.addEventListener('click', function() {
        // Adjust multiplier value based on button clicked
        if (option.classList.contains('plus-button-editor')) {
            multiplierValue += 1;
        } else if (option.classList.contains('minus-button-editor') && multiplierValue > 1) {
            multiplierValue -= 1; // Prevent going below 1
        }
        
        // Clear previous text and display the updated value

        multiplier.innerHTML = ''; // Clear previous <p>
        editorTotal.innerHTML = '';

        let multiplierText = document.createElement('p');
        multiplierText.innerHTML = `${multiplierValue}`; // Set new value
        multiplier.appendChild(multiplierText); // Append new <p>

        let totalText = document.createElement('p');
        totalText.innerHTML = `${multiplierValue * 149} kr.`;
        editorTotal.appendChild(totalText);
    });
});

editorAddToCartButton.addEventListener('click', function() {

    for (let i = 0; i < multiplierValue; i++) {
        let product_id = 1;
        addToCart(product_id);  
    }
    multiplier.innerHTML = '1'; // Clear previous <p>
    editorTotal.innerHTML = '149 kr.';
    multiplierValue = 1;
})

const payBtn = document.getElementById('pay-btn');

payBtn.addEventListener('click', function() {
    window.open("choose_payment.html","_self");
})
//document.body.style.overflow = 'hidden';

