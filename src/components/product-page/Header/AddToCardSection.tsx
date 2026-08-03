"use client";

import React from "react";
import { Product } from "@/types/product.types";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/carts/cartsSlice";
import { useRouter } from "next/navigation";

type Props = {
  data: Product;
  attributes?: string[];
};

const AddToCardSection = ({ data, attributes = [] }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: data.id as any,
        name: data.title,
        srcUrl: data.srcUrl,
        price: data.price,
        attributes,
        discount: data.discount || { amount: 0, percentage: 0 },
        quantity: 1,
      })
    );
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push("/cart");
  };

  return (
    <div className="fixed md:relative w-full bg-background border-t md:border-none border-border bottom-0 left-0 p-4 md:p-0 z-10 flex items-center gap-3">
      <button 
        type="button"
        onClick={handleAddToCart}
        className="bg-[#D71920] text-white w-full rounded-full h-11 md:h-[52px] text-sm sm:text-base flex items-center justify-center hover:bg-[#B3151A] transition-all font-medium"
      >
        Add to Cart
      </button>
      <button 
        type="button"
        onClick={handleBuyNow}
        className="bg-[#D71920] text-white w-full rounded-full h-11 md:h-[52px] text-sm sm:text-base flex items-center justify-center hover:bg-[#B3151A] transition-all font-bold uppercase"
      >
        BUY NOW
      </button>
    </div>
  );
};

export default AddToCardSection;
