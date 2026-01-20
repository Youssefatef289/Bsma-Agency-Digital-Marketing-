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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-white via-white to-blue-50 shadow-lg border-b border-gray-100'
          : 'bg-gradient-to-r from-white/98 via-white/95 to-blue-50/95 backdrop-blur-lg'
      } ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center h-20 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo - يظهر على اليسار في EN وعلى اليمين في AR */}
          <Link 
            to="/" 
            className={`flex items-center transition-all duration-300 group hover:scale-110 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <img
              src="/image/logo - blue 2.png"
              alt="Bsma Agency Digital Marketing"
              className="h-60 object-contain transition-transform duration-300 drop-shadow-sm"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center transition-all duration-500 ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            {/* في العربية: الترتيب معكوس تماماً - زر Get Started أولاً، ثم زر اللغة، ثم الروابط */}
            {isRTL ? (
              <>
                {/* زر Get Started - أول عنصر في العربية */}
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:from-blue-700 hover:to-blue-800"
                >
                  {t.nav.getStarted}
                </Link>
                {/* زر اللغة */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-100 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 bg-white shadow-sm hover:shadow-md"
                  title="التبديل إلى الإنجليزية"
                >
                  <Languages size={18} className="transition-transform duration-300 hover:rotate-180 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">EN</span>
                </button>
                {/* الروابط - معكوسة */}
                {navLinks.slice().reverse().map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 text-sm font-semibold transition-all duration-300 relative navbar-link ${
                      location.pathname === link.path
                        ? 'text-blue-600 font-bold border-b-2 border-blue-600'
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
                    className={`px-3 py-2 text-sm font-semibold transition-all duration-300 relative navbar-link ${
                      location.pathname === link.path
                        ? 'text-blue-600 font-bold border-b-2 border-blue-600'
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
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-100 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 bg-white shadow-sm hover:shadow-md"
                  title="Switch to Arabic"
                >
                  <Languages size={18} className="transition-transform duration-300 hover:rotate-180 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">AR</span>
                </button>
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:from-blue-700 hover:to-blue-800"
                >
                  {t.nav.getStarted}
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className={`md:hidden flex items-center gap-3 transition-all duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 shadow-sm"
              title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
            >
              <Languages size={18} className="transition-transform duration-300 hover:rotate-180 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">{language === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-all duration-300 transform hover:scale-110 ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-800 hover:text-blue-600'
              }`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`md:hidden bg-gradient-to-b from-white via-gray-50 to-blue-50 border-t-2 border-blue-200 transition-all duration-300 shadow-lg ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
          <div className={`px-4 pt-3 pb-5 space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === link.path
                    ? 'text-blue-600 font-bold bg-blue-100 border-l-4 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-center mt-5 hover:shadow-lg transition-all duration-300 transform hover:scale-105 shadow-md"
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
