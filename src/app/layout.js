import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Sidebar from '@/components/Sidebar';
import Script from 'next/script';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Aimaire Inc | Bakery, Kitchen Equipment & Franchise Setup Manufacturer in India',
  description: 'Aimaire Inc — India’s trusted provider of bakery display counters, commercial kitchen equipment, and full franchise setup services with expert interior design.',
  keywords: [
    'Aimaire Inc',
    'Aimaire',
    'Aimaire India',
    'Aimaire Bakery Setup',
    'Bakery Display Counters',
    'Commercial Kitchen Equipment',
    'Franchise Setup India',
    'Interior Design Salem',
    'Climaire Alternative',
    'Retail Display Manufacturer',
    'Bakery Equipment India',
    'Restaurant Setup Company',
    'Modular Kitchen for Cafe',
  ],
  authors: [{ name: 'Aimaire Inc', url: 'https://aimaireinc.com' }],
  alternates: {
    canonical: 'https://aimaireinc.com',
  },
  openGraph: {
    title: 'Aimaire Inc | Bakery & Kitchen Setup Experts',
    description: 'Top manufacturer of bakery displays, retail counters, and commercial setups in India. Explore our custom display solutions.',
    images: ['https://aimaireinc.com/images/og-banner.jpg'],
    url: 'https://aimaireinc.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aimaire Inc | Display & Kitchen Equipment Experts',
    description: 'Retail & Franchise Display Experts. Build your bakery or restaurant setup with Aimaire.',
    images: ['https://aimaireinc.com/images/twitter-banner.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://aimaireinc.com" />
        <meta name="author" content="Aimaire Inc" />
      </head>

      <body className={`${montserrat.variable} ${openSans.variable} antialiased bg-white text-[#292a62]`}>
        {/* Structured Data for LocalBusiness */}
        <Script
          type="application/ld+json"
          id="structured-data"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Aimaire Inc",
              alternateName: "Aimaire Bakery Franchise Solutions",
              description:
                "Bakery & commercial kitchen equipment manufacturer offering display counters, franchise design, and setup services in India.",
              image: "https://aimaireinc.com/logo.png",
              telephone: "+91-9876543210",
              email: "info@aimaireinc.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Design Street",
                addressLocality: "Salem",
                addressRegion: "Tamil Nadu",
                postalCode: "636001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "11.6643",
                longitude: "78.1460",
              },
              url: "https://aimaireinc.com",
              sameAs: [
                "https://www.instagram.com/aimaire_inc",
                "https://www.facebook.com/aimaireinc",
              ],
              priceRange: "₹₹",
            }),
          }}
        />

        <Nav />
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
