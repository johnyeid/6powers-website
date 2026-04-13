import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, ArrowRight } from 'lucide-react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

interface Project {
  badge: string;
  title: string;
  description: string;
  imageSrc: string;
}

const projects: Project[] = [
  {
    badge: 'Web Development',
    title: 'E-Commerce Store',
    description: 'Full online store setup with payment integration for a retail client in Zahlé.',
    imageSrc: '/images/9 E-Commerce Store.jpg',
  },
  {
    badge: 'Digital Marketing',
    title: 'Social Media Campaign',
    description: '6-month social media strategy and execution for a hospitality brand in Lebanon.',
    imageSrc: '/images/10 Social Media Campaign.jpg',
  },
  {
    badge: 'Branding',
    title: 'Brand Identity Package',
    description: 'Complete brand identity including logo, guidelines and marketing materials.',
    imageSrc: '/images/11 Brand Identity Package.jpg',
  },
];

const PortfolioPage = () => {
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
                <li className="text-secondary font-medium">Portfolio</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto">
              A selection of projects we've delivered for clients across Lebanon and the region
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 bg-white" style={{ position: 'relative', zIndex: 1 }}>
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-6xl mx-auto">

            {/* PART 1 — Coming Soon Banner */}
            <div
              className="rounded-2xl p-12 lg:p-16 text-center mb-20"
              style={{ backgroundColor: '#F5F7FF' }}
            >
              <div style={{ width: '72px', height: '72px', background: '#1A237E', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <Rocket className="w-9 h-9 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Portfolio Coming Soon
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                We're currently building out our portfolio showcase. In the meantime,
                contact us to learn more about our work and past projects.
              </p>
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            {/* PART 2 — What We've Worked On */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center">
                What We've Worked On
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* Project Image */}
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="w-full object-cover"
                      style={{ height: '220px' }}
                    />

                    {/* Card Content */}
                    <div className="p-6">
                      <span
                        className="inline-block text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                        style={{ backgroundColor: '#E65100' }}
                      >
                        {project.badge}
                      </span>
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
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

export default PortfolioPage;
