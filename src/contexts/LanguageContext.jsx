import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    
    // Update font family based on language
    if (language === 'ar') {
      document.body.style.fontFamily = '"Noto Kufi Arabic", sans-serif'
    } else {
      document.body.style.fontFamily = '"Josefin Sans", sans-serif'
    }
  }, [language])

  const toggleLanguage = () => {
    setIsTransitioning(true)
    
    // Fade out animation
    setTimeout(() => {
      setLanguage(prev => prev === 'en' ? 'ar' : 'en')
      
      // Fade in animation after language change
      setTimeout(() => {
        setIsTransitioning(false)
      }, 100)
    }, 300)
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isTransitioning }}>
      {children}
    </LanguageContext.Provider>
  )
}
