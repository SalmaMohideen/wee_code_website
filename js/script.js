// Function to set active menu item based on current page
function setActiveMenuItem() {
    // Get the current page name from the URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Remove .html extension and normalize
    const pageName = currentPage.replace('.html', '').toLowerCase();
    
    // Map page names to data-page values
    const pageMap = {
        'index': 'home',
        '': 'home',
        'welcome': 'welcome',
        'our-classes': 'our-classes',
        'about-us': 'about-us'
    };
    
    // Get the current page identifier
    const currentPageId = pageMap[pageName] || 'home';
    
    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to the current page's nav link
    const activeLink = document.querySelector(`.nav-link[data-page="${currentPageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setActiveMenuItem();
});

// Also run on page navigation (for single-page apps or if using history API)
window.addEventListener('popstate', function() {
    setActiveMenuItem();
});

