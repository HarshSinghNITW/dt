// Sample product data
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        category: "electronics",
        price: 119900,
        stock: 15,
        location: "Electronics Zone, Floor 2",
        image: "https://assets.hardwarezone.com/img/2023/02/iphone15pro-red.jpg",
        description: "The latest iPhone with A17 Pro chip, titanium design, and advanced camera system. Experience the ultimate iPhone with breakthrough technology."
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        category: "electronics",
        price: 129999,
        stock: 8,
        location: "Electronics Zone, Floor 2",
        image: "https://images.unsplash.com/photo-1707898886328-b373a72c171b?w=500&auto=format&fit=crop&q=60",
        description: "Experience ultimate smartphone performance with Snapdragon 8 Gen 3, 200MP camera, built-in S Pen, and AI-powered features in a sleek titanium frame."
    },
    {
        id: 3,
        name: "Sony WH-1000XM5 Headphones",
        category: "electronics",
        price: 34990,
        stock: 20,
        location: "Audio Section, Floor 2",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60",
        description: "Industry-leading noise cancellation with next-gen audio quality. Enjoy crystal clear calls and up to 30 hours of battery life with quick charging."
    },
    {
        id: 4,
        name: "Nike Air Jordan 1 High",
        category: "clothing",
        price: 14995,
        stock: 5,
        location: "Footwear Zone, Floor 1",
        image: "https://images.unsplash.com/photo-1591731784867-998a7143423e?w=500&auto=format&fit=crop&q=60",
        description: "The iconic Air Jordan 1 High in classic colorway. Features premium leather upper, Air-Sole cushioning, and timeless basketball-inspired design."
    },
    {
        id: 5,
        name: "Levi's 501 Original Fit Jeans",
        category: "clothing",
        price: 5999,
        stock: 30,
        location: "Men's Fashion, Floor 1",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60",
        description: "The iconic straight fit jeans that started it all. Featuring the signature button fly and authentic denim look. A true American classic."
    },
    {
        id: 6,
        name: "Adidas Ultraboost 24",
        category: "clothing",
        price: 19999,
        stock: 0,
        location: "Footwear Zone, Floor 1",
        image: "https://images.unsplash.com/photo-1593081891731-fda0877988da?w=500&auto=format&fit=crop&q=60",
        description: "Revolutionary running shoes with responsive Boost midsole, Primeknit+ upper, and Continental™ Rubber outsole for superior comfort and performance."
    },
    {
        id: 7,
        name: "MacBook Pro 16-inch",
        category: "electronics",
        price: 249900,
        stock: 3,
        location: "Electronics Zone, Floor 2",
        image: "https://images.unsplash.com/photo-1665650482308-74f87ee880af?w=500&auto=format&fit=crop&q=60",
        description: "Supercharged by M3 Pro or M3 Max chip, delivering exceptional performance and all-day battery life in a portable design with stunning Liquid Retina XDR display."
    },
    {
        id: 8,
        name: "Dyson V15 Detect Vacuum",
        category: "home",
        price: 58900,
        stock: 10,
        location: "Home Appliances, Floor 3",
        image: "https://images.unsplash.com/photo-1558317374-feba9d140058?w=500&auto=format&fit=crop&q=60",
        description: "Intelligent cordless vacuum with laser dust detection, piezo sensor for particle counting, and powerful suction for deep cleaning on all surfaces."
    },
    {
        id: 9,
        name: "Ray-Ban Aviator Sunglasses",
        category: "fashion",
        price: 7990,
        stock: 25,
        location: "Accessories Section, Floor 1",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60",
        description: "Iconic teardrop-shaped lenses with thin metal frame. The timeless design that has been a favorite for over 80 years, offering both style and protection."
    },
    {
        id: 10,
        name: "Samsung 65-inch OLED TV",
        category: "electronics",
        price: 179990,
        stock: 0,
        location: "TV & Entertainment, Floor 2",
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=60",
        description: "Breathtaking 4K OLED display with AI-powered processing, immersive sound system, and smart TV features for a premium entertainment experience."
    },
    {
        id: 11,
        name: "Nike Dri-FIT Running Shirt",
        category: "clothing",
        price: 2495,
        stock: 42,
        location: "Sports Section, Floor 1",
        image: "https://images.unsplash.com/photo-1529720317453-c8da503f2051?w=500&auto=format&fit=crop&q=60",
        description: "Lightweight, breathable running shirt with Dri-FIT technology to wick away sweat, keeping you dry and comfortable during workouts."
    },
    {
        id: 12,
        name: "Instant Pot Duo Plus",
        category: "home",
        price: 12999,
        stock: 18,
        location: "Kitchen Appliances, Floor 3",
        image: "https://images.unsplash.com/photo-1624461290445-89b6ec1e9489?w=500&auto=format&fit=crop&q=60",
        description: "9-in-1 multi-cooker that works as a pressure cooker, slow cooker, rice cooker, steamer, yogurt maker, and more with 15 one-touch programs."
    },
    {
        id: 13,
        name: "Apple Watch Series 9",
        category: "electronics",
        price: 41900,
        stock: 22,
        location: "Electronics Zone, Floor 2",
        image: "https://images.unsplash.com/photo-1617043137556-972124736208?w=500&auto=format&fit=crop&q=60",
        description: "The most advanced Apple Watch yet with temperature sensing, blood oxygen monitoring, ECG, and the new double-tap gesture on the brilliant always-on Retina display."
    },
    {
        id: 14,
        name: "PlayStation 5 Console",
        category: "electronics",
        price: 54990,
        stock: 0,
        location: "Gaming Section, Floor 2",
        image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=500&auto=format&fit=crop&q=60",
        description: "Next-generation gaming with ultra-high-speed SSD, 3D audio, haptic feedback on the DualSense controller, and ray tracing for stunning visual fidelity."
    },
    {
        id: 15,
        name: "Zara Oversized Blazer",
        category: "clothing",
        price: 8990,
        stock: 15,
        location: "Women's Fashion, Floor 1",
        image: "https://images.unsplash.com/photo-1520591799316-6b30425429aa?w=500&auto=format&fit=crop&q=60",
        description: "Elegant oversized blazer with structured shoulders, front flap pockets, and classic lapel collar. Perfect for both casual and formal occasions."
    },
    {
        id: 16,
        name: "Bose QuietComfort Ultra Earbuds",
        category: "electronics",
        price: 24900,
        stock: 12,
        location: "Audio Section, Floor 2",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60",
        description: "Premium noise-cancelling earbuds with immersive sound, comfortable fit, sweat and weather resistance, and up to 6 hours of battery life per charge."
    },
    {
        id: 17,
        name: "Philips Air Fryer XXL",
        category: "home",
        price: 16999,
        stock: 7,
        location: "Kitchen Appliances, Floor 3",
        image: "https://images.unsplash.com/photo-1648420311049-a9a5448c84c5?w=500&auto=format&fit=crop&q=60",
        description: "Extra-large air fryer that removes fat and reduces calories while delivering crispy, delicious results with little to no oil required."
    },
    {
        id: 18,
        name: "Tommy Hilfiger Cotton Polo",
        category: "clothing",
        price: 4999,
        stock: 50,
        location: "Men's Fashion, Floor 1",
        image: "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?w=500&auto=format&fit=crop&q=60",
        description: "Classic-fit polo in premium cotton piqué with signature Tommy Hilfiger flag logo on the chest. Versatile, comfortable, and timeless."
    },
    {
        id: 19,
        name: "IKEA KALLAX Shelf Unit",
        category: "home",
        price: 12999,
        stock: 9,
        location: "Furniture Section, Floor 3",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&auto=format&fit=crop&q=60",
        description: "Versatile storage unit with cube shelves that can be used horizontally or vertically. Perfect for books, decorative items, or with KALLAX inserts."
    },
    {
        id: 20,
        name: "Canon EOS R6 Mark II",
        category: "electronics",
        price: 219990,
        stock: 5,
        location: "Camera Section, Floor 2",
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&auto=format&fit=crop&q=60",
        description: "Professional mirrorless camera with 24.2MP CMOS sensor, 6K RAW video capability, 12fps mechanical shutter, and advanced autofocus system with subject tracking."
    }
];

