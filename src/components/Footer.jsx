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
    { icon: FaFacebook, href: 'https://www.facebook.com/share/1GzGm9TnRN/', label: 'Facebook', color: 'hover:bg-[#1877F2]' },
    { icon: FaInstagram, href: 'https://www.instagram.com/ma8535128?igsh=NXF1ejJpdGxsdTRs', label: 'Instagram', color: 'hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45]' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-[#0077B5]' },
    { icon: FaYoutube, href: '#', label: 'YouTube', color: 'hover:bg-[#FF0000]' },
    { icon: FaTelegram, href: '#', label: 'Telegram', color: 'hover:bg-[#0088CC]' },
    { icon: FaWhatsapp, href: '#', label: 'WhatsApp', color: 'hover:bg-[#25D366]' },
    { icon: FaTiktok, href: 'https://www.tiktok.com/@bsmabsma116?_r=1&_t=ZS-93G9HOx1ria', label: 'TikTok', color: 'hover:bg-[#000000]' },
    { icon: FaSnapchat, href: '#', label: 'Snapchat', color: 'hover:bg-[#FFFC00] hover:text-black' },
  ]

  return (
    <footer className={`footer transition-all duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
      {/* Decorative Top Border */}
      <div className="footer-top-border"></div>
      
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-company">
            <div className="footer-logo-wrapper">
              <img
                src="/image/logo-white.png"
                alt="Bsma Agency Digital Marketing"
                className="footer-logo"
                onError={(e) => {
                  e.target.src = "/image/logo - blue 2.png"
                  e.target.style.filter = 'brightness(0) invert(1)'
                }}
              />
            </div>
            <p className="footer-description">
              {t.footer.description}
            </p>
            
            {/* Social Media - Moved to Company Section */}
            <div className="footer-social-main">
              <h4 className="footer-social-title">{language === 'en' ? 'Follow Us' : 'تابعنا'}</h4>
              <div className={`footer-social-grid ${isRTL ? 'flex-row-reverse' : ''}`}>
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`footer-social-link-main ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                      aria-label={social.label}
                    >
                      <Icon size={20} className="footer-social-icon" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-section-title">{t.footer.quickLinks}</h3>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  <span className="footer-link-icon">→</span>
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  <span className="footer-link-icon">→</span>
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="footer-link">
                  <span className="footer-link-icon">→</span>
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  <span className="footer-link-icon">→</span>
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-section-title">{t.footer.ourServices}</h3>
            <ul className="footer-services">
              <li className="footer-service-item">
                <span className="footer-service-icon">✓</span>
                {t.home.graphicDesign}
              </li>
              <li className="footer-service-item">
                <span className="footer-service-icon">✓</span>
                {t.home.paidAdvertising}
              </li>
              <li className="footer-service-item">
                <span className="footer-service-icon">✓</span>
                {t.home.socialMedia}
              </li>
              <li className="footer-service-item">
                <span className="footer-service-icon">✓</span>
                {t.home.videoProduction}
              </li>
              <li className="footer-service-item">
                <span className="footer-service-icon">✓</span>
                {t.home.webDevelopment}
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-section-title">{t.footer.contactUs}</h3>
            <ul className="footer-contact">
              <li className={`footer-contact-item ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="footer-contact-icon-wrapper">
                  <Phone size={20} className="footer-contact-icon" />
                </div>
                <div className="footer-contact-content">
                  <span className="footer-contact-label">{language === 'en' ? 'Phone' : 'الهاتف'}</span>
                  <a href="tel:+20XXXXXXXXXX" className="footer-contact-text">+20 XXX XXX XXXX</a>
                </div>
              </li>
              <li className={`footer-contact-item ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="footer-contact-icon-wrapper">
                  <Mail size={20} className="footer-contact-icon" />
                </div>
                <div className="footer-contact-content">
                  <span className="footer-contact-label">{language === 'en' ? 'Email' : 'البريد الإلكتروني'}</span>
                  <a href="mailto:info@bsma-agency.com" className="footer-contact-text">info@bsma-agency.com</a>
                </div>
              </li>
              <li className={`footer-contact-item ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="footer-contact-icon-wrapper">
                  <MapPin size={20} className="footer-contact-icon" />
                </div>
                <div className="footer-contact-content">
                  <span className="footer-contact-label">{language === 'en' ? 'Location' : 'الموقع'}</span>
                  <span className="footer-contact-text">{language === 'en' ? 'Egypt' : 'مصر'}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              &copy; {currentYear} <span className="footer-brand">{language === 'en' ? 'Bsma Digital Marketing Agency' : 'بصمة للتسويق الرقمي'}</span>. {t.footer.allRightsReserved}
            </p>
            <div className="footer-bottom-links">
              <Link to="/about" className="footer-bottom-link">{t.nav.about}</Link>
              <span className="footer-separator">|</span>
              <Link to="/contact" className="footer-bottom-link">{t.nav.contact}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
