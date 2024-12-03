function addToCart(name, price) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItem = cartItems.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ name, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));

    updateCartCount();
}

function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}
