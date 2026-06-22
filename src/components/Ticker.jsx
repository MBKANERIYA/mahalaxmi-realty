export default function Ticker() {
  const items = [
    "250% Growth Since 2019",
    "750+ Deals Closed",
    "RERA Registered • PKLAGENT-3737-2024",
    "20+ Years in Dharuhera",
    "₹15L Starting Price",
    "M2K County • Bestech City • OKAS Enclave"
  ];

  // We render the list twice to create a seamless infinite scrolling effect
  const renderItems = () => items.map((item, index) => (
    <span key={index} className="fw-bold d-inline-flex align-items-center" style={{ fontSize: '0.95rem', padding: '0 2.5rem' }}>
      {item}
      <span style={{ margin: '0 -2.5rem 0 2.5rem', opacity: 0.5, fontSize: '1.2rem' }}>•</span>
    </span>
  ));

  return (
    <>
      <style>
        {`
          @keyframes scrollTicker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .ticker-container {
            overflow: hidden;
            background-color: #c47c50;
            color: white;
            white-space: nowrap;
            padding: 16px 0;
            width: 100%;
            display: flex;
          }
          .ticker-track {
            display: flex;
            width: max-content;
            animation: scrollTicker 40s linear infinite;
          }
          .ticker-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="ticker-container shadow-sm">
        <div className="ticker-track">
          {renderItems()}
          {renderItems()}
        </div>
      </div>
    </>
  )
}
