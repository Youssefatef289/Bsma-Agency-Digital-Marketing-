import { useEffect, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  useEffect(() => {
    // Simulate loading progress with realistic timing
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsVisible(false)
          }, 300)
          return 100
        }
        // Slower at the end for more realistic feel
        const increment = prev < 80 ? 3 : 1
        return Math.min(prev + increment, 100)
      })
    }, 40)

    return () => {
      clearInterval(interval)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 flex items-center justify-center overflow-hidden transition-all duration-700 ${
        !isVisible ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Logo or Brand Name with Glow Effect */}
        <div className="mb-10 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-3 drop-shadow-2xl animate-fade-in">
            {isRTL ? 'بصمة' : 'Bsma'}
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 font-medium animate-pulse">
            {isRTL ? 'للتسويق الرقمي' : 'Digital Marketing'}
          </p>
        </div>

        {/* Modern Animated Logo/Icon */}
        <div className="relative mb-12">
          <div className="w-28 h-28 md:w-36 md:h-36 relative">
            {/* Outer Ring - Rotating */}
            <div className="absolute inset-0 border-4 border-transparent border-t-purple-400 border-r-pink-400 rounded-full animate-spin-slow"></div>
            {/* Middle Ring - Counter Rotating */}
            <div className="absolute inset-3 border-4 border-transparent border-b-orange-400 border-l-purple-400 rounded-full animate-spin-reverse"></div>
            {/* Inner Circle with Gradient */}
            <div className="absolute inset-6 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-10 h-10 bg-white rounded-full animate-pulse"></div>
            </div>
            {/* Center Dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Modern Progress Bar */}
        <div className="w-72 md:w-96 h-3 bg-white/10 rounded-full overflow-hidden mb-4 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>

        {/* Progress Text */}
        <p className="text-white/90 text-lg font-bold mb-2">
          {progress}%
        </p>

        {/* Loading Text with Dots Animation */}
        <p className="text-purple-200 text-sm md:text-base font-medium mt-2">
          {isRTL ? 'جاري التحميل' : 'Loading'}
          <span className="inline-block animate-dots">
            <span>.</span>
            <span className="animation-delay-200">.</span>
            <span className="animation-delay-400">.</span>
          </span>
        </p>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-spin-reverse {
          animation: spin-reverse 2s linear infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        @keyframes dots {
          0%, 20% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        .animate-dots span {
          animation: dots 1.5s infinite;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  )
}

export default LoadingScreen

