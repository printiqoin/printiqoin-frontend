"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";
import SearchInput from "../SearchInput";

const TopNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: 1, type: "MenuItem" as const, label: "Home", url: "/", children: [] },
    { id: 2, type: "MenuItem" as const, label: "About Us", url: "/about", children: [] },
    { id: 3, type: "MenuItem" as const, label: "Contact", url: "/#contact", children: [] },
  ];

  return (
    <nav
      className={cn(
        "z-50 sticky top-0 w-full transition-all duration-300",
        isScrolled 
          ? "bg-[#D71920]/95 backdrop-blur-xl shadow-sm border-b border-red-800 py-2" 
          : "bg-[#D71920] border-b border-transparent py-2 md:py-3"
      )}
    >
      <div className="flex relative max-w-[1400px] mx-auto items-center justify-between px-6 lg:px-10 gap-3">
        {/* Left: Logo */}
        <div className="flex items-center flex-shrink-0 bg-white/10 rounded-lg p-1.5 md:p-2 backdrop-blur-sm">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Printiqo Logo"
              width={200}
              height={50}
              className="object-contain h-8 md:h-10 w-auto transition-transform duration-300 hover:scale-105 brightness-0 invert"
              priority
            />
          </Link>
        </div>

        {/* Center: Navigation links (Desktop) */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="text-sm font-medium text-white/90 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right: Actions and Mobile Hamburger */}
        <div className="flex items-center gap-3 md:gap-5 flex-shrink-0 justify-end">
          <div className="hidden lg:block w-64 xl:w-80">
            <SearchInput />
          </div>
          <CartBtn />
          <div className="lg:hidden flex items-center">
            <ResTopNavbar data={navItems} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
