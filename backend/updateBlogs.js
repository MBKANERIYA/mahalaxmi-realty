require('dotenv').config();
const mongoose = require('mongoose');
const Blog = require('./models/Blog');

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const blogs = await Blog.find();
  for (let b of blogs) {
    if (b.content === '<p>Content coming soon...</p>' || !b.content) {
      b.content = `
        <p class="lead" style="font-size: 1.25rem; line-height: 1.8; color: #475569;">${b.excerpt}</p>
        <h3 class="fw-bold mt-5 mb-4" style="font-family: var(--font-heading); color: var(--theme-text-dark);">${b.title} Overview</h3>
        <p style="line-height: 1.8; color: #475569;">This is an expanded view of the article. As Dharuhera continues to grow with the upcoming RRTS and DMIC, properties in this region are seeing unprecedented appreciation. Infrastructure developments are paving the way for massive real estate booms.</p>
        <blockquote class="p-4 my-5 bg-white shadow-sm rounded-4 border-start border-4 border-warning" style="font-style: italic; font-size: 1.15rem; color: var(--theme-text-dark);">
          "Dharuhera is rapidly becoming the most preferred investment destination for long-term wealth creation in NCR. The price arbitrage compared to Gurgaon is too significant to ignore."
        </blockquote>
        <p style="line-height: 1.8; color: #475569;">Whether you are looking for a residential plot to build your dream home or a commercial space for maximum ROI, understanding the specific sector dynamics is crucial.</p>
        <h3 class="fw-bold mt-5 mb-4" style="font-family: var(--font-heading); color: var(--theme-text-dark);">Key Takeaways</h3>
        <ul style="line-height: 1.8; color: #475569;">
          <li>Verify RERA registration before any transaction.</li>
          <li>Location near the upcoming RRTS station commands a premium.</li>
          <li>Consult with local experts who understand the nuances of Haryana property laws.</li>
        </ul>
        <p style="line-height: 1.8; color: #475569; margin-top: 2rem;">Contact Mahalaxmi Realty today for a personalized consultation regarding this opportunity. Our 20+ years of experience ensures you make the safest and most profitable investment.</p>
      `;
      await b.save();
    }
  }
  console.log('Done updating content!');
  process.exit(0);
});
