import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Sidebar from '@/components/Sidebar';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});


export const metadata = {
  title: "Aimaire Inc",
  description: "Aimaire Inc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
          <Nav/>
          <Sidebar/>
        {children}
      </body>
    </html>
  );
}
