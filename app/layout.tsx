import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Jawanexis Technologies | Software Development Company in Coimbatore',
  description: 'Leading software development company delivering scalable digital solutions for startups, enterprises, and global businesses. Full Stack Development, Mobile Apps, Web Applications, and MuleSoft Integration.',
  keywords: 'software development, web development, mobile apps, full stack development, coimbatore, jawanexis',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Jawanexis Technologies | Software Development Company',
    description: 'Leading software development company delivering scalable digital solutions',
    images: [
      {
        url: '/Logo_Design_for_Jawanexis.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jawanexis Technologies | Software Development Company',
    description: 'Leading software development company delivering scalable digital solutions',
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
