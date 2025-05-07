export function setupNavbar() {
  const header = document.getElementById('header');
  
  if (!header) return;
  
  header.innerHTML = `
    <nav class="navbar">
      <div class="container navbar-container">
        <a href="/" class="navbar-logo">
          <h1>Menaka Brothers</h1>
        </a>
        <button class="navbar-toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="navbar-menu">
          <li><a href="/" class="nav-link" data-page="home">Home</a></li>
          <li><a href="/about" class="nav-link" data-page="about">About</a></li>
          <li><a href="/products" class="nav-link" data-page="products">Products</a></li>
          <li><a href="/services" class="nav-link" data-page="services">Services</a></li>
          <li><a href="/dealerships" class="nav-link" data-page="dealerships">Dealerships</a></li>
          <li><a href="/contact" class="nav-link" data-page="contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  `;
  
  const navbar = document.querySelector('.navbar');
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
  });
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbarToggle.classList.remove('active');
      navbarMenu.classList.remove('active');
      
      navLinks.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
    });
  });
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  const currentPath = window.location.pathname;
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPath === linkPath || (currentPath === '/' && linkPath === '/')) {
      link.classList.add('active');
    }
  });
}