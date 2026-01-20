import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'

const Footer = () => {
  const { language, isTransitioning } = useLanguage()
  const t = translations[language]
  const isRTL = language === 'ar'
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className={`bg-gray-900 text-gray-300 transition-all duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="/image/logo-white 2.png"
              alt="Bama Agency Digital Marketing"
              className="h-12 w-auto object-contain"
            />
            <p className="text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t.footer.ourServices}</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                {t.home.graphicDesign}
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                {t.home.paidAdvertising}
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                {t.home.socialMedia}
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                {t.home.videoProduction}
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                {t.home.webDevelopment}
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t.footer.contactUs}</h3>
            <ul className="space-y-3">
              <li className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                <Phone size={18} className="text-blue-400" />
                <span className="text-sm">+20 XXX XXX XXXX</span>
              </li>
              <li className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                <Mail size={18} className="text-blue-400" />
                <span className="text-sm">info@bsma-agency.com</span>
              </li>
              <li className={`flex items-start ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                <MapPin size={18} className="text-blue-400 mt-1" />
                <span className="text-sm">{language === 'en' ? 'Egypt' : 'مصر'}</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className={`flex ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'} mt-6`}>
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} {language === 'en' ? 'Bama Digital Marketing Agency' : 'بصمة للتسويق الرقمي'}. {t.footer.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
