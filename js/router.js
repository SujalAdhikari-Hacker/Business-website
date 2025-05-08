import { renderHomePage } from './pages/home.js';
import { renderAboutPage } from './pages/about.js';
import { renderProductsPage } from './pages/products.js';
import { renderServicesPage } from './pages/services.js';
import { renderDealershipsPage } from './pages/dealerships.js';
import { renderContactPage } from './pages/contact.js';

export const router = {
  routes: {
    '/': renderHomePage,
    '/index.html': renderHomePage,
    '/about': renderAboutPage,
    '/products': renderProductsPage,
    '/services': renderServicesPage,
    '/dealerships': renderDealershipsPage,
    '/contact': renderContactPage,
  },
  
  init() {
    // Handle link clicks
    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && e.target.href && !e.target.target) {
        const url = new URL(e.target.href);
        
        // Only handle same-origin links
        if (url.origin === window.location.origin) {
          e.preventDefault();
          this.navigate(url.pathname);
        }
      }
    });
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      this.handleRoute(window.location.pathname);
    });
    
    // Initial route handling
    this.handleRoute(window.location.pathname);
  },
  
  handleRoute(pathname) {
    const route = this.routes[pathname] || this.routes['/'];
    const mainContent = document.getElementById('main-content');
    
    if (mainContent && route) {
      // Clear existing content
      mainContent.innerHTML = '';
      
      // Render new page content
      route();
      
      // Scroll to top
      window.scrollTo(0, 0);
      
      // Update active nav link
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        link.classList.toggle('active', linkPath === pathname);
      });
      
      // Update document title
      const pageTitle = document.querySelector(`[data-page="${pathname.replace('/', '')}"]`)?.textContent || 'Home';
      document.title = `${pageTitle} | Nepal Hardware Wholesale`;
    }
  },
  
  navigate(pathname) {
    // Update browser history
    window.history.pushState({}, '', pathname);
    
    // Handle the route
    this.handleRoute(pathname);
  }
};