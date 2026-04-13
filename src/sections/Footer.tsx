import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealEls = footerRef.current?.querySelectorAll('.reveal');
    revealEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="relative bg-primary overflow-hidden"
    >
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-blue-500 to-secondary" />
      
      {/* Decorative Orb */}
      <div className="gradient-orb w-[300px] h-[300px] bg-secondary/10 top-0 right-0" />
      
      {/* Main Footer Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="reveal">
              <div className="mb-4">
                <img
                  src="/images/logo horiz white.png"
                  alt="Six Powers"
                  style={{ height: '44px', objectFit: 'contain', display: 'block' }}
                />
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Where ideas take flight. We deliver integrated marketing, technology,
                and creative solutions tailored for your business growth.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com/profile.php?id=61558374684438"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white bg-white/10 hover:bg-[#E65100] transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/six_powers"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white bg-white/10 hover:bg-[#E65100] transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/9613146446"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white bg-white/10 hover:bg-[#E65100] transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="reveal" style={{ transitionDelay: '100ms' }}>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {([
                  { name: 'Home', href: '/#home' },
                  { name: 'About', href: '/#about' },
                  { name: 'Services', href: '/#services' },
                  { name: 'Packages', to: '/packages' },
                  { name: 'Portfolio', to: '/portfolio' },
                ] as { name: string; href?: string; to?: string }[]).map((link) => (
                  <li key={link.name}>
                    {link.to ? (
                      <Link
                        to={link.to}
                        className="text-white/70 hover:text-secondary transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-secondary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="reveal" style={{ transitionDelay: '200ms' }}>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span>Zahlé, Lebanon</span>
                </li>
                <li>
                  <a
                    href="mailto:j.eid@6powers.net"
                    className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>j.eid@6powers.net</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+9613146446"
                    className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>+961 3 146 446</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="reveal pt-8 border-t border-white/10" style={{ transitionDelay: '300ms' }}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-white/50 text-sm text-center sm:text-left">
                © {currentYear} SIX POWERS s.a.r.l. — Zahlé, Lebanon. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-white/50 hover:text-secondary transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/50 hover:text-secondary transition-colors text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
