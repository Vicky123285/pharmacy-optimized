import React from "react";
import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";


const ContactPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      
      <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
        Have a question or need assistance? Our team at <strong>Glow&Fit</strong> is always here to help! 
        Reach out to us through any of the methods below.
      </p>

      {/* Contact Information */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          📍 <strong>Headquarters:</strong> 123 Glow Avenue, Wellness City, Country  
          📞 <strong>Phone:</strong> +1 234 567 890  
          ✉️ <strong>Email:</strong> support@glowfit.com  
          🕒 <strong>Working Hours:</strong> Mon - Fri, 9 AM - 6 PM
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
        <form className="space-y-4 max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" required />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" required />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded h-32" required></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
