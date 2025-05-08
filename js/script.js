document.addEventListener('DOMContentLoaded', function() {
    const dropdownButtons = document.querySelectorAll('.dropdown-button');
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dropdownContent = this.nextElementSibling;
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Close dropdowns when clicking outside
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-button')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        }
    });
    // Example: Toggle filter items
    const filterItems = document.querySelectorAll('.filter-section li');
    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    // Example: Load product details dynamically
    // Add your logic here
    
    // Add hover effects for navigation items
    const navItems = document.querySelectorAll('.main-nav li, .secondary-nav li');
    
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.color = '#ff9900';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.color = '';
            }
        });
    });
    
    // Create account button hover effect
    const createAccountBtn = document.querySelector('.create-account');
    
    createAccountBtn.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#e88b00';
    });
    
    createAccountBtn.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#ff9900';
    });
    
    // Simulate wave animation in background
    function createWaveEffect() {
        const mainContent = document.querySelector('.main-content');
        const wave = document.createElement('div');
        wave.classList.add('wave');
        
        const randomLeft = Math.random() * 100;
        const randomDuration = 3 + Math.random() * 2;
        
        wave.style.cssText = `
            position: absolute;
            bottom: -100px;
            left: ${randomLeft}%;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(0,115,187,0.2) 0%, rgba(15,27,42,0) 70%);
            border-radius: 50%;
            animation: waveRise ${randomDuration}s ease-out forwards;
            z-index: 1;
        `;
        
        mainContent.appendChild(wave);
        
        setTimeout(() => {
            wave.remove();
        }, randomDuration * 1000);
    }
    
    // Add CSS animation for waves
    const style = document.createElement('style');
    style.textContent = `
        @keyframes waveRise {
            0% {
                transform: scale(0.5);
                opacity: 0.1;
            }
            100% {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Create waves periodically
    setInterval(createWaveEffect, 500);
});

document.addEventListener('DOMContentLoaded', function() {
    // Handle filter title clicks to toggle filter options
    const filterTitles = document.querySelectorAll('.filter-title');
    
    filterTitles.forEach(title => {
        title.addEventListener('click', function() {
            // Toggle the arrow
            const arrow = this.querySelector('.arrow');
            arrow.textContent = arrow.textContent === '▼' ? '▶' : '▼';
            
            // Toggle the filter options
            const options = this.nextElementSibling;
            options.style.display = options.style.display === 'none' ? 'block' : 'none';
        });
    });
    
    // Handle clear filters button
    const clearFiltersBtn = document.querySelector('.clear-filters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Clear all checkboxes
            const checkboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            
            // Clear search input
            const searchInput = document.querySelector('.search-container input');
            if (searchInput) {
                searchInput.value = '';
            }
        });
    }
    
    // Handle product card expand buttons
    const expandButtons = document.querySelectorAll('.expand-button');
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle expanded content (you can add more details here)
            this.textContent = this.textContent === '▼' ? '▲' : '▼';
            
            // Find the parent product card
            const productCard = this.closest('.product-card');
            
            // Toggle additional content (you would need to add this HTML element)
            const additionalContent = productCard.querySelector('.additional-content');
            if (additionalContent) {
                additionalContent.style.display = additionalContent.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
});