import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, ImageIcon, Zap, Shield, Users } from 'lucide-react';
import Navigation from '../sections/Navigation';
import CTA from '../sections/CTA';
import Footer from '../sections/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

interface ServiceResult {
  stat: string;
  description: string;
  label: string;
}

interface ServicePageProps {
  title: string;
  tagline: string;
  features: string[];
  imageDescription: string;
  imageSrc?: string;
  results?: ServiceResult[];
}

const ServicePage = ({ title, tagline, features, imageDescription, imageSrc, results }: ServicePageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden flex items-center" style={{ minHeight: '60vh' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-900" />
        <div className="gradient-orb w-[500px] h-[500px] bg-secondary/20 -top-40 -right-40 animate-float" />
        <div className="gradient-orb w-[300px] h-[300px] bg-blue-500/20 bottom-0 left-10 animate-float-slow" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-sm">
                <li>
                  <Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
                </li>
                <li className="text-white/40">&gt;</li>
                <li>
                  <a href="/#services" className="text-white/60 hover:text-white transition-colors">Services</a>
                </li>
                <li className="text-white/40">&gt;</li>
                <li className="text-secondary font-medium">{title}</li>
              </ol>
            </nav>

            {/* Back to Services */}
            <div className="mb-8">
              <a
                href="/#services"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </a>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              {title}
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto mb-10">
              {tagline}
            </p>
            <Link
              to="/#contact"
              onClick={() => {
                window.location.href = '/#contact';
              }}
              className="btn-primary text-lg py-4 px-10 inline-flex items-center"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center">
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-secondary/30 transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results You Can Expect */}
      {results && results.length > 0 && (
        <section className="py-20 lg:py-24" style={{ backgroundColor: '#F5F7FF' }}>
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center">
                Results You Can Expect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
                  >
                    <div
                      className="text-5xl sm:text-6xl font-extrabold mb-4"
                      style={{ color: '#E65100' }}
                    >
                      {result.stat}
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed flex-grow mb-4">
                      {result.description}
                    </p>
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 pt-4 border-t border-gray-100">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Service Image */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-20 pb-20 pt-20">
        <div className="max-w-6xl mx-auto">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              className="w-full object-cover rounded-2xl"
              style={{ height: '450px' }}
            />
          ) : (
            <div
              className="rounded-2xl flex flex-col items-center justify-center text-center px-8 gap-4"
              style={{
                height: '450px',
                backgroundColor: '#e2e8f0',
                border: '2px dashed #94a3b8',
              }}
            >
              <ImageIcon className="w-12 h-12 text-gray-400" />
              <p className="text-gray-500 font-semibold text-lg">Image Placeholder</p>
              <p className="text-gray-400 text-sm max-w-md">{imageDescription}</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us for This */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center">
              Why Choose Us for This
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm">
                <div style={{ width: '52px', height: '52px', background: '#1A237E', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Fast Delivery</h3>
                <p className="text-gray-600">We work efficiently to get your project live quickly without cutting corners on quality.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm">
                <div style={{ width: '52px', height: '52px', background: '#1A237E', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Proven Results</h3>
                <p className="text-gray-600">Our strategies are backed by data and real-world experience across dozens of projects.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm">
                <div style={{ width: '52px', height: '52px', background: '#1A237E', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Dedicated Support</h3>
                <p className="text-gray-600">You get a dedicated team that understands your business and is always a message away.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ServicePage;
