"use client";
import { motion } from "framer-motion";
import { Star, Shield, Truck, Clock, Award } from "lucide-react";

const trustItems = [
  { icon: Star, emoji: "⭐", label: "4.8 Google Rating", sub: "312+ verified reviews", color: "text-amber-500", bg: "bg-amber-50" },
  { icon: Shield, emoji: "🌿", label: "100% Fresh & Natural", sub: "No preservatives ever", color: "text-green-600", bg: "bg-green-50" },
  { icon: Truck, emoji: "🚚", label: "Free Home Delivery", sub: "Within Midnapore city", color: "text-sky-600", bg: "bg-sky-50" },
  { icon: Clock, emoji: "⏰", label: "Open Daily", sub: "9:30 AM – 10:00 PM", color: "text-purple-600", bg: "bg-purple-50" },
  { icon: Award, emoji: "🏆", label: "5+ Years of Excellence", sub: "Medinipur's trusted bakery", color: "text-primary", bg: "bg-primary/10" },
];

export default function TrustBar() {
  return (
    <section id="trust" className="py-10 bg-white border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-3 bg-bg-base rounded-2xl px-5 py-3 shadow-card min-w-fit"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center text-xl flex-shrink-0`}>
                {item.emoji}
              </div>
              <div>
                <p className="font-heading font-800 text-sm text-text-dark leading-tight">{item.label}</p>
                <p className="font-body text-xs text-text-muted mt-0.5">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
