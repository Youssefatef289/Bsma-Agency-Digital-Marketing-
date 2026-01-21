import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider, useLanguage } from './contexts/LanguageContext.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import FloatingActionButton from './components/FloatingActionButton.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Portfolio from './pages/Portfolio.jsx'

const AppContent = () => {
  const { isTransitioning } = useLanguage()

  return (
    <Router>
      <div className={`min-h-screen flex flex-col transition-all duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main className="flex-grow page-transition">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActionButton />
      </div>
    </Router>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
