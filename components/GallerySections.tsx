"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader, CreamDrip } from "@/components/ui/shared";

const galleryImages = [
  { src: "/images/hero_cake.jpg", alt: "Rose gold tiered celebration cake", span: "row-span-2" },
  { src: "/images/birthday_cake.jpg", alt: "Chocolate birthday cake", span: "" },
  { src: "/images/wedding_cake.jpg", alt: "Elegant white wedding cake", span: "" },
  { src: "/images/cupcakes.jpg", alt: "Assorted cupcakes", span: "row-span-2" },
  { src: "/images/pastries.jpg", alt: "Premium pastry selection", span: "" },
  { src: "/images/macarons.jpg", alt: "French macarons", span: "" },
  { src: "/images/anniversary_cake.jpg", alt: "Anniversary pink ombre cake", span: "" },
  { src: "/images/chocolate_cake.jpg", alt: "Dark chocolate truffle cake", span: "" },
];

const celebrations = [
  { src: "/images/family_celebration.jpg", alt: "Family celebrating birthday", caption: "A family moment made sweeter 🎂", emoji: "👨‍👩‍👧‍👦" },
  { src: "/images/kids_birthday.jpg", alt: "Kids birthday party with unicorn cake", caption: "Every child deserves magic ✨", emoji: "🦄" },
  { src: "/images/gift_packaging.jpg", alt: "Premium cake gift packaging", caption: "The perfect gift, beautifully wrapped 🎁", emoji: "🎀" },
  { src: "/images/bakery_interior.jpg", alt: "Cake Queen bakery interior", caption: "Visit us at Midnapore, Station Road 📍", emoji: "🏪" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader badge="Our Gallery" title="Every Cake" titleHighlight="is a Work of Art" subtitle="A glimpse of what we create — each piece baked with passion, decorated with precision." />

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 mt-8 h-[600px] md:h-[700px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${img.span} ${i === 0 ? "col-span-1 md:col-span-1 row-span-2" : i === 3 ? "col-span-1 md:col-span-1 row-span-2" : ""}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 text-white font-body text-xs font-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.alt}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <CreamDrip color="#FDF0F4" className="mt-16" />
    </section>
  );
}

export function HappyCelebrations() {
  return (
    <section id="celebrations" className="py-20 bg-bg-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Happy Moments"
          title="Your Joy is"
          titleHighlight="Our Greatest Recipe"
          subtitle="These are the moments that make everything worth it — every early morning, every piped rose, every perfectly baked layer. আপনাদের হাসি আমাদের অনুপ্রেরণা।"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {celebrations.map((cel, i) => (
            <motion.div
              key={cel.alt}
              className="group relative rounded-4xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="relative h-64">
                <Image src={cel.src} alt={cel.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-2xl mb-1">{cel.emoji}</div>
                <p className="font-body text-white text-sm font-600 leading-snug">{cel.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
