"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader, CreamDrip } from "@/components/ui/shared";
import ProductCard from "@/components/ui/ProductCard";
import { birthdayCakes, weddingCakes, anniversaryCakes, kidsCakes, festivalCakes } from "@/data/products";


function ProductGrid({ items, id }: { items: typeof birthdayCakes; id: string }) {
  return (
    <div id={id} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 pt-5">
      {items.map((p, i) => (
        <ProductCard key={p.id} product={p} index={i} />
      ))}
    </div>
  );
}

// ── BIRTHDAY ──
export function BirthdayCollection() {
  return (
    <section id="birthday" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Split layout for Header & Girl image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Left Column: Text */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <SectionHeader
              badge="🎂 Birthday Cakes"
              title="Make Their Day"
              titleHighlight="Unforgettable"
              subtitle="Because every birthday deserves a cake as unique and special as the person celebrating it. মিদনাপুরের সেরা স্বাদের ও ডিজাইনের বার্থডে কেক।"
              center={false}
            />
          </div>

          {/* Right Column: Transparent Girl Image */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Soft pink glow behind girl */}
            <div className="absolute inset-4 rounded-full bg-primary/5 blur-3xl pointer-events-none" aria-hidden />

            <div className="relative w-64 h-96 sm:w-72 sm:h-[420px] md:w-80 md:h-[480px]">
              <Image
                src="/images/birthday_girl.png"
                alt="Happy girl holding a beautiful custom birthday cake"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </motion.div>
        </div>

        {/* Product Grid */}
        <ProductGrid items={birthdayCakes} id="birthday-grid" />
      </div>
      <CreamDrip color="#FDF0F4" className="mt-16" />
    </section>
  );
}

// ── WEDDING ──
export function WeddingCollection() {
  return (
    <section id="wedding" className="py-20 bg-bg-tint overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Split layout for Wedding couple image & Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Left Column: Transparent Wedding Couple Image */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-start relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Soft gold glow behind couple */}
            <div className="absolute inset-4 rounded-full bg-accent/5 blur-3xl pointer-events-none" aria-hidden />

            <div className="relative w-72 h-[380px] sm:w-80 sm:h-[420px] md:w-96 md:h-[480px]">
              <Image
                src="/images/wedding_couple.png"
                alt="Happy Indian bride and groom cutting a premium wedding cake"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </motion.div>

          {/* Right Column: Text */}
          <div className="lg:col-span-7 text-center lg:text-left order-1 lg:order-2">
            <SectionHeader
              badge="💍 Wedding Cakes"
              title="For Your Most"
              titleHighlight="Beautiful Day"
              subtitle="Each wedding cake is a masterpiece — crafted with artistry, love, and the finest ingredients for your forever memory. আপনার বিশেষ দিনের জন্য রাজকীয় ওয়েডিং কেক।"
              center={false}
            />
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid items={weddingCakes} id="wedding-grid" />
      </div>
      <CreamDrip color="#FFFFFF" className="mt-16" />
    </section>
  );
}

// ── ANNIVERSARY ──
export function AnniversaryCollection() {
  return (
    <section id="anniversary" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Split layout for Anniversary couple image & Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Left Column: Transparent Anniversary Couple Image */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-start relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Soft pink glow behind couple */}
            <div className="absolute inset-4 rounded-full bg-primary/5 blur-3xl pointer-events-none" aria-hidden />

            <div className="relative w-72 h-[380px] sm:w-80 sm:h-[420px] md:w-96 md:h-[480px]">
              <Image
                src="/images/anniversary_couple.png"
                alt="Happy Indian couple celebrating anniversary with premium cake"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </motion.div>

          {/* Right Column: Text */}
          <div className="lg:col-span-7 text-center lg:text-left order-1 lg:order-2">
            <SectionHeader
              badge="❤️ Anniversary Cakes"
              title="Celebrate Every"
              titleHighlight="Year of Love"
              subtitle="From the first to the fiftieth — mark your milestone with a cake as meaningful as your journey together. প্রতি বছর ভালোবাসা উদযাপনে আমাদের স্পেশাল অ্যানিভার্সারি কেক।"
              center={false}
            />
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid items={anniversaryCakes} id="anniversary-grid" />
      </div>
      <CreamDrip color="#FDF0F4" className="mt-16" />
    </section>
  );
}

// ── KIDS ──
export function KidsCollection() {
  return (
    <section id="kids" className="py-20 bg-bg-tint overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Split layout for Header & Kids cake image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Left Column: Text */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <SectionHeader
              badge="🦄 Kids Special"
              title="Magical Cakes"
              titleHighlight="For Little Ones"
              subtitle="Unicorns, superheroes, dinosaurs — we bring your child's favourite characters to life in sugar and cream! বাচ্চাদের জন্য ম্যাজিকাল থিম কেক।"
              center={false}
            />
          </div>

          {/* Right Column: Transparent Kids Cake Image */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Soft pink glow behind cake */}
            <div className="absolute inset-4 rounded-full bg-primary/5 blur-3xl pointer-events-none" aria-hidden />

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              <Image
                src="/images/kids_cake.png"
                alt="Beautiful pink cake decorated with fresh berries for kids"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </motion.div>
        </div>

        {/* Product Grid */}
        <ProductGrid items={kidsCakes} id="kids-grid" />
      </div>
      <CreamDrip color="#FFFFFF" className="mt-16" />
    </section>
  );
}

// ── FESTIVAL ──
export function FestivalCollection() {
  return (
    <section id="festival" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader badge="🪔 Festival Cakes" title="Celebrate Every" titleHighlight="Festive Moment" subtitle="Durga Puja, Christmas, New Year, Eid — every festival is sweeter with a Cake Queen creation. উৎসবে মিষ্টি আনন্দ!" />
        <ProductGrid items={festivalCakes} id="festival-grid" />
      </div>
    </section>
  );
}
