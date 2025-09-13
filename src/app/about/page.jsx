import AboutUsPage from "@/pages/home/about";
import React from "react";

export const metadata = {
   title: "About Cosmicforge HealthNet | Digital Healthcare & Telemedicine in Africa",
   description:
      "Learn about Cosmicforge HealthNet’s mission to make healthcare accessible across Africa. We connect patients, doctors, labs & pharmacies with secure digital tools.",
   openGraph: {
      title: "About Cosmicforge HealthNet | Digital Healthcare & Telemedicine",
      description:
         "Discover Cosmicforge HealthNet — a healthcare technology company transforming access to medical care in Africa with telemedicine, AI, and secure patient systems.",
      url: "https://www.cosmicforge-healthnet.com/about",
      siteName: "Cosmicforge HealthNet",
      locale: "en_US",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "About Cosmicforge HealthNet | Digital Healthcare & Telemedicine",
      description:
         "Learn about our mission to make healthcare accessible & affordable across Africa. Telemedicine, digital records & AI-driven insights for better care.",
   },
};

const AboutUs = () => {
   return <AboutUsPage />;
};

export default AboutUs;
