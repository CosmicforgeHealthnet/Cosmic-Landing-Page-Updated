"use client";

import React from "react";
// import { Link } from "react-router-dom";

const HealthcareCTASection = () => {
   return (
      <div
         className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6"
         style={{
            background: "linear-gradient(to top, white, #E3E4FF)",
         }}
      >
         <div className="max-w-[1100px] mx-auto">
            {/* Main CTA Card */}
            <div className="bg-[#272EA7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
               {/* Content Container */}
               <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                  {/* Left Content */}
                  <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                     <div className="space-y-3 lg:space-y-4">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                           Healthcare, on your{" "}
                           <span className="text-[#9096F8]">
                              terms<span className="text-[#03C800]">.</span>
                           </span>
                        </h2>

                        <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                           Instant video visits, flexible doctor pricing, and subscription
                           savings—all in one secure platform.
                        </p>
                     </div>

                     {/* CTA Buttons */}
                     <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                        <a
                           target="_blank"
                           className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 sm:px-8 lg:px-[40px] py-3 sm:py-[14px] rounded-full font-semibold hover:bg-white/30 transition-all duration-300 text-center text-sm sm:text-base"
                           href="https://dashboard.cosmicforge-healthnet.com/auth/register?user_type=doctor"
                        >
                           Join as Doctor
                        </a>
                        <a
                           target="_blank"
                           className="bg-white text-[#272EA7] px-6 sm:px-8 lg:px-[40px] py-3 sm:py-[14px] rounded-full font-semibold hover:bg-white/90 transition-all duration-300 text-center text-sm sm:text-base"
                           href="https://dashboard.cosmicforge-healthnet.com/auth/register?user_type=patient"
                        >
                           Join as Patient
                        </a>
                     </div>
                  </div>

                  {/* Right Statistics */}
                  <div className="space-y-6 lg:space-y-8">
                     {/* Application Users Stat */}
                     <div className="text-center lg:text-right">
                        <div className="flex items-end justify-center lg:justify-end gap-1 sm:gap-2 mb-1 sm:mb-2">
                           <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
                              1
                           </span>
                           <span className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-green-400 mb-1 sm:mb-2">
                              k
                           </span>
                        </div>
                        <p className="text-blue-200 text-sm sm:text-base lg:text-lg">
                           Application Users
                        </p>
                     </div>

                     {/* Growth Stat */}
                     <div className="text-center lg:text-right">
                        <div className="flex items-end justify-center lg:justify-end gap-1 mb-1 sm:mb-2">
                           <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
                              80
                           </span>
                           <span className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-green-400 mb-1 sm:mb-2">
                              %
                           </span>
                        </div>
                        <p className="text-blue-200 text-sm sm:text-base lg:text-lg">Growth</p>
                     </div>

                     {/* Doctors Joined Stat */}
                     <div className="text-center lg:text-right">
                        <div className="flex items-end justify-center lg:justify-end gap-1 mb-1 sm:mb-2">
                           <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
                              500
                           </span>
                           <span className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-green-400 mb-1 sm:mb-2">
                              +
                           </span>
                        </div>
                        <p className="text-blue-200 text-sm sm:text-base lg:text-lg">
                           Doctors Joined Us
                        </p>
                     </div>
                  </div>
               </div>

               {/* Background Decorative Elements - Hidden on mobile for cleaner look */}
               <div className="hidden lg:block absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
               <div className="hidden lg:block absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>

               {/* Mobile decorative elements - smaller and positioned better */}
               <div className="lg:hidden absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
               <div className="lg:hidden absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            </div>
         </div>
      </div>
   );
};

export default HealthcareCTASection;
