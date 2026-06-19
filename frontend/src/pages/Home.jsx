import Header from '../components/Header'
import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import Listings from '../components/Listings'
import FAQ from '../components/FAQ'
import Guides from '../components/Guides'
import About from '../components/About'
import CTA from '../components/CTA'
import WhyDharuhera from '../components/WhyDharuhera'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div style={{
      backgroundColor: 'var(--theme-bg)',
      minHeight: '100vh',
      backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(200, 230, 200, 0.25), transparent 30%), radial-gradient(circle at 85% 30%, rgba(230, 200, 180, 0.4), transparent 30%)',
      fontFamily: 'var(--font-body)',
      overflowX: 'hidden'
    }}>
      <Header />
      <Hero />
      <Ticker />
      <FAQ />
      <Listings />
      <WhyDharuhera />
      <Guides />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}
