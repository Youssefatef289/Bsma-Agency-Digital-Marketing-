import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed ${isRTL ? 'left-5' : 'right-5'} bottom-24 z-40 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      } hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`}
      aria-label={language === 'en' ? 'Scroll to top' : 'العودة للأعلى'}
    >
      <ArrowUp size={20} />
    </button>
  )
}

export default ScrollToTop

