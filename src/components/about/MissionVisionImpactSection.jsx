import React from "react";
import { Target, Eye, Heart } from "lucide-react";

const MissionVisionImpactSection = () => {
  const mission = [
    {
      id: 1,
      description:
        "Making high-quality medical care affordable and available everywhere.",
    },
    {
      id: 2,
      description:
        "Equipping healthcare professionals with tools for efficiency and accuracy.",
    },
    {
      id: 3,
      description:
        "Enabling patients to control their health journey with confidence.",
    },
    {
      id: 4,
      description:
        "Supporting under-resourced communities where preventable illnesses remain a major challenge.",
    },
  ];

  const vision = [
    {
      id: 1,
      description: "Accessible healthcare for every community, rural or urban.",
    },
    {
      id: 2,
      description: "Affordable care supported by efficient digital tools.",
    },
    {
      id: 3,
      description:
        "Inclusive solutions that work for patients and providers of all backgrounds.",
    },
    {
      id: 4,
      description:
        "Innovative systems powered by AI, IoT, and advanced analytics.",
    },
  ];

  const cards = [
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Our Mission",
      description:
        "Our mission is to break barriers to healthcare access by delivering secure, digital solutions that place patients and providers at the center. ",
      subDescription: "We focus on: ",
      List: (
        <BulletCategoryLabel points={mission} className="flex flex-col gap-3" />
      ),
    },
    {
      icon: <Eye className="w-12 h-12 text-primary" />,
      title: "Our Vision",
      description:
        "Our vision is a world where healthcare is a universal right. We want every person, regardless of location or background, to access trusted medical expertise and services. ",
      subDescription: "We aim to build: ",
      List: (
        <BulletCategoryLabel points={vision} className="flex flex-col gap-2" />
      ),
    },
    //  {
    //    icon: <Heart className="w-12 h-12 text-primary" />,
    //    title: "Our Impact",
    //    description:
    //      "Bridging healthcare gaps in underserved communities by providing 24/7 access to specialist care, reducing medical costs, and empowering both patients and healthcare providers through cutting-edge digital tools.",
    //  },
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-[#E1E1E1]/50 backdrop-blur-sm rounded-[10px] h-[400px] border border-[#EAEAEA] transition-all duration-300 cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              {/* Card Inner Container */}
              <div
                className="relative w-full h-full transition-transform duration-700 group-hover:rotate-y-180"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full p-8 flex flex-col justify-between backface-hidden">
                  <div className="space-y-6">
                    {/* Icon */}
                    <div className="flex justify-center">{card.icon}</div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-black text-center">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="flex-1 flex items-center px-10">
                    <p className="text-gray-700 text-base leading-relaxed text-center">
                      {card.description}
                    </p>
                  </div>
                </div>
                {/* Back Side */}
                <div
                  className="absolute inset-0 w-full h-full p-8 flex flex-col justify-center items-center bg-[#E1E1E1]/70 backdrop-blur-sm rounded-[10px] border border-[#EAEAEA]"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-primary text-left">
                      {card.subDescription || "More Info"}
                    </h3>
                    {card.List && card.List}
                    {/* <p className="text-gray-700 text-base leading-relaxed px-4">
                      {card.backDescription ||
                        "Additional details about this feature. You can customize this text for each card."}
                    </p> */}
                    {card.backIcon && (
                      <div className="flex justify-center mt-6">
                        {card.backIcon || "text"}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionImpactSection;

const BulletCategoryLabel = ({ points, size, className = "" }) => {
  return (
    <ul className={`list-disc ml-6 space-y-3 ${className}`}>
      {points.map((point, index) => (
        <li
          key={point.id || index}
          className="text-lg leading-relaxed pl-2 text-left"
        >
          <span className="font-bold text-xl">
            {point.title && `${point.title}: `}
          </span>
          {point.description}
        </li>
      ))}
    </ul>
  );
};
