import React from "react";
import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";


const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">About Glow&Fit</h1>
      
      <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
        Welcome to <strong>Glow&Fit</strong>, your ultimate destination for premium beauty, skincare, wellness, 
        and gym products. Our goal is to empower individuals to look and feel their best by providing 
        high-quality self-care solutions at your fingertips.
      </p>

      {/* Our Mission */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Glow&Fit, we are committed to enhancing your self-care and fitness journey by offering
          a curated selection of trusted, high-performance products. We believe in making
          wellness accessible, convenient, and effective.
        </p>
      </div>

      {/* Why Choose Us? */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc ml-6 text-lg text-gray-700">
          <li>🌟 **Premium Quality** – Handpicked beauty and fitness essentials</li>
          <li>🚀 **Fast & Reliable Delivery** – We bring products to your doorstep</li>
          <li>💖 **Customer-Centric Approach** – Your satisfaction is our priority</li>
          <li>🔬 **Science-Backed Formulas** – Trusted by experts in wellness & skincare</li>
        </ul>
      </div>

      {/* Meet the Founders */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Meet the Founders</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Glow&Fit was founded by two visionary entrepreneurs dedicated to revolutionizing the 
          self-care and fitness industry. Their expertise in beauty, skincare, and wellness, combined 
          with a passion for innovation, has helped build a platform that caters to every individual’s 
          unique needs.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
