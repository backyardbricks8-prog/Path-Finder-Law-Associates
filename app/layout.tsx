import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import WhatsAppButton from '@/components/WhatsAppButton';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

export const viewport: Viewport = {
  themeColor: '#111111',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Path Finder Law Associates | Advocates & Solicitors, New Delhi',
  description:
    'Established in 2013 by Advocate & Solicitor Mr. Santosh Shaw. Premier legal counsel in Corporate Litigation (NCLT), Civil, Property, Criminal, Matrimonial, and Tribunal matters in New Delhi.',
  authors: [{ name: 'Path Finder Law Associates' }],
  metadataBase: new URL('https://www.path-finder.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Path Finder Law Associates | Advocates & Solicitors, New Delhi',
    description:
      'Established in 2013 by Advocate & Solicitor Mr. Santosh Shaw. Legal clarity for individuals, businesses, and institutions.',
    type: 'website',
    url: 'https://www.path-finder.in',
    siteName: 'Path Finder Law Associates',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Path Finder Law Associates | Advocates & Solicitors',
    description:
      'Legal clarity for individuals, businesses and institutions in New Delhi. Corporate, Civil, Criminal, Property, and NCLT Practice.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Path Finder Law Associates',
    founder: {
      '@type': 'Person',
      name: 'Santosh Shaw',
      jobTitle: 'Advocate & Solicitor',
    },
    foundingDate: '2013',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '111, 1st Floor, Jyoti Shikhar, District Centre, Janakpuri',
      addressLocality: 'New Delhi',
      postalCode: '110058',
      addressCountry: 'IN',
    },
    telephone: ['+919868099363', '+911142878448'],
    email: 'legal@path-finder.in',
    url: 'https://www.path-finder.in',
    areaServed: ['New Delhi', 'Delhi NCR', 'India'],
    serviceType: [
      'Corporate Litigation — NCLT',
      'Civil Litigation',
      'Property Litigation',
      'Criminal Litigation',
      'Money Recovery Litigation',
      'Matrimonial and Family Litigation',
      'Negotiable Instrument Cases — NI Act',
      'Consumer Law — NCDRC',
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="bg-white text-[#111111] font-sans antialiased selection:bg-[#800020] selection:text-white" suppressHydrationWarning>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
