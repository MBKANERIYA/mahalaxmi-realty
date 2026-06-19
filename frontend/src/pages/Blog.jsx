import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5001/api/blogs')
      .then(res => res.json())
      .then(data => {
        setBlogPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch blogs:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--theme-bg)', minHeight: '100vh' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="container py-4 fade-up">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb mb-0 small fw-medium" style={{ fontSize: '0.85rem' }}>
            <li className="breadcrumb-item"><a href="#/" className="text-decoration-none" style={{ color: 'var(--theme-primary)' }}>Home</a></li>
            <li className="breadcrumb-item text-secondary active" aria-current="page">Blog</li>
          </ol>
        </nav>

        <div className="text-center mb-5 pb-2">
          <h1 className="display-5 fw-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>
            Dharuhera <span style={{ color: 'var(--theme-primary)' }}>Real Estate Blog</span>
          </h1>
          <p className="text-secondary mx-auto" style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '600px' }}>
            Market insights, investment analysis, and buyer guides from 20+ years of local experience.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          <button className="btn fw-medium px-4 py-2 rounded-2 text-white shadow-sm" style={{ backgroundColor: '#b07d43', fontSize: '0.9rem' }}>All Posts</button>
          <button className="btn btn-outline-secondary border-0 bg-white shadow-sm fw-medium px-4 py-2 rounded-2" style={{ fontSize: '0.9rem' }}>Guide</button>
          <button className="btn btn-outline-secondary border-0 bg-white shadow-sm fw-medium px-4 py-2 rounded-2" style={{ fontSize: '0.9rem' }}>Analysis</button>
          <button className="btn btn-outline-secondary border-0 bg-white shadow-sm fw-medium px-4 py-2 rounded-2" style={{ fontSize: '0.9rem' }}>Comparison</button>
          <button className="btn btn-outline-secondary border-0 bg-white shadow-sm fw-medium px-4 py-2 rounded-2" style={{ fontSize: '0.9rem' }}>Infrastructure</button>
          <button className="btn btn-outline-secondary border-0 bg-white shadow-sm fw-medium px-4 py-2 rounded-2" style={{ fontSize: '0.9rem' }}>News</button>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mb-5 pb-5 fade-up delay-100">
        {loading ? (
          <div className="text-center py-5">Loading blogs...</div>
        ) : (
          <div className="row g-4">
            {blogPosts.map((post) => (
              <div key={post._id} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 border-0 rounded-4 overflow-hidden shadow-sm premium-card" style={{ backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.05) !important' }}>
                  <div style={{ height: '200px' }}>
                    <img src={post.image} alt={post.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="card-body p-4 d-flex flex-column">
                    <h5 className="fw-bold mb-3" style={{ color: 'var(--theme-text-dark)', fontFamily: 'var(--font-heading)', lineHeight: '1.4' }}>
                      {post.title}
                    </h5>
                    <p className="small text-secondary mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto">
                      <p className="small text-secondary opacity-75 mb-3" style={{ fontSize: '0.75rem' }}>
                        By {post.author} | {post.date}
                      </p>
                      <a href={`#/blog/${post._id}`} className="text-decoration-none fw-bold" style={{ color: 'var(--theme-primary)', fontSize: '0.85rem' }}>
                        Read More <i className="bi bi-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Contact Form Section */}
      <section className="py-5" style={{ backgroundColor: '#faf9f7' }}>
        <div className="container py-4 fade-up delay-200 d-flex justify-content-center">
          <div className="w-100" style={{ maxWidth: '650px' }}>
            <div className="text-center mb-4">
              <h3 className="fw-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>Need personalized advice?</h3>
              <p className="text-secondary small">Get expert guidance from Mahalaxmi Realty — a RERA registered agent with 20+ years in Dharuhera.</p>
            </div>
            
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
                  <a href="https://wa.me/919982247314" target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-bold" style={{ color: '#137333', fontSize: '0.85rem' }}>
                    <i className="bi bi-whatsapp me-1"></i> Chat on WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mini CTA Strip */}
      <section className="py-3" style={{ backgroundColor: '#efebe3', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container d-flex flex-wrap justify-content-center justify-content-md-between align-items-center gap-3">
          <div className="d-flex align-items-center gap-2 small">
            <i className="bi bi-shield-check" style={{ color: 'var(--theme-primary)' }}></i>
            <span className="fw-medium text-dark">Mahalaxmi Realty — <span className="text-secondary fw-normal">RERA registered agent with 20+ years in Dharuhera. 750+ deals closed.</span></span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <a href="https://wa.me/919982247314" target="_blank" rel="noopener noreferrer" className="btn btn-sm text-white rounded-1 px-3 py-2" style={{ backgroundColor: '#25D366' }}>
              <i className="bi bi-whatsapp me-1"></i> WhatsApp Us
            </a>
            <a href="#/about" className="text-decoration-none small fw-bold" style={{ color: 'var(--theme-primary)' }}>
              About Us <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
