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
      <div className="w-full py-20 px-6 bg-[#9096F8]/30">
         <div className="max-w-[1200px] mx-auto">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 gap-6">
               <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                     Pricing made <span className="text-orange-500">painless</span>
                  </h2>
                  <p className="text-gray-600">Cosmicforge has the best plan for you!</p>
               </div>

               <div className="flex flex-col sm:flex-row gap-4">
                  {/* User Type Switch */}
                  <div className="bg-white rounded-2xl p-1 shadow-sm border border-gray-100">
                     <button
                        onClick={() => setUserType("patient")}
                        className={`px-6 py-2 rounded-xl font-medium transition-colors duration-300 ${
                           userType === "patient"
                              ? "bg-primary text-white"
                              : "text-gray-600 hover:text-gray-900"
                        }`}
                     >
                        Patient
                     </button>
                     <button
                        onClick={() => setUserType("doctor")}
                        className={`px-6 py-2 rounded-xl font-medium transition-colors duration-300 ${
                           userType === "doctor"
                              ? "bg-primary text-white"
                              : "text-gray-600 hover:text-gray-900"
                        }`}
                     >
                        Doctor
                     </button>
                  </div>

                  {/* Currency Switch */}
                  <div className="bg-white rounded-2xl p-1 shadow-sm border border-gray-100">
                     <button
                        onClick={() => setCurrency("USD")}
                        className={`px-6 py-2 rounded-xl font-medium transition-colors duration-300 ${
                           currency === "USD"
                              ? "bg-primary text-white"
                              : "text-gray-600 hover:text-gray-900"
                        }`}
                     >
                        USD
                     </button>
                     <button
                        onClick={() => setCurrency("NGN")}
                        className={`px-6 py-2 rounded-xl font-medium transition-colors duration-300 ${
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

            {/* Pricing Cards */}
         </div>

         <style jsx>{`
            .scrollbar-hide {
               -ms-overflow-style: none;
               scrollbar-width: none;
            }
            .scrollbar-hide::-webkit-scrollbar {
               display: none;
            }
         `}</style>
         {userType === "doctor" && currentPlans.length === 0 ? (
            <div className="text-center py-16">
               <div className="text-6xl mb-4">👨‍⚕️</div>
               <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Doctor Plans Coming Soon
               </h3>
               <p className="text-gray-600">
                  We're working on special pricing plans for healthcare professionals. Stay tuned!
               </p>
            </div>
         ) : (
            <ScrollArea className="w-full py-5 h-screen whitespace-nowrap rounded-md">
               <div className="flex gap-8 items-center h-screen">
                  {currentPlans.map((plan, index) => (
                     <PricingCard
                        key={plan.id}
                        plan={plan}
                        isPopular={isPopularPlan(plan.id)}
                     />
                  ))}
               </div>
               <ScrollBar
                  orientation="horizontal"
                  className="h-3 bg-text"
               />
            </ScrollArea>
         )}
      </div>
   );
};

export default PricingSection;
