import { Check } from "lucide-react";
import { Button } from "../ui/button";

const { getDescription, formatPrice } = require("@/utils/pricing");

export const PricingCard = ({ plan, isPopular = false }) => (
   <div
      className={`relative bg-[#FFFFFF]/60 w-[418px] rounded-[20px] p-8 shadow-sm border h-[600px] flex-shrink-0 ${
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
      <div className="mb-8">
         <h3 className="text-[30px] font-semibold text-gray-900 mb-3">{plan.name}</h3>
         <p className="text-text text-sm leading-relaxed w-fit">{getDescription(plan)}</p>
      </div>

      {/* Price */}
      <div className="mb-8">
         <div className="flex items-baseline gap-1">
            <span className="text-5xl font-bold text-black">
               {formatPrice(plan.price, plan.currency)}
            </span>
            {plan.price > 0 && <span className="text-gray-500 text-lg">/month</span>}
         </div>
         {plan.originalPrice > plan.price && plan.price > 0 && (
            <div className="mt-2">
               <span className="text-gray-400 line-through text-lg">
                  {formatPrice(plan.originalPrice, plan.currency)}
               </span>
            </div>
         )}
      </div>

      {/* Plan Details */}
      <div className="mb-6 space-y-2">
         {plan.familyMembers !== 1 && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
               <Check className="w-4 h-4 text-primary" />
               <span>
                  {plan.familyMembers === -1 ? "Unlimited" : plan.familyMembers} family members
               </span>
            </div>
         )}
         {plan.monthlyLimits.aiChatbotResponses > 0 && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
               <Check className="w-4 h-4 text-primary" />
               <span>
                  {plan.monthlyLimits.aiChatbotResponses === -1
                     ? "Unlimited"
                     : plan.monthlyLimits.aiChatbotResponses}{" "}
                  AI chatbot responses
               </span>
            </div>
         )}
         {plan.monthlyLimits.aiDiagnosticRequests > 0 && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
               <Check className="w-4 h-4 text-primary" />
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
         className={`w-full py-[10px] px-[14px] rounded-2xl font-medium transition-colors duration-300 mb-8 ${
            isPopular
               ? "bg-primary text-white hover:bg-[#1e2394]"
               : "bg-[#010F42] text-white hover:bg-gray-800"
         }`}
      >
         Choose Plan
      </Button>

      {/* Features */}
      <div className="space-y-2 grid grid-cols-2  max-w-full">
         {plan.features.map((feature, index) => (
            <div
               key={index}
               className="flex items-start shrink gap-3 "
            >
               <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
               </div>
               <p className="text-text text-sm w-fit">{feature}</p>
            </div>
         ))}
      </div>
   </div>
);
