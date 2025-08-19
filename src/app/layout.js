import Header from "@/layout/Header";
import AOSProvider from "@/providers/AOSProvider";

import "./globals.css";

import Footer from "@/layout/Footer";

export const metadata = {
   title: "Cosmic Forge | Home",
   description: "This is the official website for the cosmicforge healthcare",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
            <AOSProvider>
               <Header />
               {children}
               <Footer />
            </AOSProvider>
         </body>
      </html>
   );
}
