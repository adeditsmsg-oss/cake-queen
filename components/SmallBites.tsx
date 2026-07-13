"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader, CreamDrip } from "@/components/ui/shared";
import ProductCard from "@/components/ui/ProductCard";
import { pastriesList, cupcakesList, cookiesList, chocolatesList } from "@/data/products";

function HorizontalScroll({ items }: { items: typeof pastriesList }) {
  return (
    <div className="relative overflow-hidden -mx-4 px-4">
      <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {items.map((p, i) => (
          <div key={p.id} className="snap-start flex-shrink-0 w-[80vw] sm:w-72 lg:w-64">
            <ProductCard product={p} index={i} />
          </div>
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  );
}

function GridLayout({ items }: { items: typeof cupcakesList }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 pt-5">
      {items.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
    </div>
  );
}

export function PastriesSection() {
  return (
    <section id="pastries" className="py-20 bg-bg-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader badge="🥐 Premium Pastries" title="Little Bites," titleHighlight="Big Pleasure" subtitle="Each pastry is a labour of love — crafted daily with the finest ingredients and zero shortcuts." />
        <div className="mt-4 pt-2">
          <GridLayout items={pastriesList} />
        </div>
      </div>
      <CreamDrip color="#FFFFFF" className="mt-16" />
    </section>
  );
}

export function CupcakesSection() {
  return (
    <section id="cupcakes" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Split layout for Header & Floating Cupcakes image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Left Column: Text */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <SectionHeader
              badge="🧁 Cupcakes"
              title="Sweet Little"
              titleHighlight="Celebrations"
              subtitle="Perfect for parties, gifting, and every occasion that deserves a little something extra sweet. কাপকেকের মিষ্টি স্বাদে ছোটখাটো সেলিব্রেশন হোক আরও আনন্দদায়ক।"
              center={false}
            />
          </div>

          {/* Right Column: Floating Cupcakes Image */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Soft pink glow behind cupcakes */}
            <div className="absolute inset-4 rounded-full bg-primary/5 blur-3xl pointer-events-none" aria-hidden />

            {/* Float-animated container */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 float-1">
              <Image
                src="/images/cupcakes_floating.png"
                alt="Delicious cupcakes floating with fresh strawberries on top"
                fill
                className="object-contain drop-shadow-xl"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-4 pt-2">
          <GridLayout items={cupcakesList} />
        </div>
      </div>
      <CreamDrip color="#FDF0F4" className="mt-16" />
    </section>
  );
}

export function CookiesSection() {
  return (
    <section id="cookies" className="py-20 bg-bg-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader badge="🍪 Cookies & Brownies" title="Freshly Baked," titleHighlight="Everyday Indulgence" subtitle="From gooey fudge brownies to melt-in-your-mouth macarons — our biscuit and cookie collection is seriously addictive." />
        <div className="mt-4 pt-2">
          <GridLayout items={cookiesList} />
        </div>
      </div>
      <CreamDrip color="#1A0A0A" className="mt-16" />
    </section>
  );
}

export function ChocolateSection() {
  return (
    <section id="chocolates" className="py-20 bg-text-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="🍫 Handcrafted Chocolates"
          title="Premium Artisan"
          titleHighlight="Chocolates"
          subtitle="Crafted with single-origin cocoa and infused with exotic flavours — the perfect luxury gift for someone special."
          light={true}
        />
        <div className="mt-4 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {chocolatesList.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </div>
      <CreamDrip color="#FDF8F4" className="mt-16" />
    </section>
  );
}
