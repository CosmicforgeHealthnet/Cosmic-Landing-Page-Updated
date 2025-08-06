"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
   const [openIndex, setOpenIndex] = useState(0); // First item open by default

   const FaqData = [
      {
         label: "What is this platform, and how does it work?",
         texts: "We prioritize your privacy and security. Our platform employs advanced encryption standards and complies with healthcare data protection regulations to ensure that all personal and medical information remains confidential and secure. We also implement robust authentication processes to prevent unauthorized access.",
      },
      {
         label: "Is my personal and medical data secure on this platform?",
         texts: "We prioritize your privacy and security. Our platform employs advanced encryption standards and complies with healthcare data protection regulations to ensure that all personal and medical information remains confidential and secure. We also implement robust authentication processes to prevent unauthorized access.",
      },
      {
         label: "Who can use this platform?",
         texts: "We prioritize your privacy and security. Our platform employs advanced encryption standards and complies with healthcare data protection regulations to ensure that all personal and medical information remains confidential and secure. We also implement robust authentication processes to prevent unauthorized access.",
      },
      {
         label: "How do I sign up as a doctor, patient, laboratory, or pharmacy?",
         texts: "We prioritize your privacy and security. Our platform employs advanced encryption standards and complies with healthcare data protection regulations to ensure that all personal and medical information remains confidential and secure. We also implement robust authentication processes to prevent unauthorized access.",
      },
      {
         label: "Can I access the platform on mobile and desktop?",
         texts: "We prioritize your privacy and security. Our platform employs advanced encryption standards and complies with healthcare data protection regulations to ensure that all personal and medical information remains confidential and secure. We also implement robust authentication processes to prevent unauthorized access.",
      },
   ];

   const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? -1 : index);
   };

   return (
      <div className="w-full bg-gray-50 py-20 px-6">
         <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
               <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Frequently Asked <span className="text-gray-400">Questions</span>
               </h2>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
               {FaqData.map((faq, index) => (
                  <div
                     key={index}
                     className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 "
                  >
                     {/* Question Header */}
                     <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-inset"
                     >
                        <h3 className="font-medium text-gray-700 pr-4">{faq.label}</h3>

                        <div className="flex-shrink-0">
                           {openIndex === index ? (
                              <ChevronUp className="w-5 h-5 text-gray-500" />
                           ) : (
                              <ChevronDown className="w-5 h-5 text-gray-500" />
                           )}
                        </div>
                     </button>

                     {/* Answer Content */}
                     <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                           openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                     >
                        <div className="px-8 pb-6">
                           <div className="border-t border-gray-100 pt-6">
                              <p className="text-gray-600 leading-relaxed">{faq.texts}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default FAQSection;
