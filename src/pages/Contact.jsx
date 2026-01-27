import { useState } from 'react'
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'

const Contact = () => {
  const { language, isTransitioning } = useLanguage()
  const t = translations[language]
  const isRTL = language === 'ar'

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', phone: '', email: '', message: '' })
      
      // Reset status message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  const phoneNumber = '01287661678'
  const whatsappNumber = '201287661678'
  const saudiPhoneNumber = '+966 56 731 7716'
  const saudiWhatsappNumber = '966567317716'
  
  const contactInfo = [
    {
      icon: Phone,
      title: language === 'ar' ? 'الهاتف' : 'Phone',
      content: (
        <div className="flex flex-col gap-2">
          <div>
            <span className="font-semibold">{language === 'en' ? 'Egypt' : 'مصر'}: </span>
            <a href={`tel:+${whatsappNumber}`} className="text-blue-600 hover:underline">{phoneNumber}</a>
          </div>
          <div>
            <span className="font-semibold">{language === 'en' ? 'Saudi Arabia' : 'السعودية'}: </span>
            <a href={`tel:${saudiWhatsappNumber}`} className="text-blue-600 hover:underline">{saudiPhoneNumber}</a>
          </div>
        </div>
      ),
      link: `tel:+${whatsappNumber}`,
    },
    {
      icon: Mail,
      title: language === 'ar' ? 'البريد الإلكتروني' : 'Email',
      content: 'bsmaagency@gmail.com',
      link: 'mailto:bsmaagency@gmail.com',
    },
    {
      icon: MapPin,
      title: language === 'ar' ? 'العنوان' : 'Address',
      content: language === 'en' ? 'Bani Suef, Al-Hamayat' : 'بنى سويف، الحميات',
      link: 'https://maps.google.com/?q=29.0744,31.0972',
    },
  ]

  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/share/1GzGm9TnRN/', label: 'Facebook', color: 'bg-[#1877F2] hover:bg-[#166FE5]' },
    { icon: FaInstagram, href: 'https://www.instagram.com/ma8535128?igsh=NXF1ejJpdGxsdTRs', label: 'Instagram', color: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90' },
    { icon: FaWhatsapp, href: 'https://wa.me/201287661678', label: 'WhatsApp', color: 'bg-[#25D366] hover:bg-[#20BA5A]' },
    { icon: FaTiktok, href: 'https://www.tiktok.com/@bsmabsma116?_r=1&_t=ZS-93G9HOx1ria', label: 'TikTok', color: 'bg-[#000000] hover:bg-[#1A1A1A]' },
  ]

  const whatsappMessage = encodeURIComponent(
    language === 'en' 
      ? 'Hello, I am interested in Bsma Digital Marketing services'
      : 'مرحباً، أنا مهتم بخدمات بصمة للتسويق الرقمي'
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className={`pt-20 transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.contact.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Contact Form */}
            <div className={`bg-white rounded-2xl p-8 shadow-lg animate-slide-up ${isRTL ? 'lg:order-2' : ''}`}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.contact.sendMessage}</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  {t.contact.messageSent}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.name} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.phone} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder={t.contact.phonePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.message} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder={t.contact.messagePlaceholder}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {isSubmitting ? t.contact.sending : t.contact.sendMessageBtn}
                  <Send size={20} />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={`space-y-6 animate-slide-in-right ${isRTL ? 'lg:order-1' : ''}`}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.contact.contactInfo}</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <a
                        key={index}
                        href={info.link}
                        className={`flex items-start ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'} p-4 rounded-lg hover:bg-blue-50 transition-colors group`}
                      >
                        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                          <Icon className="text-blue-600 group-hover:text-white transition-colors" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                          {typeof info.content === 'string' ? (
                            <p className="text-gray-600">{info.content}</p>
                          ) : (
                            <div className="text-gray-600">{info.content}</div>
                          )}
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* WhatsApp Buttons */}
              <div className="space-y-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-500 text-white rounded-2xl p-6 shadow-lg hover:bg-green-600 transition-all transform hover:scale-105 text-center group"
                >
                  <div className={`flex items-center justify-center gap-3 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <MessageCircle size={28} />
                    <span className="text-xl font-bold">{t.contact.whatsapp} - {language === 'en' ? 'Egypt' : 'مصر'}</span>
                  </div>
                  <p className="text-green-100">{phoneNumber}</p>
                </a>
                <a
                  href={`https://wa.me/${saudiWhatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-500 text-white rounded-2xl p-6 shadow-lg hover:bg-green-600 transition-all transform hover:scale-105 text-center group"
                >
                  <div className={`flex items-center justify-center gap-3 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <MessageCircle size={28} />
                    <span className="text-xl font-bold">{t.contact.whatsapp} - {language === 'en' ? 'Saudi Arabia' : 'السعودية'}</span>
                  </div>
                  <p className="text-green-100">{saudiPhoneNumber}</p>
                </a>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.followUs}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-lg text-center ${social.color} text-white transition-all transform hover:scale-110 shadow-md hover:shadow-lg flex items-center justify-center`}
                        aria-label={social.label}
                      >
                        <Icon size={24} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Our Location' : 'موقعنا'}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'en' ? 'Bani Suef, Al-Hamayat' : 'بنى سويف، الحميات'}
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.5!2d31.0972!3d29.0744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDA0JzI3LjgiTiAzMcKwMDUnNDkuOSJF!5e0!3m2!1sar!2seg!4v1234567890&q=بنى+سويف+الحميات"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={language === 'en' ? 'Bsma Agency Location' : 'موقع وكالة بصمة'}
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
