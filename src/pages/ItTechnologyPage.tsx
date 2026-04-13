import ServicePage from './ServicePage';

const ItTechnologyPage = () => (
  <ServicePage
    title="IT & Technology"
    tagline="Build a solid digital infrastructure with expert IT consultancy and support"
    features={[
      'IT Infrastructure Assessment',
      'Cloud Solutions Advisory',
      'Software Recommendations',
      'Network & Security Planning',
      'Digital Transformation Roadmap',
      'Ongoing IT Support',
    ]}
    imageDescription="Server room or clean tech workspace, professional IT environment"
    imageSrc="/images/8 IT & Technology.jpg"
    results={[
      { stat: '48 hrs', description: 'Average time to complete IT infrastructure assessment', label: 'Delivery Time' },
      { stat: '40%', description: 'Average cost reduction with optimized cloud solutions', label: 'Typical Result' },
      { stat: '99%', description: 'Uptime target for recommended infrastructure setups', label: 'Standard' },
    ]}
  />
);

export default ItTechnologyPage;
