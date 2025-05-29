import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Sidebar from '@/components/Sidebar';
import Script from 'next/script';
import Head from 'next/head';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Aimaire Inc | Bakery, Kitchen Equipment & Franchise Setup Manufacturer in India</title>
        <meta name="description" content="Aimaire Inc is a leading manufacturer of bakery counters, commercial kitchen equipment, and full franchise setups with interior design expertise across India." />
        <meta name="keywords" content="Aimaire Inc, Commercial Kitchen Setup, Bakery Display Manufacturer, Franchise Setup India, Climaire Alternative, Display Racks, Interior Design Salem, Kitchen Equipment Bangalore" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Aimaire Inc | Bakery & Kitchen Setup Experts" />
        <meta property="og:description" content="Top manufacturer of bakery displays, retail counters, and full commercial setups in India. Explore our custom display solutions." />
        <meta property="og:image" content="https://aimaireinc.com/images/og-banner.jpg" />
        <meta property="og:url" content="https://aimaireinc.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aimaire Inc | Display & Kitchen Equipment Experts" />
        <meta name="twitter:description" content="Retail & Franchise Display Experts. Build your bakery or restaurant setup with Aimaire." />
        <meta name="twitter:image" content="https://aimaireinc.com/images/twitter-banner.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>
        {/* JSON-LD for Local Business Schema */}
        <Script
          type="application/ld+json"
          id="structured-data"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Aimaire Inc",
              description: "Bakery & commercial kitchen equipment manufacturer offering display counters, franchise design, and setup services in India.",
              image: "https://aimaireinc.com/logo.png",
              telephone: "+91-9876543210",
              email: "info@aimaireinc.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Design Street",
                addressLocality: "Salem",
                addressRegion: "Tamil Nadu",
                postalCode: "636001",
                addressCountry: "IN"
              },
              url: "https://aimaireinc.com",
              sameAs: [
                "https://www.instagram.com/aimaire_inc",
                "https://www.facebook.com/aimaireinc"
              ]
            }),
          }}
        />

        <Nav />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
