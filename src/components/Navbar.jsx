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
              src={scrolled ? "/image/logo - blue 2.png" : "/image/logo-white.png"}
              alt="Bama Agency Digital Marketing"
              className={`navbar-logo-img transition-all duration-300 ${
                !scrolled ? 'brightness-0 invert' : ''
              }`}
              style={!scrolled ? { filter: 'brightness(0) invert(1)' } : {}}
              onError={(e) => {
                // Fallback to blue logo if white logo doesn't exist
                if (e.target.src.includes('logo-white')) {
                  e.target.src = "/image/logo - blue 2.png"
                  e.target.style.filter = 'brightness(0) invert(1)'
                }
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className={`navbar-desktop ${isRTL ? 'flex-row-reverse' : ''} ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
            {isRTL ? (
              <>
                {/* العربية: الروابط أولاً (من اليمين لليسار)، ثم زر اللغة، ثم زر Get Started */}
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${
                      location.pathname === link.path
                        ? scrolled 
                          ? 'text-purple-600 font-bold bg-purple-50' 
                          : 'text-white font-bold bg-white/10'
                        : scrolled
                        ? 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                {/* زر اللغة */}
                <button
                  onClick={toggleLanguage}
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 border min-w-[80px] ${
                    scrolled
                      ? 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                      : 'bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30'
                  }`}
                  title="التبديل إلى الإنجليزية"
                >
                  <Languages size={18} />
                  <span className="text-sm font-medium">EN</span>
                </button>
                {/* زر Get Started */}
                <Link
                  to="/contact"
                  className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap ${
                    scrolled
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30'
                  }`}
                >
                  {t.nav.getStarted}
                </Link>
              </>
            ) : (
              <>
                {/* الإنجليزية: الروابط أولاً، ثم زر اللغة، ثم زر Get Started */}
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${
                      location.pathname === link.path
                        ? scrolled 
                          ? 'text-purple-600 font-bold bg-purple-50' 
                          : 'text-white font-bold bg-white/10'
                        : scrolled
                        ? 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={toggleLanguage}
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 border min-w-[80px] ${
                    scrolled
                      ? 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                      : 'bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30'
                  }`}
                  title="Switch to Arabic"
                >
                  <Languages size={18} />
                  <span className="text-sm font-medium">AR</span>
                </button>
                <Link
                  to="/contact"
                  className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap ${
                    scrolled
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30'
                  }`}
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
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 border ${
                scrolled
                  ? 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                  : 'bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30'
              }`}
              title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
            >
              <Languages size={18} />
              <span className="text-sm font-medium">{language === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-all duration-300 transform hover:scale-110 ${
                scrolled ? 'text-gray-800 hover:text-purple-600' : 'text-white hover:text-white/80'
              }`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`navbar-mobile-menu ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
          <div className={`px-4 pt-2 pb-4 space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-purple-600 font-bold bg-purple-50'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`block text-center mt-4 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                scrolled
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
              }`}
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
