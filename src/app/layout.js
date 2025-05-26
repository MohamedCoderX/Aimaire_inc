

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
        <title>Aimaire Inc | Commercial Kitchen & Interior Design Experts</title>
        <meta name="description" content="Aimaire Inc provides expert interior design, retail display solutions, and commercial kitchen setups in Salem, Bangalore, and across India." />
        <meta name="keywords" content="Interior Design Salem, Commercial Kitchen Equipment Bangalore, Display Solutions, Aimaire Inc, Climair Inc" />
        <meta property="og:title" content="Aimaire Inc" />
        <meta property="og:description" content="Experts in commercial kitchen setups, interior design, and retail solutions. Based in Salem and Bangalore." />
        <meta property="og:url" content="https://aimaireinc.com" />
        <meta property="og:image" content="https://aimaireinc.com/images/og-banner.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aimaire Inc" />
        <meta name="twitter:description" content="Professional solutions for commercial interiors, kitchen equipment, and display models." />
        <meta name="twitter:image" content="https://aimaireinc.com/images/twitter-banner.png" />
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
              url: "https://aimaireinc.com",
              sameAs: [
                "https://www.facebook.com/aimaireinc",
                "https://www.instagram.com/aimaire_inc",
              ],
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
