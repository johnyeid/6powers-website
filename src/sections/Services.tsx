import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Share2,
  Globe,
  Search,
  Palette,
  MessageCircle,
  Settings,
  ArrowRight,
} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    icon: <Share2 className="w-7 h-7" />,
    title: 'Digital Marketing',
    description: 'Social media management, paid advertising, and data-driven campaigns that grow your brand.',
    href: '/services/digital-marketing',
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: 'Web Development & E-Commerce',
    description: 'Custom websites and online stores built to convert visitors into customers.',
    href: '/services/web-development',
  },
  {
    icon: <Search className="w-7 h-7" />,
    title: 'SEO & Content Marketing',
    description: 'Search visibility, organic growth, and content strategy to attract the right audience.',
    href: '/services/seo-content',
  },
  {
    icon: <Palette className="w-7 h-7" />,
    title: 'Creative & Branding',
    description: 'Logo design, brand identity, and marketing materials that make you stand out.',
    href: '/services/creative-branding',
  },
  {
    icon: <MessageCircle className="w-7 h-7" />,
    title: 'Business Automation',
    description: 'WhatsApp Business setup, CRM solutions, and automated workflows to save time.',
    href: '/services/business-automation',
  },
  {
    icon: <Settings className="w-7 h-7" />,
    title: 'IT & Technology',
    description: 'IT consultancy, infrastructure planning, and digital transformation support.',
    href: '/services/it-technology',
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            if (entry.target === sectionRef.current) {
              const cards = cardsRef.current?.querySelectorAll('.service-card');
              cards?.forEach((card, index) => {
                setTimeout(() => {
                  card.classList.add('animate-fade-in-up');
                }, index * 80);
              });
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const revealEls = sectionRef.current?.querySelectorAll('.reveal');
    revealEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative pb-24 lg:pb-32 bg-white" style={{ paddingTop: '80px' }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="reveal text-4xl sm:text-5xl font-bold text-primary mb-6">
            What We Do
          </h2>
          <p className="reveal text-lg text-gray-600" style={{ transitionDelay: '100ms' }}>
            We deliver integrated marketing, technology, and creative solutions
            tailored for businesses in Lebanon and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card opacity-0 flex flex-col"
              style={{
                transform: index % 3 === 1 ? 'translateY(-15px)' : 'translateY(0)',
              }}
            >
              <div style={{ width: '52px', height: '52px', background: '#1A237E', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <span className="text-white">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-5 flex-grow">
                {service.description}
              </p>
              <Link
                to={service.href}
                className="inline-flex items-center text-secondary font-medium hover:text-orange-600 transition-colors text-sm"
              >
                Learn More
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-16" style={{ transitionDelay: '200ms' }}>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Get Your Free Growth Audit →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
