export default function Hero() {
  return (
    <section className="position-relative text-center d-flex align-items-center justify-content-center pb-5 fade-up" style={{ minHeight: '85vh', marginTop: '-100px', paddingTop: '130px' }}>
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 1 }}>
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop" alt="Luxury Real Estate Background" className="w-100 h-100" style={{ objectFit: 'cover', objectPosition: 'center 60%' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to bottom, rgba(253,251,247,0.85) 0%, rgba(253,251,247,1) 100%)' }}></div>
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
      {/* Badge */}
      <div className="d-inline-flex align-items-center rounded-pill px-3 py-2 mb-4" style={{ backgroundColor: '#e9e4dd', color: '#5a5550', fontSize: '0.85rem', fontWeight: '500' }}>
        <i className="bi bi-shield-check me-2 text-dark"></i> RERA Registered Agent • PKLAGENT-3737-2024
      </div>

      {/* Main Heading */}
      <h1 className="display-3 fw-bold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)', lineHeight: '1.2' }}>
        Plots in Dharuhera.<br />
        <span style={{ color: 'var(--theme-primary)' }}>Verified by Mahalaxmi Realty.</span>
      </h1>

      {/* Subtitle */}
      <p className="mx-auto mb-5" style={{ color: '#68635e', maxWidth: '650px', fontSize: '1.2rem', lineHeight: '1.6' }}>
        20 years in Dharuhera. 750+ deals closed. Every document verified, every risk disclosed. One phone call is all it takes.
      </p>

      {/* Action Buttons */}
      <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
        <button className="btn rounded-pill px-4 py-3 text-white fw-bold d-flex align-items-center shadow-sm" style={{ backgroundColor: '#25d366', fontSize: '1.05rem' }}>
          <i className="bi bi-whatsapp fs-5 me-2"></i> WhatsApp Us
        </button>
        <button className="btn bg-white rounded-pill px-4 py-3 fw-bold d-flex align-items-center shadow-sm" style={{ border: '1px solid #e0e0e0', color: '#333', fontSize: '1.05rem' }}>
          <i className="bi bi-telephone fs-5 me-2 text-secondary"></i> +91 99822 47314
        </button>
      </div>

      {/* Stats Section */}
      <div className="mx-auto rounded-4 p-4 mb-5 glass-panel fade-up delay-200" style={{ maxWidth: '850px' }}>
        <div className="row text-center g-4">
          <div className="col-12 col-md-4 position-relative">
            <h2 className="display-5 fw-bold mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-primary)' }}>250%</h2>
            <p className="text-secondary small mb-0 fw-medium">Growth since 2019</p>
            <div className="d-none d-md-block position-absolute" style={{ right: 0, top: '20%', bottom: '20%', width: '1px', backgroundColor: 'rgba(0,0,0,0.08)' }}></div>
          </div>
          <div className="col-12 col-md-4 position-relative">
            <h2 className="display-5 fw-bold mb-1" style={{ fontFamily: 'var(--font-heading)', color: '#3a5a40' }}>40 min</h2>
            <p className="text-secondary small mb-0 fw-medium">Delhi via RRTS (est. 2031)</p>
            <div className="d-none d-md-block position-absolute" style={{ right: 0, top: '20%', bottom: '20%', width: '1px', backgroundColor: 'rgba(0,0,0,0.08)' }}></div>
          </div>
          <div className="col-12 col-md-4">
            <h2 className="display-5 fw-bold mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>₹15L+</h2>
            <p className="text-secondary small mb-0 fw-medium">Starting price</p>
          </div>
        </div>
      </div>

      {/* Callback Form */}
      <div className="text-start mx-auto mt-5" style={{ maxWidth: '850px' }}>
        <p className="text-secondary small fw-bold mb-2 text-uppercase" style={{ letterSpacing: '0.5px', fontSize: '0.75rem' }}>Prefer a callback? Leave your number</p>
        <form className="d-flex flex-column flex-md-row gap-3">
          <input type="text" className="form-control px-4 py-3 border-0 shadow-sm" placeholder="Your name" style={{ flex: '1', borderRadius: '8px' }} />
          <input type="tel" className="form-control px-4 py-3 border-0 shadow-sm" placeholder="+91 phone" style={{ flex: '1', borderRadius: '8px' }} />
          <button type="submit" className="btn px-5 py-3 text-white fw-bold d-flex align-items-center justify-content-center shadow-sm" style={{ backgroundColor: 'var(--theme-primary)', flex: '0.8', borderRadius: '8px' }}>
            <i className="bi bi-telephone-outbound me-2"></i> Call me
          </button>
        </form>
      </div>
      </div>
    </section>
  )
}
