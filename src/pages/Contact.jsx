import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div style={{ backgroundColor: 'var(--theme-bg)', minHeight: '100vh' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="container py-5 fade-up">
        <h1 className="display-4 fw-bold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>
          Contact <span style={{ color: 'var(--theme-primary)' }}>Us</span>
        </h1>
        <p className="text-secondary mb-5" style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '600px' }}>
          Have questions about a property or want to list yours? Our team of real estate experts is here to help you.
        </p>

        <div className="row g-5">
          {/* Left: Contact Info */}
          <div className="col-12 col-lg-5 pe-lg-5">
            <h4 className="fw-bold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>Get in Touch</h4>
            
            <div className="d-flex flex-column gap-4">
              {/* Address */}
              <div className="d-flex align-items-start gap-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '48px', height: '48px', border: '1px solid rgba(193, 154, 107, 0.3)', backgroundColor: '#fff' }}>
                  <i className="bi bi-geo-alt fs-5" style={{ color: 'var(--theme-primary)' }}></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: 'var(--theme-text-dark)' }}>Office Address</h6>
                  <p className="small text-secondary mb-0" style={{ lineHeight: '1.6' }}>
                    Ground Floor, H.O 1553, Housing Board Colony, Sector 6, Dharuhera, Haryana 123110
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="d-flex align-items-start gap-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '48px', height: '48px', border: '1px solid rgba(193, 154, 107, 0.3)', backgroundColor: '#fff' }}>
                  <i className="bi bi-telephone fs-5" style={{ color: 'var(--theme-primary)' }}></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: 'var(--theme-text-dark)' }}>Phone</h6>
                  <p className="small text-secondary mb-0">+91 99822 47314</p>
                </div>
              </div>

              {/* Email */}
              <div className="d-flex align-items-start gap-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '48px', height: '48px', border: '1px solid rgba(193, 154, 107, 0.3)', backgroundColor: '#fff' }}>
                  <i className="bi bi-envelope fs-5" style={{ color: 'var(--theme-primary)' }}></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: 'var(--theme-text-dark)' }}>Email</h6>
                  <p className="small text-secondary mb-0">info@mahalaxmirealty.in</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="d-flex align-items-start gap-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '48px', height: '48px', border: '1px solid rgba(193, 154, 107, 0.3)', backgroundColor: '#fff' }}>
                  <i className="bi bi-clock fs-5" style={{ color: 'var(--theme-primary)' }}></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: 'var(--theme-text-dark)' }}>Working Hours</h6>
                  <p className="small text-secondary mb-0">Mon - Sun: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="col-12 col-lg-7 fade-up delay-100">
            <h4 className="fw-bold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>Send us a Message</h4>
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

                <button type="button" className="btn w-100 fw-bold py-3 rounded-2 text-white mb-4" style={{ backgroundColor: '#b07d43' }}>
                  Send Enquiry <i className="bi bi-send ms-2"></i>
                </button>

                <div className="text-center pt-3 border-top" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
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

      {/* Map Section */}
      <section className="container mb-5 pb-5 fade-up delay-200">
        <div className="rounded-4 overflow-hidden shadow-sm" style={{ height: '400px', border: '1px solid rgba(0,0,0,0.08)' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14050.609950796859!2d76.7820625!3d28.2114785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d4734a974b789%3A0x6b4fb6c9b5f3d328!2sSector%206%2C%20Dharuhera%2C%20Haryana%20123106!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mahalaxmi Realty Office Location"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  )
}
