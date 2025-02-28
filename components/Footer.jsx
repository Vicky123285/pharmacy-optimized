import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Send } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = ["Home", "Products", "About", "Contact"];
  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com", icon: <Facebook size={24} /> },
    { name: "Twitter", href: "https://twitter.com", icon: <Twitter size={24} /> },
    { name: "Instagram", href: "https://instagram.com", icon: <Instagram size={24} /> },
  ];

  return (
    <footer className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-12 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
        
        {/* Logo & About */}
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-3xl font-extrabold">Glow&Fit</h2>
          <p className="text-sm mt-2 opacity-90 max-w-xs">
            Your ultimate destination for beauty and fitness essentials.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-lg">
            {quickLinks.map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className="hover:text-yellow-300 transition duration-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-xl font-semibold">Stay Updated</h3>
          <p className="text-sm mt-2 opacity-80 max-w-xs text-center lg:text-left">
            Subscribe to our newsletter for exclusive offers and updates.
          </p>
          <div className="mt-4 flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full rounded-l-md text-black outline-none"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-r-md">
              <Send size={20} />
            </button>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex justify-center lg:justify-start space-x-6 mt-4">
            {socialLinks.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8 border-t border-white/30 pt-4 opacity-80">
        &copy; {currentYear} Glow&Fit. All Rights Reserved.
      </div>
    </footer>
  );
}
