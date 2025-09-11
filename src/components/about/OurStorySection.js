import Link from "next/link";
import React from "react";

const OurStorySection = () => {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-12">
            Our Story
          </h2>
        </div>

        {/* Story Content */}
        <div className="space-y-8 mb-16">
          <p className="text-gray-700 text-lg leading-relaxed">
            Cosmicforge HealthNet is a healthcare technology company committed
            to transforming how medical care is delivered and experienced in
            Africa and beyond. We focus on addressing the gaps in healthcare
            access through a digital-first approach.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Our platform connects patients with licensed doctors, specialists,
            laboratories, and pharmacies, creating a unified healthcare system
            that works without geographical limits. We provide telemedicine,
            remote diagnostics, digital patient records, AI-driven insights, and
            connected health monitoring, and we ensure that every service is
            designed to be secure, reliable, and easy to use.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We make sure our patients receive timely care while healthcare
            professionals gain tools that improve efficiency and outcomes by
            combining clinical expertise with advanced technology. We also work
            to bridge local healthcare providers with international experts.
            This global collaboration allows patients to receive specialized
            care and second opinions without costly travel.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our approach is centered on equity. We are building solutions that
            make healthcare accessible for patients in rural villages, urban
            centers, and underserved communities. With every feature, our goal
            is to make healthcare safe, affordable, and effective for everyone.
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
