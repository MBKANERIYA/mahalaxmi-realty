export default function About() {
  return (
    <div className="w-100">
      <section className="container py-5">
        <div className="row g-5 align-items-center py-4">
          {/* Left Side - About */}
          <div className="col-12 col-lg-7 pe-lg-5">
            <div className="mb-4">
              <h6 className="text-uppercase fw-bold mb-2" style={{ color: 'var(--theme-primary)', fontSize: '0.75rem', letterSpacing: '1px' }}>Your Advisor</h6>
              <div style={{ height: '1px', backgroundColor: 'var(--theme-primary)', width: '100%' }}></div>
            </div>
            
            <h2 className="fw-bold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)', fontSize: '3rem', lineHeight: '1.1' }}>
              Mahalaxmi Realty knows every lane, every price, every paper in Dharuhera.
            </h2>
            
            <p className="text-secondary mb-5" style={{ fontSize: '1rem', lineHeight: '1.7', color: '#5a5550' }}>
              When you buy through Mahalaxmi Realty, you get 20 years of local expertise. We personally verify every document — Registry, Jamabandi, Naksha, NOC, Encumbrance Certificate. No shortcuts. No surprises.
            </p>
            
            <div className="d-flex flex-wrap gap-3 mb-5">
              <span className="badge rounded-pill fw-medium px-3 py-2 text-dark d-flex align-items-center" style={{ backgroundColor: '#eef3ee', border: '1px solid transparent', fontSize: '0.8rem' }}>
                <i className="bi bi-shield-check me-2 fs-6" style={{ color: '#556b5d' }}></i> RERA Registered
              </span>
              <span className="badge rounded-pill fw-medium px-3 py-2 d-flex align-items-center" style={{ backgroundColor: '#fff4ed', border: '1px solid transparent', fontSize: '0.8rem', color: '#b56d40' }}>
                750+ Deals
              </span>
              <span className="badge rounded-pill fw-medium px-3 py-2 d-flex align-items-center" style={{ backgroundColor: '#fffaf0', border: '1px solid transparent', fontSize: '0.8rem', color: '#ab8836' }}>
                ₹40 Cr Largest Deal
              </span>
            </div>

            <div className="d-flex align-items-start small" style={{ color: '#888' }}>
              <i className="bi bi-geo-alt me-2 mt-1" style={{ color: 'var(--theme-primary)', fontSize: '1.1rem' }}></i>
              <p className="mb-0" style={{ maxWidth: '400px', fontSize: '0.85rem' }}>Ground Floor, H.No. 1553, Housing Board Colony, Sector 6, Dharuhera, Haryana 123110</p>
            </div>
          </div>

          {/* Right Side - Testimonials */}
          <div className="col-12 col-lg-5">
            <div className="ps-lg-5 border-start" style={{ borderColor: '#e5e5e5 !important', borderWidth: '2px !important', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              
              <div>
                <p className="fst-italic mb-3" style={{ lineHeight: '1.6', fontSize: '0.95rem', color: '#666' }}>
                  "Mahalaxmi Realty made the entire process seamless. They helped me identify the best north-facing corner plot in M2K County, verified all documents, and closed the deal within 3 weeks. The plot has already appreciated 15% in 8 months. Highly recommend for serious buyers."
                </p>
                <p className="fw-bold small mb-0" style={{ color: 'var(--theme-text-dark)', fontSize: '0.8rem' }}>
                  Rajesh Kumar <span className="fw-normal" style={{ color: '#999' }}>— Buyer — M2K County, 264 sq.yd</span>
                </p>
              </div>

              <div>
                <p className="fst-italic mb-3" style={{ lineHeight: '1.6', fontSize: '0.95rem', color: '#666' }}>
                  "I was looking for a freehold plot near Dharuhera for 2 years. Met Mahalaxmi Realty and they immediately showed me 4-5 options that matched exactly what I needed. The Bestech City Plots locality is excellent — wide roads, greenery, and just 250m from the mall. Very trustworthy people."
                </p>
                <p className="fw-bold small mb-0" style={{ color: 'var(--theme-text-dark)', fontSize: '0.8rem' }}>
                  Sunita Sharma <span className="fw-normal" style={{ color: '#999' }}>— Buyer — Bestech City Plots, 200 sq.yd</span>
             </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
