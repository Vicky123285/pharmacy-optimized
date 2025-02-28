"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold tracking-wide">
          Glow<span className="text-yellow-300">&</span>Fit
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          {["Home", "Products", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="hover:text-yellow-300 transition duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Section (Cart + Auth) */}
        <div className="flex items-center space-x-4">
          {/* Shopping Cart */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="hover:text-yellow-300 transition duration-300" size={26} />
          </Link>

          {/* Authentication Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link href="/sign-in">
              <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
                Sign In
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600">
                Sign Up
              </button>
            </Link>
            {/* User Avatar (Visible when logged in) */}
            <UserButton afterSignOutUrl="/" />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="text-white transition duration-300" size={30} />
            ) : (
              <Menu className="text-white transition duration-300" size={30} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute w-full left-0 top-16 bg-white bg-opacity-90 shadow-lg flex flex-col items-center space-y-4 py-6 text-gray-800 font-medium backdrop-blur-md"
          >
            {["Home", "Products", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-lg hover:text-pink-500 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}

            {/* Authentication in Mobile Menu */}
            <Link href="/sign-in">
              <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 w-40">
                Sign In
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 w-40">
                Sign Up
              </button>
            </Link>

            {/* User Avatar (Only shown when logged in) */}
            <UserButton afterSignOutUrl="/" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
