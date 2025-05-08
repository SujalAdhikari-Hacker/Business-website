export function setupProductTabs() {
  const originTabs = document.querySelectorAll('.origin-tab');
  const productCards = document.querySelectorAll('.product-card');
  
  if (originTabs.length === 0 || productCards.length === 0) return;
  
  originTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      originTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Filter products
      const origin = tab.getAttribute('data-origin');
      
      productCards.forEach(card => {
        if (origin === 'all' || card.getAttribute('data-origin') === origin) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}