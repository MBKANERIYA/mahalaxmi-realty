# Changelog

## 2026-06-19 — Initial Setup
**What**: Created frontend and backend project structure
**Why**: To set up the initial monorepo structure for the application
**Files Changed**: `frontend/*`, `backend/`, `knowledge-base/*`
- Created `frontend` directory using Vite React template
- Created `backend` directory
- Initialized `knowledge-base` with standard templates

## 2026-06-19 — Added Welcome Page
**What**: Removed default Vite/React starter page and replaced with a basic Welcome page.
**Why**: To provide a clean slate for the new application based on user request.
**Files Changed**: `frontend/src/App.jsx`, `frontend/src/App.css`
- Updated `App.jsx` to render a welcome message
- Updated `App.css` with clean and centered styling

## 2026-06-19 — Restructured Home Page
**What**: Moved the Home page to a dedicated `pages` directory.
**Why**: To improve project organization and scalability as requested.
**Files Changed**: `frontend/src/pages/Home.jsx`, `frontend/src/pages/Home.css`, `frontend/src/App.jsx`, `frontend/src/App.css`
- Created `pages/Home.jsx` and `pages/Home.css` with the welcome content
- Refactored `App.jsx` to import and render the `Home` component
- Cleared `App.css` as styles were moved to `Home.css`

## 2026-06-19 — Migrated to Bootstrap
**What**: Installed Bootstrap, removed custom CSS files, and refactored the Home page to use utility classes.
**Why**: To rely on a well-established CSS framework instead of managing custom CSS as per user request.
**Files Changed**: `frontend/package.json`, `frontend/src/main.jsx`, `frontend/src/pages/Home.jsx`, `frontend/src/*.css`
- Installed `bootstrap` package
- Imported Bootstrap into `main.jsx` and removed `index.css` import
- Replaced custom CSS classes in `Home.jsx` with Bootstrap utilities
- Deleted `App.css`, `Home.css`, and `index.css`

## 2026-06-19 — Added Component Structure
**What**: Created a `components` directory and added a foundational `Navbar` component.
**Why**: To set up the standard React component folder structure and provide an example of Bootstrap usage.
**Files Changed**: `frontend/src/components/Navbar.jsx`, `frontend/src/App.jsx`
- Created `frontend/src/components/` directory with `Navbar.jsx`
- Updated `App.jsx` to render the new `Navbar` above the `Home` page

## 2026-06-19 — Added Header and Hero UI
**What**: Created `Header` and `Hero` components matching the provided real estate UI design, added global fonts/icons, and removed the placeholder `Navbar`.
**Why**: To start building out the actual home page user interface based on the provided reference.
**Files Changed**: `frontend/index.html`, `frontend/src/components/Header.jsx`, `frontend/src/components/Hero.jsx`, `frontend/src/pages/Home.jsx`, `frontend/src/App.jsx`
- Injected Google Fonts (Playfair Display, Inter) and Bootstrap Icons into `index.html`
- Created `Header.jsx` with navigation links, custom logo placeholder, and phone CTA
- Created `Hero.jsx` with typography, responsive stats glass-panel, and a callback form
- Updated `Home.jsx` to render `Header` and `Hero` with custom background gradients
- Removed `Navbar.jsx`

## 2026-06-19 — Rebranded to Mahalaxmi Realty
**What**: Updated the website title, Hero text, and Header logo to reflect the brand "Mahalaxmi Realty".
**Why**: To align the UI with the client's actual brand name as requested.
**Files Changed**: `frontend/index.html`, `frontend/src/components/Header.jsx`, `frontend/src/components/Hero.jsx`
- Changed document `<title>` to "Mahalaxmi Realty"
- Added `lo (1) (1).webp` image tag to `Header.jsx` replacing the placeholder logo
- Updated text in `Hero.jsx` from "K.S. Lodhi" to "Mahalaxmi Realty"

## 2026-06-19 — Added Scrolling Ticker
**What**: Created a horizontal scrolling marquee (Ticker) component and added it below the Hero section.
**Why**: To display key selling points dynamically as shown in the reference design.
**Files Changed**: `frontend/src/components/Ticker.jsx`, `frontend/src/pages/Home.jsx`
- Created `Ticker.jsx` with an infinite CSS keyframe scroll animation
- Imported and rendered `<Ticker />` in `Home.jsx`

