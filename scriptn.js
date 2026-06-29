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
    let cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    cart.forEach(item => {
        let p = document.createElement("p");
        p.textContent = `${item.name} - ${item.price} DH`;
        cartItems.appendChild(p);
    });

    document.getElementById("total").innerText = total;
}

// OPEN CART
document.getElementById("cartBtn").onclick = () => {
    document.getElementById("cartBox").style.display = "block";
};

// CLOSE CART
window.closeCart = function () {
    document.getElementById("cartBox").style.display = "none";
};

// ADD BUTTONS EVENT
document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const name = btn.dataset.name;
        const price = parseFloat(btn.dataset.price);

        addToCart(name, price);
    });
});

});
