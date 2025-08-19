import React from "react";

const FeatureCard = ({
   title,
   subtitle,
   backgroundImage,
   backgroundColor = "bg-gradient-to-br from-purple-100 via-blue-50 to-green-100",
   titleColor = "text-gray-900",
   subtitleColor = "text-gray-600",
   className = "",
   children,
   height = "h-[600px]",
   width = "w-full max-w-4xl",
}) => {
   return (
      <div
         className={`${width} ${height} rounded-3xl p-8 relative overflow-hidden ${backgroundColor} ${className}`}
      >
         <img
            src=""
            alt=""
         />
         {/* Content Container */}
         <div className="relative z-10 h-full flex flex-col">
            {/* Main Content Area - Children go here */}
            <div className="flex-1 mb-8">{children}</div>

            {/* Bottom Text Section */}
            <div className="space-y-4">
               <h2 className={`text-4xl lg:text-5xl font-bold leading-tight ${titleColor}`}>
                  {title}
               </h2>
               {subtitle && (
                  <p className={`text-lg lg:text-xl leading-relaxed max-w-2xl ${subtitleColor}`}>
                     {subtitle}
                  </p>
               )}
            </div>
         </div>

         {/* Optional overlay for better text readability */}
         {backgroundImage && (
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
         )}
      </div>
   );
};

export default FeatureCard;
