import { Link } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'
import { ArrowRight, ArrowLeft, Palette, Megaphone, Share2, Video, Globe, CheckCircle, TrendingUp, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import heroIllustration from '../assets/illustrations/hero-illustration.svg'
import svgPaidAds from '../assets/illustrations/service-paid-ads.svg'
import svgSocial from '../assets/illustrations/service-social-media.svg'
import svgVideo from '../assets/illustrations/service-video.svg'

const Home = () => {
  const { language, isTransitioning } = useLanguage()
  const t = translations[language]
  const isRTL = language === 'ar'
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight
  const PrevIcon = isRTL ? ChevronRight : ChevronLeft
  const NextIcon = isRTL ? ChevronLeft : ChevronRight

  const graphicSliderRef = useRef(null)
  const webSliderRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  const scrollSlider = (ref, dir) => {
    const el = ref?.current
    if (!el) return
    const cardWidth = window.innerWidth >= 1024 ? 420 : window.innerWidth >= 768 ? 340 : 280
    const gap = 16
    const amount = cardWidth + gap
    const direction = isRTL ? -dir : dir
    el.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return

    const graphicInterval = setInterval(() => {
      if (graphicSliderRef.current) {
        const el = graphicSliderRef.current
        const cardWidth = window.innerWidth >= 1024 ? 420 : window.innerWidth >= 768 ? 340 : 280
        const gap = 16
        const scrollAmount = cardWidth + gap
        const maxScroll = el.scrollWidth - el.clientWidth
        const currentScroll = el.scrollLeft

        if (currentScroll >= maxScroll - 10) {
          // Reset to start
          el.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          el.scrollBy({ left: isRTL ? -scrollAmount : scrollAmount, behavior: 'smooth' })
        }
      }
    }, 4000)

    const webInterval = setInterval(() => {
      if (webSliderRef.current) {
        const el = webSliderRef.current
        const cardWidth = window.innerWidth >= 1024 ? 420 : window.innerWidth >= 768 ? 340 : 280
        const gap = 16
        const scrollAmount = cardWidth + gap
        const maxScroll = el.scrollWidth - el.clientWidth
        const currentScroll = el.scrollLeft

        if (currentScroll >= maxScroll - 10) {
          // Reset to start
          el.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          el.scrollBy({ left: isRTL ? -scrollAmount : scrollAmount, behavior: 'smooth' })
        }
      }
    }, 4000)

    return () => {
      clearInterval(graphicInterval)
      clearInterval(webInterval)
    }
  }, [isPaused, isRTL])

  const services = [
    {
      icon: Palette,
      title: t.home.graphicDesign,
      description: t.home.graphicDesignDesc,
      color: 'from-purple-500 to-pink-500',
      image: '/image/Portfolio/Portfolio-Graphic Design/تصميمات1.png',
      portfolioLink: '/portfolio?category=graphic',
    },
    {
      icon: Megaphone,
      title: t.home.paidAdvertising,
      description: t.home.paidAdvertisingDesc,
      color: 'from-blue-500 to-cyan-500',
      image: svgPaidAds,
    },
    {
      icon: Share2,
      title: t.home.socialMedia,
      description: t.home.socialMediaDesc,
      color: 'from-green-500 to-emerald-500',
      image: svgSocial,
    },
    {
      icon: Video,
      title: t.home.videoProduction,
      description: t.home.videoProductionDesc,
      color: 'from-red-500 to-orange-500',
      image: svgVideo,
    },
    {
      icon: Globe,
      title: t.home.webDevelopment,
      description: t.home.webDevelopmentDesc,
      color: 'from-indigo-500 to-blue-500',
      image: '/image/Portfolio/Portfolio-Website/Sky-Block.png',
      portfolioLink: '/portfolio?category=website',
    },
  ]

  const features = [
    {
      text: t.home.professionalTeam,
      icon: Users,
    },
    {
      text: t.home.customizedStrategies,
      icon: TrendingUp,
    },
    {
      text: t.home.measurableResults,
      icon: Award,
    },
    {
      text: t.home.support247,
      icon: CheckCircle,
    },
  ]

  const portfolioItems = [
    {
      title: language === 'en' ? 'Graphic Design Project' : 'مشروع جرافيك ديزاين',
      category: t.home.graphicDesign,
      image: '/image/Portfolio/Portfolio-Graphic Design/تصميمات1.png',
      link: '/portfolio?category=graphic',
    },
    {
      title: language === 'en' ? 'Graphic Design Project' : 'مشروع جرافيك ديزاين',
      category: t.home.graphicDesign,
      image: '/image/Portfolio/Portfolio-Graphic Design/تصميمات2.png',
      link: '/portfolio?category=graphic',
    },
    {
      title: language === 'en' ? 'Graphic Design Project' : 'مشروع جرافيك ديزاين',
      category: t.home.graphicDesign,
      image: '/image/Portfolio/Portfolio-Graphic Design/تصميمات3.png',
      link: '/portfolio?category=graphic',
    },
    {
      title: language === 'en' ? 'Graphic Design Project' : 'مشروع جرافيك ديزاين',
      category: t.home.graphicDesign,
      image: '/image/Portfolio/Portfolio-Graphic Design/تصميمات4.png',
      link: '/portfolio?category=graphic',
    },
    {
      title: language === 'en' ? 'Graphic Design Project' : 'مشروع جرافيك ديزاين',
      category: t.home.graphicDesign,
      image: '/image/Portfolio/Portfolio-Graphic Design/Artboard 1.png',
      link: '/portfolio?category=graphic',
    },
    {
      title: language === 'en' ? 'Graphic Design Project' : 'مشروع جرافيك ديزاين',
      category: t.home.graphicDesign,
      image: '/image/Portfolio/Portfolio-Graphic Design/Artboard 2.png',
      link: '/portfolio?category=graphic',
    },
    {
      title: language === 'en' ? 'Graphic Design Project' : 'مشروع جرافيك ديزاين',
      category: t.home.graphicDesign,
      image: '/image/Portfolio/Portfolio-Graphic Design/Artboard 3.png',
      link: '/portfolio?category=graphic',
    },
    {
      title: language === 'en' ? 'Graphic Design Project' : 'مشروع جرافيك ديزاين',
      category: t.home.graphicDesign,
      image: '/image/Portfolio/Portfolio-Graphic Design/Artboard 4.png',
      link: '/portfolio?category=graphic',
    },
    {
      title: language === 'en' ? 'Graphic Design Project' : 'مشروع جرافيك ديزاين',
      category: t.home.graphicDesign,
      image: '/image/Portfolio/Portfolio-Graphic Design/1.png',
      link: '/portfolio?category=graphic',
    },
  ]

  const websiteProjects = [
    {
      title: 'Sky Block',
      category: t.home.webDevelopment,
      image: '/image/Portfolio/Portfolio-Website/Sky-Block.png',
      link: 'https://sky-block-mu.vercel.app/',
      isExternal: true,
    },
    {
      title: 'QAF BookStore',
      category: t.home.webDevelopment,
      image: '/image/Portfolio/Portfolio-Website/QAF BookStore (1).png',
      link: 'https://qafbookstore.github.io/Book-store-QAF/',
      isExternal: true,
    },
    {
      title: 'Mix Kitchens',
      category: t.home.webDevelopment,
      image: '/image/Portfolio/Portfolio-Website/Mix-Kitcien.png',
      link: 'https://mix-kitchens.vercel.app/',
      isExternal: true,
    },
    {
      title: 'Lithioo For Perfumes',
      category: t.home.webDevelopment,
      image: '/image/Portfolio/Portfolio-Website/lithioo-for-perfumes.png',
      link: 'https://lithioo-for-perfumes.vercel.app/',
      isExternal: true,
    },
    {
      title: 'Farouja',
      category: t.home.webDevelopment,
      image: '/image/Portfolio/Portfolio-Website/farouja.png',
      link: 'https://farouja.vercel.app/',
      isExternal: true,
    },
    {
      title: 'Al Saad Company',
      category: t.home.webDevelopment,
      image: '/image/Portfolio/Portfolio-Website/Al-Saad Company.png',
      link: 'https://youssefatef289.github.io/landing-page-saadalhussan/',
      isExternal: true,
    },
    {
      title: 'Herb Wonders',
      category: t.home.webDevelopment,
      image: '/image/Portfolio/Portfolio-Website/Herb Wonders.png',
      link: 'https://youssefatef289.github.io/Herb----Wonders/',
      isExternal: true,
    },
  ]

  const stats = [
    { number: '20+', label: t.home.stats.satisfiedClients, icon: Users },
    { number: '60+', label: t.home.stats.successfulProjects, icon: Award },
    { number: '2+', label: t.home.stats.yearsExperience, icon: TrendingUp },
    { number: '24/7', label: t.home.stats.technicalSupport, icon: CheckCircle },
  ]

  return (
    <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      {/* Hero Section - Merged with Navbar */}
      <section className={`relative bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 text-white overflow-hidden min-h-[100vh] flex items-center pt-20 ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 opacity-60">
          <img
            src={heroIllustration}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at ${isRTL ? '20%' : '80%'} 50%, rgba(168, 85, 247, 0.4) 0%, transparent 60%)`,
        }}></div>
        
        {/* Animated Blob Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} top-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse`}></div>
          <div className={`absolute ${isRTL ? 'right-0' : 'left-0'} bottom-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            {/* Text Content */}
            <div className={`animate-fade-in ${isRTL ? 'lg:col-start-2 lg:col-end-3' : 'lg:col-start-1 lg:col-end-2'}`}>
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-purple-200">
                  {language === 'en' ? 'Digital Marketing Agency' : 'وكالة تسويق رقمي'}
                </span>
              </div>
              
              {/* Main Title */}
              <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                <span className="block mb-2">{t.home.heroTitle}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 mt-2">
                  {t.home.heroSubtitle}
                </span>
              </h1>
              
              {/* Description */}
              <p className={`text-lg md:text-xl lg:text-2xl text-purple-100 mb-10 leading-relaxed max-w-2xl ${isRTL ? 'text-right ml-auto' : 'text-left'}`}>
                {t.home.heroDescription}
              </p>
              
              {/* Buttons - Better Organized */}
              <div className={`flex flex-col sm:flex-row gap-4 items-start ${isRTL ? 'sm:flex-row-reverse sm:justify-end' : 'sm:justify-start'}`}>
                <Link
                  to="/contact"
                  className={`group relative bg-gradient-to-r from-white to-purple-50 text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 min-w-[200px] ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <span>{t.nav.getStarted}</span>
                  <ArrowIcon size={20} className="group-hover:translate-x-1 transition-transform" style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }} />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity"></div>
                </Link>
                <Link
                  to="/about"
                  className={`group relative bg-transparent border-2 border-white/80 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-3 min-w-[200px] ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <span>{t.home.learnMore}</span>
                  <div className="absolute inset-0 border-2 border-purple-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
              </div>
              
              {/* Stats Preview */}
              <div className={`mt-12 flex flex-wrap gap-6 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">20+</div>
                  <div className="text-sm text-purple-200">{language === 'en' ? 'Clients' : 'عميل'}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">60+</div>
                  <div className="text-sm text-purple-200">{language === 'en' ? 'Projects' : 'مشروع'}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">2+</div>
                  <div className="text-sm text-purple-200">{language === 'en' ? 'Years' : 'سنة'}</div>
                </div>
              </div>
            </div>
            
            {/* Image Content with Business Man SVG */}
            <div className={`animate-slide-in-right hidden lg:block ${isRTL ? 'lg:col-start-1 lg:col-end-2' : 'lg:col-start-2 lg:col-end-3'}`}>
              <div className="relative">
                {/* Decorative Background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 rounded-3xl transform ${isRTL ? 'rotate-6' : '-rotate-6'} opacity-20 blur-xl`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl transform ${isRTL ? 'rotate-3' : '-rotate-3'} opacity-30`}></div>
                
                {/* Image Container */}
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white/20 shadow-2xl overflow-hidden">
                  {/* Business Man SVG - Professional Design */}
                  <svg
                    viewBox="0 0 400 500"
                    className="w-full h-auto"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7" stopOpacity="1" />
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="1" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f97316" stopOpacity="1" />
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="1" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Background Glow */}
                    <circle cx="200" cy="250" r="180" fill="url(#gradient1)" opacity="0.2" />
                    
                    {/* Head with Hair */}
                    <circle cx="200" cy="120" r="45" fill="#fff" opacity="0.95" />
                    <path d="M 155 100 Q 200 80 245 100 Q 240 90 200 85 Q 160 90 155 100" fill="#4a5568" opacity="0.8" />
                    
                    {/* Face Features */}
                    <circle cx="185" cy="115" r="3" fill="#2d3748" />
                    <circle cx="215" cy="115" r="3" fill="#2d3748" />
                    <path d="M 185 130 Q 200 135 215 130" stroke="#2d3748" strokeWidth="2" fill="none" strokeLinecap="round" />
                    
                    {/* Body - Professional Suit */}
                    <path
                      d="M 150 200 Q 150 190 160 185 L 200 175 L 240 185 Q 250 190 250 200 L 250 380 L 150 380 Z"
                      fill="url(#gradient1)"
                      opacity="0.95"
                    />
                    
                    {/* Suit Collar */}
                    <path d="M 180 200 L 200 185 L 220 200" stroke="#fff" strokeWidth="3" fill="none" />
                    
                    {/* Tie */}
                    <path d="M 200 185 L 195 250 L 205 250 Z" fill="#fff" opacity="0.9" />
                    <rect x="197" y="250" width="6" height="90" fill="#fff" opacity="0.9" rx="3" />
                    <path d="M 197 340 Q 200 350 203 340" fill="#fff" opacity="0.9" />
                    
                    {/* Left Arm */}
                    <ellipse cx="125" cy="280" rx="22" ry="55" fill="url(#gradient1)" opacity="0.95" />
                    <circle cx="125" cy="335" r="18" fill="#fff" opacity="0.95" />
                    
                    {/* Right Arm with Briefcase */}
                    <ellipse cx="275" cy="280" rx="22" ry="55" fill="url(#gradient1)" opacity="0.95" />
                    <circle cx="275" cy="335" r="18" fill="#fff" opacity="0.95" />
                    
                    {/* Briefcase */}
                    <rect x="285" y="340" width="50" height="35" fill="url(#gradient2)" opacity="0.95" rx="2" />
                    <rect x="290" y="345" width="40" height="25" fill="#fff" opacity="0.4" />
                    <line x1="310" y1="340" x2="310" y2="375" stroke="#fff" strokeWidth="1.5" opacity="0.6" />
                    <circle cx="300" cy="350" r="2" fill="#fff" opacity="0.6" />
                    <circle cx="320" cy="350" r="2" fill="#fff" opacity="0.6" />
                    
                    {/* Legs */}
                    <rect x="165" y="380" width="28" height="95" fill="url(#gradient2)" opacity="0.95" rx="3" />
                    <rect x="207" y="380" width="28" height="95" fill="url(#gradient2)" opacity="0.95" rx="3" />
                    
                    {/* Shoes */}
                    <ellipse cx="179" cy="480" rx="18" ry="7" fill="#1a1a1a" opacity="0.95" />
                    <ellipse cx="221" cy="480" rx="18" ry="7" fill="#1a1a1a" opacity="0.95" />
                    
                    {/* Success Icons - Animated */}
                    <g filter="url(#glow)">
                      <circle cx="90" cy="140" r="22" fill="url(#gradient1)" opacity="0.7">
                        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="90" y="148" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold">✓</text>
                      
                      <circle cx="310" cy="140" r="22" fill="url(#gradient2)" opacity="0.7">
                        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="0.5s" repeatCount="indefinite" />
                      </circle>
                      <text x="310" y="148" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold">↑</text>
                      
                      <circle cx="90" cy="360" r="22" fill="url(#gradient2)" opacity="0.7">
                        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="1s" repeatCount="indefinite" />
                      </circle>
                      <text x="90" y="368" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold">★</text>
                      
                      <circle cx="310" cy="360" r="22" fill="url(#gradient1)" opacity="0.7">
                        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="1.5s" repeatCount="indefinite" />
                      </circle>
                      <text x="310" y="368" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold">📈</text>
                    </g>
                    
                    {/* Decorative Lines */}
                    <path d="M 200 50 Q 250 100 200 150" stroke="url(#gradient1)" strokeWidth="2" fill="none" opacity="0.3" />
                    <path d="M 200 350 Q 150 400 200 450" stroke="url(#gradient2)" strokeWidth="2" fill="none" opacity="0.3" />
                  </svg>
                  
                  {/* Floating Badge */}
                  <div className={`absolute ${isRTL ? 'left-4' : 'right-4'} -top-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce`}>
                    {language === 'en' ? '✨ Premium Quality' : '✨ جودة ممتازة'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 mb-4">
                    <Icon className="text-purple-600" size={32} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.home.whyChoose} <span className="text-gradient">{language === 'en' ? 'Bsma' : 'بصمة'}</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <p className="text-gray-800 font-medium">{feature.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.home.ourServices} <span className="text-gradient">{t.home.professionalServices}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.home.servicesDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-up group border border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="relative h-56 bg-gray-100 overflow-hidden">
                    <img
                      src={service.image || service.fallbackImage}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        if (service.fallbackImage && e.currentTarget.src !== service.fallbackImage) {
                          e.currentTarget.src = service.fallbackImage
                          return
                        }
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                    {/* Overlay gradient (light) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>

                    {/* Icon */}
                    <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} w-12 h-12 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center shadow`}>
                      <Icon className="text-purple-600" size={24} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      {service.description}
                    </p>
                    {service.portfolioLink && (
                      <Link
                        to={service.portfolioLink}
                        className={`inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                      >
                        <span>{language === 'en' ? 'View Portfolio' : 'عرض المعرض'}</span>
                        <ArrowIcon size={16} />
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.home.portfolio} <span className="text-gradient">{t.home.portfolioTitle}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              {t.home.portfolioDescription}
            </p>
            <Link
              to="/portfolio"
              className={`inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors text-lg ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {language === 'en' ? 'View Full Portfolio' : 'عرض المعرض الكامل'}
              <ArrowIcon size={20} />
            </Link>
          </div>

          {/* Graphic Design Portfolio */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                {t.home.graphicDesign}
              </h3>
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <button
                  type="button"
                  onClick={() => {
                    setIsPaused(true)
                    scrollSlider(graphicSliderRef, -1)
                    setTimeout(() => setIsPaused(false), 5000)
                  }}
                  className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-purple-500 transition-all flex items-center justify-center group"
                  aria-label="Previous"
                >
                  <PrevIcon size={20} className="text-gray-600 group-hover:text-purple-600 transition-colors" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsPaused(true)
                    scrollSlider(graphicSliderRef, 1)
                    setTimeout(() => setIsPaused(false), 5000)
                  }}
                  className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-purple-500 transition-all flex items-center justify-center group"
                  aria-label="Next"
                >
                  <NextIcon size={20} className="text-gray-600 group-hover:text-purple-600 transition-colors" />
                </button>
              </div>
            </div>

            <div
              ref={graphicSliderRef}
              className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {portfolioItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 snap-start flex-shrink-0 w-[280px] sm:w-[340px] lg:w-[420px] transform hover:-translate-y-2"
                >
                  <div className="relative h-[320px] sm:h-[380px] lg:h-[460px] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} right-0 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500`}>
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-lg mb-3">
                        {t.home.graphicDesign}
                      </div>
                      <h4 className="text-white text-xl font-bold">{item.title}</h4>
                      <p className="text-white/90 text-sm mt-2">
                        {language === 'en' ? 'Click to view more' : 'اضغط لعرض المزيد'}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Website Projects */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                {t.home.webDevelopment}
              </h3>
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <button
                  type="button"
                  onClick={() => {
                    setIsPaused(true)
                    scrollSlider(webSliderRef, -1)
                    setTimeout(() => setIsPaused(false), 5000)
                  }}
                  className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-purple-500 transition-all flex items-center justify-center group"
                  aria-label="Previous"
                >
                  <PrevIcon size={20} className="text-gray-600 group-hover:text-purple-600 transition-colors" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsPaused(true)
                    scrollSlider(webSliderRef, 1)
                    setTimeout(() => setIsPaused(false), 5000)
                  }}
                  className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-purple-500 transition-all flex items-center justify-center group"
                  aria-label="Next"
                >
                  <NextIcon size={20} className="text-gray-600 group-hover:text-purple-600 transition-colors" />
                </button>
              </div>
            </div>

            <div
              ref={webSliderRef}
              className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {websiteProjects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 snap-start flex-shrink-0 w-[280px] sm:w-[340px] lg:w-[420px] transform hover:-translate-y-2"
                >
                  <div className="relative h-[320px] sm:h-[380px] lg:h-[460px] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} right-0 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500`}>
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-lg mb-3">
                        {t.home.webDevelopment}
                      </div>
                      <h4 className="text-white text-xl font-bold mb-2">{project.title}</h4>
                      <p className="text-white/90 text-sm flex items-center gap-2">
                        {language === 'en' ? 'Visit Website →' : 'زيارة الموقع ←'}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/image/logo - blue 2.png"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.home.readyToStart}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t.home.contactNow}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-purple-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg"
          >
            {t.home.contactUsNow}
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
