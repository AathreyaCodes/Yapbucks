// Menu data structure
const menuCategories = {
    'HOT DRINKS': [
        { name: 'Yappuccino', price: '2 Yapora' },
        { name: 'Latte-yap', price: '2 Yapora' },
        { name: "That's-that-me-espresso", price: '3 Yapora' },
        { name: 'Cappuchit-chat', price: '2 Yapora' },
        { name: 'Mocha Madness', price: '5 Yapora' },
        { name: 'Yapresso', price: '2 Yapora' },
        { name: 'Macchi-yap-o', price: '3 Yapora' },
        { name: "Chai It, You'll Like It", price: '2 Yapora' },
        { name: 'Hot Choco-loud', price: '2 Yapora' }
    ],
    'COLD DRINKS': [
        { name: 'Rizzberry Punch', price: '5 Yapora' },
        { name: 'Frappé Gossip', price: '4 Yapora' },
        { name: 'Yapcicle', price: '3 Yapora' },
        { name: 'Iced Rizzberry Dream', price: '5 Yapora' },
        { name: 'Cool Chai', price: '3 Yapora' },
        { name: 'Frosted Flap-yaps', price: '4 Yapora' },
        { name: 'Chill-yap', price: '5 Yapora' }
    ],
    'YAP MUNCHS': [
        { name: 'Yapwich', price: '5 Yapora' },
        { name: 'Wrap-it-yap-it', price: '5 Yapora' },
        { name: 'Gossip-crunch Taco', price: '4 Yapora' },
        { name: 'Rizzcake Bites', price: '7 Yapora' },
        { name: 'Flap-yaps', price: '6 Yapora' },
        { name: 'Mocha Croisslay', price: '5 Yapora' },
        { name: 'Cinnayap Roll', price: '3 Yapora' },
        { name: 'Yapjoy', price: '4 Yapora' },
        { name: 'Yapuffins', price: '12 Yapora' },
        { name: 'Drama Fries', price: '3 Yapora' },
        { name: 'Snarky Nachos', price: '5 Yapora' }
    ]
};

// Function to create menu category cards
function createMenuCategories() {
    const menuContainer = document.getElementById('menu-categories');
    
    Object.entries(menuCategories).forEach(([category, items]) => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'bg-white p-6 rounded-lg shadow-lg menu-item animate-fade-in';
        
        categoryCard.innerHTML = `
            <h3 class="font-serif text-2xl mb-4 text-yapbucks-dark">${category}</h3>
            <ul class="space-y-2">
                ${items.slice(0, 4).map(item => `
                    <li class="flex justify-between items-center">
                        <span class="font-sans text-yapbucks-brown">${item.name}</span>
                        <span class="font-sans text-yapbucks-dark font-medium">${item.price}</span>
                    </li>
                `).join('')}
            </ul>
            ${items.length > 4 ? `
                <a href="full-menu.html" class="mt-4 inline-block text-yapbucks-brown hover:text-yapbucks-dark font-sans text-sm">
                    + ${items.length - 4} more items →
                </a>
            ` : ''}
        `;
        
        menuContainer.appendChild(categoryCard);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createMenuCategories();
    
    // Add scroll animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('animate-fade-in');
    });
}); 