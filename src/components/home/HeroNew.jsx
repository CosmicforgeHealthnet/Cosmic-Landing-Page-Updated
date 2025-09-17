"use client";
import Link from "next/link";
import Hero from "../carouselComponents/Hero";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/banners/AR_VR.png",
    alt: "AR & VR Coming Soon",
  },
  {
    id: 2,
    image: "/banners/Pharmacy.png",
    alt: "Pharmacy Coming Soon",
  },
  {
    id: 3,
    image: "/banners/Lab.png",
    alt: "Lab Coming Soon",
  },
  {
    id: 4,
    image: "/banners/Shop.png",
    alt: "Shop Coming Soon",
  },
];

const CarouselItems = [
  {
    id: "Hero",
    content: <Hero />,
  },
  {
    id: "ad1",
    content: (
      <div className="relative w-full h-full  overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 md:border md:border-white/10">
        <Image
          src={slides[0].image}
          alt={slides[0].alt}
          fill
          className="object-contain md:object-contain h-full w-full"
          quality={90}
        />
      </div>
    ),
  },
  {
    id: "ad1",
    content: (
      <div className="relative w-full h-full  overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 md:border md:border-white/10">
        <Image
          src={slides[1].image}
          alt={slides[1].alt}
          fill
          className="object-contain md:object-contain h-full w-full"
          quality={90}
        />
      </div>
    ),
  },
  {
    id: "ad1",
    content: (
      <div className="relative w-full h-full  overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 md:border md:border-white/10">
        <Image
          src={slides[2].image}
          alt={slides[2].alt}
          fill
          className="object-contain md:object-contain h-full w-full"
          quality={90}
        />
      </div>
    ),
  },
  {
    id: "ad1",
    content: (
      <div className="relative w-full h-full  overflow-hidden shadow-2xl  md:border bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 md:border-white/10">
        <Image
          src={slides[3].image}
          alt={slides[3].alt}
          fill
          className="object-contain md:object-contain h-full w-full"
          quality={90}
        />
      </div>
    ),
  },
];

const HeroNew = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );
  return (
    <div className="min-h-screen pt-7 lg:px-0">
      <div className=" mx-auto h-full">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          // onMouseEnter={plugin.current.stop}
          // onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {CarouselItems.map((item, index) => (
              <CarouselItem key={index}>{item.content}</CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroNew;
