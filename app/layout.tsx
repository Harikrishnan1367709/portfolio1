import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Jawanexis Technologies',
  image: '/Logo_Design_for_Jawanexis.png',
  url: 'https://jawanexis.com',
  telephone: '+91 9790631286',
  email: '23z132@psgietch.ac.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No: 54 Bharathi Park 7th Cross, Near ICICI Bank, Saibaba Colony',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    postalCode: '641043',
    addressCountry: 'IN',
  },
  areaServed: ['Coimbatore', 'India', 'Global'],
  serviceType: ['Software development', 'Web development', 'Mobile app development'],
};

export const metadata: Metadata = {
  title: 'Best Software Development Company in Coimbatore | Jawanexis Technologies',
  description: 'Jawanexis Technologies is a leading software development company in Coimbatore delivering scalable web, mobile, SaaS, and enterprise solutions.',
  keywords: [
    'software development company in Coimbatore',
    'best IT company in Coimbatore',
    'full stack development Coimbatore',
    'mobile app development Coimbatore',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Best Software Development Company in Coimbatore | Jawanexis Technologies',
    description: 'Jawanexis Technologies is a leading software development company in Coimbatore delivering scalable web, mobile, SaaS, and enterprise solutions.',
    images: [
      {
        url: '/Logo_Design_for_Jawanexis.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Software Development Company in Coimbatore | Jawanexis Technologies',
    description: 'Jawanexis Technologies is a leading software development company in Coimbatore delivering scalable web, mobile, SaaS, and enterprise solutions.',
    images: [
      {
        url: '/Logo_Design_for_Jawanexis.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={plusJakarta.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
