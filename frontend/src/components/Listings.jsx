import React, { useState, useEffect } from 'react';

export default function Listings() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/properties?featured=true')
      .then(res => res.json())
      .then(data => setProperties(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="container py-5 my-4 fade-up">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-end mb-5">
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="text-uppercase fw-bold" style={{ color: 'var(--theme-primary)', fontSize: '0.85rem', letterSpacing: '1px' }}>Available Plots</span>
            <div className="ms-3" style={{ height: '1px', width: '80px', backgroundColor: 'rgba(193, 154, 107, 0.4)' }}></div>
          </div>
          <h2 className="display-5 fw-bold mb-0" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>
            Verified listings in Dharuhera
          </h2>
        </div>
        <a href="#/properties" className="text-decoration-none fw-medium d-none d-md-block" style={{ color: 'var(--theme-primary)' }}>
          View all properties <i className="bi bi-arrow-right"></i>
        </a>
      </div>

      {/* Grid */}
      <div className="row g-4">
        {properties.map((plot, idx) => (
          <div key={plot._id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 rounded-4 overflow-hidden premium-card" style={{ backgroundColor: '#fff' }}>
              
              {/* Image Container */}
              <div className="position-relative bg-light" style={{ height: '220px' }}>
                <img src={plot.image || `https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80&sig=${idx}`} alt={plot.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                
                {/* Top Badges */}
                <div className="position-absolute top-0 start-0 w-100 d-flex justify-content-between p-3">
                  <span className="badge bg-dark bg-opacity-75 rounded-1 fw-normal px-2 py-1">Residential Plot</span>
                  <div className="d-flex gap-2">
                    <span className="badge rounded-1 fw-normal px-2 py-1" style={{ backgroundColor: '#4a6b53', color: 'white' }}><i className="bi bi-check-circle me-1"></i> Freehold</span>
                    <span className="badge rounded-1 fw-normal px-2 py-1" style={{ backgroundColor: '#4a6b53', color: 'white' }}><i className="bi bi-shield-check me-1"></i> Verified</span>
                  </div>
                </div>

                {/* Bottom Badges */}
                <div className="position-absolute bottom-0 start-0 w-100 d-flex justify-content-between p-3">
                  <span className="badge bg-white text-dark rounded-1 fw-medium px-2 py-1 shadow-sm">{plot.society}</span>
                  <span className="badge bg-dark bg-opacity-75 rounded-1 fw-normal px-2 py-1">{plot.photos}</span>
                </div>
              </div>

              {/* Card Body */}
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
                  {plot.tags.map((tag, i) => (
                    <span key={i} className="badge fw-medium px-2 py-1" style={{ backgroundColor: '#f5f0e6', color: '#8b5a33' }}>{tag}</span>
                  ))}
                </div>

                <div className="mt-auto d-flex gap-2">
                  <button className="btn text-white fw-bold w-50 py-2 rounded-2" style={{ backgroundColor: 'var(--theme-primary)', fontSize: '0.85rem' }}>Ask About This Plot</button>
                  <a href={`#/property/${plot._id}`} className="btn fw-bold w-50 py-2 rounded-2" style={{ backgroundColor: '#e9e4dd', color: '#5a5550', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>See Full Details <i className="bi bi-arrow-right ms-1"></i></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
