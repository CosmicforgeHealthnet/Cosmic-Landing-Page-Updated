"use client";

import { useScreenSize } from "@/hooks/useScreenSize";
import { HoverExpand_001 } from "../ui/skiper-ui/skiper52";

const images = [
  {
    src: "/featuresImg/TeleMed.jpg",
    alt: "Telemedicine Feature",
    title: "Telemedicine",
    description:
      "See your doctor from anywhere with video, audio, chat, and remote monitoring that feels just like an in-person visit.",
    code: "# 23",
  },
  {
    src: "/featuresImg/PatMg.jpg",
    alt: "Patient Management Feature",
    title: "Patient Management",
    description:
      "Your entire medical history, prescriptions, hospital stays, and vaccinations in one secure place always ready when you need it. ",
    code: "# 23",
  },
  {
    src: "/featuresImg/Pharmacy.jpg",
    alt: "Pharmacy Feature",
    title: "Pharmacy",
    description:
      "Prescriptions connect directly to partner pharmacies for fast orders, easy tracking, and timely patient updates.",
    code: "# 23",
  },
  {
    src: "/featuresImg/Lab.jpg",
    alt: "Lab Feature",
    title: "Lab",
    description:
      "Skip the delays with digital test orders, faster results, and instant sharing between labs, doctors, and patients.",
    code: "# 23",
  },
  {
    src: "/featuresImg/medTour.jpg",
    alt: "Medical Tour Feature",
    title: "Medical Tour",
    description:
      "Traveling for care is seamless, track every stage of your journey from departure to recovery with full transparency.",
    code: "# 23",
  },
  {
    src: "/featuresImg/AiTools.jpg",
    alt: "AI Tools Feature",
    title: "AI Tools",
    description:
      "Smarter care at your fingertips, AI checks symptoms, supports diagnosis, and recommends treatments based on real data.",
    code: "# 23",
  },
  {
    src: "/featuresImg/ArVr.jpg",
    alt: "AR VR Features",
    title: "AR VR",
    description:
      "Step inside your care plan with immersive visuals that make medical explanations clearer and easier to understand.",
    code: "# 23",
  },
  {
    src: "/featuresImg/vidCall.jpg",
    alt: "Virtual Communities Features",
    title: "Virtual Communities",
    description:
      "Join trusted spaces where patients and doctors connect, learn, and support each other beyond hospital walls.",
    code: "# 23",
  },
];
export const ExpandOnHoverFeatures = () => {
  const { screenSize, windowWidth } = useScreenSize();

  // Determine how many images to show based on screen size
  const getImageCount = () => {
    switch (screenSize) {
      case "xs":
        return 3;
      case "sm":
        return 3;
      case "md":
        return 4;
      case "lg":
        return 8;
      case "xl":
      case "2xl":
        return 8;
      default:
        return 2;
    }
  };
  return (
    <div className="flex flex-col w-full mt-8">
      <div className="space-y-6 max-w-[1100px] mx-auto ">
        <div className="grid  lg:grid-cols-2 gap-12 px-5">
          <h2 className="text-[30px] lg:text-5xl font-semibold text-gray-900 leading-tight">
            <span className="text-[#272EA7]">Features</span>
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-black leading-relaxed hidden  md:block md:opacity-0">
              Skip the referral maze and book a board-certified cardiologist,
              dermatologist, or any other expert for a same-day video
              visit—right from your phone.
            </p>
          </div>
        </div>
      </div>
      <HoverExpand_001 images={images} className={"mt-8 mb-8"} />
      {/* {screenSize == "md" ? (
        
        <HoverExpand_001 images={images.slice(-4)} className={"mt-8 mb-8"} />
      ) : (
        screenSize == "xs" && (
          <>
            <HoverExpand_001
              images={images.slice(3, 6)}
              className={"mt-8 mb-8"}
            />
            
            <HoverExpand_001
              images={images.slice(-2)}
              className={"mt-8 mb-8"}
            />
          </>
        )
      )} */}
    </div>
  );
};
