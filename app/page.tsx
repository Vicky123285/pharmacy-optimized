"use client";

import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <div className="w-full bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-gray-900 shadow-lg py-4 px-6 flex justify-between items-center">
        <div className="flex space-x-6">
          <Button variant="ghost" asChild className="text-white hover:text-gray-300">
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild className="text-white hover:text-gray-300">
            <Link href="/products">Products</Link>
          </Button>
          <Button variant="ghost" asChild className="text-white hover:text-gray-300">
            <Link href="/about">About</Link>
          </Button>
          <Button variant="ghost" asChild className="text-white hover:text-gray-300">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* Clerk Authentication Buttons */}
        <div className="flex space-x-4">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <>
              <SignInButton mode="modal">
                <Button className="bg-green-500 hover:bg-green-600 text-white">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">Sign Up</Button>
              </SignUpButton>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Category Section */}
      <CategorySection />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
}
