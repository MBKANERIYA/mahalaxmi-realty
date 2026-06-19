import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Properties() {
  const [properties, setProperties] = useState([]);
  
  const [filters, setFilters] = useState({
    priceRange: 'All Prices',
    city: 'All Cities',
    propertyType: 'All Types',
    sortBy: 'Price: Low to High',
    areaSize: 'All Sizes',
    facing: 'All Facing',
    ownership: 'All Ownership',
    society: 'All Societies',
    vastu: false
  });

  useEffect(() => {
    fetch('http://localhost:5001/api/properties')
      .then(res => res.json())
      .then(data => setProperties(data))
      .catch(err => console.error(err));
  }, []);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const getPriceNum = (priceStr) => {
    if (!priceStr) return 0;
    let priceNum = 0;
    const numMatch = String(priceStr).match(/[\d.]+/);
    if (numMatch) {
      priceNum = parseFloat(numMatch[0]);
      if (String(priceStr).toLowerCase().includes('cr')) priceNum *= 100;
    }
    return priceNum;
  };

  const filteredProperties = properties.filter(p => {
    // City / Location
    if (filters.city !== 'All Cities') {
      const matchText = `${p.city || ''} ${p.society || ''} ${p.location || ''} ${p.crmLocation || ''}`.toLowerCase();
      if (!matchText.includes(filters.city.toLowerCase())) return false;
    }

    // Property Type
    if (filters.propertyType !== 'All Types') {
       const matchText = `${p.category || ''} ${p.title || ''} ${p.type || ''}`.toLowerCase();
       const typeParts = filters.propertyType.split(' ');
       let matches = true;
       for (const part of typeParts) {
         if (part !== '/' && part.length > 2 && !matchText.includes(part.toLowerCase())) {
           matches = false;
         }
       }
       if (!matches) return false;
    }

    // Facing
    if (filters.facing !== 'All Facing') {
      if (p.facing && p.facing.toLowerCase() !== filters.facing.toLowerCase()) return false;
    }

    // Ownership
    if (filters.ownership !== 'All Ownership') {
       const ownershipStr = `${p.categoryData?.ownershipDetails || ''} ${p.tags?.join(' ') || ''}`.toLowerCase();
       if (!ownershipStr.includes(filters.ownership.toLowerCase())) return false;
    }

    // Society
    if (filters.society !== 'All Societies') {
       if (p.society && p.society.toLowerCase() !== filters.society.toLowerCase()) return false;
    }

    // Vastu Compliant
    if (filters.vastu) {
       const str = JSON.stringify(p).toLowerCase();
       if (!str.includes('vastu')) return false;
    }

    // Area Size
    if (filters.areaSize !== 'All Sizes') {
       const areaMatch = (p.area || '').match(/\d+/);
       const areaNum = areaMatch ? parseInt(areaMatch[0]) : null;
       if (areaNum !== null) {
          if (filters.areaSize === 'Under 150 sq.yd' && areaNum >= 150) return false;
          if (filters.areaSize === '150 - 300 sq.yd' && (areaNum < 150 || areaNum > 300)) return false;
       }
    }

    // Price Range
    if (filters.priceRange !== 'All Prices') {
       const priceNum = getPriceNum(p.price || p.pricePerSqYd);
       if (priceNum > 0) {
          if (filters.priceRange === 'Under ₹50 Lacs' && priceNum >= 50) return false;
          if (filters.priceRange === '₹50 Lacs - ₹1 Cr' && (priceNum < 50 || priceNum > 100)) return false;
          if (filters.priceRange === 'Above ₹1 Cr' && priceNum <= 100) return false;
       }
    }

    return true;
  });

  // Sort
  if (filters.sortBy === 'Price: Low to High') {
    filteredProperties.sort((a, b) => getPriceNum(a.price || a.pricePerSqYd) - getPriceNum(b.price || b.pricePerSqYd));
  } else if (filters.sortBy === 'Price: High to Low') {
    filteredProperties.sort((a, b) => getPriceNum(b.price || b.pricePerSqYd) - getPriceNum(a.price || a.pricePerSqYd));
  } else if (filters.sortBy === 'Newest First') {
    filteredProperties.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  }

  // Extract unique filter options dynamically from data
  const uniqueCities = ["All Cities", ...new Set(properties.map(p => p.city || p.crmLocation || p.society).filter(Boolean).map(c => {
    if (c.toLowerCase().includes('dharuhera')) return 'Dharuhera';
    if (c.toLowerCase().includes('rewari')) return 'Rewari';
    if (c.toLowerCase().includes('bhiwadi')) return 'Bhiwadi';
    return c;
  }))];
  
  const uniqueSocieties = ["All Societies", ...new Set(properties.map(p => p.society).filter(Boolean))];

  return (
    <div style={{ backgroundColor: 'var(--theme-bg)', minHeight: '100vh' }}>
      <Header />
      
      {/* Title Section */}
      <section className="container mt-4 mb-4 fade-up">
        <h1 className="fw-bold mb-3" style={{ color: 'var(--theme-text-dark)', fontFamily: 'var(--font-heading)', fontSize: '3.5rem' }}>
          Our <span style={{ color: 'var(--theme-primary)' }}>Properties</span>
        </h1>
        <p className="text-secondary" style={{ maxWidth: '600px', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Browse our curated collection of premium properties across Dharuhera, Rewari, and Bhiwadi.
        </p>
      </section>

      {/* Filter Section */}
      <section className="container mb-5 fade-up delay-100">
        <p className="small text-secondary mb-3">Showing <strong>{filteredProperties.length}</strong> of {properties.length} properties</p>
        
        <div className="bg-white rounded-3 shadow-sm p-4 border" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
          <div className="row g-3">
            <div className="col-12 col-md-3">
              <label className="form-label small text-secondary mb-1">Price Range</label>
              <select name="priceRange" value={filters.priceRange} onChange={handleFilterChange} className="form-select border-0 bg-light">
                <option>All Prices</option>
                <option>Under ₹50 Lacs</option>
                <option>₹50 Lacs - ₹1 Cr</option>
                <option>Above ₹1 Cr</option>
              </select>
            </div>
            <div className="col-12 col-md-3">
              <label className="form-label small text-secondary mb-1">City / Location</label>
              <select name="city" value={filters.city} onChange={handleFilterChange} className="form-select border-0 bg-light">
                {uniqueCities.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="col-12 col-md-3">
              <label className="form-label small text-secondary mb-1">Property Type</label>
              <select name="propertyType" value={filters.propertyType} onChange={handleFilterChange} className="form-select border-0 bg-light">
                <option>All Types</option>
                <option>Residential Plot</option>
                <option>Commercial Plot</option>
                <option>Warehouse</option>
                <option>Shop</option>
                <option>Villa / House</option>
              </select>
            </div>
            <div className="col-12 col-md-3">
              <label className="form-label small text-secondary mb-1">Sort By</label>
              <select name="sortBy" value={filters.sortBy} onChange={handleFilterChange} className="form-select border-0 bg-light">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>

            <div className="col-12 col-md-2 mt-4">
              <label className="form-label small text-secondary mb-1">Area Size</label>
              <select name="areaSize" value={filters.areaSize} onChange={handleFilterChange} className="form-select border-0 bg-light">
                <option>All Sizes</option>
                <option>Under 150 sq.yd</option>
                <option>150 - 300 sq.yd</option>
              </select>
            </div>
            <div className="col-12 col-md-2 mt-4">
              <label className="form-label small text-secondary mb-1">Facing</label>
              <select name="facing" value={filters.facing} onChange={handleFilterChange} className="form-select border-0 bg-light">
                <option>All Facing</option>
                <option>North</option>
                <option>East</option>
                <option>South</option>
                <option>West</option>
              </select>
            </div>
            <div className="col-12 col-md-3 mt-4">
              <label className="form-label small text-secondary mb-1">Ownership</label>
              <select name="ownership" value={filters.ownership} onChange={handleFilterChange} className="form-select border-0 bg-light">
                <option>All Ownership</option>
                <option>Freehold</option>
                <option>Leasehold</option>
              </select>
            </div>
            <div className="col-12 col-md-3 mt-4">
              <label className="form-label small text-secondary mb-1">Society</label>
              <select name="society" value={filters.society} onChange={handleFilterChange} className="form-select border-0 bg-light">
                {uniqueSocieties.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="col-12 col-md-2 mt-4 d-flex align-items-end pb-2">
              <div className="form-check">
                <input name="vastu" checked={filters.vastu} onChange={handleFilterChange} className="form-check-input" type="checkbox" id="vastuCheck" />
                <label className="form-check-label small text-secondary" htmlFor="vastuCheck">
                  Vastu Compliant
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="container mb-5 fade-up delay-200">
        <p className="small text-secondary mb-4">Showing {filteredProperties.length} of {properties.length} properties</p>
        
        {filteredProperties.length === 0 && (
          <div className="text-center py-5">
            <h4 className="text-muted">No properties match your exact filters.</h4>
            <button className="btn btn-link" onClick={() => setFilters({
              priceRange: 'All Prices', city: 'All Cities', propertyType: 'All Types', sortBy: 'Price: Low to High', areaSize: 'All Sizes', facing: 'All Facing', ownership: 'All Ownership', society: 'All Societies', vastu: false
            })}>Clear all filters</button>
          </div>
        )}

        <div className="row g-4">
          {filteredProperties.map((plot, idx) => {
             // Safe parse for rendering type tags
             const pType = plot.category || plot.type || "Plot";
             const isVerified = plot.tags?.includes('Verified') || true;
             const isFreehold = plot.categoryData?.ownershipDetails?.toLowerCase().includes('lease') ? 'Leasehold' : 'Freehold';
             
             return (
              <div key={plot._id} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 rounded-4 overflow-hidden premium-card" style={{ backgroundColor: '#fff' }}>
                  
                  {/* Image Container */}
                  <div className="position-relative bg-light" style={{ height: '220px' }}>
                    <img src={plot.image || `https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80&sig=${idx}`} alt={plot.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                    
                    {/* Top Badges */}
                    <div className="position-absolute top-0 start-0 w-100 d-flex justify-content-between p-3">
                      <span className="badge bg-dark bg-opacity-75 rounded-1 fw-normal px-2 py-1 text-capitalize">{pType}</span>
                      <div className="d-flex gap-2">
                        <span className="badge rounded-1 fw-normal px-2 py-1" style={{ backgroundColor: '#4a6b53', color: 'white' }}><i className="bi bi-check-circle me-1"></i> {isFreehold}</span>
                        {isVerified && <span className="badge rounded-1 fw-normal px-2 py-1" style={{ backgroundColor: '#4a6b53', color: 'white' }}><i className="bi bi-shield-check me-1"></i> Verified</span>}
                      </div>
                    </div>

                    {/* Bottom Badges */}
                    <div className="position-absolute bottom-0 start-0 w-100 d-flex justify-content-between p-3">
                      <span className="badge bg-white text-dark rounded-1 fw-medium px-2 py-1 shadow-sm">{plot.society}</span>
                      {plot.photos && <span className="badge bg-dark bg-opacity-75 rounded-1 fw-normal px-2 py-1">{plot.photos}</span>}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="card-body p-4 d-flex flex-column">
                    <p className="text-secondary small mb-2"><i className="bi bi-geo-alt me-1"></i> {plot.society}{plot.city ? `, ${plot.city}` : ', Dharuhera'}</p>
                    <h5 className="fw-bold mb-3" style={{ color: 'var(--theme-text-dark)', fontFamily: 'var(--font-heading)', lineHeight: '1.4' }}>{plot.title}</h5>
                    
                    <div className="d-flex align-items-baseline mb-3">
                      <h4 className="fw-bold mb-0 me-2" style={{ color: 'var(--theme-primary)' }}>{plot.price || plot.pricePerSqYd || 'Price on Request'}</h4>
                      {plot.price && plot.pricePerSqYd && plot.price !== plot.pricePerSqYd && <span className="text-secondary small">{plot.pricePerSqYd}</span>}
                    </div>

                    <div className="d-flex gap-3 text-secondary small mb-3 fw-medium flex-wrap">
                      {plot.area && <span><i className="bi bi-square me-1"></i>{plot.area}</span>}
                      {plot.facing && <span><i className="bi bi-compass me-1"></i>{plot.facing}</span>}
                      {plot.sides && <span><i className="bi bi-arrows-expand me-1"></i>{plot.sides}</span>}
                    </div>

                    {plot.tags && plot.tags.length > 0 && (
                      <div className="d-flex gap-2 mb-4 flex-wrap">
                        {plot.tags.map((tag, i) => (
                          <span key={i} className="badge fw-medium px-2 py-1" style={{ backgroundColor: '#f5f0e6', color: '#8b5a33' }}>{tag}</span>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto d-flex gap-2">
                      <button className="btn text-white fw-bold w-50 py-2 rounded-2" style={{ backgroundColor: 'var(--theme-primary)', fontSize: '0.85rem' }}>Ask About This</button>
                      <a href={`#/property/${plot._id}`} className="btn fw-bold w-50 py-2 rounded-2" style={{ backgroundColor: '#e9e4dd', color: '#5a5550', fontSize: '0.85rem' }}>See Full Details <i className="bi bi-arrow-right ms-1"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Pagination */}
      {filteredProperties.length > 0 && (
        <section className="container mb-5 pb-5 d-flex justify-content-center fade-up delay-300">
          <div className="bg-white rounded-2 shadow-sm d-inline-flex border overflow-hidden">
            <button className="btn border-0 rounded-0 px-3 py-2 text-secondary bg-white"><i className="bi bi-chevron-left me-1"></i> Previous</button>
            <button className="btn border-0 rounded-0 px-3 py-2 text-white" style={{ backgroundColor: 'var(--theme-primary)' }}>1</button>
            <button className="btn border-0 rounded-0 px-3 py-2 text-dark bg-white">Next <i className="bi bi-chevron-right ms-1"></i></button>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
