import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Prices() {
  const societyRates = [
    { society: 'Bestech City', sector: 'Sec 6', rate: '₹50K-85K', rera: 'Not registered (pre-RERA)', risk: 'Low', riskColor: 'success', bestFor: 'Premium investors' },
    { society: 'M2K County', sector: 'Sec 5', rate: '₹55K-70K', rera: 'YES', risk: 'Low', riskColor: 'success', bestFor: 'Families / mid-budget' },
    { society: 'OKAS Enclave', sector: 'Sec 7A', rate: '₹63K-80K', rera: 'YES (complete)', risk: 'Low', riskColor: 'success', bestFor: 'First-time buyers / DDJAY' },
    { society: 'Spring Woods', sector: 'Sec 22', rate: '₹55K-65K', rera: 'YES', risk: 'Low', riskColor: 'success', bestFor: 'Budget + RERA safety' },
    { society: 'Dwarkadhish City', sector: 'Sec 23', rate: '₹35K-62.5K', rera: 'RERA 325/2017', risk: 'Medium', riskColor: 'warning', bestFor: 'Budget gated community' },
    { society: 'Parsvnath City', sector: 'Sec 1', rate: '₹24K-35K', rera: 'Not registered', risk: 'Very High', riskColor: 'danger', bestFor: 'Value picks only' },
    { society: 'MGH Anandam', sector: 'Sec 19/24', rate: '₹24K-30K', rera: 'RERA 49/2017', risk: 'Low', riskColor: 'success', bestFor: 'Budget self-use' },
  ];

  const hudaRates = [
    { sector: 'Sector 3', rate: '₹26K-40K', appreciation: '~200%', type: 'Government' },
    { sector: 'Sector 4/4A', rate: '₹35K-55K', appreciation: '~220%', type: 'Government' },
    { sector: 'Sector 5', rate: '₹45K-65K', appreciation: '~240%', type: 'Government' },
    { sector: 'Sector 6', rate: '₹56K-76K', appreciation: '~250%', type: 'Government' },
    { sector: 'Sector 7/7A', rate: '₹28K-68K', appreciation: '~283%', type: 'Government' },
  ];

  return (
    <div style={{ backgroundColor: 'var(--theme-bg)', minHeight: '100vh' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="container py-5 fade-up" style={{ backgroundColor: '#faf9f7' }}>
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb mb-0 small fw-medium" style={{ fontSize: '0.85rem' }}>
            <li className="breadcrumb-item"><a href="#/" className="text-decoration-none" style={{ color: 'var(--theme-primary)' }}>Home</a></li>
            <li className="breadcrumb-item text-secondary active" aria-current="page">Price Guide</li>
          </ol>
        </nav>

        <div className="mb-5">
          <span className="fw-bold text-uppercase d-block mb-2" style={{ color: 'var(--theme-primary)', fontSize: '0.75rem', letterSpacing: '1px' }}>Updated March 2026</span>
          <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>
            Dharuhera Property <span style={{ color: 'var(--theme-primary)' }}>Rates</span>
          </h1>
          <p className="text-secondary" style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '800px' }}>
            Society-wise rates, HUDA sectors, and market comparison. Data from 99acres, SquareYards, government portals, and 750+ transactions by Mahalaxmi Realty.
          </p>
        </div>

        <div className="d-flex flex-wrap gap-4 mb-3">
          <div className="card border-0 rounded-3 px-4 py-3 bg-white" style={{ border: '1px solid rgba(0,0,0,0.08) !important', minWidth: '200px' }}>
            <span className="small text-secondary mb-1 d-block" style={{ fontSize: '0.8rem' }}>Premium Societies</span>
            <h5 className="fw-bold mb-0 text-dark">₹50K-85K/sq.yd</h5>
          </div>
          <div className="card border-0 rounded-3 px-4 py-3 bg-white" style={{ border: '1px solid rgba(0,0,0,0.08) !important', minWidth: '200px' }}>
            <span className="small text-secondary mb-1 d-block" style={{ fontSize: '0.8rem' }}>HUDA Sectors</span>
            <h5 className="fw-bold mb-0 text-dark">₹26K-76K/sq.yd</h5>
          </div>
          <div className="card border-0 rounded-3 px-4 py-3 bg-white" style={{ border: '1px solid rgba(0,0,0,0.08) !important', minWidth: '200px' }}>
            <span className="small text-secondary mb-1 d-block" style={{ fontSize: '0.8rem' }}>6-Year Growth</span>
            <h5 className="fw-bold mb-0" style={{ color: '#b07d43' }}>250% (18-20% CAGR)</h5>
          </div>
        </div>
      </section>

      {/* Society-Wise Rate Table */}
      <section className="container py-5 mt-4 fade-up delay-100">
        <h2 className="display-6 fw-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>
          Society-Wise <span style={{ color: 'var(--theme-primary)' }}>Rate Table</span>
        </h2>
        <p className="text-secondary mb-5" style={{ maxWidth: '800px' }}>
          Current per sq.yd rates across all major residential societies in Dharuhera. Risk assessment based on RERA status, developer track record, and legal standing.
        </p>

        <div className="table-responsive bg-white rounded-3 overflow-hidden shadow-sm border mb-3" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
          <table className="table table-hover mb-0 align-middle">
            <thead style={{ backgroundColor: '#2a2622', color: '#ffffff' }}>
              <tr>
                <th className="py-3 px-4 fw-medium border-0" style={{ fontSize: '0.9rem' }}>Society</th>
                <th className="py-3 px-4 fw-medium border-0" style={{ fontSize: '0.9rem' }}>Sector</th>
                <th className="py-3 px-4 fw-medium border-0" style={{ fontSize: '0.9rem' }}>Rate/sq.yd</th>
                <th className="py-3 px-4 fw-medium border-0" style={{ fontSize: '0.9rem' }}>RERA</th>
                <th className="py-3 px-4 fw-medium border-0" style={{ fontSize: '0.9rem' }}>Risk</th>
                <th className="py-3 px-4 fw-medium border-0" style={{ fontSize: '0.9rem' }}>Best For</th>
              </tr>
            </thead>
            <tbody>
              {societyRates.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td className="py-3 px-4 fw-bold text-dark" style={{ fontSize: '0.9rem' }}>{row.society}</td>
                  <td className="py-3 px-4 text-secondary" style={{ fontSize: '0.9rem' }}>{row.sector}</td>
                  <td className="py-3 px-4 fw-bold text-dark" style={{ fontSize: '0.9rem' }}>{row.rate}</td>
                  <td className="py-3 px-4 text-secondary small">{row.rera}</td>
                  <td className="py-3 px-4">
                    <span className={`badge bg-${row.riskColor} bg-opacity-10 text-${row.riskColor} rounded-pill px-2 py-1 fw-medium border border-${row.riskColor}`} style={{ fontSize: '0.7rem' }}>
                      <i className={`bi ${row.riskColor === 'success' ? 'bi-shield-check' : row.riskColor === 'warning' ? 'bi-exclamation-triangle' : 'bi-shield-x'} me-1`}></i> {row.risk}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-secondary small">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="small text-secondary opacity-75" style={{ fontSize: '0.75rem' }}>
          Rates as of March 2026. Actual transaction prices may vary 10-15% based on plot location, size, and facing.
        </p>
      </section>

      {/* HUDA Sector Rates */}
      <section className="container py-5 mb-5 fade-up delay-200">
        <h2 className="display-6 fw-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>
          HUDA Sector <span style={{ color: 'var(--theme-primary)' }}>Rates</span>
        </h2>
        <p className="text-secondary mb-5" style={{ maxWidth: '800px' }}>
          Government-developed HUDA (HSVP) sectors offer zero developer risk with freehold titles. No builder insolvency concerns.
        </p>

        <div className="table-responsive bg-white rounded-3 overflow-hidden shadow-sm border mb-3" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
          <table className="table table-hover mb-0 align-middle">
            <thead style={{ backgroundColor: '#2a2622', color: '#ffffff' }}>
              <tr>
                <th className="py-3 px-4 fw-medium border-0" style={{ fontSize: '0.9rem' }}>Sector</th>
                <th className="py-3 px-4 fw-medium border-0" style={{ fontSize: '0.9rem' }}>Rate/sq.yd</th>
                <th className="py-3 px-4 fw-medium border-0" style={{ fontSize: '0.9rem' }}>5yr Appreciation</th>
                <th className="py-3 px-4 fw-medium border-0" style={{ fontSize: '0.9rem' }}>Type</th>
              </tr>
            </thead>
            <tbody>
              {hudaRates.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td className="py-3 px-4 fw-bold text-dark" style={{ fontSize: '0.9rem' }}>{row.sector}</td>
                  <td className="py-3 px-4 fw-bold text-dark" style={{ fontSize: '0.9rem' }}>{row.rate}</td>
                  <td className="py-3 px-4 text-secondary small">{row.appreciation}</td>
                  <td className="py-3 px-4 text-secondary small">{row.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* Find Your Budget Range */}
      <section className="container py-5 mt-4 fade-up delay-200">
        <h2 className="display-6 fw-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>
          Find Your <span style={{ color: 'var(--theme-primary)' }}>Budget Range</span>
        </h2>
        <p className="text-secondary mb-5" style={{ maxWidth: '800px' }}>
          Dharuhera has options from Rs 12 lakh to Rs 2+ crore. Here is where each budget bracket gets you the best value.
        </p>

        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 border-0 rounded-4 p-4 shadow-sm" style={{ backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.08) !important', minHeight: '120px' }}>
              <span className="badge rounded-pill fw-bold mb-3" style={{ backgroundColor: '#fff4eb', color: '#b07d43', width: 'fit-content', padding: '0.5rem 1rem' }}>Budget</span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 border-0 rounded-4 p-4 shadow-sm" style={{ backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.08) !important', minHeight: '120px' }}>
              <span className="badge rounded-pill fw-bold mb-3" style={{ backgroundColor: '#fff4eb', color: '#b07d43', width: 'fit-content', padding: '0.5rem 1rem' }}>Mid-Range</span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 border-0 rounded-4 p-4 shadow-sm" style={{ backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.08) !important', minHeight: '120px' }}>
              <span className="badge rounded-pill fw-bold mb-3" style={{ backgroundColor: '#fff4eb', color: '#b07d43', width: 'fit-content', padding: '0.5rem 1rem' }}>Premium</span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 border-0 rounded-4 p-4 shadow-sm" style={{ backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.08) !important', minHeight: '120px' }}>
              <span className="badge rounded-pill fw-bold mb-3" style={{ backgroundColor: '#fff4eb', color: '#b07d43', width: 'fit-content', padding: '0.5rem 1rem' }}>Ultra Premium</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dharuhera vs Competitors */}
      <section className="container py-5 mt-4 fade-up delay-300">
        <h2 className="display-6 fw-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>
          Dharuhera vs <span style={{ color: 'var(--theme-primary)' }}>Competitors</span>
        </h2>
        <p className="text-secondary mb-5" style={{ maxWidth: '800px' }}>
          How does Dharuhera stack up against Bhiwadi, Rewari, and Gurgaon? The numbers speak for themselves.
        </p>

        <div className="table-responsive bg-white rounded-3 overflow-hidden shadow-sm border mb-4" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
          <table className="table mb-0 align-middle">
            <thead style={{ backgroundColor: '#2a2622', color: '#ffffff' }}>
              <tr>
                <th className="py-3 px-4 fw-medium border-0" style={{ fontSize: '0.9rem' }}>Parameter</th>
                <th className="py-3 px-4 fw-bold border-0" style={{ fontSize: '0.9rem', backgroundColor: '#b07d43' }}>Dharuhera</th>
                <th className="py-3 px-4 fw-medium border-0" style={{ fontSize: '0.9rem' }}>Bhiwadi</th>
                <th className="py-3 px-4 fw-medium border-0" style={{ fontSize: '0.9rem' }}>Rewari</th>
                <th className="py-3 px-4 fw-medium border-0" style={{ fontSize: '0.9rem' }}>Gurgaon (Sec 80)</th>
                <th className="py-3 px-4 fw-medium border-0" style={{ fontSize: '0.9rem' }}>Gurgaon Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <td className="py-3 px-4 fw-bold text-dark" style={{ fontSize: '0.9rem' }}>Avg Rate/sq.yd</td>
                <td className="py-3 px-4 fw-bold" style={{ fontSize: '0.9rem', backgroundColor: '#fffaf5', color: '#b07d43' }}>Rs 42K-70K</td>
                <td className="py-3 px-4 text-secondary small">Rs 15K-30K</td>
                <td className="py-3 px-4 text-secondary small">Rs 40K-55K</td>
                <td className="py-3 px-4 text-secondary small">Rs 1.2L-1.8L</td>
                <td className="py-3 px-4 text-secondary small">Rs 2L-3.5L</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <td className="py-3 px-4 fw-bold text-dark" style={{ fontSize: '0.9rem' }}>Stamp Duty</td>
                <td className="py-3 px-4 fw-bold" style={{ fontSize: '0.9rem', backgroundColor: '#fffaf5', color: '#b07d43' }}>7% (M) / 5% (F)</td>
                <td className="py-3 px-4 text-secondary small">6% (M) / 5% (F)</td>
                <td className="py-3 px-4 text-secondary small">7% (M) / 5% (F)</td>
                <td className="py-3 px-4 text-secondary small">-</td>
                <td className="py-3 px-4 text-secondary small">7% (M) / 5% (F)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <td className="py-3 px-4 fw-bold text-dark" style={{ fontSize: '0.9rem' }}>RRTS Station</td>
                <td className="py-3 px-4 fw-bold" style={{ fontSize: '0.9rem', backgroundColor: '#fffaf5', color: '#b07d43' }}>Confirmed (Phase 1)</td>
                <td className="py-3 px-4 text-secondary small">Not planned</td>
                <td className="py-3 px-4 text-secondary small">Phase 2</td>
                <td className="py-3 px-4 text-secondary small">-</td>
                <td className="py-3 px-4 text-secondary small">Multiple</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <td className="py-3 px-4 fw-bold text-dark" style={{ fontSize: '0.9rem' }}>5yr Appreciation</td>
                <td className="py-3 px-4 fw-bold" style={{ fontSize: '0.9rem', backgroundColor: '#fffaf5', color: '#b07d43' }}>~250%</td>
                <td className="py-3 px-4 text-secondary small">Moderate</td>
                <td className="py-3 px-4 text-secondary small">Good</td>
                <td className="py-3 px-4 text-secondary small">-</td>
                <td className="py-3 px-4 text-secondary small">Moderate</td>
              </tr>
              <tr>
                <td className="py-3 px-4 fw-bold text-dark" style={{ fontSize: '0.9rem' }}>Delhi-Mumbai Expwy</td>
                <td className="py-3 px-4 fw-bold" style={{ fontSize: '0.9rem', backgroundColor: '#fffaf5', color: '#b07d43' }}>Direct exit</td>
                <td className="py-3 px-4 text-secondary small">Near</td>
                <td className="py-3 px-4 text-secondary small">Not confirmed</td>
                <td className="py-3 px-4 text-secondary small">-</td>
                <td className="py-3 px-4 text-secondary small">Near</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card bg-white border-0 rounded-3 p-4 shadow-sm" style={{ border: '1px solid rgba(193, 154, 107, 0.3) !important' }}>
          <p className="mb-0 small" style={{ lineHeight: '1.6' }}>
            <span className="fw-bold text-dark">Key Insight:</span> Dharuhera is now at par with Gurgaon mid-tier (Sectors 80/95) but 3-4x cheaper than Gurgaon premium (Sector 65). This price gap IS the investment thesis -- with RRTS making Dharuhera a 30-minute suburb of Gurgaon, expect convergence.
          </p>
        </div>
      </section>

      {/* Circle Rate Intelligence */}
      <section className="py-5 text-center mt-5" style={{ backgroundColor: '#b07d43', color: '#ffffff' }}>
        <div className="container py-5 fade-up delay-400">
          <h2 className="display-6 fw-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: '#2a2622' }}>Circle Rate Intelligence</h2>
          <p className="mb-4" style={{ fontSize: '1.2rem', opacity: '0.9' }}>
            Government values HUDA Sec 6 at Rs 27,885/sq.yd. Market pays Rs 55,000-76,000.
          </p>
          <h1 className="display-4 fw-bold text-white mb-4">
            That 100%+ gap = strong organic demand.
          </h1>
          <p className="mx-auto small mb-0" style={{ maxWidth: '700px', lineHeight: '1.6', opacity: '0.85', fontSize: '0.95rem' }}>
            When market rates are 2x+ above government circle rates, it signals genuine demand -- not artificial speculation. The 2025 circle rate hike of 10-30% confirms the government is catching up to market reality.
          </p>
        </div>
      </section>
      {/* Why Dharuhera, Why Now */}
      <section className="container py-5 mt-4 fade-up delay-200">
        <h2 className="display-6 fw-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>
          Why Dharuhera, <span style={{ color: 'var(--theme-primary)' }}>Why Now</span>
        </h2>
        <p className="text-secondary mb-5" style={{ maxWidth: '800px' }}>
          Five converging catalysts are about to reshape Dharuhera's value proposition permanently.
        </p>

        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border-0 rounded-4 p-4 shadow-sm" style={{ backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.05) !important' }}>
              <div className="rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: '48px', height: '48px', backgroundColor: '#fffaf5', color: '#b07d43' }}>
                <i className="bi bi-graph-up-arrow fs-5"></i>
              </div>
              <h5 className="fw-bold mb-3" style={{ color: 'var(--theme-text-dark)' }}>RRTS Rapid Rail</h5>
              <p className="small text-secondary mb-0" style={{ lineHeight: '1.6' }}>
                Delhi to Alwar. Construction starts August 2026. Dharuhera gets a dedicated station + 132-acre maintenance depot. Delhi-Meerut RRTS precedent = 25-40% property appreciation near stations.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border-0 rounded-4 p-4 shadow-sm" style={{ backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.05) !important' }}>
              <div className="rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: '48px', height: '48px', backgroundColor: '#fffaf5', color: '#b07d43' }}>
                <i className="bi bi-graph-up-arrow fs-5"></i>
              </div>
              <h5 className="fw-bold mb-3" style={{ color: 'var(--theme-text-dark)' }}>DMIC Industrial Corridor</h5>
              <p className="small text-secondary mb-0" style={{ lineHeight: '1.6' }}>
                16 lakh jobs projected by 2040. MBIR Manesar is the first DMIC investment region. BDI Dharuhera already has 146 plots across 424 hectares.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border-0 rounded-4 p-4 shadow-sm" style={{ backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.05) !important' }}>
              <div className="rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: '48px', height: '48px', backgroundColor: '#fffaf5', color: '#b07d43' }}>
                <i className="bi bi-graph-up-arrow fs-5"></i>
              </div>
              <h5 className="fw-bold mb-3" style={{ color: 'var(--theme-text-dark)' }}>Delhi-Mumbai Expressway</h5>
              <p className="small text-secondary mb-0" style={{ lineHeight: '1.6' }}>
                India's longest expressway (1,380 km, 8-lane, 120km/h). Dharuhera has a direct entry/exit point -- not all towns get this.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card h-100 border-0 rounded-4 p-4 shadow-sm" style={{ backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.05) !important' }}>
              <div className="rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: '48px', height: '48px', backgroundColor: '#fffaf5', color: '#b07d43' }}>
                <i className="bi bi-graph-up-arrow fs-5"></i>
              </div>
              <h5 className="fw-bold mb-3" style={{ color: 'var(--theme-text-dark)' }}>Gurgaon Price Gap</h5>
              <p className="small text-secondary mb-0" style={{ lineHeight: '1.6' }}>
                Dharuhera premium: Rs 70-85K/sq.yd. Gurgaon premium (Sec 65): Rs 1.7-2.2L/sq.yd. That is a 3-4x gap that will narrow as RRTS connects both cities in 30 minutes.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card h-100 border-0 rounded-4 p-4 shadow-sm" style={{ backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.05) !important' }}>
              <div className="rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: '48px', height: '48px', backgroundColor: '#fffaf5', color: '#b07d43' }}>
                <i className="bi bi-graph-up-arrow fs-5"></i>
              </div>
              <h5 className="fw-bold mb-3" style={{ color: 'var(--theme-text-dark)' }}>250% in 6 Years</h5>
              <p className="small text-secondary mb-0" style={{ lineHeight: '1.6' }}>
                Rs 20,000/sq.yd (2019) to Rs 55,000-70,000/sq.yd (2025). 18-20% CAGR. A Rs 40L investment in 2019 is now worth Rs 1.1-1.4 Crore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Flags */}
      <section className="py-5 mt-5 fade-up delay-300" style={{ backgroundColor: '#fff5f5' }}>
        <div className="container py-4">
          <h2 className="display-6 fw-bold mb-5" style={{ fontFamily: 'var(--font-heading)', color: '#2a2622' }}>
            Risk Flags -- What to Avoid
          </h2>

          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="card h-100 bg-white rounded-4 p-4 shadow-sm" style={{ border: '1px solid rgba(220, 53, 69, 0.2)' }}>
                <h5 className="fw-bold text-danger mb-3"><i className="bi bi-exclamation-triangle me-2"></i> AMD City</h5>
                <p className="small text-secondary mb-0" style={{ lineHeight: '1.6' }}>
                  Active ED (Enforcement Directorate) investigation. Banks are refusing loans for this project. Phase 2 is frozen. Avoid until legal clarity emerges.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card h-100 bg-white rounded-4 p-4 shadow-sm" style={{ border: '1px solid rgba(220, 53, 69, 0.2)' }}>
                <h5 className="fw-bold text-danger mb-3"><i className="bi bi-exclamation-triangle me-2"></i> Parsvnath City</h5>
                <p className="small text-secondary mb-0" style={{ lineHeight: '1.6' }}>
                  Developer is insolvent. NCLT (Insolvency Tribunal) proceedings active. Only consider resale plots with clear title -- not new allotments from the developer.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card h-100 bg-white rounded-4 p-4 shadow-sm" style={{ border: '1px solid rgba(220, 53, 69, 0.2)' }}>
                <h5 className="fw-bold text-danger mb-3"><i className="bi bi-exclamation-triangle me-2"></i> Sector 24 Oversupply</h5>
                <p className="small text-secondary mb-0" style={{ lineHeight: '1.6' }}>
                  30+ active listings in Sector 24 indicate oversupply. Appreciation may be muted in the short term. Good for end-users; cautious for investors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-5 mt-4 fade-up delay-400">
        <h2 className="display-6 fw-bold mb-5" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)' }}>
          Frequently Asked <span style={{ color: 'var(--theme-primary)' }}>Questions</span>
        </h2>

        <div className="d-flex flex-column gap-3">
          <div className="card border-0 rounded-4 p-4 shadow-sm bg-white" style={{ border: '1px solid rgba(0,0,0,0.05) !important' }}>
            <h6 className="fw-bold mb-3" style={{ color: 'var(--theme-text-dark)', fontSize: '1rem' }}>What is the current average plot rate in Dharuhera (2026)?</h6>
            <p className="small text-secondary mb-0" style={{ lineHeight: '1.7' }}>
              As of March 2026, premium society plots in Dharuhera range from Rs 50,000 to Rs 85,000 per sq.yd (Bestech City, M2K County). Budget/DDJAY plots start from Rs 24,000 per sq.yd (MGH Anandam, Parsvnath City resale). HUDA sector plots range from Rs 26,000 to Rs 76,000 per sq.yd depending on the sector. The overall market average for transacted plots is around Rs 42,000-70,000 per sq.yd.
            </p>
          </div>
          
          <div className="card border-0 rounded-4 p-4 shadow-sm bg-white" style={{ border: '1px solid rgba(0,0,0,0.05) !important' }}>
            <h6 className="fw-bold mb-3" style={{ color: 'var(--theme-text-dark)', fontSize: '1rem' }}>How much have Dharuhera property prices appreciated in the last 5 years?</h6>
            <p className="small text-secondary mb-0" style={{ lineHeight: '1.7' }}>
              Dharuhera residential plot prices have surged approximately 250% in 6 years -- from Rs 20,000/sq.yd in 2019 to Rs 55,000-70,000/sq.yd in 2025. This translates to an 18-20% CAGR (Compound Annual Growth Rate). HUDA Sector 7/7A has shown the highest appreciation at 283% over 5 years.
            </p>
          </div>

          <div className="card border-0 rounded-4 p-4 shadow-sm bg-white" style={{ border: '1px solid rgba(0,0,0,0.05) !important' }}>
            <h6 className="fw-bold mb-3" style={{ color: 'var(--theme-text-dark)', fontSize: '1rem' }}>Is Dharuhera cheaper than Gurgaon for property investment?</h6>
            <p className="small text-secondary mb-0" style={{ lineHeight: '1.7' }}>
              Yes, significantly. Dharuhera premium plots (Rs 70,000-85,000/sq.yd) are 2.5 to 3 times cheaper than premium Gurgaon sectors like Sector 65 (Rs 1,70,000-2,10,000/sq.yd). Even mid-tier Gurgaon (Sector 80/95) at Rs 90,000-98,000/sq.yd is at par with Dharuhera premium. With RRTS making Dharuhera a 30-minute suburb of Gurgaon by 2031, this price gap is expected to narrow.
            </p>
          </div>

          <div className="card border-0 rounded-4 p-4 shadow-sm bg-white" style={{ border: '1px solid rgba(0,0,0,0.05) !important' }}>
            <h6 className="fw-bold mb-3" style={{ color: 'var(--theme-text-dark)', fontSize: '1rem' }}>Which society in Dharuhera is best for investment in 2026?</h6>
            <p className="small text-secondary mb-0" style={{ lineHeight: '1.7' }}>
              For investors: HUDA Sector 7/7A (283% appreciation in 5 years, active new projects) or M2K County (RERA registered, +54% in 3 years, integrated township). For self-use: OKAS Enclave (RERA registered, DDJAY benefits) or HUDA Sector 6 (most developed infrastructure). Avoid AMD City (ED investigation) and Parsvnath City (developer insolvent) unless you are an experienced value-buyer.
            </p>
          </div>

          <div className="card border-0 rounded-4 p-4 shadow-sm bg-white" style={{ border: '1px solid rgba(0,0,0,0.05) !important' }}>
            <h6 className="fw-bold mb-3" style={{ color: 'var(--theme-text-dark)', fontSize: '1rem' }}>What is the stamp duty on property purchase in Dharuhera?</h6>
            <p className="small text-secondary mb-0" style={{ lineHeight: '1.7' }}>
              Stamp duty in Dharuhera (Haryana) is 7% for male buyers and 5% for female buyers. Joint registration (male + female) attracts 6%. On a Rs 50 lakh plot, registering in a female family member's name saves Rs 1 lakh in stamp duty. Registration fee is approximately Rs 25,000 (0.5% of property value, capped). Always verify current rates at the Sub-Registrar office.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-center text-white fade-up delay-500" style={{ backgroundColor: 'var(--theme-dark)' }}>
        <div className="container py-5">
          <h2 className="display-6 fw-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Get Exact Pricing for Any Property</h2>
          <p className="mx-auto mb-5 opacity-75" style={{ maxWidth: '700px', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Listed rates are indicative. Actual prices depend on plot number, facing, size, and negotiation. Contact Mahalaxmi Realty for the real number.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="https://wa.me/919982247314" target="_blank" rel="noopener noreferrer" className="btn fw-bold px-4 py-3 rounded-2 shadow-sm text-white" style={{ backgroundColor: '#25D366' }}>
              <i className="bi bi-whatsapp me-2"></i> WhatsApp Us
            </a>
            <a href="tel:+919982247314" className="btn bg-white text-dark fw-bold px-4 py-3 rounded-2 shadow-sm">
              <i className="bi bi-telephone me-2"></i> Call: +91 99822 47314
            </a>
          </div>
          <p className="small opacity-50 mt-4 mb-0" style={{ fontSize: '0.8rem' }}>20+ years experience · 750+ deals · RERA Registered</p>
        </div>
      </section>

      {/* Mini Footer Links */}
      <section className="py-4 text-center bg-white border-bottom" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center gap-3 gap-md-4 small fw-medium">
            <a href="#" className="text-decoration-none" style={{ color: 'var(--theme-primary)' }}>Dharuhera Infrastructure Tracker</a>
            <span className="text-secondary opacity-25 d-none d-md-inline">|</span>
            <a href="#/properties" className="text-decoration-none" style={{ color: 'var(--theme-primary)' }}>View All Properties</a>
            <span className="text-secondary opacity-25 d-none d-md-inline">|</span>
            <a href="#/contact" className="text-decoration-none" style={{ color: 'var(--theme-primary)' }}>Contact Us</a>
            <span className="text-secondary opacity-25 d-none d-md-inline">|</span>
            <a href="#/about" className="text-decoration-none" style={{ color: 'var(--theme-primary)' }}>About Mahalaxmi Realty</a>
          </div>
        </div>
      </section>

      {/* Mini WhatsApp Strip */}
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
              About Us <i className="bi bi-arrow-right ms-1"></i>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
