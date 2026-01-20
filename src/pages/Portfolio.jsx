import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'

const Portfolio = () => {
  const { language, isTransitioning } = useLanguage()
  const t = translations[language]
  const isRTL = language === 'ar'
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)
  const [autoPlay, setAutoPlay] = useState(true)

  // Portfolio images
  const portfolioImages = [
    '/image/Portfolio/Portfolio-Graphic Design/1.png',
    '/image/Portfolio/Portfolio-Graphic Design/2.png',
    '/image/Portfolio/Portfolio-Graphic Design/3.png',
    '/image/Portfolio/Portfolio-Graphic Design/Artboard 1.png',
    '/image/Portfolio/Portfolio-Graphic Design/Artboard 2.png',
    '/image/Portfolio/Portfolio-Graphic Design/Artboard 3.png',
    '/image/Portfolio/Portfolio-Graphic Design/Artboard 4.png',
    '/image/Portfolio/Portfolio-Graphic Design/التصميم.png',
  ].filter(img => img) // Filter out invalid images

  // Auto play slider
  useEffect(() => {
    if (!autoPlay || portfolioImages.length === 0) return
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioImages.length)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [autoPlay, portfolioImages.length])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length)
    setAutoPlay(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioImages.length)
    setAutoPlay(false)
  }

  const handleDotClick = (index) => {
    setCurrentIndex(index)
    setAutoPlay(false)
  }

  return (
    <div className={`pt-20 transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {language === 'ar' ? 'أعمالنا' : 'Our Portfolio'}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'استكشف أفضل أعمالنا في التصميم الجرافيكي والتسويق الرقمي'
                : 'Explore our best works in graphic design and digital marketing'}
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Slider Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Slider */}
          <div className="relative group animate-slide-up">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
              {/* Image Container */}
              <div className="relative h-96 md:h-[600px] bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={portfolioImages[currentIndex]}
                  alt={`Portfolio ${currentIndex + 1}`}
                  className="w-full h-full object-contain animate-fade-in"
                  onError={(e) => {
                    e.target.src = '/image/logo - blue 2.png'
                  }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrevious}
                className={`absolute top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 group-hover:opacity-100 opacity-0 ${isRTL ? 'right-4' : 'left-4'}`}
                title={isRTL ? 'السابق' : 'Previous'}
              >
                <ChevronLeft size={28} className="text-white" />
              </button>

              <button
                onClick={handleNext}
                className={`absolute top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 group-hover:opacity-100 opacity-0 ${isRTL ? 'left-4' : 'right-4'}`}
                title={isRTL ? 'التالي' : 'Next'}
              >
                <ChevronRight size={28} className="text-white" />
              </button>

              {/* Image Counter */}
              <div className="absolute top-4 right-4 z-20 bg-blue-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold text-sm">
                {currentIndex + 1} / {portfolioImages.length}
              </div>

              {/* Full Screen Button */}
              <button
                onClick={() => setSelectedImage(portfolioImages[currentIndex])}
                className="absolute top-4 left-4 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 group-hover:opacity-100 opacity-0"
                title={isRTL ? 'عرض كامل الشاشة' : 'Full screen'}
              >
                {isRTL ? '🔍 كامل' : '🔍 View'}
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-8 flex-wrap">
              {portfolioImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'bg-blue-600 w-8 h-3'
                      : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                  }`}
                  title={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="mt-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'ar' ? 'اختر من المعرض' : 'Choose from gallery'}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {portfolioImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setAutoPlay(false)
                  }}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    index === currentIndex ? 'ring-4 ring-blue-600 scale-105' : 'hover:ring-2 hover:ring-blue-400'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = '/image/logo - blue 2.png'
                    }}
                  />
                  <div className="absolute inset-0 bg-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {index === currentIndex && (
                    <div className="absolute inset-0 border-4 border-white/80"></div>
                  )}
                  
                  <span className="absolute top-1 right-1 bg-blue-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-slide-up">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {portfolioImages.length}+
              </div>
              <p className="text-blue-100">{language === 'ar' ? 'تصميم' : 'Designs'}</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <p className="text-blue-100">{language === 'ar' ? 'مشروع' : 'Projects'}</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <p className="text-blue-100">{language === 'ar' ? 'عميل سعيد' : 'Happy Clients'}</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
              <p className="text-blue-100">{language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
          >
            <X size={40} />
          </button>

          <button
            onClick={handlePrevious}
            className={`absolute top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors ${isRTL ? 'right-6' : 'left-6'}`}
          >
            <ChevronLeft size={40} />
          </button>

          <img
            src={selectedImage}
            alt="Full screen view"
            className="max-w-full max-h-full object-contain"
            onError={(e) => {
              e.target.src = '/image/logo - blue 2.png'
            }}
          />

          <button
            onClick={handleNext}
            className={`absolute top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors ${isRTL ? 'left-6' : 'right-6'}`}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  )
}

export default Portfolio
