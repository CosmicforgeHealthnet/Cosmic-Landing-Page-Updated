import React from "react";
import { Button } from "../ui/button";

const PageHeader = ({
  title,
  styledTitle,
  subtitle,
  gradient = "from-blue-400 via-purple-400 to-green-300",
  titleSize = "text-5xl lg:text-6xl",
  subtitleSize = "text-lg lg:text-xl",
  height = "h-64 lg:h-80",
  titleColor = "text-black",
  subtitleColor = "text-gray-700",
  className = "",
  backButton,
}) => {
  return (
    <header
      className={`bg-white border-b border-b-gray-100 relative h-[300px] overflow-hidden`}
    >
      <div className="bg-[#9096F8] w-[400px] h-[400px] blur-[100px] absolute top-[50%] left-[-8rem]"></div>
      <div className="bg-[#03C800] w-[400px] h-[400px] blur-[100px] absolute top-0 right-[-8rem]"></div>

      <div className="max-w-[1100px] h-full flex items-center mx-auto w-full px-4">
        <div className="space-y-4 relative z-10  ">
          <h1 className={`${titleSize} font-bold ${titleColor} leading-tight`}>
            {title}{" "}
            <span className="text-[#272EA7]">{styledTitle && styledTitle}</span>
          </h1>
          {subtitle && (
            <p className={`${subtitleSize} ${subtitleColor} max-w-3xl`}>
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
