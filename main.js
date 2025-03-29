document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initNavbar();
    initModals();
    initTabs();
    initSearch();
    
    // Initialize the download app button
    const downloadAppBtn = document.getElementById('download-app-btn');
    if (downloadAppBtn && typeof generateAppDownloadQR === 'function') {
        downloadAppBtn.addEventListener('click', (e) => {
            e.preventDefault();
            generateAppDownloadQR();
        });
    }
});

// Navbar functionality
function initNavbar() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const userActions = document.querySelector('.user-actions');
    
    hamburger.addEventListener('click', () => {
        // Toggle mobile menu
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
            userActions.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.backgroundColor = 'white';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            
            userActions.style.display = 'flex';
            userActions.style.flexDirection = 'column';
            userActions.style.position = 'absolute';
            userActions.style.top = navLinks.scrollHeight + 70 + 'px';
            userActions.style.left = '0';
            userActions.style.right = '0';
            userActions.style.backgroundColor = 'white';
            userActions.style.padding = '20px';
            userActions.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    });

    // Close mobile menu when window is resized
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.style = '';
            userActions.style = '';
        }
    });
}

// Modal functionality
function initModals() {
    // Cart Modal
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const cartCloseBtn = cartModal.querySelector('.close-btn');
    
    cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        cartModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    cartCloseBtn.addEventListener('click', () => {
        cartModal.style.display = 'none';
        document.body.style.overflow = '';
    });
    
    // Login Modal
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const loginCloseBtn = loginModal.querySelector('.close-btn');
    
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    loginCloseBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
        document.body.style.overflow = '';
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
            document.body.style.overflow = '';
        }
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

// Tabs functionality
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));
            // Show the corresponding tab content
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
}

// Search functionality
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            searchProducts(query);
        }
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                searchProducts(query);
            }
        }
    });
}

// Search for products
function searchProducts(query) {
    // Scroll to products section
    document.querySelector('.products').scrollIntoView({ behavior: 'smooth' });
    
    // Show loading state
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Searching products...</div>';
    
    // Simulate API call with setTimeout (will be replaced with actual API call)
    setTimeout(() => {
        // Filter products that match the query
        const filteredProducts = products.filter(product => {
            return (
                product.name.toLowerCase().includes(query.toLowerCase()) ||
                product.category.toLowerCase().includes(query.toLowerCase()) ||
                product.description.toLowerCase().includes(query.toLowerCase())
            );
        });
        
        if (filteredProducts.length > 0) {
            displayProducts(filteredProducts);
        } else {
            productContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>No products found for "${query}"</h3>
                    <p>Try different keywords or browse our categories</p>
                </div>
            `;
        }
    }, 500);
}

// Display products in the grid
function displayProducts(productsToDisplay) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';
    
    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        // Determine stock status class and text
        let stockClass, stockText;
        if (product.stock > 10) {
            stockClass = 'in-stock';
            stockText = 'In Stock';
        } else if (product.stock > 0) {
            stockClass = 'low-stock';
            stockText = 'Low Stock';
        } else {
            stockClass = 'out-of-stock';
            stockText = 'Out of Stock';
        }
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">₹${product.price.toLocaleString()}</p>
                <div class="product-stock ${stockClass}">
                    <i class="fas ${product.stock > 0 ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                    <span>${stockText}</span> ${product.stock > 0 ? `(${product.stock} available)` : ''}
                </div>
                <p class="product-location">
                    <i class="fas fa-map-marker-alt"></i> ${product.location}
                </p>
                <div class="product-actions">
                    <a href="#" class="add-to-cart" data-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </a>
                    <a href="#" class="view-details" data-id="${product.id}">
                        <i class="fas fa-eye"></i> Details
                    </a>
                </div>
            </div>
        `;
        
        productContainer.appendChild(productCard);
        
        // Add event listener to Add to Cart button
        const addToCartBtn = productCard.querySelector('.add-to-cart');
        if (product.stock > 0) {
            addToCartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                addToCart(product);
            });
        } else {
            addToCartBtn.style.opacity = '0.5';
            addToCartBtn.style.cursor = 'not-allowed';
            addToCartBtn.innerHTML = '<i class="fas fa-times"></i> Out of Stock';
            
            // Show alternative products
            addToCartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                showAlternatives(product);
            });
        }
        
        // Add event listener to View Details button
        const viewDetailsBtn = productCard.querySelector('.view-details');
        viewDetailsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            viewProductDetails(product);
        });
    });
}