## 2026-06-19 — Added Listings and FAQ Sections
**What**: Created the `Listings` and `FAQ` components based on provided design mockups.
**Why**: To display available properties and address common buyer questions as requested.
**Files Changed**: `frontend/src/components/Listings.jsx`, `frontend/src/components/FAQ.jsx`, `frontend/src/pages/Home.jsx`
- Built `Listings.jsx` with a responsive 3-column grid of property cards featuring badges and pricing
- Built `FAQ.jsx` with a clean, single-column question list and horizontal rule headers
- Integrated both new sections into `Home.jsx` below the Ticker

## 2026-06-19 — Added Guides, About, and CTA Sections
**What**: Created three new sections (Guides, About Advisor, and Call to Action) to complete the homepage layout.
**Why**: To provide helpful buying guides, build trust with the advisor's profile, and offer clear contact options at the end of the page as requested.
**Files Changed**: `frontend/src/components/Guides.jsx`, `frontend/src/components/About.jsx`, `frontend/src/components/CTA.jsx`, `frontend/src/pages/Home.jsx`
- Built `Guides.jsx` showing a 4-column feature list
- Built `About.jsx` highlighting 'Mahalaxmi Realty' with client testimonials
- Built `CTA.jsx` with a dark theme and prominent WhatsApp/Call buttons
- Updated `Home.jsx` to render these components at the bottom of the page

## 2026-06-19 — Redesigned About Section
**What**: Refined the `About.jsx` component to perfectly match the provided "YOUR ADVISOR" mockup design.
**Why**: To ensure exact design fidelity with the client's mockup.
**Files Changed**: `frontend/src/components/About.jsx`
- Adjusted spacing and positioning of the 'Your Advisor' header and orange line
- Updated the background to solid white to match the mockup
- Refined testimonial typography (removed quotes, adjusted italics) and layout
- Adjusted badge styles to match the pastel pill-shaped design

## 2026-06-19 — Added Comparison Section
**What**: Created a `WhyDharuhera.jsx` component showcasing price comparisons using visual bar charts.
**Why**: To visually communicate the value proposition of Dharuhera over Gurgaon prices as requested.
**Files Changed**: `frontend/src/components/WhyDharuhera.jsx`, `frontend/src/pages/Home.jsx`
- Built dark-themed section with bold typography highlighting the price difference
- Implemented dynamic data-driven bar charts with Bootstrap width utility classes
- Inserted the section into `Home.jsx` after `Listings`

## 2026-06-19 — Added Footer Section
**What**: Built a comprehensive global Footer component based on the provided mockup.
**Why**: To provide site navigation links, complete contact information, and standard web application footing.
**Files Changed**: `frontend/src/components/Footer.jsx`, `frontend/src/pages/Home.jsx`
- Created a 4-column footer matching the dark theme of the CTA/WhyDharuhera sections
- Added standard navigation and service links with hover state transitions
- Placed standard copyright and policy links at the bottom
- Included floating 'Back to Top' and 'WhatsApp' action buttons
- Rebranded textual mentions from 'Lodhi Real Estate' to 'Mahalaxmi Realty' for brand consistency
- Integrated into `Home.jsx` at the very bottom

## 2026-06-19 — Fixed Footer Gap
**What**: Removed a rogue `mt-4` margin utility class from the `Footer`'s internal container.
**Why**: The margin was collapsing out of the footer container and creating an unwanted white gap between the CTA section and the Footer.
**Files Changed**: `frontend/src/components/Footer.jsx`
- Removed `mt-4` from the main container inside `Footer.jsx` to resolve margin collapsing

## 2026-06-19 — Made Logo Transparent
**What**: Removed the white background styling from the header logo and ensured transparency.
**Why**: To seamlessly blend the logo directly onto the beige header background per user request.
**Files Changed**: `frontend/src/components/Header.jsx`
- Removed `bg-white`, `rounded`, and `shadow-sm` classes from the logo wrapper
- Applied `mix-blend-mode: multiply` CSS property to the image to visually erase any baked-in white backgrounds

