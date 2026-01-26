import { Link } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'
import { ArrowRight, ArrowLeft, Palette, Megaphone, Share2, Video, Globe, CheckCircle, TrendingUp, Users, Award, ChevronLeft, ChevronRight, Bird } from 'lucide-react'
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
      {/* Hero Section - Clean White Background - Mobile Optimized */}
      <section className={`relative bg-white overflow-hidden min-h-[85vh] sm:min-h-[90vh] flex items-center pt-20 sm:pt-24 ${isRTL ? 'text-right' : 'text-left'}`}>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            {/* Text Content */}
            <div className={`animate-fade-in ${isRTL ? 'lg:col-start-2 lg:col-end-3' : 'lg:col-start-1 lg:col-end-2'}`}>
              {/* Badge - Animated */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 mb-6 animate-slide-up ${isRTL ? 'flex-row-reverse' : ''}`} style={{ animationDelay: '0.1s' }}>
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-purple-700">
                  {language === 'en' ? 'Digital Marketing Agency' : 'وكالة تسويق رقمي'}
                </span>
              </div>
              
              {/* Main Title - Animated - Mobile Optimized */}
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 text-gray-900 animate-slide-up ${isRTL ? 'text-right' : 'text-left'}`} style={{ animationDelay: '0.2s' }}>
                <span className="block mb-2">{t.home.heroTitle}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 mt-2 animate-gradient">
                  {t.home.heroSubtitle}
                </span>
              </h1>
              
              {/* Description - Animated - Mobile Optimized */}
              <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-10 leading-relaxed max-w-2xl animate-slide-up ${isRTL ? 'text-right ml-auto' : 'text-left'}`} style={{ animationDelay: '0.3s' }}>
                {t.home.heroDescription}
              </p>
              
              {/* Stats Preview - Animated - Mobile Optimized */}
              <div className={`mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-6 animate-slide-up ${isRTL ? 'justify-end' : 'justify-start'}`} style={{ animationDelay: '0.5s' }}>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">20+</div>
                  <div className="text-xs sm:text-sm text-gray-600">{language === 'en' ? 'Clients' : 'عميل'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">60+</div>
                  <div className="text-xs sm:text-sm text-gray-600">{language === 'en' ? 'Projects' : 'مشروع'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">2+</div>
                  <div className="text-xs sm:text-sm text-gray-600">{language === 'en' ? 'Years' : 'سنة'}</div>
                </div>
              </div>
            </div>
            
            {/* Image Content - Animated - Visible on All Screens */}
            <div className={`animate-slide-in-right ${isRTL ? 'lg:col-start-1 lg:col-end-2' : 'lg:col-start-2 lg:col-end-3'}`} style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* Image Container - Clean Design Without Shadow */}
                <div className="relative bg-white rounded-3xl p-4 lg:p-6 border-2 border-purple-100 overflow-hidden group transition-all duration-500">
                  {/* Hero Image - Animated */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/image/hero-animation.svg"
                      alt={language === 'en' ? 'Digital Marketing Agency' : 'وكالة تسويق رقمي'}
                      className="w-full h-auto object-cover animate-image-float group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        // Fallback to logo if hero image doesn't exist
                        e.target.src = '/image/logo - blue 2.png'
                      }}
                    />
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Floating Bird Icon - Animated */}
                  <div className={`absolute ${isRTL ? 'left-4' : 'right-4'} -top-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full animate-bounce flex items-center justify-center`}>
                    <Bird size={20} className="animate-float" />
                  </div>
                  
                  {/* Floating Badge - Animated */}
                  <div className={`absolute ${isRTL ? 'right-4' : 'left-4'} -bottom-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse`}>
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
