import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // EmailJS configuration
      // You need to set up an account at https://www.emailjs.com/
      // Then replace these with your actual IDs:
      const serviceId = 'YOUR_SERVICE_ID'; // e.g., 'service_abc123'
      const templateId = 'YOUR_TEMPLATE_ID'; // e.g., 'template_xyz456'
      const publicKey = 'YOUR_PUBLIC_KEY'; // e.g., 'user_def789'

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: 'alihamad19971997@gmail.com',
          message: formData.message,
        },
        publicKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <MapPin size={24} className="text-gray-700" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Location</h3>
                <p className="text-gray-600">
                  Sarab Mirror Decor<br />
                  Amman, Jordan
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <Phone size={24} className="text-gray-700" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Phone</h3>
                <p className="text-gray-600">+962 79 502 8749</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <Mail size={24} className="text-gray-700" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Email</h3>
                <p className="text-gray-600">alihamad19971997@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <Clock size={24} className="text-gray-700" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Hours</h3>
                <p className="text-gray-600">
                  Sunday - Thursday: 9:00 AM - 7:00 PM<br />
                  Saturday: 10:00 AM - 6:00 PM<br />
                  Friday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl mb-6">Send us a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              
              {status === 'success' && (
                <p className="text-green-600 text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}