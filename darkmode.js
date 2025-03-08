// Dark Mode Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create dark mode toggle button
    createDarkModeToggle();
    
    // Check for saved theme preference or respect OS preference
    initTheme();
    
    // Add event listener to toggle button
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
});

// Create and insert the dark mode toggle
function createDarkModeToggle() {
    const nav = document.querySelector('nav .max-w-7xl .flex');
    
    if (nav) {
        // Create toggle container
        const toggleContainer = document.createElement('div');
        toggleContainer.className = 'ml-4 flex items-center';
        
        // Create the toggle button
        const toggle = document.createElement('button');
        toggle.id = 'dark-mode-toggle';
        toggle.className = 'relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-yapbucks-brown';
        toggle.setAttribute('aria-label', 'Toggle dark mode');
        
        // Create the toggle circle
        const toggleCircle = document.createElement('span');
        toggleCircle.className = 'toggle-circle inline-block w-5 h-5 transform transition-transform rounded-full shadow-md';
        
        // Create the icons
        const sunIcon = document.createElement('span');
        sunIcon.className = 'sun-icon absolute left-0.5 text-xs';
        sunIcon.innerHTML = '☀️';
        
        const moonIcon = document.createElement('span');
        moonIcon.className = 'moon-icon absolute right-0.5 text-xs';
        moonIcon.innerHTML = '🌙';
        
        // Assemble the toggle
        toggle.appendChild(sunIcon);
        toggle.appendChild(moonIcon);
        toggle.appendChild(toggleCircle);
        toggleContainer.appendChild(toggle);
        
        // Insert before the mobile menu button on mobile or at the end of nav items on desktop
        const mobileMenuButton = document.querySelector('.md\\:hidden');
        if (mobileMenuButton) {
            nav.insertBefore(toggleContainer, mobileMenuButton);
        } else {
            nav.appendChild(toggleContainer);
        }
    }
}

// Initialize theme based on localStorage or system preference
function initTheme() {
    const darkModeSaved = localStorage.getItem('darkMode');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // If user has saved preference, use that
    if (darkModeSaved === 'true') {
        enableDarkMode();
    } else if (darkModeSaved === 'false') {
        disableDarkMode();
    } else if (prefersDarkMode) {
        // Otherwise respect OS preference
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

// Toggle between dark and light mode
function toggleDarkMode() {
    if (document.documentElement.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

// Enable dark mode
function enableDarkMode() {
    document.documentElement.classList.add('dark-mode');
    updateToggleAppearance(true);
    localStorage.setItem('darkMode', 'true');
    
    // Add smooth transition effect to all elements
    applyTransitionToAllElements();
}

// Disable dark mode
function disableDarkMode() {
    document.documentElement.classList.remove('dark-mode');
    updateToggleAppearance(false);
    localStorage.setItem('darkMode', 'false');
    
    // Add smooth transition effect to all elements
    applyTransitionToAllElements();
}

// Update the appearance of the toggle button
function updateToggleAppearance(isDark) {
    const toggle = document.getElementById('dark-mode-toggle');
    if (!toggle) return;
    
    const toggleCircle = toggle.querySelector('.toggle-circle');
    
    if (isDark) {
        toggle.classList.add('bg-yapbucks-dark');
        toggle.classList.remove('bg-yapbucks-beige');
        toggleCircle.classList.add('translate-x-5', 'bg-white');
        toggleCircle.classList.remove('bg-yapbucks-brown');
    } else {
        toggle.classList.add('bg-yapbucks-beige');
        toggle.classList.remove('bg-yapbucks-dark');
        toggleCircle.classList.add('bg-yapbucks-brown');
        toggleCircle.classList.remove('translate-x-5', 'bg-white');
    }
}

// Apply transition to all elements
function applyTransitionToAllElements() {
    // Add a CSS class that will be removed after a brief delay
    document.body.classList.add('theme-transition');
    
    // Fix for menu items to ensure proper transitions
    const menuItems = document.querySelectorAll('.menu-item-container');
    if (menuItems.length > 0) {
        menuItems.forEach(item => {
            item.style.transition = 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease';
        });
    }
    
    // Fix for category headers
    const categoryHeaders = document.querySelectorAll('.collapsible-header');
    if (categoryHeaders.length > 0) {
        categoryHeaders.forEach(header => {
            header.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        });
    }
    
    // Remove the transition class after transitions complete
    setTimeout(() => {
        document.body.classList.remove('theme-transition');
    }, 500);
} 