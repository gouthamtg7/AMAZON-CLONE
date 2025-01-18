// Dynamically updates cart quantity and handles 'Buy it again' button actions.

document.addEventListener("DOMContentLoaded", () => {
    const buyAgainButtons = document.querySelectorAll(".buy-again-button");

    buyAgainButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Item added to cart!");
        });
    });

    // Example of cart quantity logic
    const cartQuantity = document.querySelector(".cart-quantity");
    const currentQuantity = parseInt(cartQuantity.textContent) || 0;

    buyAgainButtons.forEach(button => {
        button.addEventListener("click", () => {
            const updatedQuantity = currentQuantity + 1;
            cartQuantity.textContent = updatedQuantity;
        });
    });
});