## 2026-06-19 — Added Header Links
**What**: Expanded the header navigation to include Blog, About, and Contact links.
**Why**: To provide consistent sitewide navigation options as requested by the user.
**Files Changed**: `frontend/src/components/Header.jsx`
- Replaced the 'More' dropdown link with dedicated 'Blog', 'About', and 'Contact' links
- Updated header visibility classes (`d-lg-flex`) to ensure responsive layout given the increased link count

## 2026-06-19 — Premium Real Estate Theme Setup
**What**: Created a global `index.css` file to define a unified color and typography theme, replacing scattered inline styles.
**Why**: To ensure a scalable, consistent, and premium aesthetic (Gold & Slate with elegant typography) across the entire application.
**Files Changed**: `frontend/src/index.css`, `frontend/src/main.jsx`, `frontend/index.html`, and `frontend/src/components/*.jsx`
- Created CSS variables (`--theme-primary`, `--theme-dark`, etc.) and utility classes (`bg-theme-dark`, `text-theme-primary`)
- Replaced hardcoded HEX codes (`#cc7e4c`, `#2b1b12`) across all components with CSS variables via a build script
- Selected **Cormorant Garamond** (Serif) for headings to provide an elegant, high-end feel
- Selected **Montserrat** (Sans-serif) for body text for optimal readability and a modern aesthetic
- Imported fonts via `@import` in `index.css` and cleaned up `index.html` head tags

## 2026-06-19 — Implemented Alternating Section Backgrounds
**What**: Adjusted the wrapper tags and background colors of various components to create an alternating "striping" effect down the homepage.
**Why**: To improve visual hierarchy, separate content chunks, and increase overall readability.
**Files Changed**: `frontend/src/components/FAQ.jsx`, `frontend/src/components/Guides.jsx`, `frontend/src/components/About.jsx`
- Set `FAQ` and `Guides` sections to a pure white `var(--theme-surface)` full-width background
- Removed explicit white background from `About` to let it inherit the pearl-white `var(--theme-bg)`
- Removed vertical margin classes (`my-3`, `my-5`) that were creating unintended gaps between alternating colored sections

## 2026-06-19 — Distinguished CTA from Footer
**What**: Changed the CTA section's background color to a slightly lighter dark shade.
**Why**: To prevent the CTA and Footer sections from blending together, maintaining the alternating section hierarchy requested by the user.
**Files Changed**: `frontend/src/components/CTA.jsx`
- Updated `backgroundColor` from `var(--theme-dark)` to `var(--theme-dark-alt)`

## 2026-06-19 — Fixed Invisible Headings in Dark Sections
**What**: Restored the white color for headings inside the dark `CTA` and `WhyDharuhera` sections.
**Why**: The new global typography theme in `index.css` applied a dark slate color to all headings, causing dark-section headings to blend invisibly into their dark backgrounds.
**Files Changed**: `frontend/src/components/CTA.jsx`, `frontend/src/components/WhyDharuhera.jsx`
- Appended the Bootstrap `text-white` utility class directly to the `h2` tags in both dark sections to override the global heading color rule

## 2026-06-19 — Premium UI Overhaul
**What**: Enhanced the visual fidelity of the landing page to create a highly premium, luxury real estate aesthetic using the same content.
**Why**: To elevate the brand perception and trust factor through modern, high-end web design patterns.
**Files Changed**: `frontend/src/index.css`, `frontend/src/components/Hero.jsx`, `frontend/src/components/Listings.jsx`, `frontend/src/components/Header.jsx`
- Added global CSS `.fade-up` and delay utility classes for smooth, elegant entrance animations.
- Transformed the `Hero` section into an edge-to-edge layout with a high-end mansion background image (Unsplash) and a seamless gradient fade overlay.
- Upgraded the Hero stats box to use a true CSS `.glass-panel` effect (backdrop blur + translucent border).
- Updated the `Header` z-index to seamlessly float over the new edge-to-edge Hero image.
- Replaced the basic property grid cards in `Listings` with `.premium-card` styles featuring delicate borders, smooth floating hover states, and dynamic high-quality Unsplash placeholder images.

