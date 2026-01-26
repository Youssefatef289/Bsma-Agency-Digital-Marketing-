import { Phone, Mail } from 'lucide-react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'

const Footer = () => {
  const { language, isTransitioning } = useLanguage()
  const t = translations[language]
  const isRTL = language === 'ar'

  const phoneNumber = '01287661678'
  const whatsappNumber = '201287661678'
  
  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/share/1GzGm9TnRN/', label: 'Facebook', color: 'hover:bg-[#1877F2]' },
    { icon: FaInstagram, href: 'https://www.instagram.com/ma8535128?igsh=NXF1ejJpdGxsdTRs', label: 'Instagram', color: 'hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45]' },
    { icon: FaWhatsapp, href: `https://wa.me/${whatsappNumber}`, label: 'WhatsApp', color: 'hover:bg-[#25D366]' },
    { icon: FaTiktok, href: 'https://www.tiktok.com/@bsmabsma116?_r=1&_t=ZS-93G9HOx1ria', label: 'TikTok', color: 'hover:bg-[#000000]' },
  ]

  return (
    <footer className={`footer transition-all duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
      {/* Modern Top Border */}
      <div className="footer-top-border"></div>
      
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo Section */}
          <div className="footer-logo-section">
            <div className="footer-logo-wrapper">
              <img
                src="/image/logo - blue 2.png"
                alt="Bsma Agency Digital Marketing"
                className="footer-logo"
                onError={(e) => {
                  e.target.src = "/image/Logo-bsma (1).png"
                }}
              />
            </div>
            <p className="footer-tagline">
              {t.footer.description || (language === 'en' ? 'Your Digital Marketing Partner' : 'شريكك في التسويق الرقمي')}
            </p>
          </div>

          {/* Contact Info */}
          <div className="footer-contact-section">
            <h3 className="footer-section-title">{t.footer.contactUs || (language === 'en' ? 'Contact Us' : 'اتصل بنا')}</h3>
            <ul className="footer-contact">
              <li className={`footer-contact-item ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="footer-contact-icon-wrapper">
                  <Phone size={18} className="footer-contact-icon" />
                </div>
                <div className="footer-contact-content">
                  <a href={`tel:+${whatsappNumber}`} className="footer-contact-text">{phoneNumber}</a>
                </div>
              </li>
              <li className={`footer-contact-item ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="footer-contact-icon-wrapper">
                  <FaWhatsapp size={18} className="footer-contact-icon" />
                </div>
                <div className="footer-contact-content">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="footer-contact-text">{phoneNumber}</a>
                </div>
              </li>
              <li className={`footer-contact-item ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="footer-contact-icon-wrapper">
                  <Mail size={18} className="footer-contact-icon" />
                </div>
                <div className="footer-contact-content">
                  <a href="mailto:bsmaagency@gmail.com" className="footer-contact-text">bsmaagency@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-social-section">
            <h3 className="footer-section-title">{language === 'en' ? 'Follow Us' : 'تابعنا'}</h3>
            <div className={`footer-social-grid ${isRTL ? 'flex-row-reverse' : ''}`}>
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`footer-social-link-main ${social.color}`}
                    aria-label={social.label}
                  >
                    <Icon size={18} className="footer-social-icon" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
