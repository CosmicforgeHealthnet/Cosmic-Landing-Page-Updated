"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { PRICING_PLANS } from "@/data/pricing";
import { PricingCard } from "../shared/PricingCard";
import { isPopularPlan } from "@/utils/pricing";

const PricingSection = () => {
  const [userType, setUserType] = useState("patient");
  const [currency, setCurrency] = useState("USD");

  const currentPlans = PRICING_PLANS[userType][currency];

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#9096F8]/30">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 sm:mb-16 gap-6 lg:gap-8"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <div
            className="w-full lg:w-auto"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 text-center lg:text-left">
              Pricing made <span className="text-orange-500">painless</span>
            </h2>
            <p className="text-gray-600 text-center lg:text-left text-sm sm:text-base">
              Cosmicforge has the best plan for you!
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            {/* User Type Switch */}
            <div
              className="bg-white rounded-2xl p-1 shadow-sm border border-gray-100 w-full sm:w-auto"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <button
                onClick={() => setUserType("patient")}
                className={`w-1/2 sm:w-auto px-4 sm:px-6 py-2 rounded-xl font-medium text-sm sm:text-base transition-colors duration-300 ${
                  userType === "patient"
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Patient
              </button>
              <button
                onClick={() => setUserType("doctor")}
                className={`w-1/2 sm:w-auto px-4 sm:px-6 py-2 rounded-xl font-medium text-sm sm:text-base transition-colors duration-300 ${
                  userType === "doctor"
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Doctor
              </button>
            </div>

            {/* Currency Switch */}
            <div
              className="bg-white rounded-2xl p-1 shadow-sm border border-gray-100 w-full sm:w-auto"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="700"
            >
              <button
                onClick={() => setCurrency("USD")}
                className={`w-1/2 sm:w-auto px-4 sm:px-6 py-2 rounded-xl font-medium text-sm sm:text-base transition-colors duration-300 ${
                  currency === "USD"
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                USD
              </button>
              <button
                onClick={() => setCurrency("NGN")}
                className={`w-1/2 sm:w-auto px-4 sm:px-6 py-2 rounded-xl font-medium text-sm sm:text-base transition-colors duration-300 ${
                  currency === "NGN"
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                NGN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards Section */}
      {userType === "doctor" && currentPlans.length === 0 ? (
        <div
          className="text-center py-12 sm:py-16 px-4"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <div
            className="text-4xl sm:text-5xl lg:text-6xl mb-4"
            data-aos="bounce-in"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            👨‍⚕️
          </div>
          <h3
            className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="800"
          >
            Doctor Plans Coming Soon
          </h3>
          <p
            className="text-gray-600 text-sm sm:text-base max-w-md mx-auto"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="900"
          >
            We're working on special pricing plans for healthcare professionals.
            Stay tuned!
          </p>
        </div>
      ) : (
        <div
          className="w-full"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
        >
          {/* Mobile: Stack cards vertically */}
          <div className="block lg:hidden space-y-6 ">
            <ScrollArea className="w-full py-5 whitespace-nowrap rounded-md">
              <div className="flex gap-2 xl:gap-8 items-start py-5">
                {currentPlans.map((plan, index) => (
                  <div
                    key={plan.id}
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay={600 + index * 150}
                    data-aos-anchor-placement="top-bottom"
                  >
                    <PricingCard
                      plan={plan}
                      isPopular={isPopularPlan(plan.id)}
                    />
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="h-3 bg-gray-300" />
            </ScrollArea>
          </div>

          {/* Desktop: Horizontal scroll */}
          <div className="hidden lg:block">
            <ScrollArea className="w-full py-5 whitespace-nowrap rounded-md">
              <div className="flex gap-2 xl:gap-8 items-start px-4 py-5">
                {currentPlans.map((plan, index) => (
                  <div
                    key={plan.id}
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay={600 + index * 150}
                    data-aos-anchor-placement="top-bottom"
                  >
                    <PricingCard
                      plan={plan}
                      isPopular={isPopularPlan(plan.id)}
                    />
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="h-3 bg-gray-300" />
            </ScrollArea>
          </div>
          {/* removed this fo now */}
          {/* Tablet: Show 2 cards per row */}
          <div className="hidden md:hidden lg:hidden">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 px-4">
              {currentPlans.map((plan, index) => (
                <div
                  key={plan.id}
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay={600 + index * 150}
                  data-aos-anchor-placement="top-bottom"
                >
                  <PricingCard plan={plan} isPopular={isPopularPlan(plan.id)} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingSection;
