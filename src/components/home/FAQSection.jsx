"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const FaqData = [
    {
      label: "Who are we?",
      texts:
        "We are a digital healthcare platform designed to connect patients, doctors, laboratories, and pharmacies in a single, secure system. Our goal is to make healthcare accessible, reliable, and efficient through telemedicine, patient data management, and our integrated services.",
    },
    {
      label: "How do consultations work?",
      texts:
        "You book an appointment, and your matched doctor joins you through a secure video or audio call at the scheduled time or chats directly with you at any time of the day. You can also share your medical history, lab results, or prescriptions with your doctor during this session. We have designed the process to be simple and confidential.",
    },
    {
      label: "Is my medical information safe with Cosmicforge HealthNet?",
      texts:
        "Yes. We use advanced encryption and strict data protection protocols to keep your information secure. We comply with international healthcare regulations, so your data is always handled responsibly.",
    },
    {
      label: "Can doctors access lab and pharmacy information?",
      texts:
        "No. Patients have full autonomy and direct access to labs and pharmacies, but can share lab tests with doctors for review and to provide prescriptions directly through our platform.",
    },
    {
      label: "Can labs and pharmacies use Cosmicforge HealthNet?",
      texts:
        "Yes! You are not left out. Labs receive and update test orders within the system. Pharmacies receive digital prescriptions, fulfil orders, and notify patients when medication is ready. Some pharmacies also offer delivery, depending on your location.",
    },
    {
      label: "What if I need care Overseas?",
      texts:
        "We are actively partnered with medical tour guides to assist you during the entire process. They can track your travel, hospital procedures, and post-treatment recovery, making medical tours more transparent and easier to manage.",
    },
    {
      label: "Who can use Cosmicforge HealthNet?",
      texts:
        "Our platform is useful for patients looking for remote consultations, doctors seeking efficient workflows, labs managing tests, and pharmacies handling prescriptions. We bring all roles together to improve the quality of care provided and the overall experience of the patient.",
    },
    {
      label: "How does Cosmicforge HealthNet use technology like AI or AR/VR?",
      texts:
        "We use AI to support doctors with insights, patient monitoring, and for faster decision-making. AR and VR tools help improve consultations and patient education; therefore, we integrated these technologies to make healthcare safer, more accurate, and easier to access.",
    },
    {
      label:
        "How is Cosmicforge HealthNet different from other telemedicine platforms?",
      texts:
        "Unlike basic video call tools, we house the entire healthcare flow. Patients, doctors, labs, and pharmacies work in one place, supported by advanced tools; AI, AR/VR tools exploring adaptive technology to improve our user experience.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Frequently Asked <span className="text-gray-400">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FaqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={400 + index * 100}
              data-aos-anchor-placement="top-bottom"
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
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
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
