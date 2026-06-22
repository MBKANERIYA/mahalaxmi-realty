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
          <a href="#/properties" className="text-secondary text-decoration-none d-flex align-items-center ms-3" title="Search Properties">
            <i className="bi bi-search fs-5"></i>
          </a>
        </nav>

        {/* CTA Button */}
        <a href="tel:+919982247314" className="btn text-white rounded-pill px-4 py-2 d-none d-sm-flex align-items-center shadow-sm" style={{ backgroundColor: 'var(--theme-primary)', fontWeight: '500' }}>
          <i className="bi bi-telephone me-2"></i> +91 99822 47314
        </a>
      </div>

      {/* Property Search Button (Mobile/Desktop) */}
      <div className="d-flex justify-content-center mt-3 mt-lg-4">
        <a href="#/properties" className="btn bg-white rounded-pill px-4 py-3 d-flex align-items-center justify-content-center shadow-sm" style={{ border: '1px solid #e0e0e0', color: '#333', fontSize: '1rem', width: '100%', maxWidth: '500px', fontWeight: '500' }}>
          <i className="bi bi-search text-secondary me-2"></i> Search properties in Dharuhera...
        </a>
      </div>
    </header>
  )
}
