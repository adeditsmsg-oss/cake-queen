"use client";
import { motion } from "framer-motion";
import { SectionHeader, CreamDrip } from "@/components/ui/shared";

const categories = [
  { emoji: "🎂", label: "Birthday Cakes", count: "8 varieties", href: "#birthday", bg: "bg-pink-50 hover:bg-pink-100" },
  { emoji: "💍", label: "Wedding Cakes", count: "5 varieties", href: "#wedding", bg: "bg-rose-50 hover:bg-rose-100" },
  { emoji: "❤️", label: "Anniversary", count: "5 varieties", href: "#anniversary", bg: "bg-red-50 hover:bg-red-100" },
  { emoji: "🦄", label: "Kids Cakes", count: "4 varieties", href: "#kids", bg: "bg-sky-50 hover:bg-sky-100" },
  { emoji: "📸", label: "Photo & Theme", count: "4 varieties", href: "#photo", bg: "bg-purple-50 hover:bg-purple-100" },
  { emoji: "🪔", label: "Festival Cakes", count: "3 varieties", href: "#festival", bg: "bg-orange-50 hover:bg-orange-100" },
  { emoji: "🧁", label: "Cupcakes", count: "4 varieties", href: "#cupcakes", bg: "bg-yellow-50 hover:bg-yellow-100" },
  { emoji: "🥐", label: "Pastries", count: "6 varieties", href: "#pastries", bg: "bg-amber-50 hover:bg-amber-100" },
  { emoji: "🍪", label: "Cookies", count: "4 varieties", href: "#cookies", bg: "bg-lime-50 hover:bg-lime-100" },
  { emoji: "🍫", label: "Chocolates", count: "3 varieties", href: "#chocolates", bg: "bg-stone-50 hover:bg-stone-100" },
];

export default function CakeCategories() {
  return (
    <section id="categories" className="py-20 bg-bg-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Browse by Category"
          title="Everything Sweet,"
          titleHighlight="All in One Place"
          subtitle="From grand wedding tiers to bite-sized macarons — we've got every sweet craving covered."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.label}
              href={cat.href}
              className={`${cat.bg} rounded-3xl p-5 text-center transition-all duration-300 hover:scale-[1.04] hover:shadow-card group cursor-pointer`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                {cat.emoji}
              </div>
              <h3 className="font-heading font-800 text-sm text-text-dark leading-tight">{cat.label}</h3>
              <p className="font-body text-xs text-text-muted mt-1">{cat.count}</p>
            </motion.a>
          ))}
        </div>
      </div>
      <CreamDrip color="#FFFFFF" className="mt-16" />
    </section>
  );
}
