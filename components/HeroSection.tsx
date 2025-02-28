"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-[500px] flex justify-center items-center text-white"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">Glow & Fit</h1>
        <p className="mt-4 text-lg md:text-xl">
          Your one-stop shop for beauty & fitness products.
        </p>
        <Button asChild className="mt-6 bg-white text-gray-900 hover:bg-gray-300">
          <Link href="/products">Shop Now</Link>
        </Button>
      </div>
    </div>
  );
}