## 2026-06-19 — Added Properties Page and Routing
**What**: Built a dedicated `Properties.jsx` page based on the provided screenshot and implemented a lightweight router.
**Why**: To allow users to view a full catalog of properties beyond the 6 featured on the homepage, complete with advanced filtering and pagination.
**Files Changed**: `frontend/src/App.jsx`, `frontend/src/pages/Properties.jsx`, `frontend/src/components/Header.jsx`, `frontend/src/components/Listings.jsx`, `frontend/src/components/Footer.jsx`
- Created `Properties.jsx` with a comprehensive multi-dropdown filter bar, a 12-item grid of premium property cards, and pagination.
- Re-architected `App.jsx` to serve as a lightweight hash-based router (`#/properties`) since `react-router-dom` installation failed due to system storage constraints.
- Updated global navigation links in `Header`, `Footer`, and `Listings` to point to `#/properties` for seamless navigation.

## 2026-06-19 — Added Property Details Hero Section
**What**: Built the `PropertyDetails.jsx` page containing the top 'Hero' section shown in the provided screenshot.
**Why**: To provide detailed property information (images, price, stats, verified documents) when a user clicks on a specific property.
**Files Changed**: `frontend/src/App.jsx`, `frontend/src/pages/PropertyDetails.jsx`, `frontend/src/pages/Properties.jsx`, `frontend/src/components/Listings.jsx`
- Created `PropertyDetails.jsx` matching the exact layout of the screenshot (breadcrumbs, left photo gallery with thumbnails, right details card with pricing, area stats grid, and verified document badges).
- Updated the `App.jsx` hash router to capture `#/property/:id` routes and render the new component.
- Updated all "See Full Details" buttons in the property cards (`Listings.jsx` and `Properties.jsx`) to function as anchor tags pointing to their respective property detail routes.

## 2026-06-19 — Added Advanced Property Details Sections
**What**: Built the `Development Status`, `Plot Cost Calculator`, and `EMI Calculator` sections within the `PropertyDetails` page.
**Why**: To provide prospective buyers with deep transparency regarding site readiness and detailed financial breakdowns, mimicking the provided advanced UX mockups.
**Files Changed**: `frontend/src/pages/PropertyDetails.jsx`
- Added the **Development Status** grid detailing the completion state of 8 different site utilities (Roads, Electricity, Water, etc.) with conditional color-coding (green for complete, gold for partial).
- Implemented the **Cost Calculator** card featuring an itemized breakdown of base price, stamp duty, registry fees, brokerage, and EDC/IDC charges.
- Implemented the **EMI Calculator** card featuring HTML5 range sliders for down payment, interest rate, and loan tenure, alongside an estimated monthly payment display.

## 2026-06-19 — Added Property Page Lower Sections
**What**: Appended the `Explore This Area`, `Similar Properties`, and `Contact Form` sections to the bottom of the `PropertyDetails` page.
**Why**: To match the provided UI mockups and ensure users have clear next steps, relevant context, and an immediate conversion pathway (lead capture form) at the bottom of the details page.
**Files Changed**: `frontend/src/pages/PropertyDetails.jsx`
- Added the **Explore This Area** section with quick-link pill buttons.
- Added the **Similar Properties** section, reusing the `premium-card` UI component to render 3 related listings.
- Built the **Interested in this property?** contact form, featuring a clean, boxed layout with inputs for name, email, WhatsApp, dropdowns for budget/timeline, and dual CTAs (Submit button + direct WhatsApp link).

## 2026-06-19 — Added Society Reviews Page
**What**: Built the `Societies.jsx` page based on the provided wireframe, offering an unbiased breakdown of Dharuhera real estate projects.
**Why**: To position Mahalaxmi Realty as a trustworthy, transparent authority by providing RERA statuses, risk assessments, pricing ranges, and honest pros/cons for 7 major local societies.
**Files Changed**: `frontend/src/App.jsx`, `frontend/src/pages/Societies.jsx`, `frontend/src/components/Footer.jsx`
- Created `Societies.jsx` including a data-rich Hero section (Societies Reviewed, RERA Verified, Price Range stats), a responsive RERA Legend bar, and a grid of 7 detailed society review cards.
- Integrated a distinctive yellow `Honest Disclosure` banner and a custom dark CTA section to drive high-intent leads.
- Added `#/societies` to the client-side router in `App.jsx` and updated the Footer navigation link to point to this new route.

