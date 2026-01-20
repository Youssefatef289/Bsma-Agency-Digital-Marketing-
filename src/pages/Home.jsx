import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Palette, Megaphone, Share2, Video, Globe, CheckCircle, Star, TrendingUp, Users, Award } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'

const Home = () => {
  const { language, isTransitioning } = useLanguage()
  const t = translations[language]
  const isRTL = language === 'ar'
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight

  const services = [
    {
      icon: Palette,
      title: t.home.graphicDesign,
      description: t.home.graphicDesignDesc,
      color: 'from-purple-500 to-pink-500',
      image: '/image/service-design-animation.svg',
    },
    {
      icon: Megaphone,
      title: t.home.paidAdvertising,
      description: t.home.paidAdvertisingDesc,
      color: 'from-blue-500 to-cyan-500',
      image: '/image/service-advertising-animation.svg',
    },
    {
      icon: Share2,
      title: t.home.socialMedia,
      description: t.home.socialMediaDesc,
      color: 'from-green-500 to-emerald-500',
      image: '/image/service-social-animation.svg',
    },
    {
      icon: Video,
      title: t.home.videoProduction,
      description: t.home.videoProductionDesc,
      color: 'from-red-500 to-orange-500',
      image: '/image/service-video-animation.svg',
    },
    {
      icon: Globe,
      title: t.home.webDevelopment,
      description: t.home.webDevelopmentDesc,
      color: 'from-indigo-500 to-blue-500',
      image: '/image/service-web-animation.svg',
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
      title: language === 'en' ? 'Brand Identity Design' : 'تصميم الهوية البصرية',
      category: t.home.graphicDesign,
      image: '/image/Portfolio/Portfolio-Graphic Design/1.png',
    },
    {
      title: language === 'en' ? 'Modern Social Media Design' : 'تصميمات وسائل التواصل',
      category: t.home.graphicDesign,
      image: '/image/Portfolio/Portfolio-Graphic Design/2.png',
    },
    {
      title: language === 'en' ? 'Creative Campaign Design' : 'تصميم الحملات الإبداعية',
      category: t.home.graphicDesign,
      image: '/image/Portfolio/Portfolio-Graphic Design/3.png',
    },
    {
      title: language === 'en' ? 'Corporate Branding' : 'العلامات التجارية للشركات',
      category: t.home.graphicDesign,
      image: '/image/Portfolio/Portfolio-Graphic Design/Artboard 1.png',
    },
    {
      title: language === 'en' ? 'Visual Content Design' : 'تصميم المحتوى البصري',
      category: t.home.graphicDesign,
      image: '/image/Portfolio/Portfolio-Graphic Design/Artboard 2.png',
    },
    {
      title: language === 'en' ? 'Promotional Graphics' : 'الجرافيكس الترويجية',
      category: t.home.graphicDesign,
      image: '/image/Portfolio/Portfolio-Graphic Design/Artboard 3.png',
    },
  ]

  const testimonials = [
    {
      name: 'Ahmed Mohamed',
      company: language === 'en' ? 'Advanced Technology Co.' : 'شركة التقنية المتقدمة',
      text: language === 'en' 
        ? 'Very professional team that helped us increase our sales by 300% in 3 months. Thank you!'
        : 'فريق محترف جداً وساعدونا نزيد مبيعاتنا بنسبة 300% خلال 3 شهور. شكراً لكم!',
      rating: 5,
      image: '/image/logo - blue 2.png',
    },
    {
      name: 'Fatima Ali',
      company: language === 'en' ? 'Success Foundation' : 'مؤسسة النجاح',
      text: language === 'en'
        ? 'Excellent services and continuous follow-up. Our social media accounts became active and engaging.'
        : 'خدمات ممتازة ومتابعة مستمرة. حساباتنا على السوشيال ميديا بقيت نشطة ومتفاعلة.',
      rating: 5,
      image: '/image/Logo-bsma (1).png',
    },
    {
      name: 'Mohamed Khaled',
      company: language === 'en' ? 'Online Store' : 'متجر أونلاين',
      text: language === 'en'
        ? 'They designed a professional website and e-commerce store that helped us sell online easily. Highly recommended!'
        : 'صمموا لنا موقع احترافي ومتجر إلكتروني ساعدنا نبيع أونلاين بسهولة. أنصح بيهم!',
      rating: 5,
      image: '/image/Logo-bsma (2).png',
    },
  ]

  const stats = [
    { number: '50+', label: t.home.stats.satisfiedClients, icon: Users },
    { number: '100+', label: t.home.stats.successfulProjects, icon: Award },
    { number: '5+', label: t.home.stats.yearsExperience, icon: TrendingUp },
    { number: '24/7', label: t.home.stats.technicalSupport, icon: CheckCircle },
  ]

  return (
    <div className={`pt-20 transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at ${isRTL ? '20%' : '80%'} 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={`animate-fade-in ${isRTL ? 'lg:order-2' : ''}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {t.home.heroTitle}
                <span className="block text-blue-300 mt-2">{t.home.heroSubtitle}</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                {t.home.heroDescription}
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <Link
                  to="/contact"
                  className={`bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {t.nav.getStarted}
                  <ArrowIcon size={20} />
                </Link>
                <Link
                  to="/about"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
                >
                  {t.home.learnMore}
                </Link>
              </div>
            </div>
            
            <div className={`animate-slide-in-right hidden lg:block ${isRTL ? 'lg:order-1' : ''}`}>
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl transform ${isRTL ? 'rotate-6' : '-rotate-6'} opacity-20`}></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <img
                    src="/image/hero-animation.svg"
                    alt="Bama Agency Digital Marketing"
                    className="w-full h-auto opacity-90"
                  />
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
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                    <Icon className="text-blue-600" size={32} />
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
              {t.home.whyChoose} <span className="text-gradient">{language === 'en' ? 'Bama' : 'بصمة'}</span>?
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
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
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
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80`}></div>
                    <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center`}>
                      <Icon className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.home.portfolio} <span className="text-gradient">{t.home.portfolioTitle}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.home.portfolioDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-72 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500 ease-out"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content on hover */}
                  <div className={`absolute bottom-0 ${isRTL ? 'right-0 left-0' : 'left-0 right-0'} p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500`}>
                    <span className="inline-block px-4 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-full mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-white text-2xl font-bold leading-tight">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/portfolio"
              className={`inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:from-blue-700 hover:to-blue-800 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {language === 'ar' ? 'شاهد جميع الأعمال' : 'View All Portfolio'}
              <ArrowIcon size={20} />
            </Link>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
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
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
          >
            {t.home.contactUsNow}
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
