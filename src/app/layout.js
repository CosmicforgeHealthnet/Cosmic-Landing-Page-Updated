import Header from "@/layout/Header";
import AOSProvider from "@/providers/AOSProvider";

import "./globals.css";

import Footer from "@/layout/Footer";

export const metadata = {
   title: "Cosmicforge HealthNet | Telemedicine & Digital Healthcare in Africa",
   keywords: [
      "Digital health access Africa”, AI-powered healthcare Africa",
      "Affordable online healthcare Africa 24/7",
      "online doctor Africa",
      "Trusted telemedicine Africa",
   ],
   description:
      "Connect with doctors, labs & pharmacies through Cosmicforge HealthNet. Secure telemedicine, AI-driven insights & affordable healthcare across Africa.",
   openGraph: {
      title: "Cosmicforge HealthNet | Telemedicine & Digital Healthcare",
      description:
         "Digital-first healthcare for Africa. Telemedicine, remote diagnostics, AI insights, and pharmacy integration — all in one secure platform.",
      url: "https://www.cosmicforge-healthnet.com",
      siteName: "Cosmicforge HealthNet",
      images: [
         {
            url: "https://www.cosmicforge-healthnet.com/img.png",
            width: 1200,
            height: 630,
            alt: "Cosmicforge HealthNet Telemedicine Platform",
         },
      ],
      locale: "en_US",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "Cosmicforge HealthNet | Telemedicine & Digital Healthcare",
      description:
         "Telemedicine & digital healthcare in Africa. Secure consultations, labs, pharmacies & AI-powered insights with Cosmicforge HealthNet.",
      images: ["https://www.cosmicforge-healthnet.com/img.png"], // replace with your image
   },
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className="overflow-x-hidden">
            <AOSProvider>
               <Header />
               {children}
               <Footer />
            </AOSProvider>
         </body>
      </html>
   );
}
