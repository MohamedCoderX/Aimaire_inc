import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Sidebar from '@/components/Sidebar';
import Head from 'next/head';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

// app/about/metadata.ts
export const metadata = {
  title: "About Aimaire Inc | Interior & Commercial Design Experts",
  description:
    "Discover Aimaire Inc's expertise in interior design and commercial kitchen solutions, serving Salem, Bangalore, and beyond.",
  keywords: [
    "Interior Design Salem",
    "Commercial Kitchen Equipment Bangalore",
    "Retail Display Solutions",
    "Aimaire Inc",
  ],
  openGraph: {
    title: "About Aimaire Inc",
    description:
      "Leading interior and commercial design solutions in Salem and Bangalore.",
    url: "https://aimaireinc.com/about",
    images: [
      {
        url: "https://aimaireinc.com/images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Aimaire Inc Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Aimaire Inc",
    description:
      "Expert interior and commercial design services in Salem and Bangalore.",
    images: ["https://aimaireinc.com/images/vision.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" />
      <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Aimaire Inc",
  "image": "https://aimaireinc.com/logo.png",
  "telephone": "+91-9876543210",
  "email": "info@aimaireinc.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Design Street",
    "addressLocality": "Salem",
    "addressRegion": "Tamil Nadu",
    "postalCode": "636001",
    "addressCountry": "IN"
  },
  "url": "https://aimaireinc.com",
  "sameAs": [
    "https://www.facebook.com/aimaireinc",
    "https://www.instagram.com/aimaire_inc"
  ]
}
</script>
      </Head>
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
          <Nav/>
          <Sidebar/>
        {children}
      </body>
    </html>
  );
}
