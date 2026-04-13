import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    const elements = contentRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Animated gradient mesh canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();
    window.addEventListener('resize', resize);

    type Blob = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    };

    const blobs: Blob[] = [
      {
        x: canvas.width * 0.25,
        y: canvas.height * 0.35,
        vx: 0.4,
        vy: 0.25,
        radius: 380,
        color: 'rgba(230, 81, 0, 0.3)',
      },
      {
        x: canvas.width * 0.7,
        y: canvas.height * 0.6,
        vx: -0.35,
        vy: 0.4,
        radius: 420,
        color: 'rgba(63, 81, 181, 0.4)',
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.8,
        vx: 0.3,
        vy: -0.35,
        radius: 350,
        color: 'rgba(103, 58, 183, 0.2)',
      },
    ];

    const draw = () => {
      // Dark navy base
      ctx.fillStyle = '#0a0e27';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Additive blending so blobs brighten where they overlap
      ctx.globalCompositeOperation = 'lighter';

      blobs.forEach((blob) => {
        // Update position
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Bounce off edges (center-based)
        if (blob.x < 0 || blob.x > canvas.width) blob.vx *= -1;
        if (blob.y < 0 || blob.y > canvas.height) blob.vy *= -1;

        // Draw radial gradient blob
        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        );
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pb-24"
    >
      {/* Animated Gradient Mesh Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      {/* Gradient Orbs */}
      <div className="gradient-orb w-[600px] h-[600px] bg-secondary/40 -top-40 -right-40 animate-float" />
      <div className="gradient-orb w-[400px] h-[400px] bg-blue-500/30 bottom-20 left-10 animate-float-slow" />
      <div className="gradient-orb w-[300px] h-[300px] bg-purple-500/20 top-1/2 right-1/4 animate-float" style={{ animationDelay: '-3s' }} />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <div className="reveal overflow-hidden">
            <span className="inline-block text-secondary-light text-sm sm:text-base font-semibold tracking-widest uppercase mb-6">
              Where Ideas Take Flight
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="reveal text-white leading-snug mb-8" style={{ transitionDelay: '100ms' }}>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal">
              Your Outsourced
            </span>
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent pb-2"
              style={{ backgroundImage: 'linear-gradient(135deg, #E65100 0%, #FF9800 100%)', lineHeight: '1.2' }}
            >
              Digital Team.
            </span>
            <span className="block text-2xl sm:text-3xl font-normal tracking-wide mt-4">
              Marketing. Web. E-Commerce. IT.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="reveal text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-12" style={{ transitionDelay: '200ms' }}>
            Six Powers is your outsourced digital team. Marketing, web, design, automation
            and IT — all under one roof, based in Zahlé, Lebanon.
          </p>

          {/* CTA Button */}
          <div className="reveal" style={{ transitionDelay: '300ms' }}>
            <button
              onClick={scrollToServices}
              className="group btn-primary text-lg py-4 px-10 animate-pulse-glow"
            >
              Get Your Free Growth Audit
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
