import React from "react";
import * as motion from "framer-motion/client";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Category = {
  _id: string;
  name: string;
  description?: string;
  image?: string;
  products?: any[];
};

type Props = {
  categories: Category[];
};

export default function CategoriesSection({ categories }: Props) {
  if (!categories || categories.length === 0) return null;

  return (
    <section id="categories" className="max-w-frame mx-auto text-center px-4 xl:px-0">
      <motion.h2
        initial={{ y: "50px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn([
          integralCF.className,
          "text-[32px] md:text-5xl mb-8 md:mb-14 capitalize text-[#1a1a1a]",
        ])}
      >
        Shop by <span className="text-[#D71920]">Category</span>
      </motion.h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat._id}
            initial={{ y: "50px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Link
              href={`/shop?categories=${cat._id}`}
              className="group relative block cursor-pointer overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              {/* Image Container with 4:5 Aspect Ratio */}
            <div className="relative w-full aspect-[4/5] bg-[#F8F8F8] overflow-hidden">
              {cat.image && (
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              {/* Subtle overlay only at the very bottom for text readability */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content overlayed on the image */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left flex flex-col justify-end transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                <h3 className="font-['Syne',sans-serif] font-bold text-xl md:text-2xl text-white drop-shadow-md">
                  {cat.name}
                </h3>
                <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white/90 text-sm font-medium">Explore</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs text-white backdrop-blur-sm">
                    {cat.products?.length || 0} items
                  </span>
                </div>
              </div>
            </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
