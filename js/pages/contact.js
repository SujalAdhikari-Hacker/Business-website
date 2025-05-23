export function renderContactPage() {
  const mainContent = document.getElementById('main-content');
  
  mainContent.innerHTML = `
    <!-- Contact Hero Section -->
    <section class="contact-hero">
      <div class="container">
        <div class="contact-hero-content">
          <h1 class="contact-hero-title">Contact Us</h1>
          <p>Get in touch with our team for inquiries, quotes, or support</p>
        </div>
      </div>
    </section>
    
    <!-- Contact Section -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <div class="contact-card">
              <h2 class="contact-card-title">Get In Touch</h2>
              <ul class="contact-details">
                <li class="contact-detail">
                  <div class="contact-icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="contact-text">
                    <strong>Our Location</strong>
                    Dhangadhi, Chatakpur, Godawari Road
                  </div>
                </li>
                <li class="contact-detail">
                  <div class="contact-icon">
                    <i class="fas fa-phone-alt"></i>
                  </div>
                  <div class="contact-text">
                    <strong>Phone Number</strong>
                    +977 9858420302
                  </div>
                </li>
                <li class="contact-detail">
                  <div class="contact-icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="contact-text">
                    <strong>Email Address</strong>
                    manakabrother@gmail.com
                  </div>
                </li>
                <li class="contact-detail">
                  <div class="contact-icon">
                    <i class="fas fa-clock"></i>
                  </div>
                  <div class="contact-text">
                    <strong>Business Hours</strong>
                    Sunday - Friday: 9:00 AM - 5:00 PM<br>
                    Saturday: 9:00 AM - 12:00 PM
                  </div>
                </li>
              </ul>
            </div>
            
            <div class="contact-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.878778260658!2d80.57552939999999!3d28.6933613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1ecce1056cc77%3A0x99fe74f117bd2f17!2sManaka%20Brothers!5e0!3m2!1sen!2snp!4v1710861477044!5m2!1sen!2snp" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          
          <div class="contact-form-container">
            <h2 class="contact-form-title">Send Us a Message</h2>
            <form 
              class="contact-form"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/contact/success"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p class="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              
              <div class="form-group">
                <label for="name" class="form-label">Your Name</label>
                <input type="text" id="name" name="name" class="form-input" required>
              </div>
              
              <div class="form-group">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" id="email" name="email" class="form-input" required>
              </div>
              
              <div class="form-group">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="tel" id="phone" name="phone" class="form-input">
              </div>
              
              <div class="form-group">
                <label for="subject" class="form-label">Subject</label>
                <input type="text" id="subject" name="subject" class="form-input" required>
              </div>
              
              <div class="form-group">
                <label for="message" class="form-label">Your Message</label>
                <textarea id="message" name="message" class="form-textarea" required></textarea>
              </div>
              
              <button type="submit" class="form-submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Business Hours Section -->
    <section class="business-hours">
      <div class="container">
        <h2 class="section-title">Business Hours</h2>
        <div class="hours-grid">
          <div class="hours-card">
            <h3 class="hours-title">
              <span class="hours-icon"><i class="fas fa-store"></i></span>
              Retail Hours
            </h3>
            <ul class="hours-list">
              <li class="hours-item">
                <span class="day">Sunday - Friday</span>
                <span class="time">9:00 AM - 5:00 PM</span>
              </li>
              <li class="hours-item">
                <span class="day">Saturday</span>
                <span class="time">9:00 AM - 12:00 PM</span>
              </li>
            </ul>
          </div>
          
          <div class="hours-card">
            <h3 class="hours-title">
              <span class="hours-icon"><i class="fas fa-warehouse"></i></span>
              Wholesale Hours
            </h3>
            <ul class="hours-list">
              <li class="hours-item">
                <span class="day">Sunday - Friday</span>
                <span class="time">8:00 AM - 4:00 PM</span>
              </li>
              <li class="hours-item">
                <span class="day">Saturday</span>
                <span class="time">8:00 AM - 12:00 PM</span>
              </li>
            </ul>
          </div>
          
          <div class="hours-card">
            <h3 class="hours-title">
              <span class="hours-icon"><i class="fas fa-calendar-check"></i></span>
              Appointment Hours
            </h3>
            <ul class="hours-list">
              <li class="hours-item">
                <span class="day">Sunday - Friday</span>
                <span class="time">10:00 AM - 4:00 PM</span>
              </li>
              <li class="hours-item">
                <span class="day">Saturday</span>
                <span class="time">By Appointment Only</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Need Immediate Assistance?</h2>
          <p class="cta-description">For urgent inquiries or quotes, you can reach us directly via phone or WhatsApp. We're committed to responding quickly to all customer needs.</p>
          <div class="cta-buttons">
            <a href="tel:+9779858420302" class="btn btn-accent"><i class="fas fa-phone-alt"></i> Call Us</a>
            <a href="https://wa.me/9779858420302" class="btn btn-outline"><i class="fab fa-whatsapp"></i> WhatsApp Us</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function setupContactForm() {
  const contactForm = document.querySelector('.contact-form');
  
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', (e) => {
    const submitBtn = contactForm.querySelector('.form-submit');
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;
  });
}