// Add an alternative product for items that are out of stock
const alternativeProducts = {
    6: [11, 4], // For Adidas Ultraboost alternatives
    10: [8, 17], // For Samsung TV alternatives
    14: [7, 13] // For PlayStation 5 alternatives
};

// Cart functionality
let cart = [];

function addToCart(product) {
    // Check if product is already in cart
    const existingItem = cart.find(item => item.product.id === product.id);
    
    if (existingItem) {
        // Increment quantity if already in cart
        existingItem.quantity++;
    } else {
        // Add new item to cart
        cart.push({
            product: product,
            quantity: 1
        });
    }
    
    // Update cart count display
    updateCartCount();
    
    // Update inventory
    updateInventory(product.id, -1);
    
    // Show confirmation message
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.product.id === productId);
    
    if (itemIndex !== -1) {
        const item = cart[itemIndex];
        
        // Update inventory by adding back quantity
        updateInventory(productId, item.quantity);
        
        // Remove item from cart
        cart.splice(itemIndex, 1);
        
        // Update cart UI
        updateCartCount();
        updateCartDisplay();
    }
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.product.id === productId);
    
    if (item) {
        // Apply quantity change
        item.quantity += change;
        
        // Update inventory
        updateInventory(productId, -change);
        
        // Remove item if quantity reaches 0
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            // Update cart UI
            updateCartDisplay();
        }
        
        updateCartCount();
    }
}

