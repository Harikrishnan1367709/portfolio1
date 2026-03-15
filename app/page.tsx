import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Industries from '@/components/Industries';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <Services />
      <Projects />
      <Industries />
      <Testimonials />
      <CTA />
    </>
  );
}
