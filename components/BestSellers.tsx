"use client";
import { motion } from "framer-motion";
import { SectionHeader, CreamDrip } from "@/components/ui/shared";
import ProductCard from "@/components/ui/ProductCard";
import { bestSellers } from "@/data/products";

export default function BestSellers() {
  return (
    <section id="menu" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Our Bestsellers"
          title="Most Loved"
          titleHighlight="Cakes in Midnapore"
          subtitle="These are the cakes our customers keep coming back for — each one a masterpiece of flavour and artistry."
        />

        {/* Auto-scroll horizontal showcase on mobile, grid on desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-4 pt-5">
          {bestSellers.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden relative pt-5 mt-2">
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {bestSellers.map((product, i) => (
              <div key={product.id} className="snap-start flex-shrink-0 w-[80vw] max-w-xs">
                <ProductCard product={product} index={i} />
              </div>
            ))}
          </div>
          {/* Gradient fade hint */}
          <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://wa.me/918918499216?text=Hi!%20I%20want%20to%20see%20your%20full%20cake%20menu%20%F0%9F%8E%82"
            target="_blank"
            rel="noopener noreferrer"
            id="view-all-cakes-btn"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary font-heading font-700 text-sm px-8 py-3.5 rounded-pill hover:bg-primary hover:text-white transition-all duration-300 hover:scale-[1.03]"
          >
            View Full Menu on WhatsApp →
          </a>
        </motion.div>
      </div>
      <CreamDrip color="#FDF0F4" className="mt-16" />
    </section>
  );
}
