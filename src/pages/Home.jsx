import { Link } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'
import { ArrowRight, ArrowLeft, Palette, Megaphone, Share2, Video, Globe, CheckCircle, TrendingUp, Users, Award, ChevronLeft, ChevronRight, Star, Quote, Target, Zap, Shield, Heart, MessageCircle, Play, Code2, MonitorSmartphone, Facebook } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
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
      title: 'Brilliant Home',
      category: t.home.webDevelopment,
      image: '/image/Portfolio/Portfolio-Website/Brilliant Home.png',
      link: 'https://brilliant-home.vercel.app/',
      isExternal: true,
    },
    {
      title: 'Emaar',
      category: t.home.webDevelopment,
      image: '/image/Portfolio/Portfolio-Website/Emaar.png',
      link: 'https://emaar-company.vercel.app/',
      isExternal: true,
    },
    {
      title: 'Al Fadi',
      category: t.home.webDevelopment,
      image: '/image/Portfolio/Portfolio-Website/Al Fadi.png',
      link: 'https://al-fadi.vercel.app/',
      isExternal: true,
    },
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
    {
      title: 'Profile for Furniture and Antiques',
      category: t.home.webDevelopment,
      image: '/image/Portfolio/Portfolio-Website/profile-furniture.png',
      link: 'https://profile-for-furniture-and-antiques.vercel.app/',
      isExternal: true,
    },
    {
      title: 'Touch Furniture',
      category: t.home.webDevelopment,
      image: '/image/Portfolio/Portfolio-Website/touch-furniture.png',
      link: 'https://touch-furniture.vercel.app/',
      isExternal: true,
    },
  ]

  const clientLogos = [
    {
      name: 'Brillante Furniture',
      image: '/image/Portfolio/logos work company/Brillante Furniture.jpeg',
    },
    {
      name: 'Emaar',
      image: '/image/Portfolio/logos work company/Emaar.jpg',
    },
    {
      name: 'Mix',
      image: '/image/Portfolio/logos work company/mix.jpg',
    },
    {
      name: language === 'en' ? 'Al Fady' : 'الفادي',
      image: '/image/Portfolio/logos work company/الفادى.jpeg',
    },
    {
      name: language === 'en' ? 'Profile Furniture' : 'بروفايل للأثاث',
      image: '/image/Portfolio/logos work company/بروفايل للاثاث.jpg',
    },
  ]

  const videoReels = [
    {
      title: 'Al Fady Reel',
      src: '/image/Portfolio/Video & Reels Production/Al-fady.mp4',
    },
    {
      title: 'Brillante Furniture Reel 1',
      src: '/image/Portfolio/Video & Reels Production/Brillante Furniture (1).mp4',
    },
    {
      title: 'Brillante Furniture Reel 2',
      src: '/image/Portfolio/Video & Reels Production/Brillante Furniture (2).mp4',
    },
    {
      title: 'Emaar Reel 1',
      src: '/image/Portfolio/Video & Reels Production/Emaar (1).mp4',
    },
    {
      title: 'Emaar Reel 2',
      src: '/image/Portfolio/Video & Reels Production/Emaar (2).mp4',
    },
    {
      title: 'Emaar Reel 3',
      src: '/image/Portfolio/Video & Reels Production/Emaar (3).mp4',
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
      {/* Hero Section - Dark Neon Layout */}
      <section className={`hero-section ${isRTL ? 'hero-rtl' : ''}`}>
        <div className="hero-bg-glow"></div>
        <div className="hero-grid-pattern"></div>
        <div className="hero-content">
          <div className="hero-layout">
            <div className="hero-copy">
              <span className="hero-badge">{language === 'en' ? 'We leave our mark in your success' : 'نترك بصمة في نجاحك'}</span>
              <h1 className="hero-title">
                {language === 'en' ? 'Integrated Digital Solutions' : 'حلول رقمية متكاملة'}
                <span className="hero-subtitle">{language === 'en' ? 'That Build Growth for Your Business' : 'تصنع الفرق وتنمو بأعمالك'}</span>
              </h1>
              <p className="hero-description">
                {language === 'en'
                  ? 'We provide programming, website design, digital marketing, video production, and social media management professionally.'
                  : 'نقدم لك خدمات البرمجة، تصميم المواقع، التسويق الرقمي، إنتاج الفيديوهات، وإدارة صفحات فيسبوك باحترافية.'}
              </p>
              <div className={`hero-buttons ${isRTL ? 'hero-buttons-rtl' : ''}`}>
                <Link to="/contact" className="hero-btn-primary">
                  <span>{language === 'en' ? 'Discover Our Services' : 'استكشف خدماتنا'}</span>
                  <ArrowIcon size={18} />
                </Link>
                <Link to="/portfolio" className="hero-btn-secondary">
                  <span>{language === 'en' ? 'See Our Work' : 'شاهد أعمالنا'}</span>
                  <Play size={16} />
                </Link>
              </div>

              <div className="hero-services-strip">
                <div className="hero-service-item"><Code2 size={18} /><span>{language === 'en' ? 'Programming' : 'برمجة احترافية'}</span></div>
                <div className="hero-service-item"><MonitorSmartphone size={18} /><span>{language === 'en' ? 'Web Design' : 'تصميم مواقع'}</span></div>
                <div className="hero-service-item"><Megaphone size={18} /><span>{language === 'en' ? 'Digital Marketing' : 'تسويق رقمي'}</span></div>
                <div className="hero-service-item"><Play size={18} /><span>{language === 'en' ? 'Video Reels' : 'فيديوهات ترويجية'}</span></div>
                <div className="hero-service-item"><Facebook size={18} /><span>{language === 'en' ? 'Social Management' : 'إدارة صفحات فيسبوك'}</span></div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-laptop">
                <div className="hero-laptop-screen">
                  <div className="hero-screen-header">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="hero-screen-content">
                    <h4>{language === 'en' ? 'A Better Digital Future' : 'نحو مستقبل رقمي أفضل'}</h4>
                    <p>{language === 'en' ? 'Creative solutions for your business' : 'حلول إبداعية لعملك'}</p>
                    <div className="hero-screen-buttons">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="hero-laptop-base"></div>
              </div>

              <div className="hero-floating-card hero-card-top">{language === 'en' ? 'Programming' : 'برمجة'}</div>
              <div className="hero-floating-card hero-card-right">{language === 'en' ? 'Digital Marketing' : 'تسويق رقمي'}</div>
              <div className="hero-floating-card hero-card-left">{language === 'en' ? 'Web Design' : 'تصميم مواقع'}</div>
              <div className="hero-floating-card hero-card-mid-left">{language === 'en' ? 'Videos' : 'فيديوهات'}</div>
              <div className="hero-floating-card hero-card-bottom-right">{language === 'en' ? 'Facebook Pages' : 'إدارة صفحات فيسبوك'}</div>
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

      {/* Client Logos Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Our Clients Logos' : 'لوجوهات عملائنا'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'en'
                ? 'A selection of logo identities created for our clients'
                : 'مجموعة من اللوجوهات التي صممناها لعملائنا'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-square rounded-xl bg-white overflow-hidden flex items-center justify-center">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="w-full h-full object-contain p-2"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
                <p className="text-center text-sm font-semibold text-gray-700 mt-3">{logo.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Reels Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Video & Reels Production' : 'الفيديوهات والريلز'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Recent video production highlights for our clients'
                : 'أحدث أعمالنا في تصوير ومونتاج الفيديوهات لعملائنا'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoReels.map((video, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
                <video className="w-full h-80 object-cover bg-black" controls preload="metadata">
                  <source src={video.src} type="video/mp4" />
                  {language === 'en'
                    ? 'Your browser does not support the video tag.'
                    : 'متصفحك لا يدعم تشغيل الفيديو.'}
                </video>
                <div className="p-4">
                  <p className="font-semibold text-gray-800">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.home.testimonials} <span className="text-gradient">{t.home.clientsSay}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.home.testimonialsDescription}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: language === 'en' ? 'Ahmed Mohamed' : 'أحمد محمد',
                company: language === 'en' ? 'E-commerce Store Owner' : 'صاحب متجر إلكتروني',
                text: language === 'en' 
                  ? 'Bsma Agency helped us increase our online sales by 300% in just 3 months. Professional team and excellent results!'
                  : 'وكالة بصمة ساعدتنا في زيادة مبيعاتنا الإلكترونية بنسبة 300% في 3 أشهر فقط. فريق محترف ونتائج ممتازة!',
                rating: 5,
              },
              {
                name: language === 'en' ? 'Sara Ali' : 'سارة علي',
                company: language === 'en' ? 'Restaurant Owner' : 'صاحبة مطعم',
                text: language === 'en'
                  ? 'Their social media management service transformed our online presence. We now have thousands of engaged followers!'
                  : 'خدمة إدارة السوشيال ميديا الخاصة بهم غيرت وجودنا على الإنترنت. لدينا الآن آلاف المتابعين المتفاعلين!',
                rating: 5,
              },
              {
                name: language === 'en' ? 'Mohamed Hassan' : 'محمد حسن',
                company: language === 'en' ? 'Startup Founder' : 'مؤسس شركة ناشئة',
                text: language === 'en'
                  ? 'The website they built for us is modern, fast, and user-friendly. Highly recommended!'
                  : 'الموقع الذي بنوه لنا حديث وسريع وسهل الاستخدام. أنصح به بشدة!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <Quote className="text-purple-300 mb-3" size={32} />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'How We Work' : 'كيف نعمل'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Our proven process to deliver exceptional results'
                : 'عملنا المثبت لتقديم نتائج استثنائية'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: language === 'en' ? 'Discovery' : 'الاكتشاف',
                description: language === 'en' 
                  ? 'We understand your business goals and target audience'
                  : 'نفهم أهداف عملك وجمهورك المستهدف',
                icon: Target,
              },
              {
                step: '02',
                title: language === 'en' ? 'Strategy' : 'الاستراتيجية',
                description: language === 'en'
                  ? 'We create a customized marketing strategy for you'
                  : 'ننشئ استراتيجية تسويقية مخصصة لك',
                icon: Zap,
              },
              {
                step: '03',
                title: language === 'en' ? 'Execution' : 'التنفيذ',
                description: language === 'en'
                  ? 'We implement the strategy with precision and care'
                  : 'ننفذ الاستراتيجية بدقة وعناية',
                icon: Shield,
              },
              {
                step: '04',
                title: language === 'en' ? 'Results' : 'النتائج',
                description: language === 'en'
                  ? 'We track and optimize for continuous improvement'
                  : 'نتتبع ونحسن للتحسين المستمر',
                icon: Heart,
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 animate-slide-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                    {item.step}
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {language === 'en' ? 'Why Clients Trust Us' : 'لماذا يثق العملاء بنا'}
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: language === 'en' ? 'Quality Guaranteed' : 'جودة مضمونة',
                description: language === 'en' ? 'Premium services' : 'خدمات ممتازة',
              },
              {
                icon: Users,
                title: language === 'en' ? 'Expert Team' : 'فريق خبير',
                description: language === 'en' ? 'Professional experts' : 'خبراء محترفون',
              },
              {
                icon: TrendingUp,
                title: language === 'en' ? 'Proven Results' : 'نتائج مثبتة',
                description: language === 'en' ? 'Measurable success' : 'نجاح قابل للقياس',
              },
              {
                icon: CheckCircle,
                title: language === 'en' ? '24/7 Support' : 'دعم 24/7',
                description: language === 'en' ? 'Always available' : 'متاح دائماً',
              },
            ].map((badge, index) => {
              const Icon = badge.icon
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 mb-4">
                    <Icon className="text-purple-600" size={32} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{badge.title}</h4>
                  <p className="text-sm text-gray-600">{badge.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/image/logo - blue 2.png"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md mb-6">
            <Star className="text-yellow-300 fill-yellow-300" size={20} />
            <span className="text-sm font-medium">{language === 'en' ? 'Get Started Today' : 'ابدأ اليوم'}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t.home.readyToStart}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            {t.home.contactNow}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className={`inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all transform hover:scale-105 shadow-2xl ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <span>{t.home.contactUsNow}</span>
              <ArrowIcon size={20} />
            </Link>
            <a
              href="https://wa.me/201287661678"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-2xl ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <MessageCircle size={20} />
              <span>{language === 'en' ? 'Chat on WhatsApp' : 'تواصل عبر واتساب'}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
