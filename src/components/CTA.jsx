export default function CTA() {
  return (
    <section className="py-5" style={{ backgroundColor: 'var(--theme-dark-alt)', color: 'white' }}>
      <div className="container py-5 text-center">
        <h2 className="display-4 fw-bold mb-4 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
          Ready to see plots in person?
        </h2>
        
        <p className="lead mb-5 opacity-75" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          One conversation with Mahalaxmi Realty. No pressure. Just honest advice about Dharuhera's best opportunities.
        </p>
        
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 align-items-center">
          <a href="#" className="btn text-white fw-bold px-4 py-3 rounded-2 d-flex align-items-center shadow-sm" style={{ backgroundColor: '#25D366', fontSize: '1.05rem' }}>
            <i className="bi bi-whatsapp me-2 fs-5"></i> WhatsApp Mahalaxmi Realty
          </a>
          
          <a href="tel:+919982247314" className="btn text-white fw-bold px-4 py-3 rounded-2 d-flex align-items-center" style={{ backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.2)', fontSize: '1.05rem' }}>
            <i className="bi bi-telephone me-2 fs-5"></i> Call: +91 99822 47314
          </a>
        </div>
        
        <p className="mt-4 mb-0 opacity-50 small">
          हिंदी में बात करें — हिंदी में देखें
        </p>
      </div>
    </section>
  )
}
