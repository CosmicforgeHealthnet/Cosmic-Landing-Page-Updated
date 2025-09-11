import React from "react";
import PageHeader from "../shared/Pageheader";
import Link from "next/link";

const ForDoctors: React.FC = () => {
   return (
      <div className="min-h-screen">
         <PageHeader
            title="For Doctors"
            gradient="from-purple-400 via-pink-400 to-red-400"
         />

         <section className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8 py-10 md:py-14">
            <p className="text-gray-700 text-lg leading-7 mb-6">
               As a doctor, you can use our platform to manage patients with less administrative
               work. Every patient has a comprehensive profile with medical history, lab results,
               and prescriptions. This reduces repeated questions and shortens consultation times.
            </p>

            <p className="text-gray-700 text-lg leading-7 mb-6">
               You can consult from anywhere using either video, audio, or chat while maintaining
               full visibility of patient information. You can order lab tests and prescriptions
               directly through the system, and your patients get to receive their results without
               delay, and share updates with you as a doctor instantly.
            </p>

            <p className="text-gray-700 text-lg leading-7 mb-10">
               Our platform’s AI-driven features assist with identifying patterns, improving
               diagnostic accuracy, and reducing errors. We designed our platform to support
               efficiency without losing the human side of care.
            </p>

            <div className="text-center">
               <Link
                  target="_blank"
                  href="https://dashboard.cosmicforge-healthnet.com/auth/register?user_type=doctor"
                  className="inline-block mt-4 px-6 py-3 bg-primary text-white font-Supreme-Medium rounded-xl shadow-md hover:bg-primary/90 transition-colors duration-300"
               >
                  Join as a Doctor
               </Link>
            </div>
         </section>
      </div>
   );
};

export default ForDoctors;
