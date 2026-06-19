export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="position-relative" style={{ backgroundColor: 'var(--theme-dark)', color: '#c4beb8' }}>
      <div className="container py-5">
        <div className="row g-5 mb-5 pb-3">
          
          {/* Column 1: Branding */}
          <div className="col-12 col-md-6 col-lg-4 pe-lg-5">
            <h5 className="fw-bold text-white mb-1" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '1px' }}>MAHALAXMI REALTY</h5>
            <h6 className="fw-bold mb-4" style={{ color: 'var(--theme-primary)', fontSize: '0.85rem', letterSpacing: '1.5px' }}>EST. 2006</h6>
            
            <p className="small mb-4" style={{ lineHeight: '1.8' }}>
              Mahalaxmi Realty has served Dharuhera, Bhiwadi, and Rewari since 2006 with transparent dealing, documentation support, and direct guidance for plot buyers and investors.
            </p>
          </div>

          {/* Column 2: Navigate */}
          <div className="col-12 col-sm-6 col-md-3 col-lg-2">
            <h6 className="fw-bold mb-4" style={{ color: 'var(--theme-primary)', fontSize: '0.85rem', letterSpacing: '1px' }}>NAVIGATE</h6>
            <ul className="list-unstyled d-flex flex-column gap-3 small">
              <li><a href="#/properties" className="text-decoration-none" style={{ color: '#c4beb8', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#c4beb8'}>Properties</a></li>
              <li><a href="#/prices" className="text-decoration-none" style={{ color: '#c4beb8', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#c4beb8'}>Price Guide</a></li>
              <li><a href="#/societies" className="text-decoration-none" style={{ color: '#c4beb8', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#c4beb8'}>Society Reviews</a></li>
              <li><a href="#" className="text-decoration-none" style={{ color: '#c4beb8', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#c4beb8'}>Infrastructure</a></li>
              <li><a href="#/blog" className="text-decoration-none" style={{ color: '#c4beb8', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#c4beb8'}>Blog</a></li>
              <li><a href="#" className="text-decoration-none" style={{ color: '#c4beb8', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#c4beb8'}>Buying Guide</a></li>
              <li><a href="#/about" className="text-decoration-none" style={{ color: '#c4beb8', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#c4beb8'}>About</a></li>
              <li><a href="#/contact" className="text-decoration-none" style={{ color: '#c4beb8', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#c4beb8'}>Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="col-12 col-sm-6 col-md-3 col-lg-3">
            <h6 className="fw-bold mb-4" style={{ color: 'var(--theme-primary)', fontSize: '0.85rem', letterSpacing: '1px' }}>SERVICES</h6>
            <ul className="list-unstyled d-flex flex-column gap-3 small">
              <li><a href="#" className="text-decoration-none" style={{ color: '#c4beb8', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#c4beb8'}>Buy Property</a></li>
              <li><a href="#" className="text-decoration-none" style={{ color: '#c4beb8', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#c4beb8'}>Sell Property</a></li>
              <li><a href="#" className="text-decoration-none" style={{ color: '#c4beb8', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#c4beb8'}>Legal Assistance</a></li>
              <li><a href="#" className="text-decoration-none" style={{ color: '#c4beb8', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#c4beb8'}>Investment Advisory</a></li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="col-12 col-lg-3">
            <h6 className="fw-bold mb-4" style={{ color: 'var(--theme-primary)', fontSize: '0.85rem', letterSpacing: '1px' }}>GET IN TOUCH</h6>
            <ul className="list-unstyled d-flex flex-column gap-4 small">
              <li className="d-flex align-items-start gap-3">
                <i className="bi bi-geo-alt mt-1" style={{ color: 'var(--theme-primary)', fontSize: '1.1rem' }}></i>
                <span style={{ lineHeight: '1.6' }}>Ground Floor, H.O 1553, Housing Board Colony, Sector 6, Dharuhera, Haryana 123110</span>
              </li>
              <li className="d-flex align-items-center gap-3">
                <i className="bi bi-telephone" style={{ color: 'var(--theme-primary)', fontSize: '1.1rem' }}></i>
                <span>+91 99822 47314</span>
              </li>
              <li className="d-flex align-items-center gap-3">
                <i className="bi bi-envelope" style={{ color: 'var(--theme-primary)', fontSize: '1.1rem' }}></i>
                <span>info@mahalaxmirealty.in</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-4 border-top" style={{ borderColor: 'rgba(255,255,255,0.08) !important', fontSize: '0.85rem' }}>
          <p className="mb-2 mb-md-0 text-center text-md-start">© 2026 Mahalaxmi Realty. All rights reserved.</p>
          <a href="#" className="text-decoration-none" style={{ color: '#c4beb8' }}>Privacy Policy</a>
        </div>
      </div>

      {/* Floating Buttons */}
      <button 
        onClick={scrollToTop}
        className="btn rounded-circle shadow position-fixed d-flex align-items-center justify-content-center" 
        style={{ bottom: '30px', left: '30px', width: '45px', height: '45px', backgroundColor: 'var(--theme-dark-alt)', color: '#fff', border: 'none', zIndex: 1000 }}
      >
        <i className="bi bi-arrow-up"></i>
      </button>

      <a 
        href="https://wa.me/919982247314"
        target="_blank"
        rel="noopener noreferrer"
        className="btn rounded-circle shadow-lg position-fixed d-flex align-items-center justify-content-center"
        style={{ bottom: '30px', right: '30px', width: '60px', height: '60px', backgroundColor: '#25D366', color: '#fff', border: 'none', zIndex: 1000 }}
      >
        <i className="bi bi-whatsapp fs-3"></i>
      </a>
    </footer>
  )
}
