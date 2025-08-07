import Link from "next/link";
import React from "react";

const OurStorySection = () => {
   return (
      <section className="w-full py-20 px-6 bg-gray-50">
         <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
               <h2 className="text-5xl lg:text-6xl font-bold text-black mb-12">Our Story</h2>
            </div>

            {/* Story Content */}
            <div className="space-y-8 mb-16">
               <p className="text-gray-700 text-lg leading-relaxed">
                  CosmicForge HealthNet Limited is a visionary healthcaretechnology company
                  redefining healthcare delivery in Africa and setting a new global standard for
                  digital health innovation. We address critical healthcare disparities through our
                  world-class telemedicine platform that democratizes access to quality healthcare.
               </p>

               <p className="text-gray-700 text-lg leading-relaxed">
                  Our platform connects patients with healthcare professionals from local doctors to
                  international specialists, breaking down geographical barriers to quality medical
                  care. In regions withnadequate healthcare infrastructure, especially rural and
                  underserved areas, we deliver top-tier medical expertise through innovative
                  digital channels.
               </p>
            </div>

            {/* Call to Action */}
            <div className="space-y-8">
               <h3 className="text-3xl font-bold text-black">
                  Get Started by Choosing the best plan for you
               </h3>

               <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                     href="https://dashboard.cosmicforge-healthnet.com/auth/register?user_type=doctor"
                     className="bg-primary hover:bg-primary/80 text-white font-semibold py-4 px-8 text-center rounded-full transition-colors duration-300 min-w-[200px]"
                  >
                     Join as Doctor
                  </Link>
                  <Link
                     href="https://dashboard.cosmicforge-healthnet.com/auth/register?user_type=patient"
                     className="bg-transparent hover:bg-gray-100 text-black font-semibold py-4 px-8 text-center rounded-full border-2 border-black transition-colors duration-300 min-w-[200px]"
                  >
                     Join as Patient
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
};

export default OurStorySection;
