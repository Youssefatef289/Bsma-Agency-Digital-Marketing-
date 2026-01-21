import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Languages } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { language, toggleLanguage, isTransitioning } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/portfolio', label: t.nav.portfolio },
    { path: '/contact', label: t.nav.contact },
  ]

  const isRTL = language === 'ar'

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'} ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
      <div className="navbar-container">
        <div className={`navbar-content ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo - يظهر على اليسار في EN وعلى اليمين في AR */}
          <Link 
            to="/" 
            className="navbar-logo"
          >
            <img
              src="/image/logo - blue 2.png"
              alt="Bama Agency Digital Marketing"
              className="navbar-logo-img"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className={`navbar-desktop ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            {/* في العربية: الترتيب معكوس تماماً - زر Get Started أولاً، ثم زر اللغة، ثم الروابط */}
            {isRTL ? (
              <>
                {/* زر Get Started - أول عنصر في العربية */}
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {t.nav.getStarted}
                </Link>
                {/* زر اللغة */}
                <button
                  onClick={toggleLanguage}
                  className="navbar-language-button"
                  title="التبديل إلى الإنجليزية"
                >
                  <Languages size={18} className="navbar-language-icon" />
                  <span className="text-sm font-medium">EN</span>
                </button>
                {/* الروابط - معكوسة */}
                {navLinks.slice().reverse().map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                      location.pathname === link.path
                        ? 'text-blue-600 font-bold'
                        : scrolled
                        ? 'text-gray-700 hover:text-blue-600'
                        : 'text-gray-800 hover:text-blue-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </>
            ) : (
              <>
                {/* في الإنجليزية: الروابط أولاً، ثم زر اللغة، ثم زر Get Started */}
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                      location.pathname === link.path
                        ? 'text-blue-600 font-bold'
                        : scrolled
                        ? 'text-gray-700 hover:text-blue-600'
                        : 'text-gray-800 hover:text-blue-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={toggleLanguage}
                  className="navbar-language-button"
                  title="Switch to Arabic"
                >
                  <Languages size={18} className="navbar-language-icon" />
                  <span className="text-sm font-medium">AR</span>
                </button>
                <Link
                  to="/contact"
                  className="navbar-cta-button"
                >
                  {t.nav.getStarted}
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className={`navbar-mobile ${isRTL ? 'flex-row-reverse' : ''}`}>
            <button
              onClick={toggleLanguage}
              className="navbar-language-button"
              title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
            >
              <Languages size={18} className="navbar-language-icon" />
              <span className="text-sm font-medium">{language === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="transition-all duration-300 transform hover:scale-110 text-gray-800 hover:text-blue-600"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`navbar-mobile-menu ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
          <div className={`px-4 pt-2 pb-4 space-y-1 ${isRTL ? 'text-right' : 'text-left'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`navbar-mobile-link ${
                  location.pathname === link.path
                    ? 'navbar-mobile-link-active'
                    : 'navbar-mobile-link-inactive'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="navbar-cta-button block text-center mt-4"
            >
              {t.nav.getStarted}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
