import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
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
📩 New Contact Message

👤 Name: ${formData.name}
📧 Email: ${formData.email}

💬 Message:
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
          <h2 className="text-4xl md:text-5xl mb-4">Visit Us</h2>
          <p className="text-xl text-gray-600">
            Experience our collection in person at our Amman showroom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <Info icon={<MapPin />} title="Location" text="Sarab Mirror Decor\nAmman, Jordan" />
            <Info icon={<Phone />} title="Phone" text="+962 79 502 8749" />
            <Info icon={<Mail />} title="Email" text="alihamad19971997a@gmail.com" />
            <Info
              icon={<Clock />}
              title="Hours"
              text={`Sunday - Thursday: 9:00 AM - 7:00 PM
Saturday: 10:00 AM - 6:00 PM
Friday: Closed`}
            />
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl mb-6">Send us a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input label="Name" id="name" value={formData.name} onChange={handleChange} />
              <Input label="Email" id="email" type="email" value={formData.email} onChange={handleChange} />

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-400"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500 transition"
              >
                Send via WhatsApp
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
        <h3 className="text-xl mb-2">{title}</h3>
        <p className="text-gray-600 whitespace-pre-line">{text}</p>
      </div>
    </div>
  );
}

function Input({ label, id, value, onChange, type = 'text' }: any) {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-gray-700">{label}</label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-400"
      />
    </div>
  );
}
