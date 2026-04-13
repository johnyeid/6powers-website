import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

interface Tier {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
}

interface SimpleItem {
  name: string;
  price: string;
  description: string;
}

interface GridDesignItem {
  name: string;
  price: string;
  features: string[];
}

// 1. Social Media Management (Monthly)
const socialMediaTiers: Tier[] = [
  {
    name: 'Starter',
    price: '$200/mo',
    features: [
      '2 platforms',
      '12 posts/month',
      'Captions & hashtags',
      'Monthly report',
      'Basic community management',
    ],
  },
  {
    name: 'Growth',
    price: '$400/mo',
    featured: true,
    features: [
      '3 platforms',
      '20 posts + Stories',
      'Reels/Short videos (2/mo)',
      'Content calendar',
      'Bi-weekly reporting',
      'Community management',
    ],
  },
  {
    name: 'Pro',
    price: '$700/mo',
    features: [
      '4 platforms',
      '30 posts + Stories + Reels',
      'Video production (4/mo)',
      'Paid ads management',
      'Weekly reporting',
      'Full community management',
      'Influencer coordination',
    ],
  },
];

// 2. Web Development (One-Time)
const webDevTiers: Tier[] = [
  {
    name: 'Landing Page',
    price: '$350',
    features: [
      'Single-page design',
      'Mobile responsive',
      'Contact form',
      'Basic SEO setup',
      '2 revision rounds',
      'Delivery 7-10 days',
    ],
  },
  {
    name: 'Business Website',
    price: '$800',
    featured: true,
    features: [
      'Up to 6 pages',
      'CMS integration',
      'Mobile responsive',
      'On-page SEO',
      'Google Analytics setup',
      '3 revision rounds',
      'Delivery 2-3 weeks',
    ],
  },
  {
    name: 'E-Commerce Store',
    price: 'from $1,500',
    features: [
      'Full online store',
      'Up to 50 products',
      'Payment gateway',
      'Admin dashboard',
      'Inventory management',
      'Mobile responsive',
      'Delivery 3-5 weeks',
    ],
  },
];

// 3. SEO & Content Marketing (Monthly)
const seoTiers: Tier[] = [
  {
    name: 'Essentials',
    price: '$250/mo',
    features: [
      'Keyword research',
      '4 blog articles/month',
      'On-page SEO optimization',
      'Meta tags & descriptions',
      'Monthly ranking report',
    ],
  },
  {
    name: 'Standard',
    price: '$450/mo',
    featured: true,
    features: [
      'Full keyword strategy',
      '8 blog articles/month',
      'Technical SEO audit',
      'Backlink building',
      'Google Business optimization',
      'Bi-weekly ranking report',
    ],
  },
  {
    name: 'Premium',
    price: '$750/mo',
    features: [
      'Full content strategy',
      '12 articles + 4 premium pieces',
      'Advanced link building',
      'Competitor analysis',
      'Email newsletter (2/mo)',
      'Weekly analytics dashboard',
    ],
  },
];

// 4. Paid Advertising (Monthly)
const adsTiers: Tier[] = [
  {
    name: 'Starter Ads',
    price: '$200/mo',
    features: [
      '1 platform (Google or Meta)',
      'Up to 2 active campaigns',
      'Ad copywriting & creatives',
      'Audience targeting setup',
      'Monthly performance report',
    ],
  },
  {
    name: 'Growth Ads',
    price: '$380/mo',
    featured: true,
    features: [
      'Google + Meta (both platforms)',
      'Up to 5 active campaigns',
      'A/B ad creative testing',
      'Pixel & conversion tracking',
      'Retargeting campaigns',
      'Bi-weekly performance report',
    ],
  },
  {
    name: 'Pro Ads',
    price: '$600/mo',
    features: [
      'Google + Meta + YouTube',
      'Unlimited campaigns',
      'Full funnel strategy',
      'Landing page optimization',
      'Advanced audience segmentation',
      'Weekly reporting & calls',
    ],
  },
];

// 5. WhatsApp Business items (mixed one-time & monthly)
const whatsappItems: SimpleItem[] = [
  {
    name: 'WhatsApp Business Profile Setup',
    price: '$120 one-time',
    description: 'Full configuration, verified profile, business description, product catalog (up to 30 items), quick replies & greeting messages',
  },
  {
    name: 'WhatsApp Business API Integration',
    price: 'from $450 one-time',
    description: 'Automated flows, chatbot responses, CRM integration, broadcast messaging & customer support automation',
  },
  {
    name: 'WhatsApp Catalog Management',
    price: '$80/mo',
    description: 'Ongoing updates to product/service catalog, pricing, images, and availability',
  },
  {
    name: 'WhatsApp Broadcast Campaign',
    price: '$100/campaign',
    description: 'Strategy, copywriting & sending of targeted broadcast messages',
  },
];

// 6. Graphic Design & Creative (2x2)
const designItems: GridDesignItem[] = [
  {
    name: 'Logo Design',
    price: '$200',
    features: [
      '3 concepts',
      '2 revisions',
      'Primary + alternate marks',
      'All file formats',
      'Color & B&W versions',
    ],
  },
  {
    name: 'Brand Identity',
    price: '$500',
    features: [
      'Logo suite',
      'Color palette & typography',
      'Brand guidelines PDF',
      'Business card design',
    ],
  },
  {
    name: 'Social Media Kit',
    price: '$150',
    features: [
      '10 template designs',
      'Post + Story templates',
      'Editable in Canva',
      'Brand-matched design',
    ],
  },
  {
    name: 'Marketing Materials',
    price: 'from $80/item',
    features: [
      'Flyers, brochures',
      'Banners & signage',
      'Presentation decks',
    ],
  },
];

