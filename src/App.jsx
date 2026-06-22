import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Properties from './pages/Properties'
import PropertyDetails from './pages/PropertyDetails'
import Societies from './pages/Societies'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import Prices from './pages/Prices'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    // Redirect if they went to /admin instead of #/admin
    if (window.location.pathname === '/admin') {
      window.location.href = '/#/admin';
    }
    
    const onHashChange = () => {
      setCurrentPath(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (currentPath === '#/properties') {
    return <Properties />
  }

  if (currentPath === '#/societies') {
    return <Societies />
  }

  if (currentPath === '#/about') {
    return <About />
  }

  if (currentPath === '#/contact') {
    return <Contact />
  }

  if (currentPath === '#/blog') {
    return <Blog />
  }

  if (currentPath.startsWith('#/blog/')) {
    return <BlogDetails />
  }

  if (currentPath === '#/prices') {
    return <Prices />
  }

  if (currentPath === '#/admin') {
    return <AdminLogin />
  }

  if (currentPath === '#/admin/dashboard') {
    return <AdminDashboard />
  }

  if (currentPath.startsWith('#/property/')) {
    return <PropertyDetails />
  }

  return <Home />
}

export default App