// Show alternatives for out-of-stock products
function showAlternatives(product) {
    // Filter products in the same category
    const alternatives = products.filter(p => 
        p.category === product.category && 
        p.id !== product.id && 
        p.stock > 0
    );
    
    if (alternatives.length === 0) {
        alert('No alternative products available at the moment.');
        return;
    }
    
    // Create and show alternatives popup
    const alternativesPopup = document.createElement('div');
    alternativesPopup.classList.add('modal');
    alternativesPopup.style.display = 'flex';
    
    let alternativesHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>Alternative Products</h2>
            <p>The product "${product.name}" is currently out of stock. Here are some alternatives you might like:</p>
            <div class="alternatives-grid">
    `;
    
    alternatives.slice(0, 3).forEach(alt => {
        alternativesHTML += `
            <div class="alternative-item">
                <div class="alternative-image">
                    <img src="${alt.image}" alt="${alt.name}">
                </div>
                <div class="alternative-details">
                    <h3>${alt.name}</h3>
                    <p class="alternative-price">₹${alt.price.toLocaleString()}</p>
                    <p class="alternative-stock in-stock">
                        <i class="fas fa-check-circle"></i> In Stock (${alt.stock} available)
                    </p>
                    <div class="product-actions">
                        <a href="#" class="add-to-cart" data-id="${alt.id}">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
    
    alternativesHTML += `
            </div>
        </div>
    `;
    
    alternativesPopup.innerHTML = alternativesHTML;
    document.body.appendChild(alternativesPopup);
    document.body.style.overflow = 'hidden';
    
    // Close button functionality
    const closeBtn = alternativesPopup.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(alternativesPopup);
        document.body.style.overflow = '';
    });
    
    // Close when clicking outside
    alternativesPopup.addEventListener('click', (e) => {
        if (e.target === alternativesPopup) {
            document.body.removeChild(alternativesPopup);
            document.body.style.overflow = '';
        }
    });
    
    // Add to cart buttons
    const addToCartBtns = alternativesPopup.querySelectorAll('.add-to-cart');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const altId = btn.getAttribute('data-id');
            const altProduct = products.find(p => p.id === parseInt(altId));
            addToCart(altProduct);
            document.body.removeChild(alternativesPopup);
            document.body.style.overflow = '';
        });
    });
}

