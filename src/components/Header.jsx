export default function Header() {
  return (
    <header className="container py-4 position-relative" style={{ zIndex: 10 }}>
      <div className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <a href="#/" className="d-block" style={{ width: '100px', height: '60px' }}>
          <img src="/lo (1) (1).webp" alt="Mahalaxmi Realty Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
        </a>

        {/* Navigation */}
        <nav className="d-none d-lg-flex gap-4 align-items-center fw-medium" style={{ fontSize: '0.95rem' }}>
          <a href="#/properties" className="text-secondary text-decoration-none">Properties</a>
          <a href="#/prices" className="text-secondary text-decoration-none">Prices</a>
          <a href="#/societies" className="text-secondary text-decoration-none">Societies</a>
          <a href="#/blog" className="text-secondary text-decoration-none">Blog</a>
          <a href="#/about" className="text-secondary text-decoration-none">About</a>
          <a href="#/contact" className="text-secondary text-decoration-none">Contact</a>
          <a href="#" className="text-secondary text-decoration-none d-flex align-items-center ms-3">

          </a>
        </nav>

        {/* CTA Button */}
        <a href="tel:+919982247314" className="btn text-white rounded-pill px-4 py-2 d-none d-sm-flex align-items-center shadow-sm" style={{ backgroundColor: 'var(--theme-primary)', fontWeight: '500' }}>
          <i className="bi bi-telephone me-2"></i> +91 99822 47314
        </a>
      </div>
    </header>
  )
}
