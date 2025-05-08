export function setupFooter() {
  const footer = document.getElementById('footer');
  
  if (!footer) return;
  
  footer.innerHTML = `
    <div class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-about">
            <div class="footer-logo">
              <h2>Menaka Brothers</h2>
            </div>
            <p>Your trusted partner for quality hardware products in Nepal for over 25 years. We provide the best Indian, Chinese, and Nepali hardware products.</p>
          </div>
          
          <div class="footer-links-section">
            <h3 class="footer-heading">Quick Links</h3>
            <ul class="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/dealerships">Dealerships</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div class="footer-contact">
            <h3 class="footer-heading">Contact Us</h3>
            <div class="footer-contact-item">
              <div class="footer-contact-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="footer-contact-text">
                <strong>Address</strong>
                Dhangadhi, Chatakpur, Godawari Road
              </div>
            </div>
            <div class="footer-contact-item">
              <div class="footer-contact-icon">
                <i class="fas fa-phone-alt"></i>
              </div>
              <div class="footer-contact-text">
                <strong>Phone</strong>
                +977 9858420302
              </div>
            </div>
            <div class="footer-contact-item">
              <div class="footer-contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="footer-contact-text">
                <strong>Email</strong>
                manakabrother@gmail.com
              </div>
            </div>
            <div class="footer-contact-item">
              <div class="footer-contact-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div class="footer-contact-text">
                <strong>Business Hours</strong>
                Sun - Fri: 9:00 AM - 5:00 PM<br>
                Sat: 9:00 AM - 12:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p>&copy; ${new Date().getFullYear()} Menaka Brothers. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  `;
}