// Add event listeners for cart functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize cart display
    updateCartDisplay();
    
    // Add event listener to checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', proceedToCheckout);
    }
});

// Function to proceed to checkout
function proceedToCheckout() {
    // Check if there are items in the cart
    if (cart.length === 0) {
        showToast('Your cart is empty. Add some products first.');
        return;
    }
    
    // In a real application, this would redirect to a checkout page
    // For this demo, we'll just show a confirmation dialog
    const totalAmount = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    
    const confirmCheckout = confirm(`Proceed to payment for ₹${totalAmount.toLocaleString()}?`);
    
    if (confirmCheckout) {
        // Show order confirmation
        showOrderConfirmation();
        
        // Empty the cart
        cart = [];
        updateCartCount();
        updateCartDisplay();
        
        // Close the cart modal
        document.getElementById('cart-modal').style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Show order confirmation
function showOrderConfirmation() {
    // Create confirmation modal
    const confirmationModal = document.createElement('div');
    confirmationModal.classList.add('modal');
    confirmationModal.style.display = 'flex';
    
    confirmationModal.innerHTML = `
        <div class="modal-content order-confirmation">
            <span class="close-btn">&times;</span>
            <div class="order-success">
                <i class="fas fa-check-circle"></i>
                <h2>Order Placed Successfully!</h2>
                <p>Your order has been confirmed and will be ready for pickup shortly.</p>
                <p>Order reference: MN-${Math.floor(100000 + Math.random() * 900000)}</p>
                <button class="continue-shopping-btn">Continue Shopping</button>
            </div>
        </div>
    `;
    
    // Add styles for the confirmation modal
    const style = document.createElement('style');
    style.textContent = `
        .order-confirmation {
            max-width: 500px;
            text-align: center;
        }
        
        .order-success {
            padding: 20px;
        }
        
        .order-success i {
            font-size: 4rem;
            color: var(--secondary-color);
            margin-bottom: 20px;
        }
        
        .order-success h2 {
            margin-bottom: 15px;
            color: var(--primary-dark);
        }
        
        .order-success p {
            margin-bottom: 10px;
            color: var(--light-text);
        }
        
        .continue-shopping-btn {
            background-color: var(--primary-color);
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            margin-top: 20px;
            font-weight: 500;
        }
        
        .continue-shopping-btn:hover {
            background-color: var(--primary-dark);
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(confirmationModal);
    
    // Add event listener to close button
    const closeBtn = confirmationModal.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(confirmationModal);
    });
    
    // Add event listener to continue shopping button
    const continueBtn = confirmationModal.querySelector('.continue-shopping-btn');
    continueBtn.addEventListener('click', () => {
        document.body.removeChild(confirmationModal);
    });
    
    // Close when clicking outside
    confirmationModal.addEventListener('click', (e) => {
        if (e.target === confirmationModal) {
            document.body.removeChild(confirmationModal);
        }
    });
} 