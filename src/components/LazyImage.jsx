import { useState, useRef, useEffect } from 'react'

const LazyImage = ({ src, alt, className, onError, ...props }) => {
  const [imageSrc, setImageSrc] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '100px',
        threshold: 0.01,
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
      observer.disconnect()
    }
  }, [src])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = (e) => {
    setHasError(true)
    setIsLoaded(true)
    if (onError) {
      onError(e)
    }
  }

  return (
    <div 
      ref={imgRef} 
      className={`relative overflow-hidden ${className?.includes('w-') ? '' : 'w-full'} ${className?.includes('h-') ? '' : 'h-full'}`}
    >
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse flex items-center justify-center z-10">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-purple-500/30 border-b-purple-500 rounded-full animate-spin-reverse"></div>
          </div>
        </div>
      )}
      
      {/* Image */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } ${className || ''}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          {...props}
        />
      )}
      
      {/* Placeholder when no src */}
      {!imageSrc && !hasError && (
        <div className={`w-full h-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse ${className || ''}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-400 rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      
      {/* Error State */}
      {hasError && (
        <div className={`w-full h-full bg-gray-200 flex items-center justify-center ${className || ''}`}>
          <div className="text-gray-400 text-sm">Failed to load</div>
        </div>
      )}
      
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
      `}</style>
    </div>
  )
}

export default LazyImage

