"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, MessageCircle } from "lucide-react";
import { FloatingElement } from "@/components/ui/shared";

export default function CustomCake() {
  const waMsg = encodeURIComponent(
    "🎂 *CUSTOM CAKE INQUIRY — CAKE QUEEN*\n━━━━━━━━━━━━━━━━\n👤 Name: \n📱 Phone: \n🎉 Occasion: \n🍰 Cake Description: \n⚖️ Approximate Weight: \n📅 Required Date: \n🚚 Pickup / Delivery: \n📍 Delivery Address: \n\nPlease share reference images if you have any!"
  );
  const waLink = `https://wa.me/918918499216?text=${waMsg}`;

  return (
    <section id="custom" className="relative py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
      {/* Decorative floating elements */}
      <FloatingElement emoji="✨" className="top-8 left-12 opacity-60" size="text-3xl" floatClass="float-1" />
      <FloatingElement emoji="🎨" className="top-16 right-16 opacity-50" size="text-2xl" floatClass="float-2" />
      <FloatingElement emoji="🌟" className="bottom-16 left-24 opacity-40" size="text-2xl" floatClass="float-3" />
      <FloatingElement emoji="🎀" className="bottom-8 right-12 opacity-60" size="text-3xl" floatClass="float-4" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden>
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-5xl mx-auto mb-6 border border-white/30">
            🎂
          </div>

          {/* Headline */}
          <h2 className="font-heading font-900 text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            আপনার স্বপ্নের কেক
            <span className="block text-accent-light mt-1">We&apos;ll Bake It Into Reality</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-white/80 font-body leading-relaxed max-w-2xl mx-auto">
            Have a vision in mind? Share it with us — a photo, a sketch, or just a few words. Our master bakers will craft a{" "}
            <strong className="text-white">completely custom cake</strong> that perfectly matches your dream, budget, and occasion.
            No idea too big. No request too special.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["Any Flavour", "Any Design", "Any Size", "Photo Printing", "Theme Cakes", "Eggless Option"].map((feat) => (
              <span key={feat} className="bg-white/20 backdrop-blur-sm border border-white/30 text-white font-heading font-600 text-sm px-4 py-2 rounded-pill">
                ✓ {feat}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              id="custom-cake-whatsapp-btn"
              className="flex items-center gap-2.5 bg-white text-primary font-heading font-800 text-base px-8 py-4 rounded-pill shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.04] hover:bg-accent hover:text-white"
            >
              <MessageCircle className="w-5 h-5" />
              Start Your Custom Cake Order
            </a>
          </div>

          <p className="mt-4 text-white/60 font-body text-sm">
            💬 Reply within 2 hours · 📅 Order 3–5 days in advance for custom designs
          </p>
        </motion.div>
      </div>
    </section>
  );
}
