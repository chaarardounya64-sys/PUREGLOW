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
        <button class="remove-btn" onclick="removeItem(${index})">âŒ</button>
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

    let name = btn.dataset.name;
    let price = Number(btn.dataset.price);

    const card = btn.closest(".card");
    const select = card.querySelector(".color-select");

    if(select){
      name += " - " + select.value;
    }

    addToCart(name, price);

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

// COMMANDER SUR WHATSAPP
document.getElementById("orderBtn").addEventListener("click", () => {

  if (cart.length === 0) {
    alert("Votre panier est vide !");
    return;
  }

  let message = "ðŸŒ¸ Bonjour PUREGLOW%0A%0A";
  message += "Je souhaite commander :%0A%0A";

  cart.forEach(item => {
    message += `- ${item.name} : ${item.price} DH%0A`;
  });

  message += `%0ATotal : ${total} DH%0A%0A`;
  message += "Nom : %0A";
  message += "TÃ©lÃ©phone : %0A";
  message += "Ville : %0A";
  message += "Adresse : %0A";

  window.open(`https://wa.me/212698322466?text=${message}`, "_blank");

});


// VIDER LE PANIER
document.getElementById("clearCartBtn").addEventListener("click", () => {

  cart = [];
  total = 0;

  document.getElementById("cartCount").innerText = "0";
  updateCart();

});

// SPLASH SCREEN
window.addEventListener("load", () => {

  setTimeout(() => {
    document.getElementById("loader").classList.add("hide");
  }, 2000);

});

/* ===== Slider des sacs ===== */

const sliders = {
  elegant: {
    images: [
      "SacElegant1.png",
      "SacElegant2.png",
      "SacElegant3.png",
      "SacElegant4.png",
      "SacElegant5.png"
    ],
    index: 0
  },

  bandouliere: {
    images: [
      "SacBandouliere1.png",
      "SacBandouliere2.png",
      "SacBandouliere3.png",
      "SacBandouliere4.png",
      "SacBandouliere5.png",
      "SacBandouliere6.png"
    ],
    index: 0
  },

  petit: {
    images: [
      "PetitSacaMain1.png",
      "PetitSacaMain2.png",
      "PetitSacaMain3.png",
      "PetitSacaMain4.png",
      "PetitSacaMain5.png",
      "PetitSacaMain6.png"
    ],
    index: 0
  }
};

window.changeSlide = function(name, direction) {
  const slider = sliders[name];

  slider.index += direction;

  if (slider.index < 0) {
    slider.index = slider.images.length - 1;
  }

  if (slider.index >= slider.images.length) {
    slider.index = 0;
  }

  const img = document.getElementById(name);
img.src = slider.images[slider.index];

const card = img.closest(".card");
const select = card.querySelector(".color-select");

if(select){
  select.selectedIndex = slider.index;
}

});
