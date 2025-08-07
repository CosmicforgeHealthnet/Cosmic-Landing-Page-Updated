import React from "react";
import { Target, Eye, Heart } from "lucide-react";

const MissionVisionImpactSection = () => {
   const cards = [
      {
         icon: <Target className="w-12 h-12 text-primary" />,
         title: "Our Mission",
         description:
            "To democratize healthcare access across Africa by leveraging innovative telemedicine solutions that connect patients with world-class medical professionals, regardless of geographical location or economic status.",
      },
      {
         icon: <Eye className="w-12 h-12 text-primary" />,
         title: "Our Vision",
         description:
            "To become Africa's leading digital health ecosystem, transforming how healthcare is delivered and accessed while setting new global standards for inclusive, technology-driven medical care.",
      },
      {
         icon: <Heart className="w-12 h-12 text-primary" />,
         title: "Our Impact",
         description:
            "Bridging healthcare gaps in underserved communities by providing 24/7 access to specialist care, reducing medical costs, and empowering both patients and healthcare providers through cutting-edge digital tools.",
      },
   ];

   return (
      <section className="w-full py-20 relative px-6 bg-[#F8F8F8]">
         <div className="bg-[#9096F8] w-[400px] h-[400px] blur-[100px] absolute top-[50%] left-[-8rem]"></div>
         {/* <div className="bg-[#03c80095] w-[400px] h-[400px] blur-[100px] absolute top-0 right-[-8rem]"></div> */}

         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
               <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                  Our Mission, Vision and Impact
               </h2>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {cards.map((card, index) => (
                  <div
                     key={index}
                     className="bg-[#E1E1E1]/50 backdrop-blur-sm rounded-[10px] p-8 h-[400px] flex flex-col justify-between border border-[#EAEAEA] transition-all duration-300"
                  >
                     <div className="space-y-6">
                        {/* Icon */}
                        <div className="flex justify-center">{card.icon}</div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-black text-center">{card.title}</h3>
                     </div>

                     {/* Description */}
                     <div className="flex-1 flex items-center">
                        <p className="text-gray-700 text-base leading-relaxed text-center">
                           {card.description}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default MissionVisionImpactSection;
