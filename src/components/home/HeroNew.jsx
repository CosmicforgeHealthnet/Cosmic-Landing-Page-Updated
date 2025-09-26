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
  },
];

const HeroNew = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
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
