import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import ImageLightbox from '../components/ImageLightbox'

const Portfolio = () => {
  const { language, isTransitioning } = useLanguage()
  const t = translations[language]
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
  ]

  const categories = [
    { id: 'all', label: language === 'en' ? 'All' : 'الكل' },
    { id: 'graphic', label: language === 'en' ? 'Graphic Design' : 'الجرافيك ديزاين' },
    { id: 'website', label: language === 'en' ? 'Websites' : 'المواقع' },
  ]

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % graphicDesignImages.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + graphicDesignImages.length) % graphicDesignImages.length)
  }

  // Show all images in grid, but limit initial display
  const displayedGraphicImages = graphicDesignImages.slice(0, 12)

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

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {displayedGraphicImages.map((image, index) => {
                const fullIndex = graphicDesignImages.findIndex(img => img.src === image.src)
                return (
                  <div
                    key={index}
                    onClick={() => openLightbox(fullIndex >= 0 ? fullIndex : index)}
                    className="group relative overflow-hidden rounded-lg cursor-pointer bg-gray-200 aspect-square"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium">
                        {language === 'en' ? 'Click to view' : 'اضغط للعرض'}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {graphicDesignImages.length > 12 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => {
                    setCurrentImageIndex(0)
                    setLightboxOpen(true)
                  }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
                >
                  {language === 'en' ? `View All ${graphicDesignImages.length} Images` : `عرض جميع الصور (${graphicDesignImages.length})`}
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {websiteProjects.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-2">
                        {language === 'en' ? 'Website' : 'موقع ويب'}
                      </span>
                      <h3 className="text-white text-xl font-bold">{project.title}</h3>
                      <p className="text-white/80 text-sm mt-2">
                        {language === 'en' ? 'Visit Website →' : 'زيارة الموقع ←'}
                      </p>
                    </div>
                  </div>
                </a>
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