## 2026-06-19 — Added About Us Page
**What**: Created the `About.jsx` page detailing the company's story, values, and track record based on the provided screenshot.
**Why**: To build trust with potential clients by showcasing Mahalaxmi Realty's 20+ years of experience, core values, and successful track record (750+ properties sold).
**Files Changed**: `frontend/src/App.jsx`, `frontend/src/pages/About.jsx`, `frontend/src/components/Header.jsx`, `frontend/src/components/Footer.jsx`
- Built the dedicated `About.jsx` page with a Hero section, a dynamic 4-column Stats banner, a visual 'Our Story' section featuring a premium image with a floating badge, a 4-card 'Our Values' grid, and a dark CTA section.
- Ensured all text references to the agency name use the consistent 'Mahalaxmi Realty' branding instead of 'Lodhi Real Estate'.
- Added the `#/about` route to `App.jsx` and connected the navigation links in both `Header.jsx` and `Footer.jsx`.

## 2026-06-19 — Added Contact and Blog Pages
**What**: Built the `Contact.jsx` and `Blog.jsx` pages based on the provided screenshots to complete the site's primary routing structure.
**Why**: To provide dedicated endpoints for user inquiries (Contact) and SEO/Content marketing (Blog) while maintaining the premium, cohesive design system.
**Files Changed**: `frontend/src/App.jsx`, `frontend/src/pages/Contact.jsx`, `frontend/src/pages/Blog.jsx`, `frontend/src/components/Header.jsx`, `frontend/src/components/Footer.jsx`
- Created `Contact.jsx` featuring a split-column layout with structured contact details (Address, Phone, Email, Hours), the reusable lead capture form, and a responsive Google Maps iframe embed.
- Created `Blog.jsx` featuring a category filter bar and a 10-item grid of blog post cards, reusing the `.premium-card` UI pattern to display article excerpts, dynamic thumbnail images, and metadata.
- Registered both `#/contact` and `#/blog` routes in the `App.jsx` router.
- Wired up the global navigation links in both `Header` and `Footer` to ensure full site connectivity.

## 2026-06-19 — Added Price Guide Page
**What**: Built the `Prices.jsx` page detailing society-wise rates and HUDA sector pricing.
**Why**: To provide transparent, data-driven market pricing and appreciation data to prospective buyers and investors.
**Files Changed**: `frontend/src/App.jsx`, `frontend/src/pages/Prices.jsx`, `frontend/src/components/Footer.jsx`
- Built the `Prices.jsx` component consisting of 3 sections: a Hero section with pricing summary cards, a detailed `Society-Wise Rate Table`, and a `HUDA Sector Rates` table.
- Implemented dynamic mapping for the tables, utilizing custom Bootstrap styling for dark table headers and pill badges for risk assessment.
- Added the `#/prices` route in `App.jsx` and updated the Footer navigation link for 'Price Guide'.
- Appended three new analytical sections to the Prices page: `Find Your Budget Range`, `Dharuhera vs Competitors` (comparison table), and `Circle Rate Intelligence` (highlight banner).
- Finished the Prices page by appending the `Why Dharuhera, Why Now` value-proposition grid, the `Risk Flags` alert section, a `Frequently Asked Questions` accordion, and the final dark CTA + mini navigation strips.

## 2026-06-19 — Added Blog Details Page
**What**: Built a premium, content-focused `BlogDetails.jsx` page for individual articles.
**Why**: To provide an elegant, distraction-free reading experience for users diving into market analysis and property guides.
**Files Changed**: `frontend/src/App.jsx`, `frontend/src/pages/BlogDetails.jsx`, `frontend/src/pages/Blog.jsx`
- Created `BlogDetails.jsx` featuring a massive hero image, rich typography (drop quotes, elegant line heights), a floating 'share' bar, and a 'Related Articles' component.
- Implemented dynamic rendering simulating HTML content injection (`dangerouslySetInnerHTML`) to prepare the template for future CMS integration.
- Registered the `#/blog/:id` route in `App.jsx` and updated the 'Read More' links in the main `Blog.jsx` grid to direct users to the sample post.

