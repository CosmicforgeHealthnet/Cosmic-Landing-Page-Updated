"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const Header = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);

   // Handle scroll effect
   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   // Prevent body scroll when mobile menu is open
   useEffect(() => {
      if (isMobileMenuOpen) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "unset";
      }
      return () => {
         document.body.style.overflow = "unset";
      };
   }, [isMobileMenuOpen]);

   const navItems = [
      { name: "Home", href: "/" },
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "About Us", href: "/about" },
   ];

   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   return (
      <>
         {/* Main Header */}
         <header
            className={`transition-all duration-300 ${
               isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
            }`}
         >
            <div className="max-w-[1100px] mx-auto px-6">
               <div className="flex items-center justify-between h-20">
                  {/* Logo */}
                  <div className="flex items-center space-x-2">
                     <img
                        src="/home/cosw.svg"
                        className="w-[160px]"
                        alt="Cosmic Logo"
                     />
                  </div>

                  {/* Desktop Navigation */}
                  <nav className="hidden lg:flex items-center space-x-8">
                     {navItems.map((item) => (
                        <a
                           key={item.name}
                           href={item.href}
                           className="text-gray-700 hover:text-[#272EA7] font-medium transition-colors duration-200 relative group"
                        >
                           {item.name}
                           <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#272EA7] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                     ))}
                  </nav>

                  {/* Desktop CTA Button */}
                  <a
                     href="https://dashboard.cosmicforge-healthnet.com/auth/register"
                     className="hidden lg:block bg-[#272EA7] text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                     Get Started
                  </a>

                  {/* Mobile Menu Button */}
                  <button
                     onClick={toggleMobileMenu}
                     className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                  >
                     <Menu className="w-6 h-6 text-gray-700" />
                  </button>
               </div>
            </div>
         </header>

         {/* Mobile Navigation Overlay */}
         <div
            className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${
               isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
         >
            {/* Backdrop */}
            <div
               className="absolute inset-0 bg-black/20 backdrop-blur-sm"
               onClick={toggleMobileMenu}
            />

            {/* Mobile Menu Panel */}
            <div
               className={`absolute top-0 right-0 h-full w-[80%] bg-white shadow-2xl transform transition-transform duration-500 ${
                  isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
               }`}
            >
               {/* Mobile Menu Header */}
               <img
                  src="/home/cosw.svg"
                  className="w-[160px]"
                  alt="Cosmic Logo"
               />

               {/* Mobile Menu Content */}
               <div className="p-6 space-y-1">
                  {navItems.map((item, index) => (
                     <a
                        key={item.name}
                        href={item.href}
                        onClick={toggleMobileMenu}
                        className={`group flex items-center justify-between p-4 rounded-xl hover:bg-indigo-50 transition-all duration-300 transform hover:translate-x-2 ${
                           index === 0 ? "bg-indigo-50 border border-indigo-100" : ""
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                     >
                        <span className="text-gray-700 font-medium group-hover:text-[#272EA7] transition-colors duration-200">
                           {item.name}
                        </span>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#272EA7] transform group-hover:translate-x-1 transition-all duration-200" />
                     </a>
                  ))}
               </div>

               {/* Mobile CTA Section */}
               <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gradient-to-r from-indigo-50 to-blue-50">
                  <button
                     onClick={toggleMobileMenu}
                     className="w-full bg-[#272EA7] text-white py-[10px] px-[14px] rounded-2xl font-semibold hover:bg-indigo-700 transition-all duration-300 hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                     <span>Get Started</span>
                     <ChevronRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                     Join thousands of healthcare professionals
                  </p>
               </div>
            </div>
         </div>
      </>
   );
};

export default Header;
