export default function FAQ() {
  const faqs = [
    {
      question: "Is Dharuhera safe to invest in?",
      answer: "250% growth in 6 years, backed by data"
    },
    {
      question: "Which society should I choose?",
      answer: "7 societies reviewed with honest pros & cons"
    },
    {
      question: "What does it really cost?",
      answer: "Society-wise rates, stamp duty, hidden costs"
    },
    {
      question: "How do I avoid fraud?",
      answer: "7-step verification + real fraud case studies"
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--theme-surface)' }}>
      <section className="container py-5">
        {/* Header */}
      <div className="d-flex align-items-center mb-4">
        <span className="text-uppercase fw-bold pe-3" style={{ color: 'var(--theme-primary)', fontSize: '0.85rem', letterSpacing: '1px', whiteSpace: 'nowrap' }}>Common Questions</span>
        <div className="flex-grow-1" style={{ height: '1px', backgroundColor: 'rgba(193, 154, 107, 0.4)' }}></div>
      </div>
      
      <h2 className="display-4 fw-bold mb-5 pb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--theme-text-dark)', maxWidth: '600px', lineHeight: '1.2' }}>
        What every buyer asks before investing in Dharuhera
      </h2>

      {/* FAQ List */}
      <div className="d-flex flex-column">
        {faqs.map((faq, index) => (
          <div key={index} className="d-flex justify-content-between align-items-center py-4 border-bottom" style={{ borderBottomColor: 'rgba(0,0,0,0.08)', cursor: 'pointer' }}>
            <div>
              <h5 className="fw-bold mb-2" style={{ color: 'var(--theme-text-dark)', fontSize: '1.2rem' }}>{faq.question}</h5>
              <p className="text-secondary small mb-0" style={{ fontSize: '0.95rem' }}>{faq.answer}</p>
            </div>
            <div>
              <i className="bi bi-chevron-right text-secondary fs-5"></i>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}
