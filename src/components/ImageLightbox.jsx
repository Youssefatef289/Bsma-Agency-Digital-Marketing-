import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const ImageLightbox = ({ images, currentIndex, onClose, onNext, onPrevious }) => {
  const { language } = useLanguage()
  const isRTL = language === 'ar'
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrevious()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose, onNext, onPrevious])

  useEffect(() => {
    setImageLoaded(false)
    setIsTransitioning(true)
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [currentIndex])

  if (!images || images.length === 0) return null

  const currentImage = images[currentIndex]

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-0 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      style={{
        animation: 'fadeIn 0.3s ease-out',
      }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className={`absolute ${isRTL ? 'left-6' : 'right-6'} top-6 text-white hover:text-white transition-all z-20 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full p-3 md:p-4 shadow-2xl hover:scale-110 active:scale-95 border border-white/10`}
        aria-label="Close"
      >
        <X size={28} />
      </button>

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={onPrevious}
          className={`absolute ${isRTL ? 'right-6' : 'left-6'} top-1/2 -translate-y-1/2 text-white hover:text-white transition-all z-20 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full p-4 md:p-5 shadow-2xl hover:scale-110 active:scale-95 group border border-white/10`}
          aria-label="Previous"
        >
          {isRTL ? (
            <ChevronRight size={32} className="group-hover:translate-x-2 transition-transform duration-300" />
          ) : (
            <ChevronLeft size={32} className="group-hover:-translate-x-2 transition-transform duration-300" />
          )}
        </button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={onNext}
          className={`absolute ${isRTL ? 'left-6' : 'right-6'} top-1/2 -translate-y-1/2 text-white hover:text-white transition-all z-20 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full p-4 md:p-5 shadow-2xl hover:scale-110 active:scale-95 group border border-white/10`}
          aria-label="Next"
        >
          {isRTL ? (
            <ChevronLeft size={32} className="group-hover:-translate-x-2 transition-transform duration-300" />
          ) : (
            <ChevronRight size={32} className="group-hover:translate-x-2 transition-transform duration-300" />
          )}
        </button>
      )}

      {/* Image Container - Centered and Full */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Loading Spinner */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-white/20 border-b-white/20 rounded-full animate-spin-reverse"></div>
            </div>
          </div>
        )}

        {/* Image with smooth transitions - Clear and Centered */}
        <div 
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <img
            src={currentImage.src}
            alt={currentImage.alt || `Image ${currentIndex + 1}`}
            onLoad={handleImageLoad}
            className={`transition-all duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              maxWidth: '98vw',
              maxHeight: '98vh',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto',
              imageRendering: 'auto',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-spin-reverse {
          animation: spin-reverse 1.5s linear infinite;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white bg-black/60 backdrop-blur-md px-6 py-3 rounded-full text-sm md:text-base font-semibold shadow-2xl border border-white/10">
          <span className="text-white/90">{currentIndex + 1}</span>
          <span className="mx-2 text-white/50">/</span>
          <span className="text-white/70">{images.length}</span>
        </div>
      )}

      {/* Thumbnail Navigation (Optional - for better UX) */}
      {images.length > 1 && images.length <= 20 && (
        <div className={`absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 flex flex-col gap-2 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent z-20`}>
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (idx < currentIndex) {
                  for (let i = 0; i < currentIndex - idx; i++) onPrevious()
                } else if (idx > currentIndex) {
                  for (let i = 0; i < idx - currentIndex; i++) onNext()
                }
              }}
              className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                idx === currentIndex 
                  ? 'border-white scale-110 shadow-lg' 
                  : 'border-white/30 hover:border-white/60 hover:scale-105'
              }`}
            >
              <img
                src={img.src}
                alt={img.alt || `Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageLightbox
