import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const API_URL = import.meta.env.VITE_API_URL || '${API_URL}';

export default function BlogDetails() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Extract ID from hash URL (e.g. #/blog/667... )
    const hash = window.location.hash;
    const parts = hash.split('/');
    const blogId = parts[parts.length - 1];

    if (!blogId || blogId === 'blog') return;

    fetch(`${API_URL}/api/blogs/${blogId}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch blog:', err);
        setLoading(false);
      });

    // Fetch related posts
    fetch(`${API_URL}/api/blogs`)
      .then(res => res.json())
      .then(data => {
        // Exclude current and pick 2
        const filtered = data.filter(b => b._id !== blogId).slice(0, 2);
        setRelatedPosts(filtered);
      })
      .catch(console.error);

  }, [window.location.hash]);

  if (loading) {
    return (
      <div style={{ backgroundColor: '#faf9f7', minHeight: '100vh' }}>
        <Header />
        <div className="container py-5 text-center">Loading blog...</div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div style={{ backgroundColor: '#faf9f7', minHeight: '100vh' }}>
        <Header />
        <div className="container py-5 text-center">Blog not found.</div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#faf9f7', minHeight: '100vh' }}>
      <Header />
      
      {/* Blog Header & Hero Image */}
      <section className="container pt-4 pb-5 fade-up">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb mb-0 small fw-medium" style={{ fontSize: '0.85rem' }}>
            <li className="breadcrumb-item"><a href="#/" className="text-decoration-none" style={{ color: 'var(--theme-primary)' }}>Home</a></li>
            <li className="breadcrumb-item"><a href="#/blog" className="text-decoration-none" style={{ color: 'var(--theme-primary)' }}>Blog</a></li>
            <li className="breadcrumb-item text-secondary active text-truncate" aria-current="page" style={{ maxWidth: '200px' }}>
              {post.title}
            </li>
          </ol>
        </nav>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="text-center mb-5">
              <span className="badge rounded-pill bg-white text-dark border px-3 py-2 fw-medium mb-4 shadow-sm" style={{ fontSize: '0.8rem', letterSpacing: '0.5px', color: 'var(--theme-primary) !important', borderColor: 'rgba(193, 154, 107, 0.3) !important' }}>
                {post.category}
              </span>
              <h1 className="display-4 fw-bold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)', lineHeight: '1.2' }}>
                {post.title}
              </h1>
              
              <div className="d-flex align-items-center justify-content-center gap-4 text-secondary small fw-medium">
                <div className="d-flex align-items-center gap-2">
                  <div className="rounded-circle bg-secondary bg-opacity-25" style={{ width: '32px', height: '32px', backgroundImage: 'url(/lo%20(1)%20(1).webp)', backgroundSize: 'contain', backgroundPosition: 'center' }}></div>
                  <span className="text-dark fw-bold">{post.author}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-calendar3 text-muted"></i>
                  <span>{post.date}</span>
                </div>
                <div className="d-flex align-items-center gap-2 d-none d-sm-flex">
                  <i className="bi bi-clock text-muted"></i>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <div className="rounded-4 overflow-hidden shadow-lg mb-5" style={{ height: '500px' }}>
              <img src={post.image} alt={post.title} className="w-100 h-100 object-fit-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container pb-5 fade-up delay-100">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm" style={{ border: '1px solid rgba(0,0,0,0.03)' }}>
              
              {/* Social Share Floating (Desktop only layout approach) */}
              <div className="d-flex align-items-center gap-3 border-bottom pb-4 mb-4">
                <span className="small fw-bold text-secondary text-uppercase" style={{ letterSpacing: '1px' }}>Share:</span>
                <button className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}><i className="bi bi-whatsapp"></i></button>
                <button className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}><i className="bi bi-twitter-x"></i></button>
                <button className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}><i className="bi bi-facebook"></i></button>
                <button className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}><i className="bi bi-link-45deg"></i></button>
              </div>

              {/* Render HTML Content */}
              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>

              {/* Tags */}
              <div className="mt-5 pt-4 border-top d-flex gap-2 flex-wrap">
                <span className="badge bg-light text-dark border px-3 py-2 fw-normal">Dharuhera Plots</span>
                <span className="badge bg-light text-dark border px-3 py-2 fw-normal">Akshaya Tritiya</span>
                <span className="badge bg-light text-dark border px-3 py-2 fw-normal">Investment</span>
                <span className="badge bg-light text-dark border px-3 py-2 fw-normal">Real Estate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles & CTA */}
      <section className="py-5 bg-white border-top border-bottom">
        <div className="container py-4">
          <h3 className="fw-bold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>Related Articles</h3>
          
          <div className="row g-4 mb-5">
            {relatedPosts.map((rel, index) => (
              <div key={rel._id || index} className="col-12 col-md-6">
                <a href={`#/blog/${rel._id}`} className="text-decoration-none">
                  <div className="card h-100 border-0 rounded-4 overflow-hidden shadow-sm premium-card" style={{ border: '1px solid rgba(0,0,0,0.05) !important' }}>
                    <div className="row g-0 h-100">
                      <div className="col-4">
                        <img src={rel.image} className="img-fluid rounded-start-4 h-100 w-100 object-fit-cover" alt={rel.title} />
                      </div>
                      <div className="col-8">
                        <div className="card-body d-flex flex-column h-100 p-3 p-md-4">
                          <p className="small text-secondary mb-2">{rel.date}</p>
                          <h6 className="fw-bold text-dark mb-0" style={{ lineHeight: '1.4' }}>{rel.title}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Quick CTA */}
          <div className="rounded-4 p-4 p-md-5 text-center text-white" style={{ backgroundColor: 'var(--theme-dark)' }}>
            <h3 className="fw-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Looking to invest in Dharuhera?</h3>
            <p className="mb-4 opacity-75 mx-auto" style={{ maxWidth: '600px' }}>Get free, unbiased consultation from our local experts. We'll help you find the perfect plot matching your budget and Vastu preferences.</p>
            <a href="#/contact" className="btn fw-bold px-4 py-3 rounded-2 text-white shadow-sm" style={{ backgroundColor: 'var(--theme-primary)' }}>
              Get Free Consultation
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
