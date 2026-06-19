import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Societies() {
  const societies = [
    {
      id: 1,
      name: "M2K County",
      sector: "Sector 5, NH 48, Dharuhera",
      reraStatus: "RERA Registered",
      reraColor: "success",
      riskLevel: "Low Risk",
      riskColor: "success",
      price: "₹55,000 - 70,000",
      description: "Best established township in Dharuhera. 100 acres, RERA registered, M2K-Adani developer partnerships. Ideal for families and strict-budget investors seeking proven appreciation (40% up since launch)."
    },
    {
      id: 2,
      name: "Bestech City",
      sector: "Sector 6, NH 48, Dharuhera",
      reraStatus: "Pre-RERA",
      reraColor: "warning",
      riskLevel: "Low Risk",
      riskColor: "success",
      price: "₹50,000 - 85,000",
      description: "Premium brand in Dharuhera. On-site Bestech City Centre mall, award-winning developer (LEED Gold, CT HOW awards). Highest standard post-RERA plot sizes and green amenities. Not RERA registered — a notable gap for a premium project."
    },
    {
      id: 3,
      name: "OKAS Enclave",
      sector: "Sector 11, NH 48, Dharuhera",
      reraStatus: "RERA Compliant",
      reraColor: "success",
      riskLevel: "Low Risk",
      riskColor: "success",
      price: "₹63,000 - 80,000",
      description: "The ONLY RERA registered project in Dharuhera that was completed ahead of schedule. DDJAY government scheme adds another layer of oversight. Ideal for safety-conscious first-time buyers who want legal protection above all else."
    },
    {
      id: 4,
      name: "Parsvnath City",
      sector: "Sector 1, NH 48, Dharuhera",
      reraStatus: "Pre-RERA",
      reraColor: "warning",
      riskLevel: "Very High Risk",
      riskColor: "danger",
      price: "₹24,000 - 35,000",
      description: "Cheapest plots in Dharuhera with highest buyer demand (45-60 enquiries per listing on 99acres), but developer is technically insolvent with Rs. 1,000 Cr net worth. Buy ONLY resale plots with clear documentation and independent legal verification. Do not expect any developer support for maintenance or infrastructure."
    },
    {
      id: 5,
      name: "HUDA Sectors (HSVP)",
      sector: "Sectors 4, 4A, 5, 6, 7, 7A, 8 — Dharuhera",
      reraStatus: "Government",
      reraColor: "secondary",
      riskLevel: "Zero Risk",
      riskColor: "success",
      price: "₹25,000 - 75,000",
      description: "Zero developer risk — government-allotted plots with the clearest title chain. Sector 6 is the main developed (95% built) house, walking distance to mall, hospital, bank(s). Sector 7/7A has the fastest appreciation at 20-25% in 2 years. The safest investment in Dharuhera, period."
    },
    {
      id: 6,
      name: "Spring Woods City",
      sector: "Sector 22, Dharuhera",
      reraStatus: "RERA Registered",
      reraColor: "success",
      riskLevel: "Low Risk",
      riskColor: "success",
      price: "₹55,000 - 65,000",
      description: "Clean DDJAY project with RERA registration. Small, well-planned community. Sustainable features like rainwater harvesting and underground cabling. Ideal for budget buyers who want legal safety without paying M2K/Bestech premium."
    },
    {
      id: 7,
      name: "Dwarkadhish City",
      sector: "Sector 23, NH 48, Dharuhera",
      reraStatus: "RERA Registered",
      reraColor: "success",
      riskLevel: "Medium Risk",
      riskColor: "warning",
      price: "₹35,000 - 53,000",
      description: "Budget gated option with RERA registration. Existing Sector 23 resale plots are safer than any new project from this builder. Insolvency proceedings and 3-5 year delays on Casa Romana project are documented red flags for the builder's reliability."
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--theme-bg)', minHeight: '100vh' }}>
      <Header />
      
      {/* Breadcrumb */}
      <div className="container py-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 small fw-medium" style={{ fontSize: '0.85rem' }}>
            <li className="breadcrumb-item"><a href="#/" className="text-decoration-none" style={{ color: 'var(--theme-primary)' }}>Home</a></li>
            <li className="breadcrumb-item text-secondary active" aria-current="page">Society Reviews</li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container py-5 fade-up">
        <span className="fw-bold text-uppercase" style={{ color: 'var(--theme-primary)', fontSize: '0.75rem', letterSpacing: '1px' }}>Honest Reviews 2026</span>
        <h1 className="display-4 fw-bold mb-4 mt-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>
          Dharuhera <span style={{ color: 'var(--theme-primary)' }}>Societies & Sectors</span>
        </h1>
        <p className="text-secondary mb-5" style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '800px' }}>
          Every major society reviewed with RERA status, risk assessment, pricing, and honest pros & cons. Data from RERA portal, 99acres, government records, and 750+ Mahalaxmi Realty transactions.
        </p>

        <div className="d-flex flex-wrap gap-4 mb-5">
          <div className="card border-0 shadow-sm rounded-3 px-4 py-3 bg-white" style={{ border: '1px solid rgba(0,0,0,0.05) !important' }}>
            <span className="small text-secondary mb-1 d-block">Societies Reviewed</span>
            <h4 className="fw-bold mb-0 text-dark">7</h4>
          </div>
          <div className="card border-0 shadow-sm rounded-3 px-4 py-3 bg-white" style={{ border: '1px solid rgba(0,0,0,0.05) !important' }}>
            <span className="small text-secondary mb-1 d-block">RERA Verified</span>
            <h4 className="fw-bold mb-0 text-success">5 of 7</h4>
          </div>
          <div className="card border-0 shadow-sm rounded-3 px-4 py-3 bg-white" style={{ border: '1px solid rgba(0,0,0,0.05) !important' }}>
            <span className="small text-secondary mb-1 d-block">Price Range</span>
            <h4 className="fw-bold mb-0 text-dark">₹24K - 85K/sq.yd</h4>
          </div>
        </div>
      </section>

      {/* RERA Legend Bar */}
      <section className="border-top border-bottom py-3 bg-white fade-up delay-100" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div className="row g-3 align-items-center text-center text-md-start">
            <div className="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start gap-3">
              <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-2 fw-medium border border-success"><i className="bi bi-shield-check me-1"></i> RERA</span>
              <p className="small text-secondary mb-0" style={{ fontSize: '0.75rem', lineHeight: '1.4' }}>Registered on Haryana RERA portal — buyer protection guaranteed</p>
            </div>
            <div className="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start gap-3">
              <span className="badge bg-warning bg-opacity-10 text-warning rounded-pill px-3 py-2 fw-medium border border-warning"><i className="bi bi-exclamation-triangle me-1"></i> Pre-RERA</span>
              <p className="small text-secondary mb-0" style={{ fontSize: '0.75rem', lineHeight: '1.4' }}>Launched before RERA law — no registration, limited recourse</p>
            </div>
            <div className="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start gap-3">
              <span className="badge bg-danger bg-opacity-10 text-danger rounded-pill px-3 py-2 fw-medium border border-danger"><i className="bi bi-x-circle me-1"></i> Risk</span>
              <p className="small text-secondary mb-0" style={{ fontSize: '0.75rem', lineHeight: '1.4' }}>Based on developer financials, legal history, and RERA status</p>
            </div>
          </div>
        </div>
      </section>

      {/* Societies Grid */}
      <section className="container py-5 mt-4 fade-up delay-200">
        <h2 className="display-6 fw-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>All <span style={{ color: 'var(--theme-primary)' }}>Societies</span></h2>
        <p className="text-secondary mb-5">Click any society for the full review — pricing, RERA details, risk disclosure, pros & cons, and who should buy.</p>

        <div className="row g-4">
          {societies.map((society) => (
            <div key={society.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 rounded-4 p-4 border-0 shadow-sm" style={{ backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.05) !important' }}>
                <h5 className="fw-bold mb-1" style={{ color: 'var(--theme-text-dark)' }}>{society.name}</h5>
                <p className="small text-secondary mb-3">{society.sector}</p>
                
                <div className="d-flex flex-wrap gap-2 mb-4">
                  <span className={`badge bg-${society.reraColor} bg-opacity-10 text-${society.reraColor} rounded-pill px-2 py-1 fw-medium border border-${society.reraColor}`} style={{ fontSize: '0.7rem' }}>
                    <i className={`bi ${society.reraColor === 'success' ? 'bi-shield-check' : 'bi-exclamation-triangle'} me-1`}></i> {society.reraStatus}
                  </span>
                  <span className={`badge bg-${society.riskColor} bg-opacity-10 text-${society.riskColor} rounded-pill px-2 py-1 fw-medium border border-${society.riskColor}`} style={{ fontSize: '0.7rem' }}>
                    <i className={`bi ${society.riskColor === 'success' ? 'bi-hand-thumbs-up' : society.riskColor === 'warning' ? 'bi-exclamation-circle' : 'bi-shield-x'} me-1`}></i> {society.riskLevel}
                  </span>
                </div>

                <div className="mb-3">
                  <span className="small text-secondary d-block mb-1" style={{ fontSize: '0.75rem' }}>Rate per sq.yd</span>
                  <h6 className="fw-bold text-dark">{society.price}</h6>
                </div>

                <p className="small text-secondary mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>
                  {society.description}
                </p>

                <div className="mt-auto">
                  <a href="#" className="text-decoration-none fw-bold" style={{ color: 'var(--theme-primary)', fontSize: '0.9rem' }}>
                    Read Full Review <i className="bi bi-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Honest Disclosure */}
      <section className="py-4 mt-5" style={{ backgroundColor: '#fff9ea', borderTop: '1px solid #ffeeba', borderBottom: '1px solid #ffeeba' }}>
        <div className="container d-flex gap-3">
          <i className="bi bi-exclamation-triangle-fill text-warning fs-4 mt-1"></i>
          <div>
            <h6 className="fw-bold text-dark mb-2">Honest Disclosure</h6>
            <p className="small mb-0" style={{ color: '#856404', lineHeight: '1.5' }}>
              Mahalaxmi Realty is an active property dealer in Dharuhera with listings across these societies. These reviews aim to be balanced and data-driven, but readers should be aware of this commercial relationship. Always conduct your own site visit and due diligence before purchasing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-center text-white" style={{ backgroundColor: 'var(--theme-dark)' }}>
        <div className="container py-4">
          <h2 className="fw-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Not Sure Which Society is Right For You?</h2>
          <p className="mx-auto mb-5 opacity-75" style={{ maxWidth: '700px', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Tell us your budget, timeline, and whether you are buying for investment or to live. We will shortlist the 2-3 best options for you — with honest trade-offs.
          </p>
          <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
            <button className="btn fw-bold px-4 py-3 rounded-2 shadow-sm text-white" style={{ backgroundColor: 'var(--theme-primary)' }}>
              <i className="bi bi-telephone me-2"></i> Call Now
            </button>
            <button className="btn bg-white text-dark fw-bold px-4 py-3 rounded-2 shadow-sm">
              <i className="bi bi-whatsapp text-success me-2"></i> WhatsApp
            </button>
          </div>
          <p className="small opacity-50 mb-0" style={{ fontSize: '0.8rem' }}>20+ years experience · 750+ deals · RERA Registered</p>
        </div>
      </section>

      {/* Mini Footer Links */}
      <section className="py-4 text-center bg-white border-bottom" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center gap-3 gap-md-4 small fw-medium">
            <a href="#" className="text-decoration-none" style={{ color: 'var(--theme-primary)' }}>Dharuhera Price Guide 2026</a>
            <span className="text-secondary opacity-25 d-none d-md-inline">|</span>
            <a href="#" className="text-decoration-none" style={{ color: 'var(--theme-primary)' }}>Infrastructure Tracker</a>
            <span className="text-secondary opacity-25 d-none d-md-inline">|</span>
            <a href="#/properties" className="text-decoration-none" style={{ color: 'var(--theme-primary)' }}>View All Properties</a>
            <span className="text-secondary opacity-25 d-none d-md-inline">|</span>
            <a href="#" className="text-decoration-none" style={{ color: 'var(--theme-primary)' }}>Contact Us</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
