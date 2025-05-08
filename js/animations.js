export function initAnimations() {
  // Add animation classes to elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    if (elements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const animation = el.getAttribute('data-animation') || 'fade-in';
          el.classList.add(animation);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
      observer.observe(el);
    });
  };
  
  // Apply animation classes to elements on initial load
  const setInitialAnimations = () => {
    // Add animation classes to elements with data-animation attribute
    document.querySelectorAll('[data-animation]').forEach(el => {
      if (!el.classList.contains('animate-on-scroll')) {
        const animation = el.getAttribute('data-animation');
        el.classList.add(animation);
      }
    });
    
    // Set up scroll animations
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      // Don't animate initially, wait for scroll
      el.style.opacity = '0';
    });
    
    // Start scroll-based animations
    animateOnScroll();
  };
  
  // Initialize animations
  setInitialAnimations();
  
  // Re-check for new elements that might need animations (for SPA page changes)
  document.addEventListener('DOMContentLoaded', setInitialAnimations);
  window.addEventListener('load', setInitialAnimations);
  
  // Add animation classes to page transitions for SPA
  const handlePageTransition = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.classList.add('fade-in');
      setTimeout(() => {
        mainContent.classList.remove('fade-in');
      }, 1000);
    }
  };
  
  // Listen for page navigation events
  window.addEventListener('popstate', handlePageTransition);
  
  // Custom event for when SPA navigation occurs
  document.addEventListener('page-changed', handlePageTransition);
  
  // Override history pushState to trigger our custom event
  const originalPushState = history.pushState;
  history.pushState = function() {
    originalPushState.apply(this, arguments);
    document.dispatchEvent(new Event('page-changed'));
  };
}