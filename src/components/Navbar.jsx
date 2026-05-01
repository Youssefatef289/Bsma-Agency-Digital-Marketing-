import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Languages, Moon, Sun } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'
import { translations } from '../translations/translations'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { language, toggleLanguage, isTransitioning } = useLanguage()
  const { isDark, toggleTheme } = useTheme()
  const t = translations[language]
  const isHomePage = location.pathname === '/'
  const isHeroIntegrated = isHomePage && !scrolled

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/portfolio', label: t.nav.portfolio },
    { path: '/contact', label: t.nav.contact },
  ]

  const isRTL = language === 'ar'

  return (
    <nav className={`navbar ${isHeroIntegrated ? 'navbar-transparent' : 'navbar-scrolled'} ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
      <div className="navbar-container">
        <div className={`navbar-content ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo - Always visible with blue logo */}
          <Link 
            to="/" 
            className="navbar-logo"
          >
            <img
              src={isDark || isHeroIntegrated ? '/image/logo-white.png' : '/image/logo - blue 2.png'}
              alt="Bsma Agency Digital Marketing"
              className="navbar-logo-img transition-all duration-300"
              onError={(e) => {
                // Fallback
                e.target.src = "/image/Logo-bsma (1).png"
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
                    className={`navbar-link-underline px-4 py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap relative ${
                      location.pathname === link.path
                        ? 'text-purple-400 font-bold'
                        : isHeroIntegrated
                          ? 'text-gray-100 hover:text-purple-300'
                          : 'text-gray-700 hover:text-purple-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                {/* زر اللغة */}
                <button
                  onClick={toggleLanguage}
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 min-w-[80px] ${
                    isHeroIntegrated
                      ? 'border border-white/25 bg-white/10 text-white hover:bg-white/20'
                      : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-purple-300'
                  }`}
                  title={language === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
                >
                  <Languages size={18} />
                  <span className="text-sm font-medium">{language === 'en' ? 'AR' : 'EN'}</span>
                </button>
                <button
                  onClick={toggleTheme}
                  className={`theme-toggle-btn flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 min-w-[80px] ${
                    isHeroIntegrated
                      ? 'border border-white/25 bg-white/10 text-white hover:bg-white/20'
                      : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-purple-300'
                  }`}
                  title={isDark ? (language === 'en' ? 'Switch to Light Mode' : 'تفعيل الوضع النهاري') : (language === 'en' ? 'Switch to Dark Mode' : 'تفعيل الوضع الليلي')}
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                  <span className="text-sm font-medium">{isDark ? (language === 'en' ? 'Light' : 'نهاري') : (language === 'en' ? 'Dark' : 'ليلي')}</span>
                </button>
                {/* زر Get Started */}
                <Link
                  to="/contact"
                  className="px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 whitespace-nowrap bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
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
                    className={`navbar-link-underline px-4 py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap relative ${
                      location.pathname === link.path
                        ? 'text-purple-400 font-bold'
                        : isHeroIntegrated
                          ? 'text-gray-100 hover:text-purple-300'
                          : 'text-gray-700 hover:text-purple-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={toggleLanguage}
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 min-w-[80px] ${
                    isHeroIntegrated
                      ? 'border border-white/25 bg-white/10 text-white hover:bg-white/20'
                      : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-purple-300'
                  }`}
                  title="Switch to Arabic"
                >
                  <Languages size={18} />
                  <span className="text-sm font-medium">AR</span>
                </button>
                <button
                  onClick={toggleTheme}
                  className={`theme-toggle-btn flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 min-w-[80px] ${
                    isHeroIntegrated
                      ? 'border border-white/25 bg-white/10 text-white hover:bg-white/20'
                      : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-purple-300'
                  }`}
                  title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                  <span className="text-sm font-medium">{isDark ? 'Light' : 'Dark'}</span>
                </button>
                <Link
                  to="/contact"
                  className="px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 whitespace-nowrap bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
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
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                isHeroIntegrated
                  ? 'border border-white/25 bg-white/10 text-white hover:bg-white/20'
                  : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-purple-300'
              }`}
              title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
            >
              <Languages size={18} />
              <span className="text-sm font-medium">{language === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <button
              onClick={toggleTheme}
              className={`theme-toggle-btn flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                isHeroIntegrated
                  ? 'border border-white/25 bg-white/10 text-white hover:bg-white/20'
                  : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-purple-300'
              }`}
              title={isDark ? (language === 'en' ? 'Switch to Light Mode' : 'تفعيل الوضع النهاري') : (language === 'en' ? 'Switch to Dark Mode' : 'تفعيل الوضع الليلي')}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`navbar-mobile-toggle transition-all duration-300 transform hover:scale-110 active:scale-95 ${
                isHeroIntegrated ? 'text-white hover:text-purple-300' : 'text-gray-800 hover:text-purple-600'
              }`}
              aria-label={isOpen ? (language === 'en' ? 'Close menu' : 'إغلاق القائمة') : (language === 'en' ? 'Open menu' : 'فتح القائمة')}
            >
              <div className={`navbar-menu-icon ${isOpen ? 'navbar-menu-icon-open' : ''}`}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Smooth Animation */}
      {/* Backdrop Overlay */}
      {isOpen && (
        <div 
          className="navbar-mobile-backdrop"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      
      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${isOpen ? 'navbar-mobile-menu-open' : 'navbar-mobile-menu-closed'}`}>
        <div className={`px-4 pt-4 pb-6 space-y-1 ${isRTL ? 'text-right' : 'text-left'}`}>
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`navbar-mobile-link-item block px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? 'text-purple-600 font-bold bg-purple-50 border-2 border-purple-200'
                  : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50 active:bg-purple-100'
              }`}
              style={{ 
                animationDelay: `${index * 0.05}s`,
                animation: isOpen ? 'slideInDown 0.3s ease-out forwards' : 'none'
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="navbar-mobile-cta block text-center mt-4 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 active:scale-95"
            style={{ 
              animationDelay: `${navLinks.length * 0.05}s`,
              animation: isOpen ? 'slideInDown 0.3s ease-out forwards' : 'none'
            }}
          >
            {t.nav.getStarted}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
