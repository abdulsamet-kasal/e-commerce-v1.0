// WoolTech E-commerce JavaScript
class WoolTechStore {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('wooltech-cart')) || [];
        this.products = this.getProducts();
        this.currentFilter = 'all';
        this.currentSort = 'featured';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateCartUI();
        this.initAnimations();
        this.loadProducts();
        this.setupScrollAnimations();
    }

    getProducts() {
        return [
            {
                id: 1,
                name: "Urban Wooler - Classic",
                price: 135,
                category: "urban",
                image: "https://kimi-web-img.moonshot.cn/img/www.allbirds.com/1307ccb9b365c4f36360349b84e0ba64c00616c7.jpg",
                description: "Premium merino wool sneakers with urban tech sole. Perfect for everyday wear with natural comfort and sustainable materials.",
                sizes: ["7", "8", "9", "10", "11", "12"],
                colors: ["Natural White", "Oat", "Mist Grey"],
                featured: true
            },
            {
                id: 2,
                name: "Trail Runner SWT",
                price: 115,
                category: "trail",
                image: "https://kimi-web-img.moonshot.cn/img/thesavvybackpacker.com/02029035491fda6d80681d23817dcefeb0dc77ef.jpg",
                description: "All-terrain wool performance sneakers with superior grip and water resistance. Built for adventure.",
                sizes: ["7", "8", "9", "10", "11", "12"],
                colors: ["Forest Green", "Charcoal", "Earth Brown"],
                featured: true
            },
            {
                id: 3,
                name: "Merino Knit Pro",
                price: 140,
                category: "performance",
                image: "https://kimi-web-img.moonshot.cn/img/makemesustainable.com/f622b753f6e3a6765628a50eedb4d4e5acf8bd55.jpg",
                description: "Lightweight comfort technology with 100% merino wool upper. Engineered for maximum breathability.",
                sizes: ["7", "8", "9", "10", "11", "12"],
                colors: ["Sage Green", "Warm White", "Soft Taupe"],
                featured: true
            },
            {
                id: 4,
                name: "Urban Walker",
                price: 125,
                category: "urban",
                image: "https://kimi-web-img.moonshot.cn/img/i.ommoo.com/f9c7f44c2fc5a7caa77b0667e2ab17049a24cca8.jpg",
                description: "Sophisticated urban design meets natural wool comfort. Perfect for the modern professional.",
                sizes: ["7", "8", "9", "10", "11", "12"],
                colors: ["Charcoal", "Navy", "Burgundy"],
                featured: false
            },
            {
                id: 5,
                name: "Casual Comfort",
                price: 95,
                category: "casual",
                image: "https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/4d62ab6b1c732e959adb3f21291cac5256fca7b7.jpg",
                description: "Everyday comfort with sustainable materials. Your go-to shoe for relaxed urban living.",
                sizes: ["7", "8", "9", "10", "11", "12"],
                colors: ["Oat", "Mist Grey", "Soft Taupe"],
                featured: false
            },
            {
                id: 6,
                name: "Wool Runner Elite",
                price: 155,
                category: "performance",
                image: "https://kimi-web-img.moonshot.cn/img/www.allbirds.com/1307ccb9b365c4f36360349b84e0ba64c00616c7.jpg",
                description: "Elite performance running shoe with advanced wool technology. Maximum comfort for serious athletes.",
                sizes: ["7", "8", "9", "10", "11", "12"],
                colors: ["Electric Blue", "Crimson", "Charcoal"],
                featured: true
            },
            {
                id: 7,
                name: "Minimalist Wool",
                price: 110,
                category: "casual",
                image: "https://kimi-web-img.moonshot.cn/img/thesavvybackpacker.com/02029035491fda6d80681d23817dcefeb0dc77ef.jpg",
                description: "Clean, minimalist design with the natural benefits of merino wool. Less is more.",
                sizes: ["7", "8", "9", "10", "11", "12"],
                colors: ["Pure White", "Soft Grey", "Natural"],
                featured: false
            },
            {
                id: 8,
                name: "Trail Blazer",
                price: 145,
                category: "trail",
                image: "https://kimi-web-img.moonshot.cn/img/makemesustainable.com/f622b753f6e3a6765628a50eedb4d4e5acf8bd55.jpg",
                description: "Rugged trail shoe with enhanced durability and natural wool breathability. Conquer any terrain.",
                sizes: ["7", "8", "9", "10", "11", "12"],
                colors: ["Forest Camo", "Mountain Brown", "Stone Grey"],
                featured: false
            },
            {
                id: 9,
                name: "Urban Luxe",
                price: 165,
                category: "urban",
                image: "https://kimi-web-img.moonshot.cn/img/i.ommoo.com/f9c7f44c2fc5a7caa77b0667e2ab17049a24cca8.jpg",
                description: "Luxury urban sneaker with premium wool and leather accents. Elevate your street style.",
                sizes: ["7", "8", "9", "10", "11", "12"],
                colors: ["Premium Black", "Cognac", "Olive"],
                featured: true
            },
            {
                id: 10,
                name: "Eco Warrior",
                price: 130,
                category: "performance",
                image: "https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/4d62ab6b1c732e959adb3f21291cac5256fca7b7.jpg",
                description: "Sustainable performance shoe made from 100% renewable materials. Good for you, great for the planet.",
                sizes: ["7", "8", "9", "10", "11", "12"],
                colors: ["Earth Green", "Ocean Blue", "Sunset Orange"],
                featured: false
            },
            {
                id: 11,
                name: "Weekend Wanderer",
                price: 105,
                category: "casual",
                image: "https://kimi-web-img.moonshot.cn/img/www.allbirds.com/1307ccb9b365c4f36360349b84e0ba64c00616c7.jpg",
                description: "Perfect weekend companion with relaxed fit and natural wool comfort. Your feet will thank you.",
                sizes: ["7", "8", "9", "10", "11", "12"],
                colors: ["Weekend White", "Lazy Grey", "Chill Beige"],
                featured: false
            },
            {
                id: 12,
                name: "City Sprint",
                price: 135,
                category: "urban",
                image: "https://kimi-web-img.moonshot.cn/img/thesavvybackpacker.com/02029035491fda6d80681d23817dcefeb0dc77ef.jpg",
                description: "Lightweight city runner with responsive cushioning and wool breathability. Fast and comfortable.",
                sizes: ["7", "8", "9", "10", "11", "12"],
                colors: ["Speed Red", "Metro Blue", "Asphalt Grey"],
                featured: false
            },
            {
                id: 13,
                name: "Alpine Explorer",
                price: 175,
                category: "trail",
                image: "https://kimi-web-img.moonshot.cn/img/makemesustainable.com/f622b753f6e3a6765628a50eedb4d4e5acf8bd55.jpg",
                description: "High-performance alpine shoe with extreme weather protection and natural insulation.",
                sizes: ["7", "8", "9", "10", "11", "12"],
                colors: ["Alpine White", "Glacier Blue", "Summit Grey"],
                featured: true
            },
            {
                id: 14,
                name: "Daily Driver",
                price: 120,
                category: "casual",
                image: "https://kimi-web-img.moonshot.cn/img/i.ommoo.com/f9c7f44c2fc5a7caa77b0667e2ab17049a24cca8.jpg",
                description: "Your everyday essential with reliable comfort and sustainable materials. Built to last.",
                sizes: ["7", "8", "9", "10", "11", "12"],
                colors: ["Daily Driver Black", "Reliable Brown", "Trusty Tan"],
                featured: false
            },
            {
                id: 15,
                name: "Wool Tech Pro",
                price: 190,
                category: "performance",
                image: "https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/4d62ab6b1c732e959adb3f21291cac5256fca7b7.jpg",
                description: "Professional-grade performance shoe with advanced wool technology and precision engineering.",
                sizes: ["7", "8", "9", "10", "11", "12"],
                colors: ["Pro Black", "Performance White", "Elite Grey"],
                featured: true
            }
        ];
    }

    setupEventListeners() {
        // Cart functionality
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart')) {
                const productData = JSON.parse(e.target.dataset.product);
                this.addToCart(productData);
            }
            
            if (e.target.closest('#cart-btn')) {
                this.toggleCart();
            }
            
            if (e.target.closest('#close-cart') || e.target.closest('#cart-overlay')) {
                this.closeCart();
            }
            
            if (e.target.classList.contains('remove-item')) {
                const productId = parseInt(e.target.dataset.productId);
                this.removeFromCart(productId);
            }
            
            if (e.target.classList.contains('quantity-btn')) {
                const productId = parseInt(e.target.dataset.productId);
                const action = e.target.dataset.action;
                this.updateQuantity(productId, action);
            }
            
            if (e.target.closest('#clear-cart')) {
                this.clearCart();
            }
            
            if (e.target.closest('#checkout-btn')) {
                this.showCheckout();
            }
        });

        // Product filtering
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                this.setActiveFilter(e.target);
                this.currentFilter = e.target.dataset.filter;
                this.filterProducts();
            }
        });

        // Sorting
        const sortSelect = document.getElementById('sort-select');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.currentSort = e.target.value;
                this.filterProducts();
            });
        }

        // Product modal
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('view-product')) {
                const productId = parseInt(e.target.dataset.productId);
                this.showProductModal(productId);
            }
            
            if (e.target.closest('#close-modal') || e.target.closest('#product-modal')) {
                this.closeProductModal();
            }
            
            if (e.target.closest('#modal-add-to-cart')) {
                const productId = parseInt(e.target.dataset.productId);
                this.addToCartFromModal(productId);
            }
        });

        // Checkout modal
        document.addEventListener('click', (e) => {
            if (e.target.closest('#close-checkout') || e.target.closest('#cancel-checkout')) {
                this.closeCheckout();
            }
            
            if (e.target.closest('#continue-shopping')) {
                this.closeSuccessModal();
            }
        });

        // Checkout form
        const checkoutForm = document.getElementById('checkout-form');
        if (checkoutForm) {
            checkoutForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.processOrder();
            });
        }

        // Newsletter form
        const newsletterForm = document.querySelector('form');
        if (newsletterForm && !newsletterForm.id) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.subscribeNewsletter();
            });
        }
    }

    addToCart(product) {
        const existingItem = this.cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                ...product,
                quantity: 1,
                selectedSize: '9',
                selectedColor: product.colors ? product.colors[0] : 'Natural'
            });
        }
        
        this.saveCart();
        this.updateCartUI();
        this.showCartNotification('Item added to cart!');
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartUI();
        this.updateCartPage();
    }

    updateQuantity(productId, action) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (action === 'increase') {
                item.quantity += 1;
            } else if (action === 'decrease' && item.quantity > 1) {
                item.quantity -= 1;
            }
            this.saveCart();
            this.updateCartUI();
            this.updateCartPage();
        }
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
        this.updateCartUI();
        this.updateCartPage();
    }

    saveCart() {
        localStorage.setItem('wooltech-cart', JSON.stringify(this.cart));
    }

    updateCartUI() {
        const cartCount = document.getElementById('cart-count');
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        
        if (cartCount) {
            const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            cartCount.classList.toggle('hidden', totalItems === 0);
        }
        
        if (cartItems) {
            if (this.cart.length === 0) {
                cartItems.innerHTML = '<p class="text-gray-500 text-center">Your cart is empty</p>';
            } else {
                cartItems.innerHTML = this.cart.map(item => `
                    <div class="flex items-center space-x-4 mb-4 p-4 bg-gray-50 rounded-lg">
                        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
                        <div class="flex-1">
                            <h4 class="font-medium text-sm">${item.name}</h4>
                            <p class="text-gray-600 text-xs">$${item.price}</p>
                            <div class="flex items-center space-x-2 mt-2">
                                <button class="quantity-btn w-6 h-6 rounded text-xs" data-product-id="${item.id}" data-action="decrease">-</button>
                                <span class="text-sm">${item.quantity}</span>
                                <button class="quantity-btn w-6 h-6 rounded text-xs" data-product-id="${item.id}" data-action="increase">+</button>
                            </div>
                        </div>
                        <button class="remove-item text-red-500 hover:text-red-700" data-product-id="${item.id}">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                        </button>
                    </div>
                `).join('');
            }
        }
        
        if (cartTotal) {
            const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = `$${total}`;
        }
    }

    updateCartPage() {
        const cartItemsList = document.getElementById('cart-items-list');
        const emptyCart = document.getElementById('empty-cart');
        const subtotal = document.getElementById('subtotal');
        const tax = document.getElementById('tax');
        const total = document.getElementById('total');
        
        if (cartItemsList && emptyCart) {
            if (this.cart.length === 0) {
                cartItemsList.classList.add('hidden');
                emptyCart.classList.remove('hidden');
            } else {
                cartItemsList.classList.remove('hidden');
                emptyCart.classList.add('hidden');
                
                cartItemsList.innerHTML = this.cart.map(item => `
                    <div class="cart-item p-6">
                        <div class="flex items-center space-x-6">
                            <img src="${item.image}" alt="${item.name}" class="w-24 h-24 object-cover rounded-lg">
                            <div class="flex-1">
                                <h3 class="text-xl font-medium mb-2">${item.name}</h3>
                                <p class="text-gray-600 mb-2">Size: ${item.selectedSize} | Color: ${item.selectedColor}</p>
                                <p class="text-2xl font-light">$${item.price}</p>
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="flex items-center space-x-2">
                                    <button class="quantity-btn w-8 h-8 rounded" data-product-id="${item.id}" data-action="decrease">-</button>
                                    <span class="quantity-input w-12 h-8 rounded flex items-center justify-center">${item.quantity}</span>
                                    <button class="quantity-btn w-8 h-8 rounded" data-product-id="${item.id}" data-action="increase">+</button>
                                </div>
                                <button class="remove-item text-red-500 hover:text-red-700 p-2" data-product-id="${item.id}">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
        }
        
        // Update order summary
        const subtotalAmount = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const taxAmount = subtotalAmount * 0.08; // 8% tax
        const totalAmount = subtotalAmount + taxAmount;
        
        if (subtotal) subtotal.textContent = `$${subtotalAmount.toFixed(2)}`;
        if (tax) tax.textContent = `$${taxAmount.toFixed(2)}`;
        if (total) total.textContent = `$${totalAmount.toFixed(2)}`;
    }

    toggleCart() {
        const cartDrawer = document.getElementById('cart-drawer');
        const cartOverlay = document.getElementById('cart-overlay');
        
        if (cartDrawer && cartOverlay) {
            cartDrawer.classList.toggle('translate-x-full');
            cartOverlay.classList.toggle('hidden');
        }
    }

    closeCart() {
        const cartDrawer = document.getElementById('cart-drawer');
        const cartOverlay = document.getElementById('cart-overlay');
        
        if (cartDrawer && cartOverlay) {
            cartDrawer.classList.add('translate-x-full');
            cartOverlay.classList.add('hidden');
        }
    }

    showCartNotification(message) {
        // Create and show a temporary notification
        const notification = document.createElement('div');
        notification.className = 'fixed top-20 right-6 bg-sage-green text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    }

    setActiveFilter(activeBtn) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        activeBtn.classList.add('active');
    }

    filterProducts() {
        let filteredProducts = this.products;
        
        // Apply category filter
        if (this.currentFilter !== 'all') {
            filteredProducts = filteredProducts.filter(product => 
                product.category === this.currentFilter
            );
        }
        
        // Apply sorting
        switch (this.currentSort) {
            case 'price-low':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                filteredProducts.sort((a, b) => b.id - a.id);
                break;
            case 'featured':
            default:
                filteredProducts.sort((a, b) => b.featured - a.featured);
                break;
        }
        
        this.renderProducts(filteredProducts);
    }

    loadProducts() {
        const productsGrid = document.getElementById('products-grid');
        if (productsGrid) {
            this.renderProducts(this.products);
        }
    }

    renderProducts(products) {
        const productsGrid = document.getElementById('products-grid');
        const noProducts = document.getElementById('no-products');
        
        if (!productsGrid) return;
        
        if (products.length === 0) {
            productsGrid.classList.add('hidden');
            noProducts?.classList.remove('hidden');
            return;
        }
        
        productsGrid.classList.remove('hidden');
        noProducts?.classList.add('hidden');
        
        productsGrid.innerHTML = products.map(product => `
            <div class="product-card reveal-element">
                <div class="aspect-square overflow-hidden">
                    <img src="${product.image}" alt="${product.name}" class="product-image w-full h-full object-cover">
                </div>
                <div class="p-6">
                    <h4 class="text-xl font-medium mb-2">${product.name}</h4>
                    <p class="text-gray-600 text-sm mb-4">${product.description.substring(0, 60)}...</p>
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-2xl font-light">$${product.price}</span>
                        <button class="view-product text-sage-green hover:text-sage-green/80 text-sm font-medium" data-product-id="${product.id}">
                            View Details
                        </button>
                    </div>
                    <button class="add-to-cart btn-primary w-full py-3 rounded-lg font-medium" 
                            data-product='${JSON.stringify(product)}'>
                        Add to Cart
                    </button>
                </div>
            </div>
        `).join('');
        
        // Re-trigger animations for new elements
        this.animateElements();
    }

    showProductModal(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;
        
        const modal = document.getElementById('product-modal');
        const modalImage = document.getElementById('modal-image');
        const modalTitle = document.getElementById('modal-title');
        const modalPrice = document.getElementById('modal-price');
        const modalDescription = document.getElementById('modal-description');
        const modalSizes = document.getElementById('modal-sizes');
        const modalColors = document.getElementById('modal-colors');
        const modalAddToCart = document.getElementById('modal-add-to-cart');
        
        if (modal && modalImage && modalTitle && modalPrice && modalDescription && modalSizes && modalColors && modalAddToCart) {
            modalImage.src = product.image;
            modalImage.alt = product.name;
            modalTitle.textContent = product.name;
            modalPrice.textContent = `$${product.price}`;
            modalDescription.textContent = product.description;
            
            // Populate sizes
            modalSizes.innerHTML = product.sizes.map(size => `
                <button class="size-option px-3 py-2 rounded-lg text-sm font-medium" data-size="${size}">${size}</button>
            `).join('');
            
            // Populate colors
            modalColors.innerHTML = product.colors.map(color => `
                <button class="size-option px-3 py-2 rounded-lg text-sm font-medium" data-color="${color}">${color}</button>
            `).join('');
            
            modalAddToCart.dataset.productId = product.id;
            
            // Set default selections
            modalSizes.querySelector('.size-option')?.classList.add('selected');
            modalColors.querySelector('.size-option')?.classList.add('selected');
            
            // Add size/color selection handlers
            modalSizes.addEventListener('click', (e) => {
                if (e.target.classList.contains('size-option')) {
                    modalSizes.querySelectorAll('.size-option').forEach(btn => btn.classList.remove('selected'));
                    e.target.classList.add('selected');
                }
            });
            
            modalColors.addEventListener('click', (e) => {
                if (e.target.classList.contains('size-option')) {
                    modalColors.querySelectorAll('.size-option').forEach(btn => btn.classList.remove('selected'));
                    e.target.classList.add('selected');
                }
            });
            
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }
    }

    closeProductModal() {
        const modal = document.getElementById('product-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    }

    addToCartFromModal(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;
        
        const selectedSize = document.querySelector('#modal-sizes .size-option.selected')?.dataset.size || '9';
        const selectedColor = document.querySelector('#modal-colors .size-option.selected')?.dataset.color || product.colors[0];
        
        const existingItem = this.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                ...product,
                quantity: 1,
                selectedSize,
                selectedColor
            });
        }
        
        this.saveCart();
        this.updateCartUI();
        this.closeProductModal();
        this.showCartNotification('Item added to cart!');
    }

    showCheckout() {
        const checkoutModal = document.getElementById('checkout-modal');
        if (checkoutModal) {
            checkoutModal.classList.remove('hidden');
            checkoutModal.classList.add('flex');
        }
    }

    closeCheckout() {
        const checkoutModal = document.getElementById('checkout-modal');
        if (checkoutModal) {
            checkoutModal.classList.add('hidden');
            checkoutModal.classList.remove('flex');
        }
    }

    processOrder() {
        // Simulate order processing
        this.closeCheckout();
        
        setTimeout(() => {
            this.clearCart();
            this.showSuccessModal();
        }, 1000);
    }

    showSuccessModal() {
        const successModal = document.getElementById('success-modal');
        if (successModal) {
            successModal.classList.remove('hidden');
            successModal.classList.add('flex');
        }
    }

    closeSuccessModal() {
        const successModal = document.getElementById('success-modal');
        if (successModal) {
            successModal.classList.add('hidden');
            successModal.classList.remove('flex');
        }
    }

    subscribeNewsletter() {
        this.showCartNotification('Thank you for subscribing!');
    }

    initAnimations() {
        // Initialize Splitting.js for text animations
        if (typeof Splitting !== 'undefined') {
            Splitting();
        }
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all reveal elements
        document.querySelectorAll('.reveal-element').forEach(el => {
            observer.observe(el);
        });
    }

    animateElements() {
        // Re-observe new elements after products are rendered
        setTimeout(() => {
            document.querySelectorAll('.reveal-element').forEach(el => {
                if (!el.style.opacity) {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(20px)';
                }
            });
            this.setupScrollAnimations();
        }, 100);
    }
}

// Initialize the store when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WoolTechStore();
});

// Smooth scrolling for anchor links
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});