import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import ImageLightbox from '../components/ImageLightbox'

const Portfolio = () => {
  const { language, isTransitioning } = useLanguage()
  const isRTL = language === 'ar'
  const [searchParams, setSearchParams] = useSearchParams()

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState(() => {
    return searchParams.get('category') || 'all'
  })

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) {
      setSelectedCategory(category)
    }
  }, [searchParams])

  // Graphic Design Images
  const graphicDesignImages = [
    '/image/Portfolio/Portfolio-Graphic Design/1 (1).png',
    '/image/Portfolio/Portfolio-Graphic Design/1 (2).png',
    '/image/Portfolio/Portfolio-Graphic Design/1.png',
    '/image/Portfolio/Portfolio-Graphic Design/2 (1).png',
    '/image/Portfolio/Portfolio-Graphic Design/2 (2).png',
    '/image/Portfolio/Portfolio-Graphic Design/2.png',
    '/image/Portfolio/Portfolio-Graphic Design/3 (1).png',
    '/image/Portfolio/Portfolio-Graphic Design/3 (2).png',
    '/image/Portfolio/Portfolio-Graphic Design/3 (3).png',
    '/image/Portfolio/Portfolio-Graphic Design/3.png',
    '/image/Portfolio/Portfolio-Graphic Design/4 (1).png',
    '/image/Portfolio/Portfolio-Graphic Design/4.png',
    '/image/Portfolio/Portfolio-Graphic Design/5 (1).png',
    '/image/Portfolio/Portfolio-Graphic Design/5.png',
    '/image/Portfolio/Portfolio-Graphic Design/8.png',
    '/image/Portfolio/Portfolio-Graphic Design/9.png',
    '/image/Portfolio/Portfolio-Graphic Design/10.png',
    '/image/Portfolio/Portfolio-Graphic Design/13.png',
    '/image/Portfolio/Portfolio-Graphic Design/16.png',
    '/image/Portfolio/Portfolio-Graphic Design/17.png',
    '/image/Portfolio/Portfolio-Graphic Design/18.png',
    '/image/Portfolio/Portfolio-Graphic Design/Artboard 1.png',
    '/image/Portfolio/Portfolio-Graphic Design/Artboard 2 (1).png',
    '/image/Portfolio/Portfolio-Graphic Design/Artboard 2.png',
    '/image/Portfolio/Portfolio-Graphic Design/Artboard 3 (1).png',
    '/image/Portfolio/Portfolio-Graphic Design/Artboard 3.png',
    '/image/Portfolio/Portfolio-Graphic Design/Artboard 4.png',
    '/image/Portfolio/Portfolio-Graphic Design/ok.png',
    '/image/Portfolio/Portfolio-Graphic Design/التصميم.png',
    '/image/Portfolio/Portfolio-Graphic Design/اول شغل55.png',
    '/image/Portfolio/Portfolio-Graphic Design/تاريخ.png',
    '/image/Portfolio/Portfolio-Graphic Design/تصميم 1.png',
    '/image/Portfolio/Portfolio-Graphic Design/تصميم 22.png',
    '/image/Portfolio/Portfolio-Graphic Design/تصميم عيد الام.png',
    '/image/Portfolio/Portfolio-Graphic Design/تصميم ملابس.png',
    '/image/Portfolio/Portfolio-Graphic Design/تصميمات1.png',
    '/image/Portfolio/Portfolio-Graphic Design/تصميمات2.png',
    '/image/Portfolio/Portfolio-Graphic Design/تصميمات3.png',
    '/image/Portfolio/Portfolio-Graphic Design/تصميمات4.png',
    '/image/Portfolio/Portfolio-Graphic Design/نحلاوي4.png',
    '/image/Portfolio/Portfolio-Graphic Design/نحلاوي5.png',
    '/image/Portfolio/Portfolio-Graphic Design/هندسه4.png',
  ].map((src, index) => ({
    src,
    alt: `Graphic Design ${index + 1}`,
  }))

  // Website Projects
  const websiteProjects = [
    {
      image: '/image/Portfolio/Portfolio-Website/Brilliant Home.png',
      title: 'Brilliant Home',
      url: 'https://brilliant-home.vercel.app/',
      category: 'website',
    },
    {
      image: '/image/Portfolio/Portfolio-Website/Emaar.png',
      title: 'Emaar',
      url: 'https://emaar-company.vercel.app/',
      category: 'website',
    },
    {
      image: '/image/Portfolio/Portfolio-Website/Al Fadi.png',
      title: 'Al Fadi',
      url: 'https://al-fadi.vercel.app/',
      category: 'website',
    },
    {
      image: '/image/Portfolio/Portfolio-Website/Sky-Block.png',
      title: 'Sky Block',
      url: 'https://sky-block-mu.vercel.app/',
      category: 'website',
    },
    {
      image: '/image/Portfolio/Portfolio-Website/QAF BookStore (1).png',
      title: 'QAF BookStore',
      url: 'https://qafbookstore.github.io/Book-store-QAF/',
      category: 'website',
    },
    {
      image: '/image/Portfolio/Portfolio-Website/Mix-Kitcien.png',
      title: 'Mix Kitchens',
      url: 'https://mix-kitchens.vercel.app/',
      category: 'website',
    },
    {
      image: '/image/Portfolio/Portfolio-Website/lithioo-for-perfumes.png',
      title: 'Lithioo For Perfumes',
      url: 'https://lithioo-for-perfumes.vercel.app/',
      category: 'website',
    },
    {
      image: '/image/Portfolio/Portfolio-Website/farouja.png',
      title: 'Farouja',
      url: 'https://farouja.vercel.app/',
      category: 'website',
    },
    {
      image: '/image/Portfolio/Portfolio-Website/Al-Saad Company.png',
      title: 'Al Saad Company',
      url: 'https://youssefatef289.github.io/landing-page-saadalhussan/',
      category: 'website',
    },
    {
      image: '/image/Portfolio/Portfolio-Website/Herb Wonders.png',
      title: 'Herb Wonders',
      url: 'https://youssefatef289.github.io/Herb----Wonders/',
      category: 'website',
    },
    {
      image: '/image/Portfolio/Portfolio-Website/fashion-photography.png',
      title: 'Fashion Photography',
      url: '#',
      category: 'website',
    },
    {
      image: '/image/Portfolio/Portfolio-Website/profile-furniture.png',
      title: 'Profile for Furniture and Antiques',
      url: 'https://profile-for-furniture-and-antiques.vercel.app/',
      category: 'website',
    },
    {
      image: '/image/Portfolio/Portfolio-Website/touch-furniture.png',
      title: 'Touch Furniture',
      url: 'https://touch-furniture.vercel.app/',
      category: 'website',
    },
  ]

  // Client logos
  const clientLogos = [
    {
      image: '/image/Portfolio/logos work company/Brillante Furniture.jpeg',
      alt: language === 'en' ? 'Brillante Furniture Logo' : 'لوجو بريليانت فيرنتشر',
      name: 'Brillante Furniture',
    },
    {
      image: '/image/Portfolio/logos work company/Emaar.jpg',
      alt: language === 'en' ? 'Emaar Logo' : 'لوجو إعمار',
      name: 'Emaar',
    },
    {
      image: '/image/Portfolio/logos work company/mix.jpg',
      alt: language === 'en' ? 'Mix Logo' : 'لوجو ميكس',
      name: 'Mix',
    },
    {
      image: '/image/Portfolio/logos work company/الفادى.jpeg',
      alt: language === 'en' ? 'Al Fady Logo' : 'لوجو الفادي',
      name: 'Al Fady',
    },
    {
      image: '/image/Portfolio/logos work company/بروفايل للاثاث.jpg',
      alt: language === 'en' ? 'Profile Furniture Logo' : 'لوجو بروفايل للأثاث',
      name: language === 'en' ? 'Profile Furniture' : 'بروفايل للأثاث',
    },
  ]

  // Video reels
  const videoReels = [
    {
      src: '/image/Portfolio/Video & Reels Production/Al-fady.mp4',
      title: 'Al Fady Reel',
    },
    {
      src: '/image/Portfolio/Video & Reels Production/Brillante Furniture (1).mp4',
      title: 'Brillante Furniture Reel 1',
    },
    {
      src: '/image/Portfolio/Video & Reels Production/Brillante Furniture (2).mp4',
      title: 'Brillante Furniture Reel 2',
    },
    {
      src: '/image/Portfolio/Video & Reels Production/Emaar (1).mp4',
      title: 'Emaar Reel 1',
    },
    {
      src: '/image/Portfolio/Video & Reels Production/Emaar (2).mp4',
      title: 'Emaar Reel 2',
    },
    {
      src: '/image/Portfolio/Video & Reels Production/Emaar (3).mp4',
      title: 'Emaar Reel 3',
    },
  ]

  const categories = [
    { id: 'all', label: language === 'en' ? 'All' : 'الكل' },
    { id: 'graphic', label: language === 'en' ? 'Graphic Design' : 'الجرافيك ديزاين' },
    { id: 'website', label: language === 'en' ? 'Websites' : 'المواقع' },
    { id: 'logos', label: language === 'en' ? 'Client Logos' : 'لوجوهات العملاء' },
    { id: 'videos', label: language === 'en' ? 'Videos & Reels' : 'الفيديوهات والريلز' },
  ]

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    // Small delay for smooth transition
    setTimeout(() => {
      setLightboxOpen(true)
    }, 50)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => {
      const next = (prev + 1) % graphicDesignImages.length
      return next
    })
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => {
      const newIndex = (prev - 1 + graphicDesignImages.length) % graphicDesignImages.length
      return newIndex
    })
  }

  // Handle swipe gestures for mobile
  useEffect(() => {
    if (!lightboxOpen) return

    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX
    }

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX
      const swipeThreshold = 50
      const diff = touchStartX - touchEndX

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left - next image
          setCurrentImageIndex((prev) => (prev + 1) % graphicDesignImages.length)
        } else {
          // Swipe right - previous image
          setCurrentImageIndex((prev) => (prev - 1 + graphicDesignImages.length) % graphicDesignImages.length)
        }
      }
    }

    document.addEventListener('touchstart', handleTouchStart)
    document.addEventListener('touchend', handleTouchEnd)

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [lightboxOpen, graphicDesignImages.length])

  // Show all images
  const [showAllImages, setShowAllImages] = useState(false)
  const displayedGraphicImages = showAllImages ? graphicDesignImages : graphicDesignImages.slice(0, 12)

  return (
    <div className={`pt-20 transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {language === 'en' ? 'Our Portfolio' : 'معرض أعمالنا'}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Explore our creative work and successful projects'
                : 'استكشف أعمالنا الإبداعية والمشاريع الناجحة'}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-center gap-4 flex-wrap ${isRTL ? 'flex-row-reverse' : ''}`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id)
                  if (category.id === 'all') {
                    setSearchParams({})
                  } else {
                    setSearchParams({ category: category.id })
                  }
                }}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Design Section */}
      {(selectedCategory === 'all' || selectedCategory === 'graphic') && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Graphic Design' : 'الجرافيك ديزاين'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {language === 'en'
                  ? 'Professional designs that reflect brand identity'
                  : 'تصميمات احترافية تعكس هوية البراند'}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {displayedGraphicImages.map((image, index) => {
                const fullIndex = graphicDesignImages.findIndex(img => img.src === image.src)
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl bg-gray-200 aspect-square transform transition-all duration-700 ease-out hover:scale-[1.05] hover:shadow-2xl hover:z-10 animate-fade-in"
                    style={{ animationDelay: `${(index % 12) * 0.05}s` }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    </div>
                    {/* Border glow effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-xl transition-all duration-500"></div>
                  </div>
                )
              })}
            </div>

            {graphicDesignImages.length > 12 && !showAllImages && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowAllImages(true)}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  {language === 'en' ? `Load More (${graphicDesignImages.length - 12} more)` : `عرض المزيد (${graphicDesignImages.length - 12} صورة أخرى)`}
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Website Projects Section */}
      {(selectedCategory === 'all' || selectedCategory === 'website') && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Websites & Web Applications' : 'المواقع والتطبيقات'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {language === 'en'
                  ? 'Modern and responsive websites we\'ve developed'
                  : 'مواقع حديثة ومتجاوبة قمنا بتطويرها'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
              {websiteProjects.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative aspect-video w-full max-h-44 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-2 py-0.5 bg-blue-600 text-white text-xs rounded-full mb-1.5">
                        {language === 'en' ? 'Website' : 'موقع ويب'}
                      </span>
                      <h3 className="text-white text-base font-bold line-clamp-2 leading-snug">{project.title}</h3>
                      <p className="text-white/85 text-xs mt-1">
                        {language === 'en' ? 'Visit Website →' : 'زيارة الموقع ←'}
                      </p>
                    </div>
                  </div>
                  <div className={`px-3 py-2.5 border-t border-gray-100 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-sm font-bold text-gray-900 line-clamp-2 leading-snug">{project.title}</h3>
                    <p className="text-[11px] text-gray-500 mt-0.5">{language === 'en' ? 'Website' : 'موقع ويب'}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Client Logos Section */}
      {(selectedCategory === 'all' || selectedCategory === 'logos') && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Client Logos' : 'لوجوهات عملائنا'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {language === 'en'
                  ? 'Brand identities we crafted for our clients'
                  : 'هويات بصرية صممناها لعملائنا'}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
              {clientLogos.map((logo, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-2.5 sm:p-3 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  <div className="aspect-square max-h-24 sm:max-h-28 mx-auto w-full rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
                    <img
                      src={logo.image}
                      alt={logo.alt}
                      className="max-w-full max-h-full w-auto h-auto object-contain p-1.5"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                  <p className="text-center text-[11px] sm:text-xs font-medium text-gray-700 mt-2 line-clamp-2 leading-tight">{logo.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Video Reels Section */}
      {(selectedCategory === 'all' || selectedCategory === 'videos') && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Video & Reels Production' : 'إنتاج الفيديوهات والريلز'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {language === 'en'
                  ? 'Selected production reels from client campaigns'
                  : 'عينات من أعمال تصوير ومونتاج حملات العملاء'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
              {videoReels.map((video, index) => (
                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
                  <div className="relative w-full aspect-video bg-black max-h-52 sm:max-h-56">
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      controls
                      preload="metadata"
                      playsInline
                    >
                      <source src={video.src} type="video/mp4" />
                      {language === 'en'
                        ? 'Your browser does not support the video tag.'
                        : 'متصفحك لا يدعم تشغيل الفيديو.'}
                    </video>
                  </div>
                  <div className="p-3 bg-white border-t border-gray-100">
                    <p className="text-sm font-semibold text-gray-800 line-clamp-2">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={graphicDesignImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </div>
  )
}

export default Portfolio
