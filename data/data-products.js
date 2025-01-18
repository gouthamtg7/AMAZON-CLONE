// Declare the cart array
let cart = [];

// Function to add an item to the cart
function add_to_cart(id, image, name, rating, priceCents) {
    // Push a new object to the cart array
    cart.push({
        id: id,
        image: image,
        name: name,
        rating: rating,
        priceCents: priceCents,
    });
}

// Export the cart and the function for external use
export { cart, add_to_cart };
