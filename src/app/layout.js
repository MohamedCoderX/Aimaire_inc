// app/layout.tsx

import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Sidebar from '@/components/Sidebar';
import Script from 'next/script';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export const metadata = {
  title: "Aimaire Inc | Commercial Kitchen & Interior Design Experts",
  description:
    "Aimaire Inc provides expert interior design, retail display solutions, and commercial kitchen setups in Salem, Bangalore, and across India.",
  keywords: [
    "Interior Design Salem",
    "Commercial Kitchen Equipment Bangalore",
    "Display Solutions",
    "Aimaire Inc",
    "Climair Inc",
  ],
  openGraph: {
    title: "Aimaire Inc",
    description:
      "Experts in commercial kitchen setups, interior design, and retail solutions. Based in Salem and Bangalore.",
    url: "https://aimaireinc.com",
    images: [
      {
        url: "https://aimaireinc.com/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Aimaire Inc Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aimaire Inc",
    description:
      "Professional solutions for commercial interiors, kitchen equipment, and display models.",
    images: ["https://aimaireinc.com/images/twitter-banner.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>
        {/* JSON-LD for Local Business Structured Data */}
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
