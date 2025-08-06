"use client";

import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const SpecialistSection = () => {
   // Medical specialties data with icons (you can replace these with actual images)
   const specialties = [
      { name: "Cardiology", icon: "🫀", color: "from-red-500 to-red-600" },
      { name: "Dentistry", icon: "🦷", color: "from-blue-400 to-blue-500" },
      { name: "Dermatology", icon: "👄", color: "from-pink-400 to-pink-500" },
      {
         name: "Emergency Medicine",
         icon: "🚨",
         color: "from-red-600 to-red-700",
      },
      {
         name: "General Medicine",
         icon: "👨‍⚕️",
         color: "from-blue-500 to-blue-600",
      },
      { name: "Genomics", icon: "🧬", color: "from-purple-500 to-purple-600" },
      {
         name: "Gastro Enterology",
         icon: "🔬",
         color: "from-pink-500 to-pink-600",
      },
      { name: "Hematology", icon: "🩸", color: "from-red-700 to-red-800" },
      { name: "Neonatology", icon: "👶", color: "from-yellow-500 to-orange-500" },
      { name: "Nephrology", icon: "🫘", color: "from-blue-600 to-blue-700" },
   ];

   const specialtiesRow2 = [
      { name: "Nuerology", icon: "🧠", color: "from-purple-600 to-purple-700" },
      { name: "OB-GYN", icon: "👩‍⚕️", color: "from-teal-500 to-teal-600" },
      { name: "Oncology", icon: "🎗️", color: "from-blue-700 to-blue-800" },
      {
         name: "Ophthalmology",
         icon: "👁️",
         color: "from-indigo-500 to-indigo-600",
      },
      { name: "Orthopedics", icon: "🦴", color: "from-blue-600 to-blue-700" },
      { name: "Otolaryngology", icon: "👂", color: "from-blue-800 to-blue-900" },
      { name: "Pathology", icon: "🔬", color: "from-teal-600 to-teal-700" },
      { name: "Pediatrics", icon: "🧸", color: "from-orange-400 to-orange-500" },
      {
         name: "Physical Therapy",
         icon: "🏃‍♂️",
         color: "from-blue-500 to-blue-600",
      },
      { name: "Psychiatry", icon: "🧠", color: "from-purple-700 to-purple-800" },
   ];

   const specialtiesRow3 = [
      { name: "Pulmonology", icon: "🫁", color: "from-red-600 to-red-700" },
      { name: "Radiology", icon: "📡", color: "from-gray-500 to-gray-600" },
      { name: "Rheumatology", icon: "🦴", color: "from-red-500 to-red-600" },
      { name: "Urology", icon: "🔬", color: "from-blue-600 to-blue-700" },
      { name: "Cardiology", icon: "🫀", color: "from-red-500 to-red-600" },
      { name: "Dentistry", icon: "🦷", color: "from-blue-400 to-blue-500" },
      { name: "Dermatology", icon: "👄", color: "from-pink-400 to-pink-500" },
      {
         name: "Emergency Medicine",
         icon: "🚨",
         color: "from-red-600 to-red-700",
      },
   ];

   const SpecialtyCard = ({ specialty, index }) => (
      <Link
         key={`${specialty.name}-${index}`}
         href={`/specialties/${specialty.name.toLowerCase().replace(/\s+/g, "-")}`}
         className="bg-[#ECECFF] px-6 py-4 mx-3 min-w-[180px]  flex flex-col items-center justify-center rounded-full border border-[#9096F8] hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
      >
         {/* <div
        className={`w-12 h-12 rounded-full bg-gradient-to-br ${specialty.color} flex items-center justify-center text-white text-xl mb-3 group-hover:scale-110 transition-transform duration-300`}
      >
        {specialty.icon}
      </div> */}
         <h3 className="text-gray-800 font-medium text-sm text-center leading-tight group-hover:text-indigo-600 transition-colors duration-300">
            {specialty.name}
         </h3>
      </Link>
   );

   return (
      <div className="w-full bg-[#E3E4FF] py-16 overflow-hidden">
         <div className="max-w-[1100px] mx-auto px-6 mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               {/* Left Content */}
               <div className="space-y-6">
                  <h2 className="text-[30px] lg:text-5xl font-semibold text-gray-900 leading-tight">
                     Need a specialist or <span className="text-[#272EA7]">Consultant?</span>
                  </h2>
               </div>
               {/* <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            React Bits
          </ScrollFloat> */}

               {/* Right Content */}
               <div className="space-y-4">
                  <p className="text-lg text-black leading-relaxed">
                     Skip the referral maze and book a board-certified cardiologist, dermatologist,
                     or any other expert for a same-day video visit—right from your phone.
                  </p>
               </div>
            </div>
         </div>

         {/* Marquee Sections */}
         <div className="space-y-3">
            {/* First Row - Left to Right */}
            <Marquee
               gradient={false}
               speed={30}
               pauseOnHover={true}
               className="py-2"
            >
               {specialties.map((specialty, index) => (
                  <SpecialtyCard
                     key={`row1-${index}`}
                     specialty={specialty}
                     index={index}
                  />
               ))}
            </Marquee>

            {/* Second Row - Right to Left */}
            <Marquee
               gradient={false}
               speed={35}
               direction="right"
               pauseOnHover={true}
               className="py-2"
            >
               {specialtiesRow2.map((specialty, index) => (
                  <SpecialtyCard
                     key={`row2-${index}`}
                     specialty={specialty}
                     index={index}
                  />
               ))}
            </Marquee>

            {/* Third Row - Left to Right */}
            <Marquee
               gradient={false}
               speed={25}
               pauseOnHover={true}
               className="py-2"
            >
               {specialtiesRow3.map((specialty, index) => (
                  <SpecialtyCard
                     key={`row3-${index}`}
                     specialty={specialty}
                     index={index}
                  />
               ))}
            </Marquee>
         </div>
      </div>
   );
};

export default SpecialistSection;
