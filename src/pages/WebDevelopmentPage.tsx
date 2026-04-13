import ServicePage from './ServicePage';

const WebDevelopmentPage = () => (
  <ServicePage
    title="Web Development & E-Commerce"
    tagline="Professional websites and online stores built to convert visitors into customers"
    features={[
      'Custom Website Design',
      'WordPress Development',
      'E-Commerce Store Setup',
      'Mobile Responsive Design',
      'Speed Optimization',
      'Ongoing Maintenance & Support',
    ]}
    imageDescription="Modern website designs on laptop and mobile screens, clean workspace"
    imageSrc="/images/4 Web Development.jpg"
    results={[
      { stat: '2 wks', description: 'Average time to launch a professional website', label: 'Delivery Time' },
      { stat: '60%', description: 'Faster load time vs typical DIY websites', label: 'Performance' },
      { stat: '100%', description: 'Mobile responsive on all devices', label: 'Standard' },
    ]}
  />
);

export default WebDevelopmentPage;
