"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { PRICING_PLANS } from "@/data/pricing";
import { formatPrice, getDescription, isPopularPlan } from "@/utils/pricing";
import { Button } from "../ui/button";

const PricingSection = () => {
   const [userType, setUserType] = useState("patient");
   const [currency, setCurrency] = useState("USD");

   const currentPlans = PRICING_PLANS[userType][currency];

   const PricingCard = ({ plan, isPopular = false }) => (
      <div
         className={`relative bg-[#FFFFFF]/60 w-[418px] rounded-[20px] p-8 shadow-sm border h-[600px] flex-shrink-0 flex flex-col ${
            isPopular ? "border-primary " : "border-gray-100"
         } hover:shadow-xl transition-all duration-300`}
      >
         {isPopular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
               <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
               </span>
            </div>
         )}

         {plan.discountPercentage > 0 && (
            <div className="absolute -top-2 -right-2">
               <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {plan.discountPercentage}% OFF
               </span>
            </div>
         )}

         {/* Header */}
         <div className="mb-6">
            <h3 className="text-[30px] font-semibold text-gray-900 mb-3 break-words">
               {plan.name}
            </h3>
            <p className="text-text text-sm leading-relaxed break-words">{getDescription(plan)}</p>
         </div>

         {/* Price */}
         <div className="mb-6">
            <div className="flex items-baseline gap-1 flex-wrap">
               <span className="text-5xl font-bold text-black break-all">
                  {formatPrice(plan.price, plan.currency)}
               </span>
               {plan.price > 0 && (
                  <span className="text-gray-500 text-lg whitespace-nowrap">/month</span>
               )}
            </div>
            {plan.originalPrice > plan.price && plan.price > 0 && (
               <div className="mt-2">
                  <span className="text-gray-400 line-through text-lg break-all">
                     {formatPrice(plan.originalPrice, plan.currency)}
                  </span>
               </div>
            )}
         </div>

         {/* Plan Details */}
         <div className="mb-6 space-y-2 flex-shrink-0">
            {plan.familyMembers !== 1 && (
               <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <span className="break-words">
                     {plan.familyMembers === -1 ? "Unlimited" : plan.familyMembers} family members
                  </span>
               </div>
            )}
            {plan.monthlyLimits.aiChatbotResponses > 0 && (
               <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <span className="break-words">
                     {plan.monthlyLimits.aiChatbotResponses === -1
                        ? "Unlimited"
                        : plan.monthlyLimits.aiChatbotResponses}{" "}
                     AI chatbot responses
                  </span>
               </div>
            )}
            {plan.monthlyLimits.aiDiagnosticRequests > 0 && (
               <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <span className="break-words">
                     {plan.monthlyLimits.aiDiagnosticRequests === -1
                        ? "Unlimited"
                        : plan.monthlyLimits.aiDiagnosticRequests}{" "}
                     AI diagnostic requests
                  </span>
               </div>
            )}
         </div>

         {/* CTA Button */}
         <Button
            className={`w-full py-[10px] px-[14px] rounded-2xl font-medium transition-colors duration-300 mb-6 flex-shrink-0 ${
               isPopular
                  ? "bg-primary text-white hover:bg-[#1e2394]"
                  : "bg-[#010F42] text-white hover:bg-gray-800"
            }`}
         >
            Choose Plan
         </Button>

         {/* Features */}
         <div className="flex-1 overflow-hidden">
            <div className="grid grid-cols-1 gap-3 max-h-full overflow-y-auto">
               {plan.features.map((feature, index) => (
                  <div
                     key={index}
                     className="flex items-start gap-3"
                  >
                     <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-indigo-600" />
                     </div>
                     <p className="text-text text-sm break-words leading-relaxed">{feature}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );

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
            <ScrollArea className="w-full py-5 whitespace-nowrap rounded-md">
               <div className="flex gap-8 items-start pb-4">
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