// View product details
function viewProductDetails(product) {
    // Create and show product details popup
    const detailsPopup = document.createElement('div');
    detailsPopup.classList.add('modal');
    detailsPopup.style.display = 'flex';
    
    // Determine stock status class and text
    let stockClass, stockText;
    if (product.stock > 10) {
        stockClass = 'in-stock';
        stockText = 'In Stock';
    } else if (product.stock > 0) {
        stockClass = 'low-stock';
        stockText = 'Low Stock';
    } else {
        stockClass = 'out-of-stock';
        stockText = 'Out of Stock';
    }
    
    detailsPopup.innerHTML = `
        <div class="modal-content product-details-modal">
            <span class="close-btn">&times;</span>
            <div class="product-details-content">
                <div class="product-details-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-details-info">
                    <h2>${product.name}</h2>
                    <p class="product-details-price">₹${product.price.toLocaleString()}</p>
                    <div class="product-details-stock ${stockClass}">
                        <i class="fas ${product.stock > 0 ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                        <span>${stockText}</span> ${product.stock > 0 ? `(${product.stock} available)` : ''}
                    </div>
                    <p class="product-details-location">
                        <i class="fas fa-map-marker-alt"></i> ${product.location}
                    </p>
                    <div class="product-details-description">
                        <h3>Description</h3>
                        <p>${product.description}</p>
                    </div>
                    <div class="product-details-actions">
                        <button class="add-to-cart-btn" ${product.stock === 0 ? 'disabled' : ''}>
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                        <button class="navigate-btn">
                            <i class="fas fa-map-marker-alt"></i> Navigate to Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(detailsPopup);
    document.body.style.overflow = 'hidden';
    
    // Close button functionality
    const closeBtn = detailsPopup.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(detailsPopup);
        document.body.style.overflow = '';
    });
    
    // Close when clicking outside
    detailsPopup.addEventListener('click', (e) => {
        if (e.target === detailsPopup) {
            document.body.removeChild(detailsPopup);
            document.body.style.overflow = '';
        }
    });
    
    // Add to cart button
    const addToCartBtn = detailsPopup.querySelector('.add-to-cart-btn');
    if (product.stock > 0) {
        addToCartBtn.addEventListener('click', () => {
            addToCart(product);
            document.body.removeChild(detailsPopup);
            document.body.style.overflow = '';
        });
    } else {
        addToCartBtn.style.opacity = '0.5';
        addToCartBtn.style.cursor = 'not-allowed';
        addToCartBtn.innerHTML = '<i class="fas fa-times"></i> Out of Stock';
        
        // Show alternatives on click
        addToCartBtn.addEventListener('click', () => {
            document.body.removeChild(detailsPopup);
            document.body.style.overflow = '';
            showAlternatives(product);
        });
    }
    
    // Navigate button
    const navigateBtn = detailsPopup.querySelector('.navigate-btn');
    navigateBtn.addEventListener('click', () => {
        document.body.removeChild(detailsPopup);
        document.body.style.overflow = '';
        navigateToProduct(product);
    });
}

// Navigate to product
function navigateToProduct(product) {
    // Scroll to map section
    document.querySelector('.mall-map').scrollIntoView({ behavior: 'smooth' });
    
    // Show navigation path on the map
    showNavigationPath(product.location);
    
    // Update directions panel
    updateDirections(product);
}

// Show navigation path on map
function showNavigationPath(location) {
    // This is a placeholder for the actual implementation
    // In a real application, this would interact with the indoor navigation system
    console.log(`Showing navigation path to: ${location}`);
    
    // Highlight the destination on the map
    // This is just a visual simulation
    const mapView = document.getElementById('map-view');
    
    // Remove existing markers
    const existingMarkers = mapView.querySelectorAll('.map-marker');
    existingMarkers.forEach(marker => marker.remove());
    
    // Add a new marker
    const marker = document.createElement('div');
    marker.classList.add('map-marker');
    marker.innerHTML = '<i class="fas fa-map-pin"></i>';
    marker.style.position = 'absolute';
    
    // Position randomly for demo purposes
    // In a real app, this would be based on actual coordinates
    const x = Math.floor(Math.random() * 70) + 15; // 15-85%
    const y = Math.floor(Math.random() * 70) + 15; // 15-85%
    
    marker.style.top = `${y}%`;
    marker.style.left = `${x}%`;
    marker.style.color = 'var(--primary-color)';
    marker.style.fontSize = '2rem';
    marker.style.animation = 'bounce 1s infinite';
    
    mapView.appendChild(marker);
    
    // Add CSS animation for the marker
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(style);
}

// Update directions panel
function updateDirections(product) {
    const directionsSteps = document.getElementById('directions-steps');
    
    // Generate random directions for demo purposes
    // In a real application, these would be actual navigation instructions
    const steps = [
        'Start from the main entrance',
        'Go straight ahead for 50 meters',
        'Turn right at the food court',
        'Take the escalator to the 2nd floor',
        `Head towards ${product.location}`,
        `Look for ${product.name} on the shelf`
    ];
    
    let stepsHTML = '';
    steps.forEach((step, index) => {
        stepsHTML += `
            <div class="direction-step">
                <div class="step-number">${index + 1}</div>
                <div class="step-text">${step}</div>
            </div>
        `;
    });
    
    directionsSteps.innerHTML = stepsHTML;
    
    // Add CSS for the steps
    const style = document.createElement('style');
    style.textContent = `
        .direction-step {
            display: flex;
            gap: 15px;
            margin-bottom: 15px;
            align-items: center;
        }
        .step-number {
            width: 30px;
            height: 30px;
            background-color: var(--primary-color);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }
        .step-text {
            flex: 1;
        }
    `;
    document.head.appendChild(style);
} 