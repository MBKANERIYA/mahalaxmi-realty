export default function Guides() {
  const items = [
    { title: "Price Guide", subtitle: "Society-wise rates" },
    { title: "Society Reviews", subtitle: "Honest pros & cons" },
    { title: "Buying Guide", subtitle: "10-step process" },
    { title: "Infrastructure", subtitle: "RRTS, DMIC, Expressway" }
  ];

  return (
    <div style={{ backgroundColor: 'var(--theme-surface)' }}>
      <section className="container py-5">
        <div className="row g-4">
        {items.map((item, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-3">
            <div className="pb-3 border-bottom" style={{ borderColor: 'rgba(193, 154, 107, 0.2) !important' }}>
              <h6 className="fw-bold mb-1" style={{ color: 'var(--theme-text-dark)', fontSize: '1.05rem' }}>{item.title}</h6>
              <p className="text-secondary small mb-0">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}
