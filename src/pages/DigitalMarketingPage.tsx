import ServicePage from './ServicePage';

const DigitalMarketingPage = () => (
  <ServicePage
    title="Digital Marketing"
    tagline="Grow your brand with data-driven social media and paid advertising strategies"
    features={[
      'Social Media Strategy & Planning',
      'Content Creation & Scheduling',
      'Community Management',
      'Facebook & Instagram Ads',
      'Google Search Campaigns',
      'Performance Tracking & Reporting',
    ]}
    imageDescription="Team working on social media campaigns, multiple screens showing analytics dashboards"
    imageSrc="/images/3 Digital Marketing.jpg"
    results={[
      { stat: '3x', description: 'Average engagement growth in first 90 days', label: 'Typical Result' },
      { stat: '40%', description: 'Increase in profile reach with consistent content', label: 'Typical Result' },
      { stat: '2x', description: 'More leads from organic social media', label: 'Typical Result' },
    ]}
  />
);

export default DigitalMarketingPage;
