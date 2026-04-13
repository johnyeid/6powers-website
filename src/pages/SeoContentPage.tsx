import ServicePage from './ServicePage';

const SeoContentPage = () => (
  <ServicePage
    title="SEO & Content Marketing"
    tagline="Rank higher on Google and attract the right audience with powerful content"
    features={[
      'Keyword Research & Strategy',
      'On-Page SEO Optimization',
      'Technical SEO Audit',
      'Blog & Article Writing',
      'Content Calendar Planning',
      'Monthly Performance Reports',
    ]}
    imageDescription="Google search results on screen, analytics graphs showing growth"
    imageSrc="/images/5 SEO & Content.jpg"
    results={[
      { stat: '4 mos', description: 'Average time to see significant ranking improvements', label: 'Timeline' },
      { stat: '55%', description: 'Average increase in organic traffic after 6 months', label: 'Typical Result' },
      { stat: '3x', description: 'More qualified leads from search vs social', label: 'Industry Average' },
    ]}
  />
);

export default SeoContentPage;
