import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTelegram, FaWhatsapp, FaTiktok, FaSnapchat } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'

const Footer = () => {
  const { language, isTransitioning } = useLanguage()
  const t = translations[language]
  const isRTL = language === 'ar'
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-500' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: FaYoutube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
    { icon: FaTelegram, href: '#', label: 'Telegram', color: 'hover:bg-blue-500' },
    { icon: FaWhatsapp, href: '#', label: 'WhatsApp', color: 'hover:bg-green-500' },
    { icon: FaTiktok, href: '#', label: 'TikTok', color: 'hover:bg-black' },
    { icon: FaSnapchat, href: '#', label: 'Snapchat', color: 'hover:bg-yellow-400' },
  ]

  return (
    <footer className={`footer transition-all duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-company">
            <img
              src="/image/logo-white.png"
              alt="Bsma Agency Digital Marketing"
              className="footer-logo"
            />
            <p className="footer-description">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-section-title">{t.footer.quickLinks}</h3>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-section-title">{t.footer.ourServices}</h3>
            <ul className="footer-services">
              <li className="footer-service-item">
                {t.home.graphicDesign}
              </li>
              <li className="footer-service-item">
                {t.home.paidAdvertising}
              </li>
              <li className="footer-service-item">
                {t.home.socialMedia}
              </li>
              <li className="footer-service-item">
                {t.home.videoProduction}
              </li>
              <li className="footer-service-item">
                {t.home.webDevelopment}
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="footer-section-title">{t.footer.contactUs}</h3>
            <ul className="footer-contact">
              <li className={`footer-contact-item ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                <Phone size={18} className="footer-contact-icon" />
                <span className="footer-contact-text">+20 XXX XXX XXXX</span>
              </li>
              <li className={`footer-contact-item ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                <Mail size={18} className="footer-contact-icon" />
                <span className="footer-contact-text">info@bsma-agency.com</span>
              </li>
              <li className={`footer-contact-item ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                <MapPin size={18} className="footer-contact-icon" />
                <span className="footer-contact-text">{language === 'en' ? 'Egypt' : 'مصر'}</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className={`footer-social grid grid-cols-4 gap-3 ${isRTL ? 'space-x-reverse' : ''}`}>
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`footer-social-link ${social.color} transition-all duration-300 transform hover:scale-110`}
                    aria-label={social.label}
                  >
                    <Icon size={20} className="footer-social-icon" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {language === 'en' ? 'Bama Digital Marketing Agency' : 'بصمة للتسويق الرقمي'}. {t.footer.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
