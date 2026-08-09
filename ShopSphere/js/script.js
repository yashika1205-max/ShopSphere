// ===============================
// ShopSphere Script
// ===============================

// Cart Array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update Cart Count
function updateCartCount() {
    let total = 0;

    cart.forEach(item => {
        total += item.quantity;
    });

    const count = document.getElementById("cart-count");

    if (count) {
        count.innerText = total;
    }
}

// ===============================
// ADD TO CART
// ===============================

function addToCart(name, price, image) {

    const existing = cart.find(product => product.name === name);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    showNotification(name + " added to cart");
}

// ===============================
// SEARCH PRODUCTS
// ===============================

const searchInput = document.getElementById("search");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const cards = document.querySelectorAll(".product-card");

        cards.forEach(card => {

            const title = card.querySelector("h3").innerText.toLowerCase();

            if (title.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// ===============================
// SHOP NOW BUTTON
// ===============================

const shopNow = document.getElementById("shopNow");

if (shopNow) {

    shopNow.addEventListener("click", () => {

        document.getElementById("products").scrollIntoView({
            behavior: "smooth"
        });

    });

}

// ===============================
// NOTIFICATION
// ===============================

function showNotification(message) {

    let notify = document.createElement("div");

    notify.innerText = message;

    notify.style.position = "fixed";
    notify.style.top = "20px";
    notify.style.right = "20px";
    notify.style.background = "#16a34a";
    notify.style.color = "#fff";
    notify.style.padding = "15px 20px";
    notify.style.borderRadius = "10px";
    notify.style.boxShadow = "0 5px 15px rgba(0,0,0,.2)";
    notify.style.zIndex = "9999";
    notify.style.fontWeight = "600";

    document.body.appendChild(notify);

    setTimeout(() => {

        notify.remove();

    }, 2000);

}

// ===============================
// CATEGORY CLICK
// ===============================

const categories = document.querySelectorAll(".category");

categories.forEach(category => {

    category.addEventListener("click", () => {

        document.getElementById("products").scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ===============================
// PAGE LOAD
// ===============================

window.onload = () => {

    updateCartCount();

};