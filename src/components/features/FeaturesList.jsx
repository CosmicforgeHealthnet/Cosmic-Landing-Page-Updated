import { Features } from "@/data/features";
import { id } from "date-fns/locale";
import Image from "next/image";
import React from "react";

function FeaturesList({ setStep, setSelectedFeature }) {
  const handleFeatureSelect = (feature) => {
    setSelectedFeature(feature);
    setStep("features-detail");
  };
  return (
    <section className="max-w-[1100px] grid md:grid-cols-2 gap-5 mx-auto px-4 mt-20 mb-20 overflow-hidden">
      {Features.map((feature) => (
        <div
          key={feature.id}
          onClick={() => handleFeatureSelect(feature)}
          className="cursor-pointer hover:scale-101 ease sm:h-[300px] h-[400px] w-[500px] sm:w-[400px]  md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[450px] xl:h-[400px] xl:w-[500px] relative overflow-hidden space-x-2 backdrop-blur-2xl bg-gradient-to-bl to-60% from-20% from-white to-[#9096F829] border-1 border-[#DBDDF5] rounded-2xl px-4"
        >
          <div className="h-full w-2/5 bg-white absolute z-10 -right-10 blur-xl opacity-70 border"></div>
          <img
            src={feature.img}
            alt=""
            width={450}
            height={450}
            className="absolute -top-5 -right-0"
          />
          <div className="bottom-3 absolute">
            <h1 className="font-semibold text-3xl">{feature.title}</h1>
            <p className="max-w-4/5">{feature.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default FeaturesList;
