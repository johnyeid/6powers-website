import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageIcon, Award, Users, Lightbulb, ArrowRight, DollarSign, Zap, BarChart, Shield } from 'lucide-react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const AboutPage = () => {
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
                <li className="text-secondary font-medium">About</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              About Six Powers
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto">
              Your outsourced digital team — helping Lebanese SMEs grow faster without the overhead of hiring in-house.
            </p>
          </div>
        </div>
      </section>

      {/* PART 1 — Our Story */}
      <section className="py-20 lg:py-28 bg-white" style={{ position: 'relative', zIndex: 1 }}>
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Six Powers is a full-service digital agency founded in Zahlé, Lebanon in 2024.
                We exist for one reason: to give Lebanese businesses access to the same quality
                of marketing, technology, and digital systems that large companies use — at a
                fraction of the cost.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Instead of hiring a marketing manager, a web developer, a designer, and an IT
                consultant separately — you get all of that in one dedicated team. We become
                your outsourced digital department, invested in your growth.
              </p>
            </div>

            {/* Right: Office Photo */}
            <img
              src="/images/1 OfficeTeam photo.jpg"
              alt="Six Powers Office"
              className="w-full object-cover rounded-2xl"
              style={{ height: '400px' }}
            />
          </div>
        </div>
      </section>

      {/* PART 1.5 — Why Choose Us Over Hiring In-House */}
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{ zIndex: 1, backgroundColor: '#1A237E' }}>
        <div className="gradient-orb w-[400px] h-[400px] bg-secondary/15 top-0 right-0 animate-float-slow" />
        <div className="gradient-orb w-[300px] h-[300px] bg-blue-500/15 bottom-0 left-0 animate-float" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center max-w-3xl mx-auto">
              Why Businesses Choose Us Over Hiring In-House
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  Icon: DollarSign,
                  title: 'Save 70% vs Hiring',
                  description: 'A full in-house team costs $8,000+/month. Six Powers gives you the same expertise from $500/month.',
                },
                {
                  Icon: Zap,
                  title: 'Launch in Days, Not Months',
                  description: 'No recruitment, no onboarding. We start delivering results within the first week.',
                },
                {
                  Icon: BarChart,
                  title: 'Proven Systems',
                  description: 'We bring tested strategies and tools that have delivered results across multiple industries.',
                },
                {
                  Icon: Shield,
                  title: 'Zero Risk',
                  description: "Monthly contracts, no long-term commitments. If we don't deliver, you don't stay.",
                },
              ].map(({ Icon, title, description }, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 p-6 rounded-2xl"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div style={{ width: '56px', height: '56px', background: 'rgba(230, 81, 0, 0.15)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon className="w-7 h-7" style={{ color: '#E65100' }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                    <p className="text-white/75 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PART 2 — Our Values */}
      <section className="py-20 lg:py-28" style={{ position: 'relative', zIndex: 1, backgroundColor: '#F5F7FF' }}>
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Excellence */}
              <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm">
                <div style={{ width: '64px', height: '64px', background: '#1A237E', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We hold ourselves to the highest standards in every project we take on.
                </p>
              </div>

              {/* Partnership */}
              <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm">
                <div style={{ width: '64px', height: '64px', background: '#1A237E', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Partnership</h3>
                <p className="text-gray-600 leading-relaxed">
                  We treat every client as a long-term partner, not just a transaction.
                </p>
              </div>

              {/* Innovation */}
              <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm">
                <div style={{ width: '64px', height: '64px', background: '#1A237E', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We stay ahead of digital trends so our clients always have a competitive edge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PART 3 — Meet the Director */}
      <section className="py-20 lg:py-28 bg-white" style={{ position: 'relative', zIndex: 1 }}>
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image Placeholder */}
            <div
              className="rounded-2xl flex flex-col items-center justify-center text-center px-8 gap-4"
              style={{
                height: '350px',
                backgroundColor: '#e2e8f0',
                border: '2px dashed #94a3b8',
              }}
            >
              <ImageIcon className="w-12 h-12 text-gray-400" />
              <p className="text-gray-500 font-semibold text-lg">Image Placeholder</p>
              <p className="text-gray-400 text-sm max-w-md">
                Professional photo of Johny Sassin Eid
              </p>
            </div>

            {/* Right: Text */}
            <div>
              <span className="inline-block text-secondary text-sm font-semibold tracking-widest uppercase mb-4">
                Leadership
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                Johny Sassin Eid
              </h2>
              <p className="text-lg text-gray-500 mb-6">Director & Founder, Six Powers</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Johny Sassin Eid is the founder and director of Six Powers s.a.r.l. With a deep
                passion for technology and marketing, Johny established Six Powers in 2024 with
                a mission to bring professional-grade digital services to businesses in Lebanon
                and the broader region. He leads every project with a hands-on approach, ensuring
                quality and results at every step.
              </p>
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PART 4 — Company Facts */}
      <section className="relative py-20 lg:py-24 overflow-hidden" style={{ zIndex: 1 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-900" />
        <div className="gradient-orb w-[400px] h-[400px] bg-secondary/15 top-0 left-0 animate-float-slow" />
        <div className="gradient-orb w-[300px] h-[300px] bg-blue-500/15 bottom-0 right-0 animate-float" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-secondary mb-2">2024</div>
                <div className="text-sm sm:text-base text-white/70 uppercase tracking-wider">Year Founded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-secondary mb-2">Zahlé, Lebanon</div>
                <div className="text-sm sm:text-base text-white/70 uppercase tracking-wider">Headquartered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-secondary mb-2">6</div>
                <div className="text-sm sm:text-base text-white/70 uppercase tracking-wider">Core Services</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-secondary mb-2">50+</div>
                <div className="text-sm sm:text-base text-white/70 uppercase tracking-wider">Projects Delivered</div>
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

export default AboutPage;
