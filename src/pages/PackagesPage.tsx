import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import Packages from '../sections/Packages';
import WhatsAppFloat from '../components/WhatsAppFloat';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'Are these monthly contracts?',
    answer: 'Yes. All packages are monthly retainers. You can cancel anytime with 30 days notice. We believe in earning your business every month, not locking you in.',
  },
  {
    question: 'Can I customize a package?',
    answer: "Absolutely. Every business is different. Contact us and we'll build a custom package that fits your exact needs and budget.",
  },
  {
    question: 'Do you work with businesses outside Lebanon?',
    answer: "Yes. While we're based in Zahlé, Lebanon, we work with clients across the region and internationally. All communication can be done remotely.",
  },
  {
    question: 'How quickly can you start?',
    answer: 'We typically onboard new clients within 3-5 business days. In some cases we can start within 24 hours.',
  },
  {
    question: "What if I'm not satisfied?",
    answer: "We offer a satisfaction guarantee. If you're not happy with our work in the first 30 days, we'll refund your first month — no questions asked.",
  },
  {
    question: 'Do the prices include ad spend?',
    answer: 'No. Package prices cover our management fees only. Ad spend (for Google, Facebook, Instagram campaigns) is paid directly by you to the platforms.',
  },
];

const PackagesPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                <li className="text-secondary font-medium">Packages</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Simple, Clear Packages
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto">
              Choose the level of support your business needs. No hidden fees, no long-term lock-in.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section (reused) */}
      <Packages />

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white" style={{ position: 'relative', zIndex: 1 }}>
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-shadow"
                    style={isOpen ? { boxShadow: '0 8px 24px rgba(30, 58, 138, 0.08)' } : undefined}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg font-semibold text-primary">
                        {faq.question}
                      </span>
                      <div
                        className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors"
                        style={{ backgroundColor: isOpen ? '#E65100' : '#F5F7FF' }}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-white" />
                        ) : (
                          <Plus className="w-4 h-4 text-primary" />
                        )}
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default PackagesPage;
