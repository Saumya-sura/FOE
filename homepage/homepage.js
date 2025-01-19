       
        function toggleDrawer() {
            const drawer = document.getElementById('drawer');
            drawer.classList.toggle('open');
        }
        function EnlargeH1()
        {
            window.location.href="http://127.0.0.1:5500/homepage/H1.html";
        }
        function EnlargeH2()
        {
            window.location.href="http://127.0.0.1:5500/homepage/H2.html";
        }
        function EnlargeH3()
        {
            window.location.href="http://127.0.0.1:5500/homepage/H3.html";
        }
        function EnlargeH4()
        {
            window.location.href="http://127.0.0.1:5500/homepage/H4.html";
        }
        function EnlargeH5()
        {
            window.location.href="http://127.0.0.1:5500/homepage/H5.html";
        }
        function EnlargeH6()
        {
            window.location.href="http://127.0.0.1:5500/homepage/H6.html";
        }
        function EnlargeH7()
        {
            window.location.href="http://127.0.0.1:5500/homepage/H7.html";
        }
        function EnlargeH8()
        {
            window.location.href="http://127.0.0.1:5500/homepage/H8.html";
        }
        let cart = [];

// Add to Cart Function
function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    updateCartCount();
}

// Update Cart Count
function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

// Show Cart
function showCart() {
    const cartModal = document.getElementById("cart-modal");
    const cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = ""; // Clear previous items
    cart.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - ₹${item.price}`;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = () => removeFromCart(index);
        listItem.appendChild(removeButton);
        cartItems.appendChild(listItem);
    });

    cartModal.style.display = "flex";
}

// Close Cart
function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

// Remove Item from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    showCart();
}

// Example Usage (Attach to Products)
function EnlargeH1() {
    addToCart("GEFORCE RTX 4090", 299990);
}

function EnlargeH2() {
    addToCart("AMD Ryzen 9 9950X", 66799);
}

function EnlargeH3() {
    addToCart("Razer Viper V3 Pro", 16974);
}

function EnlargeH4() {
    addToCart("Logitech G915 X", 20995);
}
