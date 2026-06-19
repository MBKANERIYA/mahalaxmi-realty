require('dotenv').config();
const mongoose = require('mongoose');
const Blog = require('./models/Blog');

const MONGO_URI = process.env.MONGO_URI;

const blogPosts = [
  {
    title: "Akshaya Tritiya 2026 (April 18) — Best Dharuhera Plots Under ₹60L",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1600&q=80",
    excerpt: "Akshaya Tritiya 2026 falls on Tuesday, April 18. The most auspicious day for property purchase. Find plot picks in Dharuhera for every budget, Vastu tips, and current festive offers.",
    author: "Mahalaxmi Realty",
    date: "28 March 2026",
    category: "Investment Guide",
    readTime: "6 min read",
    content: `
      <p class="lead" style="font-size: 1.25rem; line-height: 1.8; color: #475569;">Akshaya Tritiya, falling on Tuesday, April 18, 2026, is traditionally considered one of the most auspicious days in the Hindu calendar to buy property. For investors looking at Dharuhera, this festive window brings not only good fortune but also exclusive developer discounts and waived registration fees.</p>
      
      <h3 class="fw-bold mt-5 mb-4" style="font-family: var(--font-heading); color: var(--theme-text-dark);">Why Invest in Dharuhera This Akshaya Tritiya?</h3>
      <p style="line-height: 1.8; color: #475569;">With the rapid progress of the RRTS (Regional Rapid Transit System) and the operational Delhi-Mumbai Expressway, Dharuhera has cemented its position as the premier logistics and industrial hub of North India. However, the residential sector is where the highest ROI currently resides.</p>
      
      <blockquote class="p-4 my-5 bg-white shadow-sm rounded-4 border-start border-4 border-warning" style="font-style: italic; font-size: 1.15rem; color: var(--theme-text-dark);">
        "The price gap between Gurgaon's Sector 80 and Dharuhera is currently 3x, despite both areas sharing similar connectivity timelines via the upcoming Namo Bharat corridor. This arbitrage is closing fast."
      </blockquote>

      <h3 class="fw-bold mt-5 mb-4" style="font-family: var(--font-heading); color: var(--theme-text-dark);">Top 3 Plot Picks Under ₹60 Lakhs</h3>
      
      <div class="card border-0 bg-white shadow-sm rounded-4 p-4 mb-4" style="border: 1px solid rgba(0,0,0,0.05) !important;">
        <h5 class="fw-bold" style="color: var(--theme-primary);">1. M2K County (Sector 5)</h5>
        <p class="mb-2"><strong>Price Range:</strong> ₹55,000 - ₹60,000 / sq.yd</p>
        <p class="mb-0" style="color: #475569; line-height: 1.6;">A fully developed 100-acre township with RERA registration. Best for end-users seeking immediate construction. The internal roads are wide, and electricity infrastructure is fully underground.</p>
      </div>

      <div class="card border-0 bg-white shadow-sm rounded-4 p-4 mb-4" style="border: 1px solid rgba(0,0,0,0.05) !important;">
        <h5 class="fw-bold" style="color: var(--theme-primary);">2. Spring Woods City (Sector 22)</h5>
        <p class="mb-2"><strong>Price Range:</strong> ₹55,000 - ₹65,000 / sq.yd</p>
        <p class="mb-0" style="color: #475569; line-height: 1.6;">A cleaner, smaller DDJAY project. Perfect for budget buyers who prioritize RERA safety and legal compliance above expansive luxury amenities.</p>
      </div>

      <div class="card border-0 bg-white shadow-sm rounded-4 p-4 mb-5" style="border: 1px solid rgba(0,0,0,0.05) !important;">
        <h5 class="fw-bold" style="color: var(--theme-primary);">3. HUDA Sector 4/4A</h5>
        <p class="mb-2"><strong>Price Range:</strong> ₹35,000 - ₹55,000 / sq.yd</p>
        <p class="mb-0" style="color: #475569; line-height: 1.6;">Government-developed sectors offering absolute zero builder insolvency risk. While appreciation is slower compared to private townships, the capital preservation is unmatched.</p>
      </div>

      <h3 class="fw-bold mt-5 mb-3" style="font-family: var(--font-heading); color: var(--theme-text-dark);">Vastu Considerations for Plot Selection</h3>
      <p style="line-height: 1.8; color: #475569;">When purchasing on Akshaya Tritiya, Vastu compliance is often a priority for our clients. East and North-facing plots in Bestech and M2K County usually command a 5-10% premium. We highly recommend verifying the plot dimensions against the official layout plan to ensure true magnetic alignment.</p>
    `
  },
  {
    title: "DDJAY Plots Dharuhera — ₹14 Lakh Entry, RERA Projects & ROI",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    excerpt: "Complete guide to DDJAY (Deen Dayal Jan Awas Yojana) plots in Dharuhera. Available projects: OKAS Enclave, Spring Woods City, Shyam Mitra... What are the pros, cons, and investment ROI?",
    author: "Mahalaxmi Realty",
    date: "20 March 2026",
    category: "Market Insights",
    readTime: "5 min read",
    content: "<p>Content coming soon...</p>"
  },
  {
    title: "Dharuhera Stamp Duty 2026 — Save ₹1 Lakh+ with Female Registration",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    excerpt: "Complete guide to stamp duty and property registration in Dharuhera, Haryana (2026). Males: 7%, Female: 5%. Slab-based registration fees up to ₹50,000. How to save money on your plot registry.",
    author: "Mahalaxmi Realty",
    date: "17 March 2026",
    category: "Legal & Taxation",
    readTime: "4 min read",
    content: "<p>Content coming soon...</p>"
  },
  {
    title: "HUDA Plots in Dharuhera 2026 — Sector Prices, 215% Returns & Map",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    excerpt: "Complete guide to HUDA (HSVP) plots in Dharuhera. Sector by sector prices from ₹25,000 to ₹75,000 per sq.yd. Sector 7/7A and 6 highlights. Why HUDA is the safest investment in Dharuhera.",
    author: "Mahalaxmi Realty",
    date: "14 March 2026",
    category: "Investment Guide",
    readTime: "7 min read",
    content: "<p>Content coming soon...</p>"
  },
  {
    title: "RERA Registered Plots in Dharuhera — Complete Verified List (2026)",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
    excerpt: "Complete verified list of RERA registered projects in Dharuhera as of March 2026. M2K County, OKAS Enclave, Spring Woods City and more. Plus, which projects to avoid.",
    author: "Mahalaxmi Realty",
    date: "10 March 2026",
    category: "Legal & Taxation",
    readTime: "6 min read",
    content: "<p>Content coming soon...</p>"
  },
  {
    title: "DMIC Dharuhera — How the ₹8.5 Lakh Crore Corridor Transforms Real Estate",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80",
    excerpt: "How the Delhi-Mumbai Industrial Corridor (DMIC) is transforming Dharuhera real estate. MBIR zone details, BDI Dharuhera facts, 16 lakh projected jobs by 2040.",
    author: "Mahalaxmi Realty",
    date: "05 March 2026",
    category: "Infrastructure",
    readTime: "8 min read",
    content: "<p>Content coming soon...</p>"
  },
  {
    title: "How to Verify a Builder in Dharuhera — 7-Step Fraud Prevention Guide",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    excerpt: "Protect yourself from property fraud in Dharuhera. Learn about the Piyush Group Rs 500 Cr scam, KND City ED investigation, and Parsvnath insolvency. Check RERA, NCLT, and bank approvals.",
    author: "Mahalaxmi Realty",
    date: "02 March 2026",
    category: "Legal & Taxation",
    readTime: "6 min read",
    content: "<p>Content coming soon...</p>"
  },
  {
    title: "RRTS Dharuhera Station 2026 — Timeline, 16 Stations & Property Impact",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80",
    excerpt: "Complete guide to the Delhi-Alwar RRTS Namo Bharat station at Dharuhera. Construction starts August 2026, operational by November 2031. Details on the 16 stations and expected 30% price boom.",
    author: "Mahalaxmi Realty",
    date: "25 February 2026",
    category: "Infrastructure",
    readTime: "5 min read",
    content: "<p>Content coming soon...</p>"
  },
  {
    title: "Is Dharuhera a Safe Investment? 250% Growth Data + Risk Analysis",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    excerpt: "An honest, data-driven analysis of Dharuhera as a property investment destination in 2026. 250% appreciation in 5 years, RRTS and DMIC catalysts, alongside waterlogging and developer risks.",
    author: "Mahalaxmi Realty",
    date: "18 February 2026",
    category: "Analysis",
    readTime: "9 min read",
    content: "<p>Content coming soon...</p>"
  },
  {
    title: "Dharuhera vs Bhiwadi 2026 — Where Should You Invest? Data-Driven Comparison",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    excerpt: "A data-driven comparison of Dharuhera and Bhiwadi for property investment in 2026. Covering prices, RRTS impact, infrastructure, stamp duty differences, and factory pollution.",
    author: "Mahalaxmi Realty",
    date: "10 February 2026",
    category: "Comparison",
    readTime: "7 min read",
    content: "<p>Content coming soon...</p>"
  }
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Clear existing blogs
    await Blog.deleteMany({});
    console.log('Cleared existing blogs');
    
    // Insert new blogs
    await Blog.insertMany(blogPosts);
    console.log('Successfully inserted blogs!');
    
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
