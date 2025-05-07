export function renderServicesPage() {
  const mainContent = document.getElementById('main-content');
  
  mainContent.innerHTML = `
    <!-- Services Hero Section -->
    <section class="services-hero">
      <div class="container">
        <div class="services-hero-content">
          <h1 class="services-hero-title">Our Services</h1>
          <p>Beyond products: comprehensive services to support your projects</p>
        </div>
      </div>
    </section>
    
    <!-- Services Intro Section -->
    <section class="services-intro">
      <div class="container">
        <div class="services-intro-content">
          <h2 class="section-title">What We Offer</h2>
          <p>At Nepal Hardware Wholesale, we go beyond just selling products. We provide a range of services designed to support our customers throughout their projects—from planning and product selection to delivery and technical advice.</p>
        </div>
      </div>
    </section>
    
    <!-- Services Grid Section -->
    <section class="services-grid-section">
      <div class="container">
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-truck"></i>
            </div>
            <div class="service-content">
              <h3 class="service-title">Wholesale Distribution</h3>
              <p class="service-description">We supply quality hardware products to retailers, contractors, and businesses across Nepal at competitive wholesale prices.</p>
              <ul class="service-features">
                <li class="service-feature"><i class="fas fa-check"></i> Bulk ordering with quantity discounts</li>
                <li class="service-feature"><i class="fas fa-check"></i> Consistent supply chain reliability</li>
                <li class="service-feature"><i class="fas fa-check"></i> Flexible payment terms for regular customers</li>
              </ul>
            </div>
          </div>
          
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-shipping-fast"></i>
            </div>
            <div class="service-content">
              <h3 class="service-title">Delivery Services</h3>
              <p class="service-description">We offer reliable delivery of products to your location, making it convenient to get what you need when you need it.</p>
              <ul class="service-features">
                <li class="service-feature"><i class="fas fa-check"></i> Local delivery within Butwal</li>
                <li class="service-feature"><i class="fas fa-check"></i> Regional shipping across Nepal</li>
                <li class="service-feature"><i class="fas fa-check"></i> Scheduled deliveries for project planning</li>
              </ul>
            </div>
          </div>
          
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-clipboard-check"></i>
            </div>
            <div class="service-content">
              <h3 class="service-title">Project Consultation</h3>
              <p class="service-description">Our experienced team provides guidance on product selection for your specific project requirements.</p>
              <ul class="service-features">
                <li class="service-feature"><i class="fas fa-check"></i> Material recommendations</li>
                <li class="service-feature"><i class="fas fa-check"></i> Quantity estimation</li>
                <li class="service-feature"><i class="fas fa-check"></i> Budget-friendly alternatives</li>
              </ul>
            </div>
          </div>
          
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-tools"></i>
            </div>
            <div class="service-content">
              <h3 class="service-title">Technical Support</h3>
              <p class="service-description">Get expert advice on product usage, installation techniques, and troubleshooting from our knowledgeable staff.</p>
              <ul class="service-features">
                <li class="service-feature"><i class="fas fa-check"></i> Product usage guidance</li>
                <li class="service-feature"><i class="fas fa-check"></i> Installation recommendations</li>
                <li class="service-feature"><i class="fas fa-check"></i> After-sales technical assistance</li>
              </ul>
            </div>
          </div>
          
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-handshake"></i>
            </div>
            <div class="service-content">
              <h3 class="service-title">Dealership Opportunities</h3>
              <p class="service-description">We offer dealership opportunities for businesses looking to represent quality hardware brands in their regions.</p>
              <ul class="service-features">
                <li class="service-feature"><i class="fas fa-check"></i> Exclusive territory rights</li>
                <li class="service-feature"><i class="fas fa-check"></i> Marketing support</li>
                <li class="service-feature"><i class="fas fa-check"></i> Training and product knowledge</li>
              </ul>
            </div>
          </div>
          
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-tag"></i>
            </div>
            <div class="service-content">
              <h3 class="service-title">Customized Pricing</h3>
              <p class="service-description">We offer special pricing structures for regular customers, contractors, and large-scale projects.</p>
              <ul class="service-features">
                <li class="service-feature"><i class="fas fa-check"></i> Contractor discounts</li>
                <li class="service-feature"><i class="fas fa-check"></i> Project-based pricing</li>
                <li class="service-feature"><i class="fas fa-check"></i> Loyalty benefits for regular customers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Work Process Section -->
    <section class="work-process">
      <div class="container">
        <h2 class="section-title">How We Work</h2>
        <div class="process-steps">
          <div class="process-step">
            <div class="process-number">1</div>
            <div class="process-content">
              <h3 class="process-title">Consultation</h3>
              <p class="process-description">We start by understanding your project requirements, budget constraints, and timeline to provide the best recommendations.</p>
            </div>
          </div>
          
          <div class="process-step">
            <div class="process-number">2</div>
            <div class="process-content">
              <h3 class="process-title">Product Selection</h3>
              <p class="process-description">Based on your needs, we help you select the most suitable products from our extensive inventory, considering quality, price, and availability.</p>
            </div>
          </div>
          
          <div class="process-step">
            <div class="process-number">3</div>
            <div class="process-content">
              <h3 class="process-title">Quotation</h3>
              <p class="process-description">We provide a detailed quotation outlining products, quantities, pricing, and delivery terms for your approval.</p>
            </div>
          </div>
          
          <div class="process-step">
            <div class="process-number">4</div>
            <div class="process-content">
              <h3 class="process-title">Order Processing</h3>
              <p class="process-description">Once you confirm the order, we process it efficiently, ensuring all items are available as per your requirements.</p>
            </div>
          </div>
          
          <div class="process-step">
            <div class="process-number">5</div>
            <div class="process-content">
              <h3 class="process-title">Delivery</h3>
              <p class="process-description">We arrange timely delivery to your specified location, coordinating with you to ensure convenient receipt of goods.</p>
            </div>
          </div>
          
          <div class="process-step">
            <div class="process-number">6</div>
            <div class="process-content">
              <h3 class="process-title">After-Sales Support</h3>
              <p class="process-description">Our relationship continues beyond delivery, with ongoing technical support and assistance to ensure your satisfaction.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Get Started?</h2>
          <p class="cta-description">Contact us today to discuss your hardware needs or to arrange a consultation with our expert team.</p>
          <div class="cta-buttons">
            <a href="/contact" class="btn btn-accent">Contact Us</a>
            <a href="https://wa.me/9779858420302" class="btn btn-outline"><i class="fab fa-whatsapp"></i> WhatsApp Us</a>
          </div>
        </div>
      </div>
    </section>
  `;
}