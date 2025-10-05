import {
  Header,
  Hero,
  HowItWorks,
  WhatToAsk,
  PricingSection,
  CTA,
  Footer,
} from '@/components/landing';

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <Hero />
      <HowItWorks />
      <WhatToAsk />
      <PricingSection />
      <CTA />
      <Footer />
    </div>
  );
}