// ── Reusable sub-components ──────────────────────────────────────────

const CategoryHeader = ({ title }: { title: string }) => (
  <div
    className="rounded-xl px-6 py-4 mb-8 text-white font-bold text-lg sm:text-xl tracking-tight"
    style={{ backgroundColor: '#1A237E' }}
  >
    {title}
  </div>
);

const TierCard = ({ tier }: { tier: Tier }) => {
  const isFeatured = !!tier.featured;
  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col ${
        isFeatured
          ? 'shadow-xl lg:scale-105'
          : 'bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow'
      }`}
      style={isFeatured ? { backgroundColor: '#1A237E' } : undefined}
    >
      {isFeatured && (
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md"
          style={{ backgroundColor: '#E65100' }}
        >
          Most Popular
        </div>
      )}

      <div
        className={`inline-block self-start text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5 ${
          isFeatured ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-700'
        }`}
      >
        {tier.name}
      </div>

      <div className={`text-3xl sm:text-4xl font-extrabold mb-6 ${isFeatured ? 'text-white' : 'text-primary'}`}>
        {tier.price}
      </div>

      <ul className="space-y-3 flex-grow">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#E65100' }} />
            <span className={`text-sm leading-relaxed ${isFeatured ? 'text-white/90' : 'text-gray-700'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CategoryNote = ({ text }: { text: string }) => (
  <p className="text-sm text-gray-500 italic mt-4 text-center">{text}</p>
);

// ── Main component ───────────────────────────────────────────────────

const Packages = () => {
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
    <section ref={sectionRef} className="relative py-20 lg:py-28 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="reveal inline-block text-secondary text-sm font-semibold tracking-widest uppercase mb-4">
              Our Services & Pricing
            </span>
            <h2 className="reveal text-4xl sm:text-5xl font-bold text-primary mb-6" style={{ transitionDelay: '100ms' }}>
              Transparent Pricing. No Surprises.
            </h2>
            <p className="reveal text-lg text-gray-600" style={{ transitionDelay: '200ms' }}>
              Monthly retainers for ongoing work. One-time fees for defined projects. Mix and match to build the right solution.
            </p>
          </div>

          {/* 1. Social Media Management */}
          <div className="mb-20">
            <CategoryHeader title="1. Social Media Management (Monthly)" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-4">
              {socialMediaTiers.map((tier) => (
                <TierCard key={tier.name} tier={tier} />
              ))}
            </div>
            <CategoryNote text="Ad spend not included. Minimum 3-month commitment." />
          </div>

          {/* 2. Web Development */}
          <div className="mb-20">
            <CategoryHeader title="2. Web Development (One-Time)" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-4">
              {webDevTiers.map((tier) => (
                <TierCard key={tier.name} tier={tier} />
              ))}
            </div>
            <CategoryNote text="Domain & hosting fees not included." />
          </div>

          {/* 3. SEO & Content Marketing */}
          <div className="mb-20">
            <CategoryHeader title="3. SEO & Content Marketing (Monthly)" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-4">
              {seoTiers.map((tier) => (
                <TierCard key={tier.name} tier={tier} />
              ))}
            </div>
            <CategoryNote text="SEO results typically visible within 60-90 days. Minimum 3-month commitment." />
          </div>

          {/* 4. Paid Advertising */}
          <div className="mb-20">
            <CategoryHeader title="4. Paid Advertising — Google & Meta (Monthly)" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-4">
              {adsTiers.map((tier) => (
                <TierCard key={tier.name} tier={tier} />
              ))}
            </div>
            <CategoryNote text="Ad spend paid directly to Google/Meta by client. Minimum recommended budget: $300/mo." />
          </div>

          {/* 5. WhatsApp Business */}
          <div className="mb-20">
            <CategoryHeader title="5. WhatsApp Business (One-Time & Monthly)" />
            <div className="space-y-4">
              {whatsappItems.map((item) => (
                <div
                  key={item.name}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col sm:flex-row sm:items-start gap-4"
                >
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold text-primary mb-2">{item.name}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <div
                    className="flex-shrink-0 text-lg font-extrabold whitespace-nowrap"
                    style={{ color: '#E65100' }}
                  >
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Graphic Design & Creative */}
          <div className="mb-16">
            <CategoryHeader title="6. Graphic Design & Creative (One-Time)" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {designItems.map((item) => (
                <div
                  key={item.name}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <h4 className="text-xl font-semibold text-primary">{item.name}</h4>
                    <div
                      className="text-2xl font-extrabold whitespace-nowrap"
                      style={{ color: '#E65100' }}
                    >
                      {item.price}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                        <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#E65100' }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Final Note */}
          <div
            className="rounded-2xl p-8 text-center"
            style={{ backgroundColor: '#F5F7FF' }}
          >
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-primary">All prices in USD.</span>
              {' '}50% deposit required to begin all projects. Custom quotes available for
              enterprise projects and tailored combinations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
