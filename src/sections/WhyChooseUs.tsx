import { useEffect, useRef } from 'react';
import { MapPin, Layers, TrendingUp } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <MapPin className="w-10 h-10" />,
    title: 'Local Expertise',
    description: 'Based in Zahlé, Lebanon — we understand the local market, culture, and business landscape.',
  },
  {
    icon: <Layers className="w-10 h-10" />,
    title: 'Full-Service Agency',
    description: 'From strategy to execution — marketing, tech, design and IT all under one roof.',
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: 'Results-Driven',
    description: 'Every campaign, website and solution we deliver is built around your business goals.',
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const revealEls = sectionRef.current?.querySelectorAll('.reveal');
    revealEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-900" />
      
      {/* Decorative Orbs */}
      <div className="gradient-orb w-[500px] h-[500px] bg-secondary/20 -top-40 -left-40 animate-float-slow" />
      <div className="gradient-orb w-[400px] h-[400px] bg-blue-500/20 bottom-0 right-0 animate-float" />
      
      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="reveal text-4xl sm:text-5xl font-bold text-white mb-6">
            Why Choose Six Powers?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card text-center reveal"
              style={{
                transitionDelay: `${(index + 1) * 150}ms`,
                transform: `rotate(${index === 0 ? '-2' : index === 2 ? '2' : '0'}deg)`,
              }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-6 animate-icon-pulse">
                <span className="text-secondary">{feature.icon}</span>
              </div>
              <h3 className="text-2xl font-semibold text-secondary-light mb-4">
                {feature.title}
              </h3>
              <div className="w-16 h-1 bg-secondary mx-auto mb-4 rounded-full" />
              <p className="text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
