import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle, Clock, Send, CheckCircle } from 'lucide-react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = new URLSearchParams();
    body.append('form-name', 'contact');
    body.append('name', formData.name);
    body.append('email', formData.email);
    body.append('phone', formData.phone);
    body.append('service', formData.service);
    body.append('message', formData.message);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden flex items-center" style={{ minHeight: '50vh' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-900" />
        <div className="gradient-orb w-[500px] h-[500px] bg-secondary/20 -top-40 -right-40 animate-float" />
        <div className="gradient-orb w-[300px] h-[300px] bg-blue-500/20 bottom-0 left-10 animate-float-slow" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-40 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-sm">
                <li>
                  <Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
                </li>
                <li className="text-white/40">&gt;</li>
                <li className="text-secondary font-medium">Contact</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out and let's discuss how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section: Form + Info */}
      <section className="py-20 lg:py-28 bg-white" style={{ position: 'relative', zIndex: 1 }}>
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Column */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-primary mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    Your message has been received. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors"
                      placeholder="+961 ..."
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Web Development & E-Commerce">Web Development & E-Commerce</option>
                      <option value="SEO & Content Marketing">SEO & Content Marketing</option>
                      <option value="Creative & Branding">Creative & Branding</option>
                      <option value="Business Automation">Business Automation</option>
                      <option value="IT & Technology">IT & Technology</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full text-base py-4 inline-flex items-center justify-center"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info Column */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of these channels.
              </p>

              <div className="space-y-4">
                {/* Location */}
                <div className="bg-gray-50 rounded-xl p-6 flex items-start gap-4 border border-gray-100">
                  <div style={{ width: '48px', height: '48px', background: '#1A237E', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Location</h3>
                    <p className="text-gray-600 text-sm">
                      Zahlé, Béqaa, Lebanon<br />
                      Al Manara Building, Floor 10
                    </p>
                  </div>
                </div>

                {/* Email */}
                <a
                  href="mailto:j.eid@6powers.net"
                  className="bg-gray-50 rounded-xl p-6 flex items-start gap-4 border border-gray-100 hover:border-secondary/50 transition-colors block"
                >
                  <div style={{ width: '48px', height: '48px', background: '#1A237E', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <p className="text-gray-600 text-sm">j.eid@6powers.net</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+96170984087"
                  className="bg-gray-50 rounded-xl p-6 flex items-start gap-4 border border-gray-100 hover:border-secondary/50 transition-colors block"
                >
                  <div style={{ width: '48px', height: '48px', background: '#1A237E', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <p className="text-gray-600 text-sm">+961 70 984 087</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/9613146446"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 rounded-xl p-6 flex items-start gap-4 border border-gray-100 hover:border-secondary/50 transition-colors block"
                >
                  <div style={{ width: '48px', height: '48px', background: '#1A237E', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">WhatsApp</h3>
                    <p className="text-gray-600 text-sm">+961 3 146 446</p>
                  </div>
                </a>

                {/* Working Hours */}
                <div className="bg-gray-50 rounded-xl p-6 flex items-start gap-4 border border-gray-100">
                  <div style={{ width: '48px', height: '48px', background: '#1A237E', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Working Hours</h3>
                    <p className="text-gray-600 text-sm">
                      Monday – Friday<br />
                      9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ContactPage;
