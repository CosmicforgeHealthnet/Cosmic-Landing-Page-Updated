"use client";
import Link from "next/link";
import Hero from "../carouselComponents/Hero";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import ComingSoonComponent from "../carouselComponents/ComingSoonComponent";

const CarouselItems = [
  {
    id: "Hero",
    content: <Hero />,
  },
  {
    id: "ad1",
    content: (
      <ComingSoonComponent
        title={"AR & VR"}
        img={"/featuresImg/ArVr.png"}
        description={"Streamlining healthcare services to meet your needs..."}
        subDescription={
          "Get Ready for smarter, faster and more personalized experience"
        }
      />
    ),
    // (
    //   <div className="relative w-full h-full  overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 md:border md:border-white/10">
    //     <Image
    //       src={slides[0].image}
    //       alt={slides[0].alt}
    //       fill
    //       className="object-contain md:object-contain h-full w-full"
    //       quality={90}
    //     />
    //   </div>
    // ),
  },
  {
    id: "ad2",
    content: (
      <ComingSoonComponent
        title={"Pharmacy"}
        img={"/featuresImg/pharmacyHero.png"}
        description={"Streamlining healthcare services to meet your needs..."}
        subDescription={
          "Get Ready for smarter, faster and more personalized experience"
        }
      />
    ),
    //  (
    //   <div className="relative w-full h-full  overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 md:border md:border-white/10">
    //     <Image
    //       src={slides[1].image}
    //       alt={slides[1].alt}
    //       fill
    //       className="object-contain md:object-contain h-full w-full"
    //       quality={90}
    //     />
    //   </div>
    // ),
  },
  {
    id: "ad3",
    content: (
      <ComingSoonComponent
        title={"Lab"}
        img={"/featuresImg/comingSoonLab.png"}
        description={"Streamlining healthcare services to meet your needs..."}
        subDescription={
          "Get Ready for smarter, faster and more personalized experience"
        }
      />
    ),
    //  (
    //   <div className="relative w-full h-full  overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 md:border md:border-white/10">
    //     <Image
    //       src={slides[2].image}
    //       alt={slides[2].alt}
    //       fill
    //       className="object-contain md:object-contain h-full w-full"
    //       quality={90}
    //     />
    //   </div>
    // ),
  },
  {
    id: "ad4",
    content: (
      <ComingSoonComponent
        title={"Shop"}
        img={"/featuresImg/shop.png"}
        description={"Streamlining healthcare services to meet your needs..."}
        subDescription={
          "Get Ready for smarter, faster and more personalized experience"
        }
      />
    ),
    // (
    //   <div className="relative w-full h-full  overflow-hidden shadow-2xl  md:border bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 md:border-white/10">
    //     <Image
    //       src={slides[3].image}
    //       alt={slides[3].alt}
    //       fill
    //       className="object-contain md:object-contain h-full w-full"
    //       quality={90}
    //     />
    //   </div>
    // ),
  },
];

const HeroNew = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 20000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      opts={{
        loop: true,
        align: "start",
      }}
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {CarouselItems.map((item, index) => (
          <CarouselItem key={index}>{item.content}</CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HeroNew;
