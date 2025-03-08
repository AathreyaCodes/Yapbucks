// Complete menu data structure
const fullMenuCategories = {
    'HOT DRINKS': [
        { name: 'Yappuccino', price: '2 Yapora', description: 'Our signature cappuccino with a twist of vanilla' },
        { name: 'Latte-yap', price: '2 Yapora', description: 'Smooth, creamy latte that\'ll keep you talking' },
        { name: "That's-that-me-espresso", price: '3 Yapora', description: 'Strong, bold espresso for when you need that extra kick' },
        { name: 'Cappuchit-chat', price: '2 Yapora', description: 'Perfect balance of coffee and milk for endless gossip sessions' },
        { name: 'Mocha Madness', price: '5 Yapora', description: 'Rich chocolate with premium coffee - pure madness!' },
        { name: 'Yapresso', price: '2 Yapora', description: 'Quick espresso shot to keep the yap flowing' },
        { name: 'Macchi-yap-o', price: '3 Yapora', description: 'Espresso with a dash of milk foam, for the sophisticated yappers' },
        { name: "Chai It, You'll Like It", price: '2 Yapora', description: 'Spiced chai tea with a promise of satisfaction' },
        { name: 'Hot Choco-loud', price: '2 Yapora', description: 'For when you want to be loud about your chocolate cravings' }
    ],
    'COLD DRINKS': [
        { name: 'Rizzberry Punch', price: '5 Yapora', description: 'Berry-infused punch with an extra dose of charm' },
        { name: 'Frappé Gossip', price: '4 Yapora', description: 'Blended coffee that\'s worth talking about' },
        { name: 'Yapcicle', price: '3 Yapora', description: 'Iced Yappuccino to cool down heated conversations' },
        { name: 'Iced Rizzberry Dream', price: '5 Yapora', description: 'A dreamy iced tea with berry flavors and a hint of mint' },
        { name: 'Cool Chai', price: '3 Yapora', description: 'Refreshing iced chai for a cool vibe' },
        { name: 'Frosted Flap-yaps', price: '4 Yapora', description: 'Iced coffee with our signature cream top' },
        { name: 'Chill-yap', price: '5 Yapora', description: 'Iced mocha that\'s as chill as your favorite gossip session' }
    ],
    'YAP MUNCHS': [
        { name: 'Yapwich', price: '5 Yapora', description: 'Artisan sandwich with a different filling each day' },
        { name: 'Wrap-it-yap-it', price: '5 Yapora', description: 'Wholesome wrap with a side of conversation' },
        { name: 'Gossip-crunch Taco', price: '4 Yapora', description: 'Tacos so good you\'ll want to spill the beans' },
        { name: 'Rizzcake Bites', price: '7 Yapora', description: 'Cake bites with charismatic flavor combinations' },
        { name: 'Flap-yaps', price: '6 Yapora', description: 'Fluffy pancakes that\'ll keep your mouth busy' },
        { name: 'Mocha Croisslay', price: '5 Yapora', description: 'Croissant with mocha filling that slays' },
        { name: 'Cinnayap Roll', price: '3 Yapora', description: 'Classic cinnamon roll with our special glaze' },
        { name: 'Yapjoy', price: '4 Yapora', description: 'Joy-inducing pastry with a surprise filling' },
        { name: 'Yapuffins', price: '12 Yapora', description: 'Assorted muffins perfect for sharing' },
        { name: 'Drama Fries', price: '3 Yapora', description: 'Crispy, salty fries for when you\'re feeling dramatic' },
        { name: 'Snarky Nachos', price: '5 Yapora', description: 'Nachos with attitude and extra cheese' }
    ],
    'YAP DESSERTS': [
        { name: 'Rizzberry Cheesecake', price: '5 Yapora', description: 'Charming cheesecake with berry compote' },
        { name: 'Flirty Fudge Cake', price: '6 Yapora', description: 'Rich chocolate cake that\'ll make you blush' },
        { name: 'Sassy Sundae', price: '4 Yapora', description: 'Ice cream sundae with a sassy flavor combo' },
        { name: 'Yapcake', price: '7 Yapora', description: 'Our house special cake - extra in all the right ways' },
        { name: 'Yapplause Brownies', price: '4 Yapora', description: 'Brownies worthy of a standing ovation' },
        { name: 'Tiramisu-Talk', price: '6 Yapora', description: 'Coffee-soaked goodness that gets people talking' },
        { name: 'Gabbing Green Carrot Cake', price: '5 Yapora', description: 'Carrot cake with a twist - great conversation starter' },
        { name: 'Fujiwara Tofu Special', price: '6 Yapora', description: 'Tofu cheesecake that drifts into your heart' }
    ],
    'YAP IFTAR': [
        { name: 'Yappity-Yap Samosas', price: '4 Yapora', description: 'Crispy samosas perfect for breaking fast' },
        { name: 'Chatter Crackers', price: '2 Yapora', description: 'Seasoned crackers to munch on while catching up' },
        { name: 'Yap-Yoghurt', price: '3 Yapora', description: 'Creamy yoghurt with honey and nuts' },
        { name: 'Blabbering Beverages', price: '2 Yapora', description: 'Selection of refreshing drinks to quench your thirst' },
        { name: 'Wordy-Walnut Baklava', price: '4 Yapora', description: 'Sweet baklava packed with walnuts and stories' },
        { name: 'Fruitful Flap-Jaw Fiesta', price: '8 Yapora', description: 'Mixed fruit platter for a refreshing start' },
        { name: 'Halali Mango Lassi', price: '3 Yapora', description: 'Smooth mango lassi to cool your palate' },
        { name: 'Chattering Chickpea Salad', price: '5 Yapora', description: 'Fresh salad with chickpeas and zesty dressing' },
        { name: 'Chatter Chaat', price: '4 Yapora', description: 'Tangy, spicy chaat that gets you talking' }
    ],
    'YAPINDIAN DISHES': [
        { name: 'Yaporottas', price: '4 Yapora', description: 'Flaky, buttery parathas served hot' },
        { name: 'Yapiriyani', price: '6 Yapora', description: 'Aromatic rice dish with flavorful spices' },
        { name: 'YapBucks Special Thali', price: '5 Yapora', description: 'Complete meal with a variety of dishes' },
        { name: 'Yapka Masala Dosa', price: '3 Yapora', description: 'Crispy dosa with spiced potato filling' },
        { name: 'Yapomosas', price: '3 Yapora', description: 'Mini samosas perfect for sharing' },
        { name: 'Yapasala Chai', price: '2 Yapora', description: 'Traditional masala chai brewed to perfection' },
        { name: 'Yaplis', price: '3 Yapora', description: 'Sweet, fried dumplings soaked in sugar syrup' },
        { name: 'Yapa Pav', price: '2 Yapora', description: 'Spicy potato filling in a soft bun' },
        { name: 'Yaneer Tikka', price: '4 Yapora', description: 'Grilled paneer with aromatic spices' },
        { name: 'YapBucks Special Tikka', price: '6 Yapora', description: 'Our signature tikka with secret spice blend' },
        { name: 'Yapni Puri', price: '5 Yapora', description: 'Crispy puris filled with tangy water and chutney' },
        { name: 'Yap Bucks North Indian Thali', price: '5 Yapora', description: 'Hearty North Indian feast' },
        { name: 'Yap Bucks South Indian Thali', price: '5 Yapora', description: 'Authentic South Indian meal experience' },
        { name: 'Punjabi Yappist', price: '5 Yapora', description: 'Punjabi specialties with a Yapbucks twist' }
    ]
};

