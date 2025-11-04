import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'European Green Atlas',
  description:
    'Discover and explore European sustainability organizations, ESG initiatives, and green innovations across different categories. Perfect for EU funding applications.',
  metadataBase: new URL('https://greenatlas.eu'),
    openGraph: {
      title: 'European Green Atlas',
      description:
        'Discover and explore European sustainability organizations, ESG initiatives, and green innovations across different categories. Perfect for EU funding applications.',
      url: '/',
      siteName: 'European Green Atlas',
      images: [
        {
          url: 'OG.jpg',
          width: 1200,
          height: 630,
          alt: 'European Green Atlas - Discover European Sustainability Organizations',
        },
      ],
      locale: 'en_GB',
      type: 'website',
    },
    icons: {
      icon: [
        {
          url: '/europe-logo.svg',
          href: '/europe-logo.svg',
        },
      ],
    },
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        {children}
        <Script
          data-goatcounter="https://greenatlas.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        />
      </body>
    </html>
  );
}
