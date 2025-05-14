"use client";
import Link from 'next/link';
import '../app/globals.css';
import React, { useEffect, useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { Menu01Icon, Cancel01Icon } from '@hugeicons/core-free-icons';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Display Models", path: "/displaymodels" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="flex justify-between w-[90%] items-center pt-6 mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src={isScrolled ? "/logo.png" : "/logoremove.png"}
            alt="logo"
            loading='eager'
            className="md:h-15 h-10 transition-all pb-2"
          />
        </Link>

        {/* Desktop Nav */}
        <div className={`hidden md:flex items-center gap-8 text-md font-bold ${isScrolled ? "text-black" : "text-white"}`}>
          {navLinks.map((link, i) => (
            <Link key={i} href={link.path} className="group flex flex-col items-center">
              {link.name}
              <div className={`h-[2px] w-0 ${isScrolled ? "bg-black" : "bg-white"} group-hover:w-full transition-all duration-300 mt-1`} />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
          <HugeiconsIcon icon={Menu01Icon} className={`w-7 h-7 ${isScrolled ? "text-black" : "text-white"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-6 text-lg font-semibold transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <button className="absolute top-6 right-6" onClick={() => setIsMenuOpen(false)}>
          <HugeiconsIcon icon={Cancel01Icon} className="w-6 h-6 text-black" />
        </button>
        {navLinks.map((link, i) => (
          <Link key={i} href={link.path} onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-black">
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
