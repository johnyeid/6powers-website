import { useEffect, useRef } from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const CTA = () => {
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
      className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="reveal text-4xl sm:text-5xl font-bold text-primary mb-6">
            Get Your Free Growth Audit
          </h2>
          <p className="reveal text-xl text-gray-600 mb-10" style={{ transitionDelay: '100ms' }}>
            In 15 minutes, we'll show you exactly what's blocking your leads and sales online
            — and how to fix it. No commitment, no cost.
          </p>
          <div className="reveal flex flex-col sm:flex-row gap-4 justify-center" style={{ transitionDelay: '200ms' }}>
            <a
              href="mailto:j.eid@6powers.net"
              className="btn-primary text-lg py-4 px-10 inline-flex items-center justify-center"
            >
              <Mail className="mr-2 w-5 h-5" />
              Book Free Audit →
            </a>
            <a
              href="https://wa.me/9613146446"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg py-4 px-10 inline-flex items-center justify-center"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
