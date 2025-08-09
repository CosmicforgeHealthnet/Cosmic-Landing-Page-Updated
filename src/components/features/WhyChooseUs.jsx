import React from "react";
import { Button } from "../ui/button";

function WhyChooseUs() {
  const whyChooseUs = [
    {
      id: 1,
      title: "Qualified Medical Professionals",
      description:
        "Our physicians are certified and licensed professionals who provide patients with standard medical care and expertise.",
    },
    {
      id: 2,
      title: "Qualified Medical Professionals",
      description:
        "Our physicians are certified and licensed professionals who provide patients with standard medical care and expertise.",
    },
    {
      id: 3,
      title: "Qualified Medical Professionals",
      description:
        "Our physicians are certified and licensed professionals who provide patients with standard medical care and expertise.",
    },
  ];
  return (
    <section className="bg-[#010F42] h-[900px]">
      <div className="grid md:grid-cols-2 items-center justify-center gap-5 max-w-[1100px] mx-auto py-10 px-10 pt-10 md:pt-60 ">
        <div className="flex flex-col gap-4 text-white ">
          <h1 className="text-5xl mb-10">
            Why <span className="text-[#DBDDF5]">Choose Us</span>
          </h1>
          {whyChooseUs.map((reasons) => (
            <div className="">
              <h2 className="text-2xl">{reasons.title}</h2>
              <p className="text-white/50 max-w-2xl">{reasons.description}</p>
            </div>
          ))}
          <div className="flex gap-4">
            <Button className="rounded-2xl text-[#9096F8] bg-white hover:bg-transparent hover:border-1 border-white cursor-pointer">
              Join as Patient
            </Button>
            <Button className="rounded-2xl text-white bg-[#9096F8] cursor-pointer">
              Join as Doctor
            </Button>
          </div>
        </div>
        <img
          src="/features/featuresDevice.png"
          alt=""
          className="w-[250px] scale-180 mt-20 md:mt-0 lg:scale-200"
        />
      </div>
    </section>
  );
}

export default WhyChooseUs;
