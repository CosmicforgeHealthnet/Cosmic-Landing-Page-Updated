"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileUseCasesOpen, setIsMobileUseCasesOpen] = useState(false);

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

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
  ];

  const useCases = [
    {
      title: "For Doctors",
      href: "/use-cases/doctors",
      description: "Enhance patient care and practice efficiency",
    },
    {
      title: "For Patients",
      href: "/use-cases/patients",
      description: "Take control of your health journey",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileUseCases = () => {
    setIsMobileUseCasesOpen(!isMobileUseCasesOpen);
  };

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-3 sm:px-4 md:px-6">
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <img
                src="/home/cosw.svg"
                className="w-[120px] sm:w-[140px] md:w-[160px] h-auto"
                alt="Cosmic Logo"
              />
            </div>

            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <div className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center space-x-6 xl:space-x-8">
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      <Link
                        prefetch
                        href={item.href}
                        className="text-gray-700 hover:text-[#272EA7] text-[14px] xl:text-[16px] font-medium transition-colors duration-200 relative group whitespace-nowrap"
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  ))}

                  {/* Use Cases Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="cursor-pointer text-gray-700 text-[14px] xl:text-[16px] hover:text-[#272EA7] font-medium transition-colors duration-200 relative group whitespace-nowrap">
                      Use Cases
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white border-none shadow-md">
                      <div className="grid w-[300px] xl:w-[400px] gap-3 p-4">
                        {useCases.map((useCase) => (
                          <NavigationMenuLink key={useCase.title} asChild>
                            <Link
                              href={useCase.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-indigo-50 focus:bg-indigo-50"
                            >
                              <div className="text-sm font-medium leading-none text-[#272EA7]">
                                {useCase.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                {useCase.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Desktop CTA Button - Hidden on mobile/tablet */}
            <Link
              href="https://dashboard.cosmicforge-healthnet.com/auth/login"
              className="hidden lg:block bg-transparent text-[#272EA7] px-4 xl:px-6 py-2 xl:py-3 rounded-[10px] text-sm xl:text-base font-semibold hover:text-indigo-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
            >
              Login
            </Link>

            <Link
              href="https://dashboard.cosmicforge-healthnet.com/auth/register"
              className="hidden lg:block bg-[#272EA7] text-white px-4 xl:px-6 py-2 xl:py-3 rounded-[10px] text-sm xl:text-base font-semibold hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
            >
              Get Started
            </Link>

            {/* Mobile/Tablet Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
              aria-label="Toggle mobile menu"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {/* Add top padding to prevent content overlap */}
      <div className="h-16 sm:h-18 md:h-20" />

      {/* Mobile/Tablet Navigation Overlay */}
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
          className={`absolute top-0 right-0 h-full w-[85%] sm:w-[70%] md:w-[60%] max-w-[400px] bg-white shadow-2xl transform transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="p-4 sm:p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <img
                src="/home/cosw.svg"
                className="w-[120px] sm:w-[140px] h-auto"
                alt="Cosmic Logo"
              />
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                aria-label="Close mobile menu"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Content */}
          <div className="p-4 sm:p-6 space-y-1 overflow-y-auto pb-24">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={toggleMobileMenu}
                className={`group flex items-center justify-between p-3 sm:p-4 rounded-xl hover:bg-indigo-50 transition-all duration-300 transform hover:translate-x-2 ${
                  index === 0 ? "bg-indigo-50 border border-indigo-100" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-gray-700 text-sm sm:text-base font-medium group-hover:text-[#272EA7] transition-colors duration-200">
                  {item.name}
                </span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#272EA7] transform group-hover:translate-x-1 transition-all duration-200" />
              </Link>
            ))}

            {/* Mobile Use Cases */}
            <div>
              <button
                onClick={toggleMobileUseCases}
                className="group flex items-center justify-between w-full p-3 sm:p-4 rounded-xl hover:bg-indigo-50 transition-all duration-300"
              >
                <span className="text-gray-700 text-sm sm:text-base font-medium group-hover:text-[#272EA7] transition-colors duration-200">
                  Use Cases
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 group-hover:text-[#272EA7] transition-all duration-200 ${
                    isMobileUseCasesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mobile Use Cases Submenu */}
              <div
                className={`ml-2 sm:ml-4 space-y-1 transition-all duration-300 ${
                  isMobileUseCasesOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {useCases.map((useCase, index) => (
                  <Link
                    key={useCase.title}
                    href={useCase.href}
                    onClick={toggleMobileMenu}
                    className="block p-2 sm:p-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
                    style={{
                      animationDelay: `${
                        (index + navItems.length + 1) * 100
                      }ms`,
                    }}
                  >
                    <div className="text-sm font-medium text-[#272EA7]">
                      {useCase.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {useCase.description}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile CTA Section */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-gray-100 bg-gradient-to-r from-indigo-50 to-blue-50">
            <Link
              href="https://dashboard.cosmicforge-healthnet.com/auth/register"
              onClick={toggleMobileMenu}
              className="w-full bg-[#272EA7] text-white py-3 px-4 rounded-2xl text-sm sm:text-base font-semibold hover:bg-indigo-700 transition-all duration-300 hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <p className="text-center text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
              Join thousands of healthcare professionals
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
