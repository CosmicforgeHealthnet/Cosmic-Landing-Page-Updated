"use client";

import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
   const footerLinks = {
      Company: [
         { name: "About", href: "/about" },
         { name: "Features", href: "/features" },
         { name: "Careers", href: "/careers" },
         { name: "Blog", href: "/blog" },
      ],
      Product: [
         { name: "Features", href: "/features" },
         { name: "Pricing", href: "/pricing" },
         { name: "Integrations", href: "/integrations" },
         { name: "API", href: "/api" },
      ],
      Legal: [
         { name: "Privacy", href: "/privacy-policy" },
         { name: "Terms", href: "/terms" },
         { name: "Security", href: "/security" },
         { name: "Compliance", href: "/compliance" },
      ],
   };

   const socialLinks = [
      { icon: Facebook, href: "#", label: "Facebook" },
      { icon: Twitter, href: "#", label: "Twitter" },
      { icon: Linkedin, href: "#", label: "LinkedIn" },
      { icon: Instagram, href: "#", label: "Instagram" },
   ];

   return (
      <footer className="bg-[#010F42] relative text-white overflow-hidden">
         <div className="relative z-10 max-w-[1100px] mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
               {/* Logo and Description */}
               <div
                  className="lg:col-span-1"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="100"
               >
                  <img
                     src="/home/cosw.svg"
                     className="w-[160px]"
                     alt="Cosmic Logo"
                     data-aos="zoom-in"
                     data-aos-duration="600"
                     data-aos-delay="200"
                  />

                  <p
                     className="text-gray-300 text-sm leading-relaxed mb-6"
                     data-aos="fade-up"
                     data-aos-duration="700"
                     data-aos-delay="400"
                  >
                     Revolutionizing healthcare with cutting-edge technology and personalized care
                     solutions for patients and healthcare providers worldwide.
                  </p>

                  {/* Contact Info */}
                  <div
                     className="space-y-3 mb-6"
                     data-aos="fade-up"
                     data-aos-duration="600"
                     data-aos-delay="600"
                  >
                     <div
                        className="flex items-center space-x-3 text-sm text-gray-300"
                        data-aos="slide-right"
                        data-aos-duration="500"
                        data-aos-delay="700"
                     >
                        <Mail className="w-4 h-4 text-blue-400" />
                        <span>Support@cosmicforgehealthnet.com</span>
                     </div>
                     <div
                        className="flex items-center space-x-3 text-sm text-gray-300"
                        data-aos="slide-right"
                        data-aos-duration="500"
                        data-aos-delay="800"
                     >
                        <Phone className="w-4 h-4 text-blue-400" />
                        <span>01820202020</span>
                     </div>
                     <div
                        className="flex items-center space-x-3 text-sm text-gray-300"
                        data-aos="slide-right"
                        data-aos-duration="500"
                        data-aos-delay="900"
                     >
                        <MapPin className="w-4 h-4 text-blue-400" />
                        <span>Plot 8, Providence Street, Lekki Phase 1, Lagos State, Nigeria.</span>
                     </div>
                  </div>

                  {/* Social Links */}
                  <div
                     className="flex space-x-4"
                     data-aos="fade-up"
                     data-aos-duration="600"
                     data-aos-delay="1000"
                  >
                     {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                           <a
                              key={social.label}
                              href={social.href}
                              className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110"
                              aria-label={social.label}
                              data-aos="zoom-in"
                              data-aos-duration="400"
                              data-aos-delay={1100 + index * 100}
                           >
                              <Icon className="w-5 h-5" />
                           </a>
                        );
                     })}
                  </div>
               </div>

               {/* Footer Links */}
               {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                  <div
                     key={category}
                     data-aos="fade-up"
                     data-aos-duration="700"
                     data-aos-delay={300 + categoryIndex * 200}
                  >
                     <h3
                        className="text-lg font-semibold mb-6 text-white"
                        data-aos="slide-down"
                        data-aos-duration="500"
                        data-aos-delay={400 + categoryIndex * 200}
                     >
                        {category}
                     </h3>
                     <ul className="space-y-4">
                        {links.map((link, linkIndex) => (
                           <li
                              key={link.name}
                              data-aos="fade-left"
                              data-aos-duration="400"
                              data-aos-delay={500 + categoryIndex * 200 + linkIndex * 100}
                           >
                              <a
                                 href={link.href}
                                 className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                              >
                                 {link.name}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>

            {/* Bottom Bar */}
            <div
               className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
               data-aos="fade-up"
               data-aos-duration="800"
               data-aos-delay="1200"
            >
               <p
                  className="text-gray-400 text-sm"
                  data-aos="slide-right"
                  data-aos-duration="600"
                  data-aos-delay="1400"
               >
                  © 2025 CosmicForge HealthNet Limited. All rights reserved.
               </p>
               <div
                  className="flex space-x-6"
                  data-aos="slide-left"
                  data-aos-duration="600"
                  data-aos-delay="1500"
               >
                  <a
                     href="/privacy"
                     className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                     data-aos="fade-up"
                     data-aos-duration="400"
                     data-aos-delay="1600"
                  >
                     Privacy Policy
                  </a>
                  <a
                     href="/terms"
                     className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                     data-aos="fade-up"
                     data-aos-duration="400"
                     data-aos-delay="1700"
                  >
                     Terms of Service
                  </a>
                  <a
                     href="/cookies"
                     className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                     data-aos="fade-up"
                     data-aos-duration="400"
                     data-aos-delay="1800"
                  >
                     Cookie Policy
                  </a>
               </div>
            </div>
         </div>

         <h1 className="absolute z-100  -bottom-15 left-0 font-bold text-[140px] opacity-10!">
            Cosmic Forge
         </h1>
      </footer>
   );
};

export default Footer;
