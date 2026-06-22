import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const API_URL = import.meta.env.VITE_API_URL || '';

export default function PropertyDetails() {
  const [property, setProperty] = useState(null);
  const [similarProperties, setSimilarProperties] = useState([]);
  const id = window.location.hash.split('/').pop();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Fetch current property
    fetch(`${API_URL}/api/properties/${id}`)
      .then(res => res.json())
      .then(data => setProperty(data))
      .catch(err => console.error(err));

    // Fetch similar properties
    fetch(`${API_URL}/api/properties`)
      .then(res => res.json())
      .then(data => {
        // Just take the first 3 that aren't the current one
        setSimilarProperties(data.filter(p => p._id !== id).slice(0, 3));
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!property) {
    return (
      <div style={{ backgroundColor: 'var(--theme-bg)', minHeight: '100vh' }}>
        <Header />
        <div className="container py-5 text-center">
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--theme-bg)', minHeight: '100vh' }}>
      <Header />
      
      <main className="container py-4 fade-up">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb mb-0 small fw-medium" style={{ fontSize: '0.85rem' }}>
            <li className="breadcrumb-item"><a href="#/" className="text-decoration-none" style={{ color: 'var(--theme-primary)' }}>Home</a></li>
            <li className="breadcrumb-item"><a href="#/properties" className="text-decoration-none" style={{ color: 'var(--theme-primary)' }}>Properties</a></li>
            <li className="breadcrumb-item text-secondary active" aria-current="page">{property.title}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="row g-5">
          
          {/* Left: Media Gallery */}
          <div className="col-12 col-lg-6">
            <div className="position-relative rounded-4 overflow-hidden mb-3" style={{ height: '400px', backgroundColor: '#e9ecef' }}>
              <div className="row g-1 h-100">
                {/* Main Image 1 */}
                <div className="col-6 h-100 position-relative">
                  <img src={property.image} alt="Property" className="w-100 h-100 object-fit-cover" />
                  
                  {/* Badges */}
                  <div className="position-absolute top-0 start-0 p-3 d-flex gap-2">
                    <span className="badge bg-dark rounded-1 px-3 py-2 fw-medium shadow-sm">Residential Plot</span>
                    <span className="badge rounded-1 px-3 py-2 fw-medium shadow-sm" style={{ backgroundColor: '#25D366', color: 'white' }}>
                      <i className="bi bi-check-circle me-1"></i> Freehold
                    </span>
                  </div>
                </div>
                {/* Main Image 2 (Map/Street View placeholder) */}
                <div className="col-6 h-100 position-relative">
                  <img src="https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=800&q=80" alt="Neighborhood" className="w-100 h-100 object-fit-cover" />
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="row g-2">
              <div className="col-3">
                <div className="rounded-3 overflow-hidden" style={{ height: '80px', cursor: 'pointer' }}>
                  <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=300&q=80" alt="Thumb" className="w-100 h-100 object-fit-cover" />
                </div>
              </div>
              <div className="col-3">
                <div className="rounded-3 overflow-hidden" style={{ height: '80px', cursor: 'pointer' }}>
                  <img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=300&q=80" alt="Thumb" className="w-100 h-100 object-fit-cover" />
                </div>
              </div>
              <div className="col-3">
                <div className="rounded-3 overflow-hidden" style={{ height: '80px', cursor: 'pointer' }}>
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80" alt="Thumb" className="w-100 h-100 object-fit-cover" />
                </div>
              </div>
              <div className="col-3">
                <div className="rounded-3 overflow-hidden position-relative" style={{ height: '80px', cursor: 'pointer' }}>
                  <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=300&q=80" alt="Thumb" className="w-100 h-100 object-fit-cover" />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <span className="text-white fw-bold fs-5">{property.photos || "+5"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Details & Pricing */}
          <div className="col-12 col-lg-6">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <h1 className="fw-bold mb-0" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)', fontSize: '2.4rem', lineHeight: '1.2' }}>
                {property.title}
              </h1>
              <button className="btn btn-outline-secondary rounded-pill px-3 py-1 ms-3 d-flex align-items-center flex-shrink-0" style={{ fontSize: '0.85rem' }}>
                <i className="bi bi-share me-2"></i> Share
              </button>
            </div>

            <div className="d-flex align-items-center gap-3 mb-3">
              <span className="badge rounded-1 px-2 py-1 fw-medium" style={{ backgroundColor: '#e6f4ea', color: '#137333', fontSize: '0.75rem' }}>Available</span>
              <span className="text-secondary small d-flex align-items-center">
                <i className="bi bi-geo-alt me-1 text-danger"></i> {property.society}, NH 8, Dharuhera
              </span>
            </div>

            {/* Price Card */}
            <div className="card border-0 rounded-4 p-4 mb-4" style={{ backgroundColor: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}>
              <div className="d-flex align-items-end mb-2">
                <h2 className="fw-bold mb-0 me-3" style={{ color: 'var(--theme-primary)', fontSize: '2.5rem' }}>{property.price}</h2>
              </div>
              <div className="d-flex gap-4 text-secondary small fw-medium mb-3">
                <span>{property.pricePerSqYd}</span>
              </div>
              
              <div className="d-flex align-items-center gap-2 mt-2 pt-3 border-top" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                <span className="small text-secondary fw-medium me-2">Show in:</span>
                <span className="badge rounded-pill px-3 py-2 fw-medium" style={{ backgroundColor: 'var(--theme-primary)', color: '#fff', cursor: 'pointer' }}>sq.yd</span>
                <span className="badge rounded-pill px-3 py-2 fw-medium" style={{ backgroundColor: '#f8f9fa', color: '#6c757d', cursor: 'pointer', border: '1px solid #dee2e6' }}>sq.ft</span>
                <span className="badge rounded-pill px-3 py-2 fw-medium" style={{ backgroundColor: '#f8f9fa', color: '#6c757d', cursor: 'pointer', border: '1px solid #dee2e6' }}>sq.m</span>
                <span className="badge rounded-pill px-3 py-2 fw-medium" style={{ backgroundColor: '#f8f9fa', color: '#6c757d', cursor: 'pointer', border: '1px solid #dee2e6' }}>marla</span>
              </div>
            </div>

            {/* Key Stats Grid */}
            <div className="row g-3 mb-4">
              <div className="col-3">
                <div className="card h-100 text-center border-0 rounded-3 py-3" style={{ backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                  <i className="bi bi-square mb-2 fs-5" style={{ color: 'var(--theme-primary)' }}></i>
                  <h6 className="fw-bold mb-0 text-dark">{property.area}</h6>
                </div>
              </div>
              <div className="col-3">
                <div className="card h-100 text-center border-0 rounded-3 py-3" style={{ backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                  <i className="bi bi-compass mb-2 fs-5" style={{ color: 'var(--theme-primary)' }}></i>
                  <h6 className="fw-bold mb-0 text-dark">{property.facing}</h6>
                  <span className="small text-secondary" style={{ fontSize: '0.75rem' }}>Facing</span>
                </div>
              </div>
              <div className="col-3">
                <div className="card h-100 text-center border-0 rounded-3 py-3" style={{ backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                  <i className="bi bi-arrows-expand mb-2 fs-5" style={{ color: 'var(--theme-primary)' }}></i>
                  <h6 className="fw-bold mb-0 text-dark">{property.sides}</h6>
                  <span className="small text-secondary" style={{ fontSize: '0.75rem' }}>Open Sides</span>
                </div>
              </div>
              <div className="col-3">
                <div className="card h-100 text-center border-0 rounded-3 py-3" style={{ backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                  <i className="bi bi-signpost-split mb-2 fs-5" style={{ color: 'var(--theme-primary)' }}></i>
                  <h6 className="fw-bold mb-0 text-dark">Road Width</h6>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div>
              <h6 className="fw-bold mb-3" style={{ color: 'var(--theme-text-dark)', fontSize: '0.9rem' }}>Tags</h6>
              <div className="d-flex flex-wrap gap-2">
                {property.tags && property.tags.map(t => (
                  <span key={t} className="badge rounded-pill px-3 py-2 fw-medium" style={{ backgroundColor: '#e6f4ea', color: '#137333', border: '1px solid #ceead6' }}>{t}</span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Development Status */}
        <div className="mt-5 pt-5 fade-up delay-100">
          <h3 className="fw-bold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>Development Status</h3>
          <div className="row g-3 mb-3">
            {[
              { icon: 'bi-bezier2', label: 'Roads', status: 'Partial', complete: false },
              { icon: 'bi-lightning-charge', label: 'Electricity', status: 'Complete', complete: true },
              { icon: 'bi-droplet', label: 'Water Supply', status: 'Partial', complete: false },
              { icon: 'bi-shield-check', label: 'Boundary Wall', status: 'Partial', complete: false },
              { icon: 'bi-wrench', label: 'Sewage', status: 'Partial', complete: false },
              { icon: 'bi-tree', label: 'Park/Green', status: 'Partial', complete: false },
              { icon: 'bi-shield-lock', label: 'Security', status: 'Partial', complete: false },
              { icon: 'bi-lightbulb', label: 'Street Lights', status: 'Partial', complete: false },
            ].map((item, idx) => (
              <div key={idx} className="col-6 col-md-3">
                <div className="card h-100 text-center border-1 rounded-3 py-3" style={{ 
                  backgroundColor: item.complete ? '#e6f4ea' : '#fff9f0', 
                  borderColor: item.complete ? '#ceead6' : 'rgba(193, 154, 107, 0.3)',
                  borderStyle: 'solid'
                }}>
                  <i className={`bi ${item.icon} mb-1 fs-5`} style={{ color: item.complete ? '#137333' : '#b07d43' }}></i>
                  <h6 className="fw-bold mb-0" style={{ color: item.complete ? '#137333' : '#b07d43', fontSize: '0.9rem' }}>{item.label}</h6>
                  <span className="small" style={{ fontSize: '0.75rem', color: item.complete ? '#137333' : '#b07d43', opacity: 0.8 }}>{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Similar Properties */}
        <div className="mt-5 pt-5 text-center fade-up delay-300">
          <h3 className="fw-bold mb-5" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>Similar Properties</h3>
          <div className="row g-4 text-start">
            {similarProperties.map(plot => (
              <div key={plot._id} className="col-12 col-md-4">
                <div className="card h-100 rounded-4 overflow-hidden premium-card" style={{ backgroundColor: '#fff' }}>
                  <div className="position-relative bg-light" style={{ height: '220px' }}>
                    <img src={plot.image || `https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80`} alt={plot.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                    <div className="position-absolute top-0 start-0 w-100 d-flex justify-content-between p-3">
                      <span className="badge bg-dark bg-opacity-75 rounded-1 fw-normal px-2 py-1">Residential Plot</span>
                      <div className="d-flex gap-2">
                        <span className="badge rounded-1 fw-normal px-2 py-1" style={{ backgroundColor: '#4a6b53', color: 'white' }}><i className="bi bi-check-circle me-1"></i> Freehold</span>
                        <span className="badge rounded-1 fw-normal px-2 py-1" style={{ backgroundColor: '#4a6b53', color: 'white' }}><i className="bi bi-shield-check me-1"></i> Verified</span>
                      </div>
                    </div>
                    <div className="position-absolute bottom-0 start-0 w-100 d-flex justify-content-between p-3">
                      <span className="badge bg-white text-dark rounded-1 fw-medium px-2 py-1 shadow-sm">{plot.society}</span>
                      <span className="badge bg-dark bg-opacity-75 rounded-1 fw-normal px-2 py-1">{plot.photos}</span>
                    </div>
                  </div>
                  <div className="card-body p-4 d-flex flex-column">
                    <p className="text-secondary small mb-2"><i className="bi bi-geo-alt me-1"></i> {plot.society}, NH 8, Dharuhera</p>
                    <h5 className="fw-bold mb-3" style={{ color: 'var(--theme-text-dark)', fontFamily: 'var(--font-heading)', lineHeight: '1.4' }}>{plot.title}</h5>
                    <div className="d-flex align-items-baseline mb-3">
                      <h4 className="fw-bold mb-0 me-2" style={{ color: 'var(--theme-primary)' }}>{plot.price}</h4>
                      <span className="text-secondary small">{plot.pricePerSqYd}</span>
                    </div>
                    <div className="d-flex gap-3 text-secondary small mb-3 fw-medium">
                      <span><i className="bi bi-square me-1"></i>{plot.area}</span>
                      <span><i className="bi bi-compass me-1"></i>{plot.facing}</span>
                      <span><i className="bi bi-arrows-expand me-1"></i>{plot.sides}</span>
                    </div>
                    <div className="d-flex gap-2 mb-4">
                      {plot.tags && plot.tags.map((tag, i) => (
                        <span key={i} className="badge fw-medium px-2 py-1" style={{ backgroundColor: '#f5f0e6', color: '#8b5a33' }}>{tag}</span>
                      ))}
                    </div>
                    <div className="mt-auto d-flex gap-2">
                      <button className="btn text-white fw-bold w-50 py-2 rounded-2" style={{ backgroundColor: 'var(--theme-primary)', fontSize: '0.85rem' }}>Ask About</button>
                      <a href={`#/property/${plot._id}`} className="btn fw-bold w-50 py-2 rounded-2" style={{ backgroundColor: '#e9e4dd', color: '#5a5550', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>See Details <i className="bi bi-arrow-right ms-1"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-5 pt-5 pb-5 fade-up delay-300 d-flex justify-content-center">
          <div className="w-100" style={{ maxWidth: '650px' }}>
            <h3 className="fw-bold mb-4 text-center" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>Interested in this property?</h3>
            <div className="card border-0 rounded-4 p-4 p-md-5" style={{ backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.08) !important', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
              <form>
                <div className="mb-4">
                  <label className="form-label small fw-bold" style={{ color: '#475569' }}>Your Name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control px-3 py-2 border-1 shadow-none" placeholder="e.g. Rajesh Kumar" style={{ borderColor: 'rgba(0,0,0,0.1)' }} />
                </div>
                <div className="mb-4">
                  <label className="form-label small fw-bold" style={{ color: '#475569' }}>Email Address <span className="text-danger">*</span></label>
                  <input type="email" className="form-control px-3 py-2 border-1 shadow-none" placeholder="you@example.com" style={{ borderColor: 'rgba(0,0,0,0.1)' }} />
                </div>
                <div className="mb-4">
                  <label className="form-label small fw-bold" style={{ color: '#475569' }}>Phone Number (WhatsApp preferred) <span className="text-danger">*</span></label>
                  <input type="tel" className="form-control px-3 py-2 border-1 shadow-none" placeholder="+91 98765 43210" style={{ borderColor: 'rgba(0,0,0,0.1)' }} />
                </div>
                
                <div className="row g-3 mb-4">
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-bold" style={{ color: '#475569' }}>Budget Range</label>
                    <select className="form-select px-3 py-2 border-1 shadow-none" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                      <option>Select budget (optional)</option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-bold" style={{ color: '#475569' }}>Buying Timeline</label>
                    <select className="form-select px-3 py-2 border-1 shadow-none" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                      <option>Select timeline (optional)</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label small fw-bold" style={{ color: '#475569' }}>Tell us what you're looking for</label>
                  <textarea className="form-control px-3 py-2 border-1 shadow-none" rows="3" placeholder="e.g. Looking for a 200 sq.yd residential plot in Dharuhera under 50 lakhs..." style={{ borderColor: 'rgba(0,0,0,0.1)' }}></textarea>
                </div>

                <button type="button" className="btn w-100 fw-bold py-3 rounded-2 text-white mb-3" style={{ backgroundColor: '#b07d43' }}>
                  Send Enquiry <i className="bi bi-send ms-2"></i>
                </button>

                <div className="text-center">
                  <span className="small text-secondary d-block mb-1" style={{ fontSize: '0.75rem' }}>Prefer WhatsApp?</span>
                  <a href="#" className="text-decoration-none fw-bold" style={{ color: '#137333', fontSize: '0.85rem' }}>
                    <i className="bi bi-whatsapp me-1"></i> Chat on WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
