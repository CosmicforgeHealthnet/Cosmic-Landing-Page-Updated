"use client";

import { useScreenSize } from "@/hooks/useScreenSize";
import { HoverExpand_001 } from "../ui/skiper-ui/skiper52";

const images = [
  {
    src: "/featuresImg/TeleMed.jpg",
    alt: "Telemedicine Feature",
    title: "Telemedicine",
    description:
      "We provide secure video consultations, audio conference calling, real time chats and remote monitoring. you can connect with your doctor from anywhere while maintaining the quality of an in person visit.",
    code: "",
  },
  {
    src: "/featuresImg/PatMg.jpg",
    alt: "Patient Management Feature",
    title: "Patient Management",
    description:
      "We centralize your medical history, prescriptions, hospitalizations and vaccination records in one place. We ensure continuity of care and make it easier for providers to access accurate information. ",
    code: "",
  },
  {
    src: "/featuresImg/Pharmacy.jpg",
    alt: "Pharmacy Feature",
    title: "Pharmacy",
    description:
      "We link prescriptions directly to partner pharmacies. Patients receive timely updates, while pharmacies manage orders, inventory, and patient notifications in a secure system.",
    code: "",
  },
  {
    src: "/featuresImg/Lab.jpg",
    alt: "Lab Feature",
    title: "Lab",
    description:
      "We simplify lab processes with digital test orders, result entry, and direct sharing with patients to shorten the turnaround time for critical results.",
    code: "",
  },
  {
    src: "/featuresImg/medTour.jpg",
    alt: "Medical Tour Feature",
    title: "Medical Tour",
    description:
      "We support patients traveling for care with our Partners. You track every stage, from departure to recovery, with full visibility for patients.",
    code: "",
  },
  {
    src: "/featuresImg/AiTools.jpg",
    alt: "AI Tools Feature",
    title: "AI Tools",
    description:
      "We bring intelligence into care delivery. Patients use AI symptom checkers for early insights, and Doctors benefit from AI-supported diagnosis, pattern detection, and treatment recommendations based on patient data.",
    code: "",
  },
  {
    src: "/featuresImg/ArVr.jpg",
    alt: "AR VR Features",
    title: "AR VR",
    description:
      "We enhance consultations with immersive technology. Doctors explain conditions more clearly, and patients understand care plans through interactive visual experiences.",
    code: "",
  },
  {
    src: "/featuresImg/vidCall.jpg",
    alt: "Virtual Communities Features",
    title: "Virtual Communities",
    description:
      "We create trusted spaces where patients and doctors connect, share experiences, and exchange knowledge. Our communities ensure collaboration, education, and support beyond clinical visits.",
    code: "",
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
        <div className="grid lg:grid-cols-2 gap-12">
          <h2 className="text-[30px] lg:text-5xl font-semibold text-gray-900 leading-tight">
            <span className="text-[#272EA7]">Features</span>
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-black leading-relaxed opacity-0">
              Skip the referral maze and book a board-certified cardiologist,
              dermatologist, or any other expert for a same-day video
              visit—right from your phone.
            </p>
          </div>
        </div>
      </div>
      <HoverExpand_001
        images={images.slice(0, getImageCount())}
        className={"mt-8 mb-8"}
      />
      {screenSize == "md" ? (
        // Show last 4 items
        <HoverExpand_001 images={images.slice(-4)} className={"mt-8 mb-8"} />
      ) : (
        screenSize == "xs" && (
          <>
            <HoverExpand_001
              images={images.slice(3, 6)}
              className={"mt-8 mb-8"}
            />
            {/* show last tow items */}
            <HoverExpand_001
              images={images.slice(-2)}
              className={"mt-8 mb-8"}
            />
          </>
        )
      )}
    </div>
  );
};
