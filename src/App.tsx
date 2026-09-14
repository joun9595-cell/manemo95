import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { TrustSection } from './components/TrustSection';
import { CompanyAndBank } from './components/CompanyAndBank';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingBar } from './components/FloatingBar';

export default function App() {
  const [activeQuoteServiceId, setActiveQuoteServiceId] = useState<string>('refrigerant');

  const handleScrollToCalculator = (serviceId?: string) => {
    if (serviceId) {
      setActiveQuoteServiceId(serviceId);
    }
    const element = document.getElementById('quote-calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById('company-info');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <Header
        onOpenCalculator={() => handleScrollToCalculator()}
        onOpenContact={handleScrollToContact}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenCalculator={() => handleScrollToCalculator()} />

        {/* 4 Core Services */}
        <ServicesSection onSelectServiceForQuote={handleScrollToCalculator} />

        {/* Real-time Quote Estimator */}
        <QuoteCalculator initialServiceId={activeQuoteServiceId} />

        {/* Work Process & Customer Satisfaction */}
        <TrustSection />

        {/* Company Legal Info & Toss Bank Account */}
        <CompanyAndBank />

        {/* FAQ */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Action Bar */}
      <FloatingBar onOpenCalculator={() => handleScrollToCalculator()} />
    </div>
  );
}
