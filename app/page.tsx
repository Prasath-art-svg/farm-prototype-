'use client';

import { Navigation } from './components/navigation';
import { Hero } from './components/hero';
import { HowItWorks } from './components/how-it-works';
import { Opportunities } from './components/opportunities';
import { Features } from './components/features';
import { Testimonials } from './components/testimonials';
import { FAQ } from './components/faq';
import { Contact } from './components/contact';
import { Footer } from './components/footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <HowItWorks />
      <Opportunities />
      <Features />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
