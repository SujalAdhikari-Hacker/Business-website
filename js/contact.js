export function setupContactForm() {
  const contactForm = document.querySelector('.contact-form');
  
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', (e) => {
    // Form is handled by Netlify Forms
    // This is just for additional validation or user feedback
    
    // Example: Client-side validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    let isValid = true;
    
    if (!nameInput.value.trim()) {
      nameInput.classList.add('error');
      isValid = false;
    } else {
      nameInput.classList.remove('error');
    }
    
    if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
      emailInput.classList.add('error');
      isValid = false;
    } else {
      emailInput.classList.remove('error');
    }
    
    if (!messageInput.value.trim()) {
      messageInput.classList.add('error');
      isValid = false;
    } else {
      messageInput.classList.remove('error');
    }
    
    // If not valid, prevent submission
    if (!isValid) {
      e.preventDefault();
      return;
    }
    
    // If valid, let Netlify handle submission
    // but provide user feedback
    const submitBtn = contactForm.querySelector('.form-submit');
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;
    
    // This will actually not execute due to the form submission and page reload
    // but is included for completeness
    setTimeout(() => {
      submitBtn.innerHTML = 'Send Message';
      submitBtn.disabled = false;
    }, 3000);
  });
  
  // Helper function to validate email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}