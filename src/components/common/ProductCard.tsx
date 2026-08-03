import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product.types";

type ProductCardProps = {
  data: Product;
  // pass true for above-the-fold cards (first row) to eagerly load
  priority?: boolean;
};

const ProductCard = ({ data, priority = false }: ProductCardProps) => {
  return (
    <Link
      href={`/shop/product/${data.id}/${data.title.split(" ").join("-")}`}
      className="flex flex-col items-start aspect-auto group w-full h-full p-0 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#EFEFEF] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative bg-[#F8F8F8] w-full aspect-[4/3] sm:aspect-square overflow-hidden flex-shrink-0">
        <Image
          src={data.srcUrl}
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 295px"
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          alt={data.title || "Product"}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
        />
        
        {/* Status Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-sm">
          <span className="text-[10px] sm:text-xs font-bold tracking-wide uppercase text-[#1a1a1a]">
            {data.price > 0 ? "In Stock" : "Request"}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col w-full p-4 sm:p-5 flex-1 bg-white">
        
        {/* Category Label */}
        {data.category && (
          <span className="text-[10px] sm:text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2 block">
            {data.category}
          </span>
        )}

        <strong className="text-[#1a1a1a] text-sm sm:text-base lg:text-lg font-bold line-clamp-2 leading-tight group-hover:text-[#D32F2F] transition-colors duration-300">
          {data.title}
        </strong>

        <p className="text-[#555] text-xs sm:text-sm line-clamp-2 mt-2 mb-4 text-left leading-relaxed flex-1">
          {data.description || "Premium personalized printing solutions for your brand."}
        </p>

        <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-[#f5f5f5]">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#888] font-medium uppercase tracking-wider">Starting at</span>
            <span className="font-bold text-[#1a1a1a] text-lg sm:text-xl font-['Syne',sans-serif]">
              {data.price > 0 ? `₹${data.price}` : "Custom"}
            </span>
          </div>

          {/* View Details Button */}
          <div className="bg-[#f8f8f8] text-[#1a1a1a] group-hover:bg-[#D32F2F] group-hover:text-white px-4 py-2 rounded-full font-semibold text-xs transition-colors duration-300 flex items-center gap-1 border border-[#eee] group-hover:border-[#D32F2F]">
            View Details 
            <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(ProductCard);
