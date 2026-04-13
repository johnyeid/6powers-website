import ServicePage from './ServicePage';

const CreativeBrandingPage = () => (
  <ServicePage
    title="Creative & Branding"
    tagline="Make a lasting impression with a distinctive brand identity and stunning visuals"
    features={[
      'Logo Design & Brand Identity',
      'Brand Guidelines Document',
      'Marketing Materials Design',
      'Social Media Visual Templates',
      'Print Design (Flyers, Brochures)',
      'Packaging Design',
    ]}
    imageDescription="Brand identity materials spread out — logo, business cards, color palette, typography samples"
    imageSrc="/images/6 Creative & Branding.jpg"
    results={[
      { stat: '1 wk', description: 'Average delivery time for complete brand identity', label: 'Delivery Time' },
      { stat: '80%', description: 'Of customers say branding influences purchase decisions', label: 'Research' },
      { stat: '5x', description: 'More memorable than businesses without consistent branding', label: 'Research' },
    ]}
  />
);

export default CreativeBrandingPage;
