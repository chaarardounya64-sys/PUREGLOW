let cart = [];
let total = 0;

function addToCart(name, price){
cart.push({name, price});
total += price;

document.getElementById("cartCount").innerText = cart.length;

updateCart();
}

function updateCart(){
let cartItems = document.getElementById("cartItems");
cartItems.innerHTML = "";

cart.forEach(item => {
cartItems.innerHTML += `
<p>${item.name} - ${item.price} DH</p>
`;
});

document.getElementById("total").innerText = total;
}

document.getElementById("cartBtn").onclick = function(){
document.getElementById("cartBox").style.display = "block";
}

function closeCart(){
document.getElementById("cartBox").style.display = "none";
}
// Recherche des produits
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const value = this.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// Animation au défilement
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s";
    observer.observe(card);
});
// Animation du bouton Acheter maintenant
const shopBtn = document.querySelector(".shop-btn");

if (shopBtn) {
    setInterval(() => {
        shopBtn.classList.toggle("pulse");
    }, 1000);
}

// Animation du panier
const cartBtn = document.getElementById("cartBtn");

if (cartBtn) {
    cartBtn.addEventListener("mouseenter", () => {
        cartBtn.style.transform = "scale(1.1)";
    });

    cartBtn.addEventListener("mouseleave", () => {
        cartBtn.style.transform = "scale(1)";
    });
}
