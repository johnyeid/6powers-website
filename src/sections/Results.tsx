import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

interface ResultCard {
  stat: string;
  description: string;
  label: string;
}

const results: ResultCard[] = [
  {
    stat: '3x',
    description: 'Average increase in social media engagement within the first 3 months',
    label: 'Social Media Clients',
  },
  {
    stat: '60%',
    description: 'Reduction in response time using WhatsApp Business automation',
    label: 'Business Automation Clients',
  },
  {
    stat: '2 weeks',
    description: 'Average time to launch a fully designed professional website',
    label: 'Web Development Clients',
  },
];

const Results = () => {
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
      ref={sectionRef}
      className="relative py-20 lg:py-28"
      style={{ backgroundColor: '#F5F7FF' }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="reveal inline-block text-secondary text-sm font-semibold tracking-widest uppercase mb-4">
              What We Deliver
            </span>
            <h2 className="reveal text-4xl sm:text-5xl font-bold text-primary mb-6" style={{ transitionDelay: '100ms' }}>
              Real Results for Real Businesses
            </h2>
            <p className="reveal text-lg text-gray-600" style={{ transitionDelay: '200ms' }}>
              Here's what our clients achieve when they partner with Six Powers.
            </p>
          </div>

          {/* Result Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {results.map((result, index) => (
              <div
                key={index}
                className="reveal bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
                style={{ transitionDelay: `${300 + index * 100}ms` }}
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

          {/* Quote / Testimonial Banner */}
          <div
            className="reveal rounded-2xl overflow-hidden relative"
            style={{ backgroundColor: '#1A237E', transitionDelay: '600ms' }}
          >
            <div className="relative z-10 p-10 lg:p-16 text-center max-w-4xl mx-auto">
              <Quote
                className="w-14 h-14 mx-auto mb-6"
                style={{ color: '#E65100' }}
              />
              <blockquote className="text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed font-medium mb-8">
                "Six Powers built our entire online presence — website, social media, and
                WhatsApp automation — in under a month. We started getting inquiries within
                the first week."
              </blockquote>
              <cite className="text-white/70 text-base not-italic font-medium">
                — Restaurant Owner, Zahlé
              </cite>
            </div>

            {/* Decorative orbs */}
            <div className="gradient-orb w-[400px] h-[400px] bg-secondary/15 top-0 right-0" />
            <div className="gradient-orb w-[300px] h-[300px] bg-blue-500/15 bottom-0 left-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
