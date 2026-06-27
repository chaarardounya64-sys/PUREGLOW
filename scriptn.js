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