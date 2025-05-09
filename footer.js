// Language selector functionality
document.addEventListener('DOMContentLoaded', function() {
    // Language selector click handling
    const languageSpans = document.querySelectorAll('.language-selector span');
    languageSpans.forEach(span => {
        span.addEventListener('click', function() {
            // Here you would typically implement language switching logic
            console.log('Switching language to:', this.textContent);
        });
    });

    // Social media links hover effect
    const socialLinks = document.querySelectorAll('.social-icons a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.opacity = '0.8';
        });
        link.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
    });

    // Create account button hover effect
    const createAccountBtn = document.querySelector('.create-account-btn');
    if (createAccountBtn) {
        createAccountBtn.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#ec7211';
        });
        createAccountBtn.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#ff9900';
        });
    }

    // Cookie preferences functionality
    const cookiePrefsLink = document.querySelector('a[href="#"][data-cookie-preferences]');
    if (cookiePrefsLink) {
        cookiePrefsLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Here you would implement cookie preferences modal
            console.log('Opening cookie preferences');
        });
    }

    // Accessibility improvements
    const footerLinks = document.querySelectorAll('.footer a');
    footerLinks.forEach(link => {
        // Add focus styles for keyboard navigation
        link.addEventListener('focus', function() {
            this.style.outline = '2px solid #fff';
            this.style.outlineOffset = '2px';
        });
        link.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    // Equal Opportunity Employer link functionality
    const equalOpportunityLink = document.querySelector('a[href="#equal-opportunity"]');
    if (equalOpportunityLink) {
        equalOpportunityLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Here you would implement equal opportunity information modal
            console.log('Opening equal opportunity information');
        });
    }
});

// Optional: Smooth scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Optional: Footer responsive menu for mobile
function toggleFooterMenu(sectionId) {
    const section = document.querySelector(`.footer-section#${sectionId}`);
    if (section) {
        section.classList.toggle('expanded');
    }
}