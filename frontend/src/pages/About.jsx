import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div style={{ backgroundColor: 'var(--theme-bg)', minHeight: '100vh' }}>
      <Header />
      
      {/* Breadcrumbs & Hero */}
      <section className="container py-4 fade-up">
        <nav aria-label="breadcrumb" className="mb-5">
          <ol className="breadcrumb mb-0 small fw-medium" style={{ fontSize: '0.85rem' }}>
            <li className="breadcrumb-item"><a href="#/" className="text-decoration-none" style={{ color: 'var(--theme-primary)' }}>Home</a></li>
            <li className="breadcrumb-item text-secondary active" aria-current="page">About Us</li>
          </ol>
        </nav>

        <div className="mb-5 pb-4">
          <h1 className="display-4 fw-bold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>
            About <span style={{ color: 'var(--theme-primary)' }}>Mahalaxmi Realty</span>
          </h1>
          <p className="text-secondary" style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '800px' }}>
            Your trusted partner for premium real estate in Dharuhera and surrounding areas. We help you find your dream property with transparency, integrity, and dedication.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 border-top border-bottom fade-up delay-100" style={{ backgroundColor: '#faf9f7', borderColor: 'rgba(0,0,0,0.05)' }}>
        <div className="container py-4">
          <div className="row g-4 text-center">
            <div className="col-6 col-md-3">
              <i className="bi bi-clock mb-3 d-block fs-3" style={{ color: 'var(--theme-primary)' }}></i>
              <h2 className="fw-bold mb-1" style={{ color: 'var(--theme-text-dark)' }}>30+</h2>
              <span className="small fw-bold text-secondary text-uppercase" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>Active Properties</span>
            </div>
            <div className="col-6 col-md-3">
              <i className="bi bi-people mb-3 d-block fs-3" style={{ color: 'var(--theme-primary)' }}></i>
              <h2 className="fw-bold mb-1" style={{ color: 'var(--theme-text-dark)' }}>1000+</h2>
              <span className="small fw-bold text-secondary text-uppercase" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>Happy Clients</span>
            </div>
            <div className="col-6 col-md-3">
              <i className="bi bi-award mb-3 d-block fs-3" style={{ color: 'var(--theme-primary)' }}></i>
              <h2 className="fw-bold mb-1" style={{ color: 'var(--theme-text-dark)' }}>20+</h2>
              <span className="small fw-bold text-secondary text-uppercase" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>Years Experience</span>
            </div>
            <div className="col-6 col-md-3">
              <i className="bi bi-house-check mb-3 d-block fs-3" style={{ color: 'var(--theme-primary)' }}></i>
              <h2 className="fw-bold mb-1" style={{ color: 'var(--theme-text-dark)' }}>750+</h2>
              <span className="small fw-bold text-secondary text-uppercase" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>Properties Sold</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container py-5 my-5 fade-up delay-200">
        <div className="row g-5 align-items-center">
          <div className="col-12 col-lg-6 pe-lg-5">
            <h2 className="display-6 fw-bold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>
              Our <span style={{ color: 'var(--theme-primary)' }}>Story</span>
            </h2>
            
            <p className="text-secondary mb-4" style={{ lineHeight: '1.7' }}>
              Mahalaxmi Realty was founded with a vision to transform the real estate experience in Dharuhera and the surrounding regions. What started as a small venture has grown into one of the most trusted names in the industry.
            </p>
            <p className="text-secondary mb-4" style={{ lineHeight: '1.7' }}>
              With over 20 years of experience in the real estate market, we have helped 750+ families find their dream properties. Our deep understanding of the local market, combined with our commitment to customer satisfaction, makes us the preferred choice for property transactions in the region.
            </p>
            <p className="text-secondary" style={{ lineHeight: '1.7' }}>
              We specialize in premium properties across Dharuhera, Rewari, and Bhiwadi. Whether you're buying or selling, our team of experts is here to guide you every step of the way.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="position-relative">
              <div className="rounded-4 overflow-hidden shadow-lg" style={{ height: '500px' }}>
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80" alt="Premium Estate Gate" className="w-100 h-100 object-fit-cover" />
              </div>
              
              {/* Floating Badge */}
              <div className="position-absolute bottom-0 start-0 translate-middle-y ms-4 rounded-3 p-4 shadow-lg text-white" style={{ backgroundColor: 'var(--theme-primary)', maxWidth: '200px' }}>
                <h2 className="fw-bold mb-1">20+</h2>
                <span className="small text-white opacity-75 text-uppercase fw-bold" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-5 fade-up delay-300" style={{ backgroundColor: '#faf9f7' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>
              Our <span style={{ color: 'var(--theme-primary)' }}>Values</span>
            </h2>
            <p className="text-secondary">The principles that guide everything we do</p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 border-0 rounded-4 p-4 shadow-sm" style={{ backgroundColor: '#fff' }}>
                <h5 className="fw-bold mb-3" style={{ color: 'var(--theme-text-dark)' }}>Trust & Transparency</h5>
                <p className="small text-secondary mb-0" style={{ lineHeight: '1.6' }}>We believe in complete transparency in every transaction. No hidden charges, no surprises.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 border-0 rounded-4 p-4 shadow-sm" style={{ backgroundColor: '#fff' }}>
                <h5 className="fw-bold mb-3" style={{ color: 'var(--theme-text-dark)' }}>Customer First</h5>
                <p className="small text-secondary mb-0" style={{ lineHeight: '1.6' }}>Our clients are at the heart of everything we do. Their satisfaction is our ultimate goal.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 border-0 rounded-4 p-4 shadow-sm" style={{ backgroundColor: '#fff' }}>
                <h5 className="fw-bold mb-3" style={{ color: 'var(--theme-text-dark)' }}>Expert Guidance</h5>
                <p className="small text-secondary mb-0" style={{ lineHeight: '1.6' }}>With decades of experience, we provide expert advice to help you make informed decisions.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 border-0 rounded-4 p-4 shadow-sm" style={{ backgroundColor: '#fff' }}>
                <h5 className="fw-bold mb-3" style={{ color: 'var(--theme-text-dark)' }}>After-Sales Support</h5>
                <p className="small text-secondary mb-0" style={{ lineHeight: '1.6' }}>Our relationship doesn't end at the sale. We're here to help you even after you move in.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-center text-white" style={{ backgroundColor: 'var(--theme-dark)' }}>
        <div className="container py-5">
          <h2 className="fw-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Ready to Find Your Dream Property?</h2>
          <p className="mx-auto mb-5 opacity-75" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
            Let us help you find the perfect property. Our team is ready to assist you.
          </p>
          <a href="tel:+919982247314" className="btn fw-bold px-5 py-3 rounded-2 shadow-sm text-white" style={{ backgroundColor: 'var(--theme-primary)' }}>
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