## 2026-06-19 — Added MongoDB Backend Integration
**What**: Created a Node/Express backend and connected it to the user's MongoDB cluster. Migrated frontend hardcoded data to API fetches.
**Why**: To allow dynamic addition, management, and retrieval of properties directly from the database.
**Files Changed**: `backend/server.js`, `backend/models/Property.js`, `backend/seed.js`, `frontend/src/components/Listings.jsx`, `frontend/src/pages/Properties.jsx`, `frontend/src/pages/PropertyDetails.jsx`
- Initialized a Node.js Express server on port 5000 with CORS and Mongoose.
- Created `Property` schema matching the frontend data model (society, title, price, area, facing, tags, photos, etc.).
- Created a `seed.js` script to clear and populate the MongoDB database (`mongodb+srv://...`) with the 6 initial plots.
- Converted `Listings.jsx` and `Properties.jsx` to fetch data via `useEffect` from `http://localhost:5000/api/properties`.
- Upgraded `PropertyDetails.jsx` to extract the `_id` from the route hash, fetch the exact property from the API, and dynamically render its title, images, and key specifications. Also updated the 'Similar Properties' to fetch dynamically.

## 2026-06-19 — Added Admin Dashboard and Add Property Tool
**What**: Implemented a secure Admin Dashboard (`#/admin/dashboard`) to dynamically add new properties into MongoDB directly from the browser.
**Why**: To provide an easy, code-free way for admins to add properties with detailed category-specific fields (Residential, Industrial, Shop, Warehouse).
**Files Changed**: `frontend/src/App.jsx`, `frontend/src/pages/AdminLogin.jsx`, `frontend/src/pages/AdminDashboard.jsx`, `frontend/src/data/categoryFields.js`, `frontend/src/lib/utils.js`, `frontend/src/admin.css`, `backend/models/Property.js`, `backend/server.js`, `frontend/package.json`
- Set up `#/admin` login route restricted by fixed credentials (`admin` / `admin123`) using localStorage.
- Adapted the user-provided Next.js property-add component into a standard React + Bootstrap compatible dashboard (`AdminDashboard.jsx`).
- Configured complex category-based fields (Warehouse structure, shop visibility, legal status) within `categoryFields.js`.
- Modified `Property` Mongoose schema to include `{ strict: false }` to automatically accept the dynamically generated payload structure without throwing validation errors.
- Added a `POST /api/properties` endpoint in Express backend to seamlessly push these new items into the database.
- Integrated `lucide-react`, `framer-motion`, `clsx`, and `tailwind-merge` to fulfill UI requirements of the dashboard template.

## 2026-06-19 — Backend Ghost Process Fix & Properties Filtering
**What**: Migrated server to port 5001 to resolve ghost-process conflicts and implemented fully workable filters on the Properties page.
**Why**: 
1. A hidden process on port 5000 was capturing POST requests, causing 404s.
2. The "Add Property" payload was causing Mongoose `CastError` due to sending "on" for the boolean featured checkbox.
3. The user requested the static filter inputs on the properties page to be functional.
**Files Changed**: `backend/server.js`, `frontend/src/pages/AdminDashboard.jsx`, `frontend/src/pages/Properties.jsx`, `frontend/src/components/Listings.jsx`, `frontend/src/pages/PropertyDetails.jsx`
- Changed Express server from `PORT=5000` to `PORT=5001`.
- Automatically intercepted checkbox `on` values and converted them to `true` inside `AdminDashboard.jsx`.
- Converted `Properties.jsx` hardcoded filter inputs into React state-driven filters that actively compute `filteredProperties`.
- Implemented robust regex and text-matching to accurately sort and filter properties by Price, City, Type, Area Size, Facing, Ownership, Society, and Vastu parameters.

## 2026-06-19 — Cloudinary Image Uploads
**What**: Integrated Cloudinary and Multer to handle permanent, cloud-based image storage.
**Why**: Temporary `blob:http` URLs were being used to store images, which break when the browser session ends. Real, permanent cloud URLs are needed for a production-ready application.
**Files Changed**: `backend/.env`, `backend/server.js`, `frontend/src/pages/AdminDashboard.jsx`, `backend/package.json`
- Installed `cloudinary` and `multer` in the backend.
- Added Cloudinary credentials (`CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`) to the `.env` file.
- Created `POST /api/upload` endpoint in Express that uses Multer memory storage and Cloudinary's `upload_stream` to securely upload files.
- Rewrote the frontend `handleFileSelect` in `AdminDashboard.jsx` to upload selected images asynchronously to the backend using `FormData`. It now retrieves secure Cloudinary URLs (`https://res.cloudinary.com/...`) and stores them directly into the MongoDB payload.