// Function to create expandable menu sections with improved UI
function createFullMenu() {
    const menuContainer = document.getElementById('full-menu');
    let activeSection = null;

    // Create sections for each category
    Object.entries(fullMenuCategories).forEach(([category, items]) => {
        const section = document.createElement('div');
        section.className = 'bg-white rounded-lg shadow-md overflow-hidden mb-4 menu-category';
        section.setAttribute('data-category', category);
        
        const header = document.createElement('button');
        header.className = 'w-full px-6 py-4 flex justify-between items-center bg-yapbucks-beige hover:bg-opacity-80 transition-colors collapsible-header';
        header.innerHTML = `
            <h2 class="font-serif text-2xl text-yapbucks-dark category-title">${category} <span class="text-sm font-sans ml-2">(${items.length} items)</span></h2>
            <svg class="w-6 h-6 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        `;

        const content = document.createElement('div');
        content.className = 'px-6 py-4 hidden collapsible-content';
        
        // Create grid for menu items
        const itemsGrid = document.createElement('div');
        itemsGrid.className = 'grid grid-cols-1 md:grid-cols-2 gap-4';
        
        // Add items to grid
        items.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = 'p-4 border-b border-yapbucks-beige last:border-0 menu-item hover:bg-yapbucks-cream rounded-lg transition-colors menu-item-container';
            itemCard.innerHTML = `
                <div class="flex justify-between items-start">
                    <h3 class="font-serif text-lg text-yapbucks-dark menu-item-title">${item.name}</h3>
                    <span class="font-sans font-medium text-yapbucks-dark bg-yapbucks-beige px-2 py-1 rounded-full text-sm menu-item-price">${item.price}</span>
                </div>
                <p class="font-sans text-yapbucks-brown text-sm mt-1 menu-item-description">${item.description || ''}</p>
            `;
            itemsGrid.appendChild(itemCard);
        });
        
        content.appendChild(itemsGrid);

        // Toggle section on click
        header.addEventListener('click', () => {
            const arrow = header.querySelector('svg');
            const isExpanding = content.classList.contains('hidden');

            // Close active section if it's not the one being clicked
            if (activeSection && activeSection !== content) {
                activeSection.classList.add('hidden');
                activeSection.previousElementSibling.querySelector('svg').classList.remove('rotate-180');
            }

            // Toggle current section
            content.classList.toggle('hidden');
            arrow.classList.toggle('rotate-180');

            // Smooth scroll to this section if opening
            if (isExpanding) {
                setTimeout(() => {
                    header.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }

            // Update active section
            activeSection = isExpanding ? content : null;
        });

        section.appendChild(header);
        section.appendChild(content);
        menuContainer.appendChild(section);
    });
}

// Initialize category filtering
function setupCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuCategories = document.querySelectorAll('.menu-category');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active', 'bg-yapbucks-brown'));
            
            // Add active class to clicked button
            button.classList.add('active', 'bg-yapbucks-brown');
            
            // Check if dark mode is active
            const isDarkMode = document.documentElement.classList.contains('dark-mode');
            
            const selectedCategory = button.getAttribute('data-category');
            
            // Show all or filter by category
            if (selectedCategory === 'all') {
                menuCategories.forEach(category => {
                    category.classList.remove('hidden');
                });
            } else {
                menuCategories.forEach(category => {
                    if (category.getAttribute('data-category') === selectedCategory) {
                        category.classList.remove('hidden');
                    } else {
                        category.classList.add('hidden');
                    }
                });
            }
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createFullMenu();
    setupCategoryFilters();
    
    // Open first section by default
    setTimeout(() => {
        const firstHeader = document.querySelector('.menu-category button');
        if (firstHeader) {
            firstHeader.click();
        }
    }, 500);
}); 