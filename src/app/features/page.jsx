import FeaturesPage from "@/pages/home/features";
import React from "react";

export const metadata = {
   title: "Cosmicforge HealthNet | Telemedicine, AI & Digital Healthcare Features",
   description:
      "Explore Cosmicforge HealthNet’s features: telemedicine, AI tools, patient management, pharmacy, labs, medical tours & secure healthcare solutions.",
   keywords: [
      "telemedicine Africa",
      "digital healthcare platform",
      "AI healthcare tools",
      "online pharmacy Nigeria",
      "remote diagnostics",
      "secure patient records",
      "medical tourism support",
      "health tech Africa",
   ],
   openGraph: {
      title: "Cosmicforge HealthNet | Telemedicine, AI & Digital Healthcare Features",
      description:
         "Discover powerful features: secure telemedicine, AI-driven insights, patient management, pharmacy & lab integration, medical tours, and compliance tools.",
      url: "https://www.cosmicforge-healthnet.com/features",
      siteName: "Cosmicforge HealthNet",
      images: [
         {
            url: "https://www.cosmicforge-healthnet.com/img.png", // replace with actual image
            width: 1200,
            height: 630,
            alt: "Cosmicforge HealthNet Features",
         },
      ],
      locale: "en_US",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "Cosmicforge HealthNet | Healthcare Platform Features",
      description:
         "Explore our healthcare features: telemedicine, AI tools, secure patient management, pharmacy & lab integration, and medical tourism support.",
      images: ["https://www.cosmicforge-healthnet.com/img.png"], // replace with actual image
   },
};

const Features = () => {
   return <FeaturesPage />;
};

export default Features;
