import { CheckCircle, Target, Eye, Users, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'

const About = () => {
  const { language, isTransitioning } = useLanguage()
  const t = translations[language]
  const isRTL = language === 'ar'

  const values = [
    {
      icon: Target,
      title: t.about.vision,
      description: t.about.visionDesc,
    },
    {
      icon: Eye,
      title: t.about.mission,
      description: t.about.missionDesc,
    },
    {
      icon: Users,
      title: t.about.team,
      description: t.about.teamDesc,
    },
    {
      icon: Award,
      title: t.about.experience,
      description: t.about.experienceDesc,
    },
  ]

  const stats = [
    { number: '50+', label: t.home.stats.satisfiedClients },
    { number: '100+', label: t.home.stats.successfulProjects },
    { number: '5+', label: t.home.stats.yearsExperience },
    { number: '24/7', label: t.home.stats.technicalSupport },
  ]

  return (
    <div className={`pt-20 transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.about.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={`animate-slide-up ${isRTL ? 'lg:order-2' : ''}`}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t.about.ourStory}
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>{t.about.story1}</p>
                <p>{t.about.story2}</p>
                <p>{t.about.story3}</p>
              </div>
            </div>
            <div className={`animate-slide-in-right ${isRTL ? 'lg:order-1' : ''}`}>
              <img
                src="/image/logo - blue 2.png"
                alt="Bama Agency Digital Marketing"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.about.visionMission}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.about.whyChoose} <span className="text-gradient">{language === 'en' ? 'Bama' : 'بصمة'}</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              t.about.reason1,
              t.about.reason2,
              t.about.reason3,
              t.about.reason4,
              t.about.reason5,
              t.about.reason6,
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} bg-blue-50 p-4 rounded-lg animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="text-blue-600 flex-shrink-0" size={24} />
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.about.readyToStart}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t.about.contactDescription}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            {t.about.contactUsNow}
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
