import ProductListSec from "@/components/common/ProductListSec";
import HeroBanner from "@/components/homepage/Header";
import CategoriesSection from "@/components/homepage/CategoriesSection";
import { Product } from "@/types/product.types";
import { Banner } from "@/types/banner.types";

export const revalidate = 60;

const api = process.env.NEXT_PUBLIC_API_URL;

async function getProducts(): Promise<Product[]> {
  if (!api) return [];
  try {
    const res = await fetch(`${api}/product`, {
      next: { revalidate: 60 },
    });
    if (!res.ok || !res.headers.get("content-type")?.includes("application/json")) return [];
    const data = await res.json();
    if (!data.products) return [];

    return data.products.map((p: any) => {
      const defaultVariant =
        p.variants?.find((v: any) => v.isDefault) || p.variants?.[0];
      const startingPrice = defaultVariant?.price || 0;

      return {
        id: p._id,
        title: p.name,
        category: p.category?.name || "General",
        description: p.description || "No description available.",
        srcUrl: defaultVariant?.images?.[0] || "/images/pic1.png",
        gallery: defaultVariant?.images || [],
        price: startingPrice,
        discount: { amount: 0, percentage: 0 },
        rating: 4,
        amenities: p.amenities || []
      };
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

async function getCategories() {
  if (!api) return [];
  try {
    const res = await fetch(`${api}/category`, {
      next: { revalidate: 60 },
    });
    if (!res.ok || !res.headers.get("content-type")?.includes("application/json")) return [];
    const data = await res.json();
    return data.categories ?? [];
  } catch {
    return [];
  }
}

async function getBanners(): Promise<Banner[]> {
  if (!api) return [];
  try {
    const res = await fetch(`${api}/banner`, {
      next: { revalidate: 60 },
    });
    if (!res.ok || !res.headers.get("content-type")?.includes("application/json")) return [];
    const data = await res.json();
    return data.banners ?? [];
  } catch (error) {
    console.error("Error fetching banners:", error);
    return [];
  }
}

// Server component — no "use client", no useEffect, no client-side waterfall
export default async function Home() {
  const [products, categories, banners] = await Promise.all([
    getProducts(),
    getCategories(),
    getBanners(),
  ]);

  return (
    <>
      <HeroBanner banners={banners} />
      <main className="my-[24px] sm:my-[40px]">
        <CategoriesSection categories={categories} />
        
        <div id="products" className="mt-8 md:mt-16">
          <ProductListSec
            title="Featured Products"
            data={products}
            viewAllLink="/shop"
          />
        </div>
      </main>
    </>
  );
}
