import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Farm Investor - Premium Agricultural Investment Platform',
  description: 'Invest in sustainable agriculture with verified opportunities and transparent returns. Join thousands of investors building a sustainable future.',
  keywords: 'agricultural investment, farm investment, sustainable farming, agritech, investment platform',
  authors: [{ name: 'Farm Investor' }],
  creator: 'Farm Investor',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://farminvestor.com',
    title: 'Farm Investor - Premium Agricultural Investment Platform',
    description: 'Invest in sustainable agriculture with verified opportunities and transparent returns.',
    images: [
      {
        url: 'https://farminvestor.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Farm Investor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Farm Investor - Premium Agricultural Investment Platform',
    description: 'Invest in sustainable agriculture with verified opportunities and transparent returns.',
    creator: '@farminvestor',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#10b981',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
