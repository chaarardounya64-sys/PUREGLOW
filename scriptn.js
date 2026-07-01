document.addEventListener("DOMContentLoaded", () => {

  let cart = [];
  let total = 0;

  const cards = document.querySelectorAll(".card");
  const filterButtons = document.querySelectorAll(".filters button");

  document.querySelector('.filters button[data-category="all"]').classList.add("active");

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

    cart.forEach((item, index) => {
      const div = document.createElement("div");

      div.innerHTML = `
        <span>${item.name} - ${item.price} DH</span>
        <button class="remove-btn" onclick="removeItem(${index})">❌</button>
      `;

      div.style.display = "flex";
      div.style.justifyContent = "space-between";
      div.style.alignItems = "center";
      div.style.marginBottom = "10px";

      cartItems.appendChild(div);
    });

    document.getElementById("total").innerText = total;
  }

  // REMOVE ITEM
  window.removeItem = (index) => {
    total -= cart[index].price;
    cart.splice(index, 1);

    document.getElementById("cartCount").innerText = cart.length;
    updateCart();
  };

  // OPEN CART
  document.getElementById("cartBtn").onclick = () => {
    document.getElementById("cartBox").style.display = "block";
  };

  // CLOSE CART
  window.closeCart = () => {
    document.getElementById("cartBox").style.display = "none";
  };

  // ADD TO CART BUTTONS
  document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      addToCart(btn.dataset.name, Number(btn.dataset.price));
    });
  });

  // SEARCH
  document.getElementById("searchInput").addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    cards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();

      card.style.display = title.includes(value) ? "block" : "none";
    });

  });

  // FILTER
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.dataset.category;

      cards.forEach(card => {
        if (category === "all") {
          card.style.display = "block";
        } else {
          card.style.display =
            card.dataset.category === category ? "block" : "none";
        }
      });

    });
  });

  // ANIMATION
  cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      card.style.transition = "0.6s";
    }, index * 120);

  });

  // LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.querySelector(".lightbox .close");

document.querySelectorAll(".card img").forEach(img => {
  img.style.cursor = "pointer";

  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

});
