import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const phoneNumber = '962795028749'; // رقم الواتساب بدون +

    const whatsappMessage = `
📩 ${t('contact.whatsappMessageTitle')}

👤 ${t('contact.form.name')}: ${formData.name}
📧 ${t('contact.form.email')}: ${formData.email}

💬 ${t('contact.form.message')}:
${formData.message}
    `;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, '_blank');

    setFormData({ name: '', email: '', message: '' });
    setStatus('idle');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-gray-600">{t('contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <Info icon={<MapPin />} title={t('contact.info.location.title')} text={t('contact.info.location.text')} />
            <Info icon={<Phone />} title={t('contact.info.phone.title')} text={t('contact.info.phone.text')} />
            <Info icon={<Mail />} title={t('contact.info.email.title')} text={t('contact.info.email.text')} />
            <Info icon={<Clock />} title={t('contact.info.hours.title')} text={t('contact.info.hours.text')} />
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl mb-6">{t('contact.form.title')}</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input label={t('contact.form.name')} id="name" value={formData.name} onChange={handleChange} />
              <Input label={t('contact.form.email')} id="email" type="email" value={formData.email} onChange={handleChange} />

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-400"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500 transition"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Components */
function Info({ icon, title, text }: any) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-700">
        {icon}
      </div>
      <div>
        <h3
