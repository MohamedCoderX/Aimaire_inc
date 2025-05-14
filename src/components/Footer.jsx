"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowDown02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"; // Importing React Icons

export default function Footer() {
  return (
    <footer className="bg-[#292a62] text-white pt-12 pb-6 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="mb-4">
            <Image
              src="/logo-1.png"
              alt="Aimaire Logo"
              width={200}
              height={100}
              loading="lazy"
            />
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Delivering smart, stylish commercial equipment and display solutions that elevate every space.
          </p>

          {/* Brochure Download Button */}
          <div className="mt-6">
            <a
              href="/brochure.pdf"
              download
              className="inline-flex items-center gap-2 bg-yellow-300 text-[#292a62] font-semibold px-5 py-3 rounded-full hover:bg-white transition"
            >
              <HugeiconsIcon icon={ArrowDown02Icon} className="w-5 h-5" />
              Download Brochure
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/about" className="hover:text-yellow-300 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-300 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/displaymodels" className="hover:text-yellow-300 transition">
                Display Models
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-300 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/privacy-policy" className="hover:text-yellow-300 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:text-yellow-300 transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-yellow-300 hover:text-black transition"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-yellow-300 hover:text-black transition"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-yellow-300 hover:text-black transition"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-yellow-300 hover:text-black transition"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Aimaire Inc. All rights reserved.
      </div>
    </footer>
  );
}
