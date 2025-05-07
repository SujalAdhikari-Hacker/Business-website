import { setupCounters } from '../counters.js';

export function renderAboutPage() {
  const mainContent = document.getElementById('main-content');
  
  mainContent.innerHTML = `
    <!-- About Hero Section -->
    <section class="about-hero">
      <div class="container">
        <div class="about-hero-content">
          <h1 class="about-hero-title">About Us</h1>
          <p>Learn about our journey, values, and commitment to quality</p>
        </div>
      </div>
    </section>
    
    <!-- About Section -->
    <section class="about-section">
      <div class="container">
        <div class="about-grid">
          <div class="about-image">
            <img src="https://images.pexels.com/photos/3760535/pexels-photo-3760535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Our Store" />
          </div>
          <div class="about-content">
            <h2>Our Story</h2>
            <p>Founded by Ranjan Kumar Sharma in 2056 B.S., Menaka Brothers has grown from a small family business to become one of Dhangadhi's leading hardware wholesalers. Our journey began when Mr. Sharma migrated from Bardiya to Dhangadhi in 2026 B.S., bringing with him a vision to serve the local community with quality hardware products.</p>
            <p>Starting operations on Ashad 1, 2056 B.S., we quickly established ourselves in the market, securing our first exclusive dealership within just two months, in Bhadra 2056 B.S. From our single location in Dhangadhi, we've built strong relationships with customers and suppliers alike.</p>
            <p>Today, under the continued leadership of our founder and CEO Ranjan Kumar Sharma, we take pride in being a trusted name in Nepal's hardware industry, serving customers with the same dedication and commitment to quality that we started with.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Timeline Section -->
    <section class="timeline-section">
      <div class="container">
        <h2 class="section-title">Our Journey</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">2026 B.S.</div>
            <div class="timeline-content">
              <h3 class="timeline-title">A New Beginning</h3>
              <p class="timeline-description">Ranjan Kumar Sharma migrates from Bardiya to Dhangadhi with a vision for the future.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">2056 B.S., Ashad 1</div>
            <div class="timeline-content">
              <h3 class="timeline-title">Menaka Brothers Founded</h3>
              <p class="timeline-description">Establishment of Menaka Brothers in Dhangadhi, starting our journey in the hardware industry.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">2056 B.S., Bhadra</div>
            <div class="timeline-content">
              <h3 class="timeline-title">First Exclusive Dealership</h3>
              <p class="timeline-description">Secured our first exclusive dealership, marking a significant milestone in our growth.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">Present Day</div>
            <div class="timeline-content">
              <h3 class="timeline-title">Continuing Our Legacy</h3>
              <p class="timeline-description">Operating from our location in Dhangadhi, serving customers across the region with quality hardware products.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <h2 class="section-title">Our Values</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">
              <i class="fas fa-award"></i>
            </div>
            <h3 class="value-title">Quality</h3>
            <p class="value-description">We are committed to offering only the highest quality products that meet international standards and exceed customer expectations.</p>
          </div>
          
          <div class="value-card">
            <div class="value-icon">
              <i class="fas fa-handshake"></i>
            </div>
            <h3 class="value-title">Integrity</h3>
            <p class="value-description">We conduct our business with honesty, transparency, and ethical practices, building lasting relationships with our customers and partners.</p>
          </div>
          
          <div class="value-card">
            <div class="value-icon">
              <i class="fas fa-users"></i>
            </div>
            <h3 class="value-title">Customer Focus</h3>
            <p class="value-description">Our customers are at the heart of everything we do. We strive to provide exceptional service and meet their evolving needs.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Counter Section -->
    <section class="counter-section">
      <div class="container">
        <div class="counter-grid">
          <div class="counter-item">
            <div class="counter-value" data-target="25"><span>0</span>+</div>
            <div class="counter-label">Years in Business</div>
          </div>
          <div class="counter-item">
            <div class="counter-value" data-target="200000"><span>0</span>+</div>
            <div class="counter-label">Happy Customers & Partners</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Join Our Journey</h2>
          <p class="cta-description">Whether you're a retailer, contractor, or individual customer, we invite you to experience the quality and service that have made us a trusted name in Nepal's hardware industry.</p>
          <div class="cta-buttons">
            <a href="/contact" class="btn btn-accent">Contact Us</a>
            <a href="/products" class="btn btn-outline">Explore Our Products</a>
          </div>
        </div>
      </div>
    </section>
  `;
  
  // Initialize counters for this page
  setupCounters();
}