import React from "react";
import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product.types";
import Link from "next/link";

type ProductListSecProps = {
  title: string;
  data: Product[];
  viewAllLink?: string;
};

const ProductListSec = ({ title, data, viewAllLink }: ProductListSecProps) => {
  return (
    <section className="max-w-frame mx-auto text-center">
      <motion.h2
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn([
          integralCF.className,
          "text-[32px] md:text-5xl mb-8 md:mb-14 capitalize",
        ])}
      >
        {(() => {
          if (typeof title !== 'string') return title;
          const words = title.split(' ');
          if (words.length <= 1) return title;
          const lastWord = words.pop();
          return (
            <>
              {words.join(' ')} <span className="text-[#D71920]">{lastWord}</span>
            </>
          );
        })()}
      </motion.h2>
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full mb-6 md:mb-9"
        >
          <CarouselContent className="px-4 sm:px-0 space-x-3 sm:space-x-4 lg:space-x-5">
            {data.map((product) => (
              <CarouselItem
                key={product.id}
                className="w-[calc(50%-6px)] sm:w-full sm:max-w-[245px] md:max-w-[280px] lg:max-w-[295px] pl-0 basis-auto shrink-0"
              >
                <ProductCard data={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {viewAllLink && (
          <div className="w-full px-4 sm:px-0 text-center">
            <Link
              href={viewAllLink}
              className="w-full inline-block sm:w-[218px] px-[54px] py-3.5 border rounded-full hover:bg-gradient-to-r hover:from-[#F03A47] hover:to-[#D71920] hover:text-white text-[#1a1a1a] hover:border-transparent transition-all duration-300 font-medium text-sm sm:text-base border-[#EFEFEF] shadow-sm hover:shadow-soft-hover transform hover:-translate-y-1"
            >
              View All
            </Link>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ProductListSec;
