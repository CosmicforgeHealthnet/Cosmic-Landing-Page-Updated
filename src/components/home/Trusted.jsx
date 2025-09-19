"use client";

import Image from "next/image";

const LOGOS = [
  {
    logo: (
      <Image
        loading="lazy"
        quality={90}
        width={200}
        height={200}
        src={"/logos/medsafirTransPar.png"}
      />
    ),
    key: "1",
  },
];

export function LogoCloudSimple({
  title = "Trusted By",
  description = "Trusted by leading teams from around the world",
  count = 4,
}) {
  const logos = LOGOS;

  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-12 max-w-xl text-center text-balance md:mb-16">
          <h2 className="text-4xl font-semibold">{title}</h2>
          <p className="text-muted-foreground mt-4 text-lg">{description}</p>
        </div>
        <div
          className={`mx-auto grid max-w-5xl ${
            LOGOS.length >= 2 ? "grid-cols-2" : "grid-cols-1"
          } items-center gap-8 ${LOGOS.length >= 4 && "md:grid-cols-4"}`}
        >
          {logos.map((logo) => (
            <div
              key={logo.key}
              className="*:fill-foreground flex items-center justify-center opacity-60 transition-opacity duration-200 hover:opacity-100"
            >
              {logo.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
