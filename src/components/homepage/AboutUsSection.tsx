import React from "react";
import * as motion from "framer-motion/client";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import { Gift, Star, HeartHandshake, Zap, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section id="about" className="max-w-[1200px] mx-auto px-4 xl:px-0 mt-12 md:mt-20 mb-16 md:mb-24">
      {/* Title Section */}
      <div className="text-center mb-12 md:mb-20">
        <motion.div
          initial={{ y: "30px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={cn([
              integralCF.className,
              "text-[36px] md:text-5xl lg:text-6xl mb-6 capitalize text-[#1a1a1a]",
            ])}
          >
            About <span className="text-[#D71920]">Us</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-black/60 font-medium">
            Welcome to Printiqo – your trusted destination for premium printing solutions and personalized gifts.
          </p>
        </motion.div>
      </div>

      {/* Main Philosophy Section */}
      <motion.div
        initial={{ y: "40px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 mb-12 md:mb-20"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight">
              Preserving Memories, Elevating Brands
            </h3>
            <p className="text-[#4b5563] text-base md:text-lg leading-relaxed">
              At Printiqo, we believe every memory deserves to be beautifully preserved and every brand deserves to stand out. We offer a wide range of high-quality printing services and customized gift products designed for individuals, businesses, schools, and corporate clients.
            </p>
            <p className="text-[#4b5563] text-base md:text-lg leading-relaxed">
              From photo mugs, cushions, keychains, photo frames, mementos, gift hampers, albums, business cards, wedding cards, ID cards, stickers, banners, and corporate branding materials to many more creative products, we combine modern printing technology with skilled craftsmanship to deliver exceptional quality.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72 bg-[#fff5f5] rounded-full flex items-center justify-center">
               <div className="absolute inset-0 bg-[#D71920]/10 rounded-full animate-pulse blur-3xl"></div>
               <Image src="/images/logo.png" alt="Printiqo Logo" width={160} height={160} className="relative z-10 object-contain drop-shadow-md" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Core Values / Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-24">
        {[
          {
            icon: <Star className="w-8 h-8 text-[#D71920]" />,
            title: "Exceptional Quality",
            desc: "Premium materials combined with skilled craftsmanship for products you'll be proud to own or gift.",
          },
          {
            icon: <HeartHandshake className="w-8 h-8 text-[#D71920]" />,
            title: "Customer First",
            desc: "Customer satisfaction is our highest priority. Every order is handled with strict attention to detail.",
          },
          {
            icon: <Zap className="w-8 h-8 text-[#D71920]" />,
            title: "Timely Delivery",
            desc: "We ensure making printing easy, gifting memorable, and delivering your products exactly when you need them.",
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ y: "40px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + (idx * 0.1), duration: 0.6 }}
            className="bg-[#fcfaf8] p-8 rounded-2xl border border-black/5 hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold text-black mb-3">{item.title}</h4>
            <p className="text-black/60 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Footer Call to Action */}
      <motion.div
        initial={{ y: "30px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-[#D71920] text-white rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 -mr-16 -mt-16 text-white/10">
          <Gift className="w-64 h-64" strokeWidth={1} />
        </div>
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Bring Your Ideas To Life
          </h3>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Whether you're celebrating a special occasion, promoting your business, or creating something unique, Printiqo is here for you.
          </p>
          <div className="inline-block bg-white text-[#D71920] px-8 py-4 rounded-full font-bold text-lg md:text-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            Printiqo – Print with Quality. Gift with Love.
          </div>
        </div>
      </motion.div>
    </section>
  );
}
