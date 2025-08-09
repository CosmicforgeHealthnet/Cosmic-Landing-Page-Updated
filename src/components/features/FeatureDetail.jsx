"use client";
import React, { useEffect } from "react";
import { Button } from "../ui/button";

function FeatureDetail({ selectedFeature }) {
  const paragraphs = selectedFeature.description.paragraphs;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="max-w-[1100px] mx-auto mt-5 mb-10 px-5">
      <div>
        {/* <h1 className="font-bold text-2xl mb-10">{selectedFeature.title}</h1> */}
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="pb-5 text-xl">
            {paragraph.paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

export default FeatureDetail;
