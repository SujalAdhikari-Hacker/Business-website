export function setupCounters() {
  const counterValues = document.querySelectorAll('.counter-value');
  
  if (counterValues.length === 0) return;
  
  let hasStarted = false;
  
  const startCounters = () => {
    if (hasStarted) return;
    
    counterValues.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const span = counter.querySelector('span');
      const duration = 3000; // Increased duration for smoother animation
      const step = Math.max(1, Math.floor(target / (duration / 16))); 
      
      let current = 0;
      const updateCounter = () => {
        current += step;
        if (current >= target) {
          current = target;
          span.textContent = current.toLocaleString();
        } else {
          span.textContent = current.toLocaleString();
          requestAnimationFrame(updateCounter);
        }
      };
      
      updateCounter();
    });
    
    hasStarted = true;
  };
  
  const resetCounters = () => {
    hasStarted = false;
    counterValues.forEach(counter => {
      const span = counter.querySelector('span');
      span.textContent = '0';
    });
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounters();
      } else {
        resetCounters();
      }
    });
  }, { threshold: 0.1 });
  
  const counterSection = document.querySelector('.counter-section');
  if (counterSection) {
    observer.observe(counterSection);
  }
}