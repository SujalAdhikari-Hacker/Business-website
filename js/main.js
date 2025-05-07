// Import CSS files
import '../css/style.css';
import '../css/navbar.css';
import '../css/home.css';
import '../css/footer.css';
import '../css/about.css';
import '../css/products.css';
import '../css/services.css';
import '../css/contact.css';
import '../css/dealerships.css';
import '../css/language-selector.css';

// Import JavaScript modules
import { setupNavbar } from './navbar.js';
import { setupFooter } from './footer.js';
import { setupCounters } from './counters.js';
import { setupTestimonials } from './testimonials.js';
import { setupProductTabs } from './products.js';
import { setupContactForm } from './contact.js';
import { initAnimations } from './animations.js';
import { router } from './router.js';
import { languageManager } from './languageManager.js';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize language manager
  languageManager.init();
  
  // Set up main components
  setupNavbar();
  setupFooter();
  
  // Initialize router
  router.init();
  
  // Set up page-specific components
  setupCounters();
  setupTestimonials();
  setupProductTabs();
  setupContactForm();
  
  // Initialize animations
  initAnimations();
});