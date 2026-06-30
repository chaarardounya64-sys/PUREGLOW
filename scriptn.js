document.addEventListener("DOMContentLoaded", () => {

let cart = [];
let total = 0;

// ADD TO CART
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;

    document.getElementById("cartCount").innerText = cart.length;
    updateCart();
}

// UPDATE CART
function updateCart() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    cart.forEach(item => {
        const p = document.createElement("p");
        p.textContent = `${item.name} - ${item.price} DH`;
        cartItems.appendChild(p);
    });

    document.getElementById("total").innerText = total;
}

// OUVRIR LE PANIER
document.getElementById("cartBtn").onclick = () => {
    document.getElementById("cartBox").style.display = "block";
};

// FERMER LE PANIER
window.closeCart = () => {
    document.getElementById("cartBox").style.display = "none";
};

// BOUTONS AJOUTER AU PANIER
document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        addToCart(btn.dataset.name, Number(btn.dataset.price));
    });
});

// RECHERCHE
const search = document.getElementById("searchInput");

search.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

// ANIMATION SIMPLE
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {

        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
        card.style.transition = "0.6s";

    }, index * 150);

});

});
