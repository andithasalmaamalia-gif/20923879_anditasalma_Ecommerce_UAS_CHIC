// Ambil data keranjang dari localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Fungsi menambahkan produk ke keranjang
function addToCart(id, name, price, image) {
  // Cek apakah produk sudah ada
  let existing = cart.find((item) => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id, name, price, image, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Produk berhasil ditambahkan ke keranjang!");
}

// Fungsi menampilkan isi keranjang
function displayCart() {
  const cartItems = document.getElementById("cartItems");
  const totalElement = document.getElementById("total");

  if (!cartItems || !totalElement) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    let subtotal = item.price * item.quantity;
    total += subtotal;

    let div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p>Harga: Rp ${item.price.toLocaleString()}</p>
        <p>Jumlah: ${item.quantity}</p>
        <p>Subtotal: Rp ${subtotal.toLocaleString()}</p>
      </div>
    `;
    cartItems.appendChild(div);
  });

  totalElement.textContent = `Total Belanja: Rp ${total.toLocaleString()}`;
}

// Fungsi checkout (dummy)
function checkout() {
  localStorage.removeItem("cart");
  alert(
    "Pesanan berhasil diproses! Terima kasih telah berbelanja di Chic Cantik 💖"
  );
  window.location.href = "index.html";
}

// Jalankan displayCart saat halaman cart terbuka
document.addEventListener("DOMContentLoaded", displayCart);
