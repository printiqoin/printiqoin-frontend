import React from "react";
import AboutUsSection from "@/components/homepage/AboutUsSection";

export const metadata = {
  title: "About Us | Printiqo",
  description: "Learn more about Printiqo's premium printing and branding solutions.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-8 md:pt-12 pb-12 bg-[#faf9f6]">
      <div className="max-w-4xl mx-auto px-4 xl:px-0">
        <AboutUsSection />
      </div>
    </main>
  );
}
