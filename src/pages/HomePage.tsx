import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Results from '../sections/Results';
import Packages from '../sections/Packages';
import WhyChooseUs from '../sections/WhyChooseUs';
import CTA from '../sections/CTA';
import WhatsAppFloat from '../components/WhatsAppFloat';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Results />
      <Packages />
      <WhyChooseUs />
      <CTA />
      <WhatsAppFloat />
    </>
  );
};

export default HomePage;
