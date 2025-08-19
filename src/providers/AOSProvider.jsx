// components/AOSProvider.jsx
"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";

import AOS from "aos";

export default function AOSProvider({ children }) {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         easing: "ease-out-cubic",
      });
   }, []);

   return <>{children}</>;
}
