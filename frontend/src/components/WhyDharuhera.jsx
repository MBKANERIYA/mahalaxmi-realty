export default function WhyDharuhera() {
  const chartData = [
    { label: "Dharuhera", price: "₹65K/sq.yd", percent: 31, highlight: true },
    { label: "Rewari HUDA", price: "₹75K/sq.yd", percent: 36, highlight: true },
    { label: "Gurgaon Sec 80", price: "₹1.7L/sq.yd", percent: 81, highlight: false },
    { label: "Gurgaon Sec 65", price: "₹2.1L/sq.yd", percent: 100, highlight: false },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: 'var(--theme-dark)', color: '#fff' }}>
      <div className="container py-5 my-3">
        <div className="row g-5 align-items-center">
          
          {/* Left Column */}
          <div className="col-12 col-lg-6 pe-lg-5">
            <div className="mb-4">
              <h6 className="text-uppercase fw-bold mb-2" style={{ color: 'var(--theme-primary)', fontSize: '0.75rem', letterSpacing: '1.5px' }}>Why Dharuhera</h6>
              <div style={{ height: '1.5px', backgroundColor: 'var(--theme-primary)', width: '100%' }}></div>
            </div>
            
            <h2 className="fw-bold mb-4 text-white" style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', lineHeight: '1.1' }}>
              Gurgaon quality.<br />
              <span style={{ color: 'var(--theme-primary)' }}>One-third the price.</span>
            </h2>
            
            <p className="mb-5" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#c4beb8' }}>
              Dharuhera plots average ₹65,000/sq.yd. The same quality in Gurgaon Sector 65 costs ₹2,00,000/sq.yd. With RRTS making Dharuhera 40 minutes from Delhi, that gap is closing fast.
            </p>
            
            <a href="#" className="text-decoration-none fw-medium d-inline-flex align-items-center" style={{ color: 'var(--theme-primary)', fontSize: '0.95rem' }}>
              See the full infrastructure story <i className="bi bi-arrow-right ms-2"></i>
            </a>
          </div>

          {/* Right Column - Chart */}
          <div className="col-12 col-lg-6 ps-lg-5">
            <div className="d-flex flex-column gap-4 mt-4 mt-lg-0">
              {chartData.map((item, i) => (
                <div key={i}>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-medium" style={{ fontSize: '0.9rem', color: '#e8e5e1' }}>{item.label}</span>
                    <span className="fw-bold" style={{ fontSize: '0.9rem', color: '#fff' }}>{item.price}</span>
                  </div>
                  <div className="w-100 rounded-pill overflow-hidden" style={{ height: '10px', backgroundColor: 'rgba(255,255,255,0.08)' }}>
                    <div 
                      className="h-100 rounded-pill" 
                      style={{ 
                        width: `${item.percent}%`, 
                        backgroundColor: item.highlight ? 'var(--theme-primary)' : 'rgba(255,255,255,0.15)',
                        transition: 'width 1s ease-in-out'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 mb-0" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
              Source: 99acres Market Data, March 2026
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
