"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";

const PageHeader = ({
  title,
  styledTitle,
  subtitle,
  gradient = "from-blue-400 via-purple-400 to-green-300",
  titleSize = "text-[60px] lg:text-[140px]",
  subtitleSize = "text-lg lg:text-xl",
  height = "h-64 lg:h-80",
  titleColor = "text-white/20",
  subtitleColor = "text-white",
  className = "",
  backButton,
}) => {
  const canvasRef = useRef(null);

  // Monotone Noise
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      generateNoise();
    };

    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        // Generate random grayscale value (0-255)
        const noise = Math.random() * 255;

        // Apply noise to RGB channels
        data[i] = noise; // Red
        data[i + 1] = noise; // Green
        data[i + 2] = noise; // Blue
        data[i + 3] = 25; // Alpha (low opacity for subtle effect)
      }

      ctx.putImageData(imageData, 0, 0);
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    return () => window.removeEventListener("resize", updateCanvasSize);
  }, []);

  return (
    <header className="bg-[#091D75] border-b border-b-gray-100 relative h-[300px] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: "overlay" }}
      />
      <div className="bg-[#9096F8] w-[120px] h-[120px] md:w-[400px] md:h-[400px] blur-[100px] absolute top-[50%] right-[-15rem]"></div>
      {/* <div className="bg-[#03C800] w-[120px]  h-[120px] md:w-[400px] md:h-[400px] blur-[100px] absolute top-0 right-[-8rem]"></div> */}

      <div className="h-full flex items-center mx-auto w-full  ">
        <div className="space-y-4 relative z-10  ">
          <h1
            className={`${titleSize} md:-px-10 px-3 font-bold ${titleColor} `}
          >
            {title}{" "}
            <span className="text-[#272EA7]">{styledTitle && styledTitle}</span>
          </h1>
          {subtitle && (
            <p className={`${subtitleSize} ${subtitleColor} max-w-3xl px-3`}>
              {subtitle}
            </p>
          )}

          {backButton && (
            <Button variant={"outline"} onClick={backButton.function}>
              {backButton.label}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