function updateInventory(productId, change) {
    const product = products.find(p => p.id === productId);
    
    if (product) {
        product.stock += change;
        
        // Update any visible product displays
        updateProductDisplay(product);
    }
}

function updateProductDisplay(product) {
    // Update product cards if visible
    const productCards = document.querySelectorAll(`.product-card[data-id="${product.id}"]`);
    
    productCards.forEach(card => {
        const stockElement = card.querySelector('.product-stock');
        const addToCartBtn = card.querySelector('.add-to-cart');
        
        // Update stock display
        if (product.stock > 10) {
            stockElement.className = 'product-stock in-stock';
            stockElement.innerHTML = `<i class="fas fa-check-circle"></i> <span>In Stock</span> (${product.stock} available)`;
        } else if (product.stock > 0) {
            stockElement.className = 'product-stock low-stock';
            stockElement.innerHTML = `<i class="fas fa-check-circle"></i> <span>Low Stock</span> (${product.stock} available)`;
        } else {
            stockElement.className = 'product-stock out-of-stock';
            stockElement.innerHTML = `<i class="fas fa-times-circle"></i> <span>Out of Stock</span>`;
            
            // Disable add to cart button
            addToCartBtn.style.opacity = '0.5';
            addToCartBtn.style.cursor = 'not-allowed';
            addToCartBtn.innerHTML = '<i class="fas fa-times"></i> Out of Stock';
            
            // Remove old event listener and add new one for showing alternatives
            addToCartBtn.replaceWith(addToCartBtn.cloneNode(true));
            card.querySelector('.add-to-cart').addEventListener('click', (e) => {
                e.preventDefault();
                showAlternatives(product);
            });
        }
    });
}

function updateCartCount() {
    // Calculate total quantity in cart
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    // Update cart count display
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = totalItems;
    
    // Make count visible if there are items
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotalAmount = document.getElementById('cart-total-amount');
    
    // Clear current cart display
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotalAmount.textContent = '₹0.00';
        return;
    }
    
    // Calculate total price
    let totalPrice = 0;
    
    // Add each cart item to display
    cart.forEach(item => {
        const itemTotal = item.product.price * item.quantity;
        totalPrice += itemTotal;
        
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        
        cartItemElement.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.product.image}" alt="${item.product.name}">
            </div>
            <div class="cart-item-details">
                <h3 class="cart-item-name">${item.product.name}</h3>
                <p class="cart-item-price">₹${item.product.price.toLocaleString()}</p>
                <div class="cart-item-actions">
                    <button class="quantity-btn decrease">-</button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="quantity-btn increase">+</button>
                    <span class="remove-item">Remove</span>
                </div>
            </div>
        `;
        
        cartItems.appendChild(cartItemElement);
        
        // Add event listeners
        const decreaseBtn = cartItemElement.querySelector('.decrease');
        const increaseBtn = cartItemElement.querySelector('.increase');
        const removeBtn = cartItemElement.querySelector('.remove-item');
        
        decreaseBtn.addEventListener('click', () => {
            updateQuantity(item.product.id, -1);
        });
        
        increaseBtn.addEventListener('click', () => {
            // Check if there's enough inventory
            if (item.product.stock > 0) {
                updateQuantity(item.product.id, 1);
            } else {
                showToast('Sorry, no more items in stock');
            }
        });
        
        removeBtn.addEventListener('click', () => {
            removeFromCart(item.product.id);
        });
    });
    
    // Update total amount
    cartTotalAmount.textContent = `₹${totalPrice.toLocaleString()}`;
}

function showToast(message) {
    // Create toast element if it doesn't exist
    let toast = document.getElementById('toast-notification');
    
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        document.body.appendChild(toast);
        
        // Add CSS for toast
        const style = document.createElement('style');
        style.textContent = `
            #toast-notification {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: var(--primary-color);
                color: white;
                padding: 12px 20px;
                border-radius: 5px;
                box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
                z-index: 1000;
                transform: translateY(100px);
                opacity: 0;
                transition: transform 0.3s, opacity 0.3s;
            }
            #toast-notification.show {
                transform: translateY(0);
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Set message and show toast
    toast.textContent = message;
    toast.classList.add('show');
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
} 