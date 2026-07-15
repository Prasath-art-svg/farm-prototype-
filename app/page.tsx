import { Navigation } from '@/app/components/navigation';
import { Hero } from '@/app/components/hero';
import { HowItWorks } from '@/app/components/how-it-works';
import { Opportunities } from '@/app/components/opportunities';
import { Features } from '@/app/components/features';
import { Testimonials } from '@/app/components/testimonials';
import { FAQ } from '@/app/components/faq';
import { Contact } from '@/app/components/contact';
import { Footer } from '@/app/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <HowItWorks />
      <Opportunities />
      <Features />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
