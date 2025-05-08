export function renderDealershipsPage() {
  const mainContent = document.getElementById('main-content');
  
  mainContent.innerHTML = `
    <!-- Dealerships Hero Section -->
    <section class="dealerships-hero">
      <div class="container">
        <div class="dealerships-hero-content">
          <h1 class="dealerships-hero-title">Exclusive Dealerships</h1>
          <p>We are proud to be the authorized dealer for these premium brands</p>
        </div>
      </div>
    </section>
    
    <!-- Brand Section -->
    <section class="brand-section">
      <div class="container">
        <!-- Shine Sanitaryware -->
        <div class="brand-card">
          <div class="brand-image">
            <img src="https://raw.githubusercontent.com/SujalAdhikari-Hacker/Business-website/main/image/shin3.jpg" alt="Shine Sanitaryware" />
          </div>
          <div class="brand-content">
            <div class="brand-logo">
              <img src="https://raw.githubusercontent.com/SujalAdhikari-Hacker/Business-website/main/image/shine.png" alt="Shine Sanitaryware Logo" />
            </div>
            <h3 class="brand-title">Shine Sanitaryware</h3>
            <p class="brand-description">Shine Sanitaryware is a leading manufacturer of premium bathroom fixtures and fittings, known for their elegant designs and exceptional quality.</p>
          </div>
        </div>
        
        <!-- Berger Paints -->
        <div class="brand-card">
          <div class="brand-image">
            <img src="https://raw.githubusercontent.com/SujalAdhikari-Hacker/Business-website/main/image/berger-paints.jpg" alt="Berger Paints" />
          </div>
          <div class="brand-content">
            <div class="brand-logo">
              <img src="https://raw.githubusercontent.com/SujalAdhikari-Hacker/Business-website/main/image/Berger.png" alt="Berger Paints Logo" />
            </div>
            <h3 class="brand-title">Berger Paints</h3>
            <p class="brand-description">Berger Paints is one of the world's oldest and most respected paint manufacturers, offering a wide range of decorative, industrial, and protective coatings.</p>
          </div>
        </div>
        
        <!-- Ghorahi Cement -->
        <div class="brand-card">
          <div class="brand-image">
            <img src="https://raw.githubusercontent.com/SujalAdhikari-Hacker/Business-website/main/image/1.png" alt="Ghorahi Cement" />
          </div>
          <div class="brand-content">
            <div class="brand-logo">
              <img src="https://raw.githubusercontent.com/SujalAdhikari-Hacker/Business-website/main/image/Sagarmatha.jpg" alt="Ghorahi Cement Logo" />
            </div>
            <h3 class="brand-title">Ghorahi Cement</h3>
            <p class="brand-description">Ghorahi Cement is one of Nepal's premier cement manufacturers, known for producing high-quality cement that meets international standards.</p>
          </div>
        </div>
        
        <!-- Laxmi Plastic -->
        <div class="brand-card">
          <div class="brand-image">
            <img src="https://raw.githubusercontent.com/SujalAdhikari-Hacker/Business-website/main/image/laxmiplas.webp" alt="Laxmi Plastic" />
          </div>
          <div class="brand-content">
            <div class="brand-logo">
              <img src="https://placehold.co/200x80?text=Laxmi" alt="Laxmi Plastic Logo" />
            </div>
            <h3 class="brand-title">Laxmi Plastic</h3>
            <p class="brand-description">Laxmi Plastic is a trusted name in plastic products, offering a wide range of durable, high-quality items for various applications.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}