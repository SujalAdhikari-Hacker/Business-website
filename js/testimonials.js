export function setupTestimonials() {
  // Only run on pages with testimonial slider
  const testimonialSlider = document.querySelector('.testimonial-slider');
  if (!testimonialSlider) return;
  
  const slides = document.querySelector('.testimonial-slides');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  let slideWidth = 0;
  let touchStartX = 0;
  let touchEndX = 0;
  
  // Initialize slider
  const initSlider = () => {
    // Get width of a slide
    slideWidth = testimonialSlider.offsetWidth;
    
    // Resize all slides to match container width
    const slideElements = document.querySelectorAll('.testimonial-slide');
    slideElements.forEach(slide => {
      slide.style.width = `${slideWidth}px`;
    });
    
    // Set initial position
    updateSlider();
  };
  
  // Update slider position
  const updateSlider = () => {
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    
    // Update active dot
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  };
  
  // Go to next slide
  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % dots.length;
    updateSlider();
  };
  
  // Go to previous slide
  const prevSlide = () => {
    currentSlide = (currentSlide - 1 + dots.length) % dots.length;
    updateSlider();
  };
  
  // Handle dot clicks
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateSlider();
    });
  });
  
  // Handle touch events for mobile swipe
  testimonialSlider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  testimonialSlider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  // Handle swipe direction
  const handleSwipe = () => {
    const swipeThreshold = 50; // Min px to register as swipe
    
    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left, go to next slide
      nextSlide();
    } else if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right, go to previous slide
      prevSlide();
    }
  };
  
  // Auto advance slides
  let slideInterval = setInterval(nextSlide, 5000);
  
  // Pause auto advance on hover
  testimonialSlider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });
  
  testimonialSlider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
  });
  
  // Initialize on load and resize
  window.addEventListener('load', initSlider);
  window.addEventListener('resize', initSlider);
}