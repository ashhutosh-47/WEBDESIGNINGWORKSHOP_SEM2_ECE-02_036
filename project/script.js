const cartCountEl = document.getElementById('cart-count');
const addToCartBtn = document.getElementById('addToCartBtn');
const successMessage = document.getElementById('successMessage');

let cartCount = 0;

addToCartBtn.addEventListener('click', () => {
    cartCount++;
    cartCountEl.textContent = cartCount;

    successMessage.style.opacity = '1';

    setTimeout(() => {
        successMessage.style.opacity = '0';
    }, 1500);
});