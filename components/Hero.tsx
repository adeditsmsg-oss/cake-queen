"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, ChevronDown, Star, MapPin } from "lucide-react";
import { CreamDrip, FloatingElement } from "@/components/ui/shared";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-bg-tint flex flex-col overflow-hidden" id="home">

      {/* Background soft blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-32 left-0 w-80 h-80 rounded-full bg-accent/8 blur-3xl pointer-events-none" aria-hidden />

      {/* Main hero content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-12 lg:pt-32 flex-1 flex items-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">

          {/* Left: Text Content */}
          <motion.div
            className="flex flex-col gap-6 z-10"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Trust badge */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-1 bg-white rounded-pill px-3 py-1.5 shadow-card">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span className="font-body text-xs font-600 text-text-mid">মিদনাপুর, West Bengal</span>
              </div>
              <div className="flex items-center gap-1 bg-white rounded-pill px-3 py-1.5 shadow-card">
                <div className="flex">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-accent text-accent" />)}
                </div>
                <span className="font-body text-xs font-600 text-text-mid">4.8 Rating</span>
              </div>
            </motion.div>

            {/* Main headline */}
            <div>
              <motion.h1
                className="font-heading font-900 text-5xl sm:text-6xl lg:text-7xl leading-none text-text-dark"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                মিদনাপুরের
                <span className="block text-gradient">সেরা কেক</span>
              </motion.h1>
              <motion.p
                className="font-heading font-700 text-2xl sm:text-3xl text-text-mid mt-2"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                — Baked Fresh, With Love 🎂
              </motion.p>
            </div>

            {/* Subtext */}
            <motion.p
              className="font-body text-base md:text-lg text-text-mid leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              From dreamy wedding tiers to personalised birthday masterpieces —
              every cake at Cake Queen tells your story. Premium ingredients, no
              artificial colours, baked fresh every single day.{" "}
              <span className="text-primary font-600">প্রতিটি কেক, একটি স্বপ্নের মতো।</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a
                href="https://wa.me/918918499216?text=Hi%20Cake%20Queen!%20I%20want%20to%20order%20a%20cake%20%F0%9F%8E%82"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="flex items-center gap-2.5 btn-shimmer text-white font-heading font-800 text-base px-7 py-4 rounded-pill shadow-btn hover:shadow-btn-hover transition-all duration-300 hover:scale-[1.04] animate-pulse-glow"
              >
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
              </a>
              <a
                href="#menu"
                id="hero-menu-cta"
                className="flex items-center gap-2 border-2 border-primary text-primary font-heading font-700 text-base px-7 py-4 rounded-pill hover:bg-primary hover:text-white transition-all duration-300 hover:scale-[1.04] bg-white/70 backdrop-blur-sm"
              >
                Explore Menu
                <ChevronDown className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="flex gap-8 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {[
                { num: "500+", label: "Happy Customers" },
                { num: "50+", label: "Cake Varieties" },
                { num: "5+", label: "Years of Love" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading font-900 text-2xl text-primary">{stat.num}</p>
                  <p className="font-body text-xs text-text-muted mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Hero Image — overflows boundary */}
          <motion.div
            className="relative flex justify-center items-end lg:justify-end h-72 sm:h-96 lg:h-[520px]"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Soft circular glow behind image */}
            <div className="absolute inset-8 rounded-full bg-primary/10 blur-2xl" aria-hidden />

            {/* Main hero cake image — overflows upward like reference design */}
            <div className="relative w-full max-w-sm lg:max-w-none h-full">
              <Image
                src="/images/hero_cake_v2.png"
                alt="Premium wedding and birthday cake — Cake Queen Medinipur"
                fill
                priority
                className="object-contain object-bottom drop-shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="flex justify-center pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <a href="#trust" className="flex flex-col items-center gap-1 text-text-muted hover:text-primary transition-colors">
          <span className="font-body text-xs">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>

      {/* Cream drip SVG divider at bottom */}
      <CreamDrip color="#FFFFFF" className="-mb-1" />
    </section>
  );
}
