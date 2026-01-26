import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { FaFacebook, FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      href: 'https://wa.me/201287661678',
      color: 'bg-[#25D366]',
      delay: 'delay-0',
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      href: 'https://www.facebook.com/share/1GzGm9TnRN/',
      color: 'bg-[#1877F2]',
      delay: 'delay-75',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: 'https://www.instagram.com/ma8535128?igsh=NXF1ejJpdGxsdTRs',
      color: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]',
      delay: 'delay-100',
    },
    {
      name: 'TikTok',
      icon: FaTiktok,
      href: 'https://www.tiktok.com/@bsmabsma116?_r=1&_t=ZS-93G9HOx1ria',
      color: 'bg-[#000000]',
      delay: 'delay-150',
    },
  ]

  return (
    <div
      className={`fixed ${isRTL ? 'left-5' : 'right-5'} bottom-5 z-50 flex flex-col ${isRTL ? 'items-start' : 'items-end'}`}
    >
      {/* Social Media Buttons */}
      {socialLinks.map((social, index) => {
        const Icon = social.icon
        const position = isOpen ? (socialLinks.length - index) * 70 : 0
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.color} ${social.textColor || 'text-white'} w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 absolute ${
              isRTL ? 'left-0' : 'right-0'
            } ${
              isOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
            style={{
              transitionDelay: isOpen ? `${index * 50}ms` : `${(socialLinks.length - index) * 30}ms`,
              bottom: `${position}px`,
              transition: 'all 0.4s cubic-bezier(0, 0.01, 0, 1.27)',
            }}
            aria-label={social.name}
          >
            <Icon size={24} />
          </a>
        )
      })}

      {/* Main Button */}
      <button
        onClick={toggleMenu}
        className={`w-14 h-14 rounded-full bg-white text-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center relative ${
          isOpen ? 'rotate-45' : ''
        } ${!isOpen ? 'wave-animation' : ''}`}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  )
}

export default FloatingActionButton

