"use client";
import { HoverExpand_001 } from "../ui/skiper-ui/skiper52";

const images = [
  {
    src: "/featuresImg/TeleMed.jpg",
    alt: "Telemedicine Feature",
    title: "Telemedicine",
    description:
      "See your doctor from anywhere with video, audio, chat, and remote monitoring that feels just like an in-person visit.",
  },
  {
    src: "/featuresImg/PatMg.jpg",
    alt: "Patient Management Feature",
    title: "Patient Management",
    description:
      "Your entire medical history, prescriptions, hospital stays, and vaccinations in one secure place always ready when you need it. ",
  },
  {
    src: "/featuresImg/Pharmacy.jpg",
    alt: "Pharmacy Feature",
    title: "Pharmacy",
    description:
      "Prescriptions connect directly to partner pharmacies for fast orders, easy tracking, and timely patient updates.",
  },
  {
    src: "/featuresImg/Lab.jpg",
    alt: "Lab Feature",
    title: "Lab",
    description:
      "Skip the delays with digital test orders, faster results, and instant sharing between labs, doctors, and patients.",
  },
  {
    src: "/featuresImg/medTour.jpg",
    alt: "Medical Tour Feature",
    title: "Medical Tour",
    description:
      "Traveling for care is seamless, track every stage of your journey from departure to recovery with full transparency.",
  },
  {
    src: "/featuresImg/AiTools.jpg",
    alt: "AI Tools Feature",
    title: "AI Tools",
    description:
      "Smarter care at your fingertips, AI checks symptoms, supports diagnosis, and recommends treatments based on real data.",
  },
  {
    src: "/featuresImg/ArVr.jpg",
    alt: "AR VR Features",
    title: "AR VR",
    description:
      "Step inside your care plan with immersive visuals that make medical explanations clearer and easier to understand.",
  },
  {
    src: "/featuresImg/vidCall.jpg",
    alt: "Virtual Communities Features",
    title: "Virtual Communities",
    description:
      "Join trusted spaces where patients and doctors connect, learn, and support each other beyond hospital walls.",
  },
];
export const ExpandOnHoverFeatures = () => {
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
    </div>
  );
};
