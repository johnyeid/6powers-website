import ServicePage from './ServicePage';

const BusinessAutomationPage = () => (
  <ServicePage
    title="Business Automation"
    tagline="Save time and close more deals with smart CRM and WhatsApp automation"
    features={[
      'WhatsApp Business Setup',
      'Automated Message Flows',
      'Product Catalog Setup',
      'HubSpot CRM Setup',
      'Zoho CRM Setup',
      'Sales Pipeline & Contact Management',
    ]}
    imageDescription="Phone showing WhatsApp Business interface, CRM dashboard on laptop screen"
    imageSrc="/images/7 Business Automation.jpg"
    results={[
      { stat: '60%', description: 'Reduction in manual response time with WhatsApp automation', label: 'Typical Result' },
      { stat: '3 hrs', description: 'Saved per day on average with CRM automation', label: 'Typical Result' },
      { stat: '35%', description: 'Increase in lead conversion with proper CRM setup', label: 'Typical Result' },
    ]}
  />
);

export default BusinessAutomationPage;
