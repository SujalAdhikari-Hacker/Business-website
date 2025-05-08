export function renderSuccessPage() {
  const mainContent = document.getElementById('main-content');
  
  mainContent.innerHTML = `
    <section class="success-section" style="min-height: 80vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: var(--space-8) 0;">
      <div class="container">
        <h1 style="color: var(--color-success-500); margin-bottom: var(--space-4);">Thank You!</h1>
        <p style="font-size: 1.25rem; margin-bottom: var(--space-6);">Your form submission has been received.</p>
        <a href="/" class="btn btn-primary">Back to Home</a>
      </div>
    </section>
  `;
}
