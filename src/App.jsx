import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Menu from './Menu/Menu'
import Contact from './Contact/Contact'
import Contact2 from './Contact2/Contact2.jsx'
import Footer from './Footer/Footer'
import Menus from './Menus/Menus'
import PrivacyPolicy from './Terms&Policy/Policy'
import TermsOfUse from './Terms&Policy/Terms'

// ScrollToTop component inside App.jsx
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
              <Hero />
              <Menu />
              <Contact />
              <Contact2 />
            </>
          } />

          {/* Menu Page */}
          <Route path="/menu" element={<Menus />} />

          {/* Reservations Page */}
          <Route path="/reservations" element={<Contact />} />

          {/* Privacy Policy Page */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Terms of Use Page */}
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App