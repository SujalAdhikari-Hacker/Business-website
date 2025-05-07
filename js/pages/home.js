import { setupTestimonials } from '../testimonials.js';

export function renderHomePage() {
  const mainContent = document.getElementById('main-content');
  
  mainContent.innerHTML = `
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Nepal's Trusted Hardware Wholesale Partner</h1>
          <p class="hero-description">Providing quality hardware products from India, China, and Nepal for over 25 years. Your one-stop solution for all hardware needs.</p>
          <div class="hero-cta">
            <a href="/products" class="btn btn-accent">View Products</a>
            <a href="/contact" class="btn btn-outline">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- About Section -->
    <section class="about">
      <div class="container">
        <h2 class="section-title">About Us</h2>
        <div class="about-grid">
          <div class="about-image">
            <img src="https://images.pexels.com/photos/3760535/pexels-photo-3760535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="About Us" />
          </div>
          <div class="about-content">
            <h3>Your Trusted Partner Since 1998</h3>
            <p>Nepal Hardware Wholesale is a leading distributor of quality hardware products in Nepal. With over 25 years of experience, we've built a reputation for reliability, competitive pricing, and excellent customer service.</p>
            <p>We offer a wide range of products from renowned brands in India, China, and Nepal, catering to the diverse needs of our customers across the country.</p>
            <a href="/about" class="btn btn-primary">Learn More About Us</a>
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
    
    <!-- Products Preview Section -->
    <section class="products-preview">
      <div class="container">
        <h2 class="section-title">Our Products</h2>
        <div class="product-categories">
          <div class="product-category">
            <div class="product-category-image">
              <img src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Building Materials" />
            </div>
            <div class="product-category-content">
              <h3 class="product-category-title">Building Materials</h3>
              <p class="product-category-description">Quality construction and building materials for all your project needs.</p>
              <a href="/products" class="btn btn-outline">View Products</a>
            </div>
          </div>
          
          <div class="product-category">
            <div class="product-category-image">
              <img src="https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Plumbing Supplies" />
            </div>
            <div class="product-category-content">
              <h3 class="product-category-title">Plumbing Supplies</h3>
              <p class="product-category-description">Complete range of plumbing essentials from trusted brands.</p>
              <a href="/products" class="btn btn-outline">View Products</a>
            </div>
          </div>
          
          <div class="product-category">
            <div class="product-category-image">
              <img src="https://images.pexels.com/photos/1409221/pexels-photo-1409221.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Electrical Items" />
            </div>
            <div class="product-category-content">
              <h3 class="product-category-title">Electrical Items</h3>
              <p class="product-category-description">Reliable electrical components and accessories for all installations.</p>
              <a href="/products" class="btn btn-outline">View Products</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Dealerships Section -->
    <section class="dealerships">
      <div class="container">
        <h2 class="section-title">Exclusive Dealerships</h2>
        <div class="dealership-grid">
          <div class="dealership-card">
            <div class="dealership-logo">
              <img src="https://placehold.co/200x80?text=Shine" alt="Shine Sanitaryware" />
            </div>
            <h3 class="dealership-name">Shine Sanitaryware</h3>
            <p class="dealership-description">Exclusive dealer for premium bathroom fixtures and fittings.</p>
            <a href="#" class="btn btn-outline">Learn More</a>
          </div>
          
          <div class="dealership-card">
            <div class="dealership-logo">
              <img src="https://placehold.co/200x80?text=Berger" alt="Berger Paints" />
            </div>
            <h3 class="dealership-name">Berger Paints</h3>
            <p class="dealership-description">Authorized distributor of high-quality paints and coatings.</p>
            <a href="#" class="btn btn-outline">Learn More</a>
          </div>
          
          <div class="dealership-card">
            <div class="dealership-logo">
              <img src="https://placehold.co/200x80?text=Ghorahi" alt="Ghorahi Cement" />
            </div>
            <h3 class="dealership-name">Ghorahi Cement</h3>
            <p class="dealership-description">Supplying the finest quality cement for construction projects.</p>
            <a href="#" class="btn btn-outline">Learn More</a>
          </div>
          
          <div class="dealership-card">
            <div class="dealership-logo">
              <img src="https://placehold.co/200x80?text=Laxmi" alt="Laxmi Plastic" />
            </div>
            <h3 class="dealership-name">Laxmi Plastic</h3>
            <p class="dealership-description">Distributor of durable plastic products for various applications.</p>
            <a href="#" class="btn btn-outline">Learn More</a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="testimonials">
      <div class="container">
        <h2 class="section-title">What Our Customers Say</h2>
        <div class="testimonial-slider">
          <div class="testimonial-slides">
            <div class="testimonial-slide">
              <div class="testimonial-content">
                <p class="testimonial-text">Nepal Hardware Wholesale has been our go-to supplier for over a decade. Their product quality and service have always been outstanding. They've never let us down on delivery times.</p>
                <div class="testimonial-author">
                  <div class="testimonial-author-image">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Ramesh Sharma" />
                  </div>
                  <div>
                    <div class="testimonial-author-name">Ramesh Sharma</div>
                    <div class="testimonial-author-title">Construction Manager</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="testimonial-slide">
              <div class="testimonial-content">
                <p class="testimonial-text">The product range at Nepal Hardware Wholesale is impressive. They stock everything we need for our projects, and their staff is knowledgeable and always willing to help with technical questions.</p>
                <div class="testimonial-author">
                  <div class="testimonial-author-image">
                    <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Sunita Thapa" />
                  </div>
                  <div>
                    <div class="testimonial-author-name">Sunita Thapa</div>
                    <div class="testimonial-author-title">Interior Designer</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="testimonial-slide">
              <div class="testimonial-content">
                <p class="testimonial-text">As a contractor, I need reliable suppliers. Nepal Hardware Wholesale consistently delivers quality products at competitive prices. Their excellent service keeps me coming back year after year.</p>
                <div class="testimonial-author">
                  <div class="testimonial-author-image">
                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Bikash Gurung" />
                  </div>
                  <div>
                    <div class="testimonial-author-name">Bikash Gurung</div>
                    <div class="testimonial-author-title">Building Contractor</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="testimonial-dots">
            <div class="dot active"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Work with Us?</h2>
          <p class="cta-description">Contact us today to discuss your hardware needs. Our team is ready to assist you with product selection, price quotes, and delivery arrangements.</p>
          <div class="cta-buttons">
            <a href="/contact" class="btn btn-accent">Contact Us</a>
            <a href="/products" class="btn btn-outline">Explore Products</a>
          </div>
        </div>
      </div>
    </section>
  `;
  
  // Initialize testimonials for this page
  setupTestimonials();
}