## 2026-06-19 — Dynamic Blog System Migration
**What**: Migrated static blog posts to MongoDB and made `Blog.jsx` and `BlogDetails.jsx` fetch data dynamically via new API endpoints.
**Why**: The blogs were hardcoded in the React components, meaning adding new blogs required editing source code. Moving them to the database allows for dynamic rendering and future CMS/Admin integration.
**Files Changed**: `backend/models/Blog.js`, `backend/server.js`, `backend/seedBlogs.js`, `frontend/src/pages/Blog.jsx`, `frontend/src/pages/BlogDetails.jsx`
- Created `Blog` Mongoose schema with fields for title, excerpt, content, image, author, date, category, and readTime.
- Created `GET /api/blogs` and `GET /api/blogs/:id` backend endpoints.
- Wrote and executed `seedBlogs.js` to transfer the 10 existing hardcoded blog posts directly into the MongoDB cluster.
- Refactored `Blog.jsx` to fetch and render the blog grid dynamically from the backend API.
- Refactored `BlogDetails.jsx` to parse the `_id` from `window.location.hash`, fetch the specific article from the backend, and render the exact content and images.
- Connected the "Related Articles" section in `BlogDetails.jsx` to dynamically fetch other blogs from the database.

## 2026-06-19 — Repository Initialization
**What**: Initialized Git repository and pushed entire full-stack project to GitHub.
**Why**: To backup the code, enable version control, and set up the foundation for continuous deployment.
**Files Changed**: `.gitignore`
- Created root `.gitignore` to prevent committing `node_modules`, `.env`, and build directories.
- Pushed all code to `https://github.com/MBKANERIYA/mahalaxmi-realty.git` on the `main` branch.

## 2026-06-19 — Typography UI Fix
**What**: Changed the font family for numerical stat readouts.
**Why**: To ensure numbers in stat widgets appear in the standard readable body font instead of the elegant serif heading font.
**Files Changed**: `frontend/src/index.css`, `frontend/src/pages/Societies.jsx`
- Added `.font-body` utility class to `index.css`.
- Applied `.font-body` to the top stats cards (`h4` tags) in `Societies.jsx`.

## 2026-06-22 — Fixed Frontend Data Fetching
**What**: Created a `.env` file in the frontend and fixed backend port hardcoding.
**Why**: The frontend was failing to fetch data because it didn't have `VITE_API_URL` defined, defaulting to literally `http://localhost:5173/${API_URL}/...`. The backend was ignoring the `PORT=5000` defined in its `.env` and was hardcoded to `5001`.
**Files Changed**: `frontend/.env`, `backend/server.js`
- Created `frontend/.env` with `VITE_API_URL=http://localhost:5000`
- Updated `backend/server.js` to use `process.env.PORT || 5001`

## 2026-06-22 — Fixed Vercel API Routing
**What**: Updated `API_URL` fallbacks and fixed syntax errors in `AdminDashboard.jsx`.
**Why**: On Vercel, the properties and blogs were not fetching because `API_URL` was falling back to the literal string `'${API_URL}'`, causing 404s. By changing it to `''`, the frontend correctly requests `/api/...` relative to the current Vercel origin. Additionally, fixed single quotes to backticks in `fetch` calls.
**Files Changed**: `frontend/src/pages/AdminDashboard.jsx`, `frontend/src/components/Listings.jsx`, `frontend/src/pages/Blog.jsx`, `frontend/src/pages/BlogDetails.jsx`, `frontend/src/pages/Properties.jsx`, `frontend/src/pages/PropertyDetails.jsx`
- Replaced `const API_URL = import.meta.env.VITE_API_URL || '${API_URL}';` with `const API_URL = import.meta.env.VITE_API_URL || '';` across all fetch files
- Fixed single quotes to template literals (backticks) in `AdminDashboard.jsx` `fetch` requests
