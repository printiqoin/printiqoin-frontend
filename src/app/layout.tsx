import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { satoshi } from "@/styles/fonts";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import TopNavbar from "@/components/layout/Navbar/TopNavbar";
import Footer from "@/components/layout/Footer";
import HolyLoader from "holy-loader";
import Providers from "./providers";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Printiqo",
  description: "Customized printing and gifting solutions.",
  keywords: "Printiqo, Custom Printing, Gifting Solutions",
  openGraph: {
    siteName: "Printiqo",
    title: "Printiqo",
    description: "Customized printing and gifting solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Printiqo",
    description: "Customized printing and gifting solutions.",
  }
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} ${cormorant.variable} ${dmSans.variable} flex flex-col min-h-screen`}>
        <HolyLoader color="#868686" />
        <Providers>
          {/* Navbar */}
          <TopNavbar />
          
          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>
          
          {/* Footer - Always at bottom */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
