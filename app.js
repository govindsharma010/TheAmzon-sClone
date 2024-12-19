// JavaScript for Cart Functionality

// Variables to track cart count
let cartCount = 0;

// Function to update cart count
function updateCartCount() {
    const cartBadge = document.getElementById("cart-count");
    cartBadge.textContent = cartCount;
}

// Function to add item to cart
function addToCart() {
    cartCount++;
    updateCartCount();
    alert("Item added to cart!");
}

// Event listener for all Add to Cart buttons
document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", addToCart);
});

// Responsive adjustments for the navbar and shop section
window.addEventListener("resize", () => {
    const viewportWidth = window.innerWidth;
    if (viewportWidth <= 768) {
        document.querySelector(".shop-section").style.flexDirection = "column";
    } else {
        document.querySelector(".shop-section").style.flexDirection = "row";
    }
});
