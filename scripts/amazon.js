let products = [{
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
        stars: 45,
        count: 87,
    },
    priceCents: 1090,
},
{
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
        stars: 40,
        count: 127,
    },
    priceCents: 2095,
},
{
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
        stars: 45,
        count: 56,
    },
    priceCents: 799,
}];

let productHTML = ``;

products.forEach((product) => {
    productHTML += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image" src="${product.image}">
            </div>
            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>
            <div class="product-rating-container">
                <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars}.png">
                <div class="product-rating-count link-primary">
                    ${product.rating.count}
                </div>
            </div>
            <div class="product-price">
                ${(product.priceCents / 100).toFixed(2)}
            </div>
            <div class="product-quantity-container">
                <select class="js-quant-${product.name}">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div class="product-spacer"></div>
            <div class="added-to-cart">
                <img src="images/icons/checkmark.png"> Added
            </div>
            <button class="add-to-cart-button button-primary js-add-to-cart" data-productname="${product.name}">
                Add to Cart
            </button>
        </div>
    `;
});

document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.querySelector('.products-grid');
    if (productContainer) {
        productContainer.innerHTML = productHTML;
    }
});

export let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.js-add-to-cart').forEach((button) => {
        button.addEventListener('click', () => {
            const quantityElement = button.closest('.product-container').querySelector('select');
            const quantity = quantityElement ? parseInt(quantityElement.value) : 1;

            const productName = button.dataset.productname;
            const existingProduct = cart.find((product) => product.name === productName);

            if (existingProduct) {
                existingProduct.quantity += quantity;
            } else {
                cart.push({
                    name: productName,
                    quantity,
                });
            }

            const cartQuantityElement = document.querySelector(".cart-quantity");
            const totalQuantity = cart.reduce((sum, product) => sum + product.quantity, 0);
            cartQuantityElement.textContent = totalQuantity;

            console.log(cart);
        });
    });
});
