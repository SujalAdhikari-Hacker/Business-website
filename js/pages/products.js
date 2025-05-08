export function setupProductTabs() {
  // Add any tab functionality here if needed
  // For now, this is just a placeholder to fix the reference error
  console.log('Product tabs initialized');
}

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
                <img src="https://raw.githubusercontent.com/SujalAdhikari-Hacker/Business-website/main/image/Bathrooms.jpg" alt="Modern Bathroom Tap" />
              </div>
              <div class="gallery-item">
                <img src="https://raw.githubusercontent.com/SujalAdhikari-Hacker/Business-website/main/image/Shine2.jpg" alt="Bathroom Basin" />
              </div>
              <div class="gallery-item">
                <img src="https://raw.githubusercontent.com/SujalAdhikari-Hacker/Business-website/main/image/shin3.jpg" alt="Shower System" />
              </div>
              <div class="gallery-item">
                <img src="https://raw.githubusercontent.com/SujalAdhikari-Hacker/Business-website/main/image/shine4.jpg" alt="Bathroom Accessories" />
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
                <img src="https://raw.githubusercontent.com/SujalAdhikari-Hacker/Business-website/main/image/mat.jpeg" alt="Construction Tools" />
              </div>
              <div class="gallery-item">
                <img src="https://raw.githubusercontent.com/SujalAdhikari-Hacker/Business-website/main/image/mat2.jpeg" alt="Hardware Tools" />
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
                <img src="https://raw.githubusercontent.com/SujalAdhikari-Hacker/Business-website/main/image/sagarmatha%20(1).jpg" alt="Cement Bags" />
              </div>
              <div class="gallery-item">
                <img src="https://raw.githubusercontent.com/SujalAdhikari-Hacker/Business-website/main/image/samrat.jpg" alt="Concrete Work" />
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
                <img src="https://raw.githubusercontent.com/SujalAdhikari-Hacker/Business-website/main/image/laxmisteel.jpg" alt="Steel Rods" />
              </div>
              <div class="gallery-item">
                <img src="https://raw.githubusercontent.com/SujalAdhikari-Hacker/Business-website/main/image/Jagadamba.jpg" alt="Construction Steel" />
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
                <img src="https://raw.githubusercontent.com/SujalAdhikari-Hacker/Business-website/main/image/painting.png" alt="Paint Colors" />
              </div>
              <div class="gallery-item">
                <img src="https://raw.githubusercontent.com/SujalAdhikari-Hacker/Business-website/main/image/berger-paints.jpg" alt="Painted Wall" />
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
                <img src="https://raw.githubusercontent.com/SujalAdhikari-Hacker/Business-website/main/image/Plumbing.jpg" alt="Pipes Collection" />
              </div>
              <div class="gallery-item">
                <img src="https://raw.githubusercontent.com/SujalAdhikari-Hacker/Business-website/main/image/pipes.png" alt="Pipe Fittings" />
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