"use client";
import { PRICING_PLANS } from "@/data/pricing";
import React, { useState } from "react";
import { PricingCard } from "../shared/PricingCard";
import { isPopularPlan } from "@/utils/pricing";
import { Button } from "../ui/button";
import PageHeader from "../shared/Pageheader";

const PricingIndex = () => {
   const [userType, setUserType] = useState("patient");
   const [currency, setCurrency] = useState("USD");

   const currentPlans = PRICING_PLANS[userType][currency];

   // Split plans into chunks of 3 for rows
   const planRows = [];
   for (let i = 0; i < currentPlans.length; i += 3) {
      planRows.push(currentPlans.slice(i, i + 3));
   }

   return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
         {/* Page Header */}
         <PageHeader
            title="Pricing Plans"
            subtitle="Choose the perfect plan for your healthcare journey. Affordable, transparent
                  pricing with no hidden fees."
            // gradient="from-blue-400 via-purple-400 to-green-300"
         />

         {/* Main Content */}
         <div className="w-full py-16 px-6">
            <div className="max-w-7xl mx-auto">
               {/* Controls - Updated to match PricingSection style */}
               <div className="flex flex-col sm:flex-row items-center justify-center mb-16 gap-4">
                  {/* User Type Switch */}
                  <div className="bg-white rounded-2xl p-1 shadow-sm border border-gray-100 w-full sm:w-auto">
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
                  <div className="bg-white rounded-2xl p-1 shadow-sm border border-gray-100 w-full sm:w-auto">
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

               {/* Pricing Cards */}
               {userType === "doctor" && currentPlans.length === 0 ? (
                  <div className="text-center py-20">
                     <div className="text-8xl mb-6">👨‍⚕️</div>
                     <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        Doctor Plans Coming Soon
                     </h3>
                     <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We're working on special pricing plans for healthcare professionals. Stay
                        tuned for exclusive features designed specifically for medical
                        practitioners.
                     </p>
                  </div>
               ) : (
                  <div className="space-y-12">
                     {planRows.map((row, rowIndex) => (
                        <div
                           key={rowIndex}
                           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
                        >
                           {row.map((plan) => (
                              <PricingCard
                                 key={plan.id}
                                 plan={plan}
                                 isPopular={isPopularPlan(plan.id)}
                              />
                           ))}
                        </div>
                     ))}
                  </div>
               )}

               {/* Bottom CTA */}
               {/* <div className="text-center mt-20">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a custom plan?</h3>
                  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                     Contact our team to discuss enterprise solutions or custom pricing for large
                     organizations.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-colors duration-300">
                     Contact Sales
                  </Button>
               </div> */}
            </div>
         </div>
      </div>
   );
};

export default PricingIndex;
