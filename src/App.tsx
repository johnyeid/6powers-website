import { Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Footer from './sections/Footer';
import HomePage from './pages/HomePage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
import SeoContentPage from './pages/SeoContentPage';
import CreativeBrandingPage from './pages/CreativeBrandingPage';
import BusinessAutomationPage from './pages/BusinessAutomationPage';
import ItTechnologyPage from './pages/ItTechnologyPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import PackagesPage from './pages/PackagesPage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <main>
                <HomePage />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/services/web-development" element={<WebDevelopmentPage />} />
        <Route path="/services/seo-content" element={<SeoContentPage />} />
        <Route path="/services/creative-branding" element={<CreativeBrandingPage />} />
        <Route path="/services/business-automation" element={<BusinessAutomationPage />} />
        <Route path="/services/it-technology" element={<ItTechnologyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/packages" element={<PackagesPage />} />
      </Routes>
    </div>
  );
}

export default App;
