

function finalizarCompra() {
    const alertBox = document.getElementById('pedidoAlert');
    alertBox.style.display = 'block';  

    setTimeout(() => {
        alertBox.style.display = 'none';  
        localStorage.removeItem('cart');  
        updateCartCount(); 

        window.location.href = '../views/index.html';  
    }, 3000);  
}


        function displayCart() {
            const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            const cartContainer = document.getElementById('cartItems');
            cartContainer.innerHTML = '';

            let totalValue = 0;
            cartItems.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                const subtotal = item.price * item.quantity;
                totalValue += subtotal;

                cartItem.innerHTML = `
                    <p class="item-name">${item.name}</p>
                    <p class="item-price">R$ ${item.price.toFixed(2)}</p>
                    <p class="item-quantity">Quantidade: ${item.quantity}</p>
                    <p class="item-subtotal">Subtotal: R$ ${subtotal.toFixed(2)}</p>
                    <button class="btn-danger" onclick="removeFromCart('${item.name}')">Remover</button>
                `;
                cartContainer.appendChild(cartItem);
            });

            document.getElementById('totalValue').textContent = `R$ ${totalValue.toFixed(2)}`;
        }

        function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartItems');
    cartContainer.innerHTML = ''; // Limpar o carrinho atual

    let totalValue = 0;

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        const subtotal = item.price * item.quantity;
        totalValue += subtotal;

        cartItem.innerHTML = `
            <p class="item-name">${item.name}</p>
            <p class="item-price">R$ ${item.price.toFixed(2)}</p>
            <p class="item-quantity">Quantidade: ${item.quantity}</p>
            <p class="item-subtotal">Subtotal: R$ ${subtotal.toFixed(2)}</p>
            <button class="btn-danger" onclick="removeFromCart('${item.name}')">Remover</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    document.getElementById('totalValue').textContent = `R$ ${totalValue.toFixed(2)}`;
}

function removeFromCart(productName) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems = cartItems.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCart();
    updateCartCount();
}


        function removeFromCart(productName) {
            let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            cartItems = cartItems.filter(item => item.name !== productName);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            displayCart();
            updateCartCount();
        }

        function finalizarCompra() {
            const alertBox = document.getElementById('pedidoAlert');
            alertBox.classList.add('show');
            setTimeout(() => {
                alertBox.classList.remove('show');
                localStorage.removeItem('cart');
                window.location.href = '../views/index.html';
            }, 3000);
        }

        function updateCartCount() {
            const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
            document.getElementById('cart-count').textContent = totalItems;
        }

        window.onload = function() {
            displayCart();
            updateCartCount();
        };
