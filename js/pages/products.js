import { setupProductTabs } from '../products.js';

export function renderProductsPage() {
  const mainContent = document.getElementById('main-content');
  
  mainContent.innerHTML = `
    <!-- Products Hero Section -->
    <section class="products-hero">
      <div class="container">
        <div class="products-hero-content">
          <h1 class="products-hero-title">Our Products</h1>
          <p>Quality hardware products for all your construction needs</p>
        </div>
      </div>
    </section>
    
    <!-- Product Categories Section -->
    <section class="product-categories-section">
      <div class="container">
        <h2 class="section-title">Product Categories</h2>
        
        <!-- Bathroom Fittings & Sanitaryware -->
        <div class="product-category">
          <div class="category-header">
            <h3 class="category-title">
              <i class="fas fa-shower"></i>
              Bathroom Fittings & Sanitaryware
            </h3>
          </div>
          <div class="category-content">
            <div class="category-info">
              <div class="brands">
                <strong>Brands:</strong> Sunshine, Nepatop, Sine
              </div>
              <p>Premium quality bathroom fittings and sanitaryware for modern homes and commercial spaces.</p>
            </div>
            <div class="product-gallery">
              <div class="gallery-item">
                <img src="https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg" alt="Modern Bathroom Tap" />
              </div>
              <div class="gallery-item">
                <img src="https://images.pexels.com/photos/6585763/pexels-photo-6585763.jpeg" alt="Bathroom Basin" />
              </div>
              <div class="gallery-item">
                <img src="https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg" alt="Shower System" />
              </div>
              <div class="gallery-item">
                <img src="https://images.pexels.com/photos/6585751/pexels-photo-6585751.jpeg" alt="Bathroom Accessories" />
              </div>
            </div>
          </div>
        </div>

        <!-- Raw Materials -->
        <div class="product-category">
          <div class="category-header">
            <h3 class="category-title">
              <i class="fas fa-tools"></i>
              Raw Materials
            </h3>
          </div>
          <div class="category-content">
            <div class="category-info">
              <div class="certification">
                <strong>Certification:</strong> ISI 2009 Nepali construction items
              </div>
              <p>High-quality construction materials including nails, screws, blades, hammers, and more.</p>
            </div>
            <div class="product-gallery">
              <div class="gallery-item">
                <img src="https://images.pexels.com/photos/220639/pexels-photo-220639.jpeg" alt="Construction Tools" />
              </div>
              <div class="gallery-item">
                <img src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg" alt="Hardware Tools" />
              </div>
            </div>
          </div>
        </div>

        <!-- Cement & Concrete -->
        <div class="product-category">
          <div class="category-header">
            <h3 class="category-title">
              <i class="fas fa-building"></i>
              Cement & Concrete
            </h3>
          </div>
          <div class="category-content">
            <div class="category-info">
              <div class="brands">
                <strong>Brands:</strong> Ghorahi Cement, Samrat Cement
              </div>
              <p>Premium quality cement for all your construction needs.</p>
            </div>
            <div class="product-gallery">
              <div class="gallery-item">
                <img src="https://images.pexels.com/photos/4484071/pexels-photo-4484071.jpeg" alt="Cement Bags" />
              </div>
              <div class="gallery-item">
                <img src="https://images.pexels.com/photos/4482840/pexels-photo-4482840.jpeg" alt="Concrete Work" />
              </div>
            </div>
          </div>
        </div>

        <!-- Iron & Steel Rods -->
        <div class="product-category">
          <div class="category-header">
            <h3 class="category-title">
              <i class="fas fa-bars"></i>
              Iron & Steel Rods
            </h3>
          </div>
          <div class="category-content">
            <div class="category-info">
              <div class="brands">
                <strong>Brands:</strong> Jagdamba Steel, Laxmi Steel
              </div>
              <p>High-quality TMT rods and binding wires for construction.</p>
            </div>
            <div class="product-gallery">
              <div class="gallery-item">
                <img src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg" alt="Steel Rods" />
              </div>
              <div class="gallery-item">
                <img src="https://images.pexels.com/photos/2760244/pexels-photo-2760244.jpeg" alt="Construction Steel" />
              </div>
            </div>
          </div>
        </div>

        <!-- Paints -->
        <div class="product-category">
          <div class="category-header">
            <h3 class="category-title">
              <i class="fas fa-fill-drip"></i>
              Paints
            </h3>
          </div>
          <div class="category-content">
            <div class="category-info">
              <div class="brands">
                <strong>Brand:</strong> Berger Paints
              </div>
              <p>Premium quality paints for interior and exterior applications.</p>
            </div>
            <div class="product-gallery">
              <div class="gallery-item">
                <img src="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg" alt="Paint Colors" />
              </div>
              <div class="gallery-item">
                <img src="https://images.pexels.com/photos/5691624/pexels-photo-5691624.jpeg" alt="Painted Wall" />
              </div>
            </div>
          </div>
        </div>

        <!-- Pipes & Fittings -->
        <div class="product-category">
          <div class="category-header">
            <h3 class="category-title">
              <i class="fas fa-water"></i>
              Pipes & Fittings
            </h3>
          </div>
          <div class="category-content">
            <div class="category-info">
              <div class="pipe-types">
                <ul>
                  <li><strong>CPVC:</strong> Nepatop, Sunshine</li>
                  <li><strong>PPV:</strong> Nepatop, Sunshine</li>
                  <li><strong>PPR:</strong> Nepatop</li>
                  <li><strong>HDP:</strong> Laxmi Plastic</li>
                  <li><strong>GI:</strong> Jagdamba, BST</li>
                </ul>
              </div>
              <p>Complete range of pipes and fittings for all plumbing needs.</p>
            </div>
            <div class="product-gallery">
              <div class="gallery-item">
                <img src="https://images.pexels.com/photos/6647119/pexels-photo-6647119.jpeg" alt="Pipes Collection" />
              </div>
              <div class="gallery-item">
                <img src="https://images.pexels.com/photos/6647120/pexels-photo-6647120.jpeg" alt="Pipe Fittings" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
  
  // Initialize product tabs
  setupProductTabs();
}