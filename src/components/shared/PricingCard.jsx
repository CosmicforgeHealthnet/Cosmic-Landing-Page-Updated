import { Check } from "lucide-react";
import { Button } from "../ui/button";

const { getDescription, formatPrice } = require("@/utils/pricing");

export const PricingCard = ({ plan, isPopular = false }) => {
   // Function to handle plan selection and redirect
   const handlePlanSelection = () => {
      // Extract plan type from plan name or id (adjust based on your data structure)
      const planType = plan.name.toLowerCase().replace(/\s+/g, "_"); // e.g., "Basic Plan" -> "basic_plan"

      // Alternative: if you have a specific planType field in your plan object
      // const planType = plan.planType || plan.id || 'free';

      const dashboardUrl = `https://dashboard.cosmicforge-healthnet.com/auth/login?plan_type=${planType}`;

      if (window !== undefined) {
         window.open(dashboardUrl, "_blank", "noopener,noreferrer");
      }
   };

   return (
      <div
         className={`relative whitespace-normal bg-[#FFFFFF]/60 w-full max-w-[500px] mx-auto lg:mx-0 md:w-[400px] rounded-[16px] sm:rounded-[20px] p-4 sm:p-5 lg:p-6 shadow-sm border h-[550px] lg:h-[600px] flex flex-col ${
            isPopular ? "border-primary" : "border-gray-100"
         } hover:shadow-xl transition-all duration-300`}
      >
         {isPopular && (
            <div className="absolute -top-7 sm:-top-4 left-1/2 transform -translate-x-1/2">
               <span className="bg-primary text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                  Most Popular
               </span>
            </div>
         )}

         {plan.discountPercentage > 0 && (
            <div className="absolute -top-2 -right-2">
               <span className="bg-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                  {plan.discountPercentage}% OFF
               </span>
            </div>
         )}

         {/* Header */}
         <div className="mb-4 sm:mb-5 lg:mb-6">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2">
               {plan.name}
            </h3>
            <p className="text-text text-xs sm:text-sm leading-relaxed">{getDescription(plan)}</p>
         </div>

         {/* Price */}
         <div className="mb-4 sm:mb-5 lg:mb-6">
            <div className="flex items-baseline gap-1">
               <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
                  {formatPrice(plan.price, plan.currency)}
               </span>
               {plan.price > 0 && (
                  <span className="text-gray-500 text-sm sm:text-base">/month</span>
               )}
            </div>
            {plan.originalPrice > plan.price && plan.price > 0 && (
               <div className="mt-1">
                  <span className="text-gray-400 line-through text-sm">
                     {formatPrice(plan.originalPrice, plan.currency)}
                  </span>
               </div>
            )}
         </div>

         {/* Plan Details */}
         <div className="mb-4 sm:mb-6 space-y-2 ">
            {plan.familyMembers !== 1 && (
               <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  <span>
                     {plan.familyMembers === -1 ? "Unlimited" : plan.familyMembers} family members
                  </span>
               </div>
            )}
            {plan.monthlyLimits.aiChatbotResponses > 0 && (
               <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  <span>
                     {plan.monthlyLimits.aiChatbotResponses === -1
                        ? "Unlimited"
                        : plan.monthlyLimits.aiChatbotResponses}{" "}
                     AI chatbot responses
                  </span>
               </div>
            )}
            {plan.monthlyLimits.aiDiagnosticRequests > 0 && (
               <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  <span>
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
            onClick={handlePlanSelection}
            className={`w-full cursor-pointer py-2 sm:py-[10px] px-3 sm:px-[14px] rounded- sm:rounded-2xl font-medium text-sm sm:text-base transition-colors duration-300 mb-4 sm:mb-6 lg:mb-8 ${
               isPopular
                  ? "bg-primary text-white hover:bg-[#1e2394]"
                  : "bg-[#010F42] text-white hover:bg-gray-800"
            }`}
         >
            Choose Plan
         </Button>

         {/* Features */}
         <div className="space-y-2 grid grid-cols-2 gap-x-2 ">
            {plan.features.map((feature, index) => (
               <div
                  key={index}
                  className="flex items-start gap-2 sm:gap-3"
               >
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
                     <Check className="w-2 h-2 sm:w-3 sm:h-3 text-primary" />
                  </div>
                  <p className="text-text text-xs sm:text-sm leading-relaxed">{feature}</p>
               </div>
            ))}
         </div>
      </div>
   );
};
