"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader, CreamDrip, FloatingElement } from "@/components/ui/shared";

const whyUs = [
  { emoji: "🌿", title: "100% Natural Ingredients", desc: "Farm-fresh eggs, imported butter, real cream, seasonal fruits. Zero artificial colours. Zero preservatives. Always." },
  { emoji: "👨‍🍳", title: "Crafted by Expert Bakers", desc: "Our passionate bakers have 10+ years of experience crafting everything from rustic home-style cakes to multi-tiered wedding masterpieces." },
  { emoji: "🚚", title: "Free Delivery in Midnapore", desc: "Orders above ₹1,000 get free delivery within Midnapore city limits. Available 10 AM – 9 PM, 7 days a week." },
  { emoji: "🎨", title: "Fully Customisable", desc: "Every cake is unique. Choose your flavour, design, size, message, and even the colour of every buttercream rose." },
  { emoji: "📦", title: "Premium Gifting Packaging", desc: "Our cakes arrive in signature blush pink boxes with satin ribbons — so beautiful they look like luxury presents before they're even opened." },
  { emoji: "⏰", title: "Open Every Day", desc: "From 9:30 AM to 10:00 PM, every day of the year. Even on Durga Puja, Christmas, and Eid — because celebrations don't take days off." },
];

const steps = [
  { num: "01", title: "Choose Your Cake", desc: "Browse our menu or share your custom design idea with us on WhatsApp." },
  { num: "02", title: "Place Your Order", desc: "Order via WhatsApp or call us. We confirm within 2 hours and start planning your cake." },
  { num: "03", title: "We Bake Fresh", desc: "Our bakers start on your cake with premium ingredients — baked fresh on the day of your event." },
  { num: "04", title: "Celebrate!", desc: "We deliver to your doorstep or you can pick up at our Midnapore store. Enjoy every bite!" },
];

const ingredients = [
  { emoji: "🥚", label: "Farm Fresh Eggs" },
  { emoji: "🧈", label: "Belgian Butter" },
  { emoji: "🍓", label: "Seasonal Fruits" },
  { emoji: "🍫", label: "Premium Cocoa" },
  { emoji: "🥛", label: "Fresh Cream" },
  { emoji: "🌾", label: "Premium Flour" },
  { emoji: "🍦", label: "Pure Vanilla" },
  { emoji: "🍯", label: "Natural Honey" },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader badge="Why Cake Queen?" title="Baked with Pride," titleHighlight="Served with Love" subtitle="We're not just a bakery — we're the place where your most precious memories are made sweeter." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-3xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.emoji}</div>
              <h3 className="font-heading font-800 text-lg text-text-dark mb-2">{item.title}</h3>
              <p className="font-body text-sm text-text-mid leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FreshIngredients() {
  return (
    <section id="ingredients" className="py-20 bg-bg-tint relative overflow-hidden">
      <FloatingElement emoji="🍓" className="top-12 right-8 opacity-70" size="text-3xl" floatClass="float-1" />
      <FloatingElement emoji="🍃" className="bottom-16 left-8 opacity-60" size="text-2xl" floatClass="float-3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-heading font-700 uppercase tracking-widest px-4 py-1.5 rounded-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Our Secret
            </span>
            <h2 className="font-heading font-900 text-4xl md:text-5xl text-text-dark leading-tight mb-5">
              প্রতিটি কেকে
              <span className="text-gradient block">সেরা উপাদান</span>
            </h2>
            <p className="font-body text-base text-text-mid leading-relaxed mb-6">
              Great cakes start with great ingredients. We source only the finest — Belgian butter, farm-fresh eggs from local farms, 
              real seasonal fruits (no artificial flavours), and premium single-origin cocoa. No shortcuts. Ever.
            </p>
            <p className="font-body text-base text-text-mid leading-relaxed mb-8">
              আমরা বিশ্বাস করি যে একটি সুস্বাদু কেক সঠিক উপাদান থেকেই জন্ম নেয়। That&apos;s why every Cake Queen cake tastes 
              different — better — than anything you&apos;ve tried before.
            </p>
            <div className="grid grid-cols-4 gap-3">
              {ingredients.map((ing) => (
                <div key={ing.label} className="bg-white rounded-2xl p-3 text-center shadow-card">
                  <div className="text-2xl mb-1">{ing.emoji}</div>
                  <p className="font-body text-[10px] text-text-mid leading-tight">{ing.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative h-80 lg:h-[500px] rounded-4xl overflow-hidden shadow-card-hover"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image src="/images/baker_decorating.jpg" alt="Our baker crafting a premium cake" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4">
              <p className="font-heading font-800 text-text-dark text-sm">Handcrafted with 10+ years of expertise</p>
              <p className="font-body text-text-muted text-xs mt-0.5">Every decoration placed by hand, with care and artistry</p>
            </div>
          </motion.div>
        </div>
      </div>
      <CreamDrip color="#FFFFFF" className="mt-16" />
    </section>
  );
}

export function BakingProcess() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader badge="How It Works" title="From Order" titleHighlight="to Celebration" subtitle="Ordering your dream cake from Cake Queen is simple, quick, and completely stress-free." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 relative">
          {/* Connecting line (desktop) */}
          <div className="absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary hidden lg:block" aria-hidden />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="relative text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-heading font-900 text-2xl mx-auto mb-5 shadow-btn relative z-10">
                {step.num}
              </div>
              <h3 className="font-heading font-800 text-base text-text-dark mb-2">{step.title}</h3>
              <p className="font-body text-sm text-text-mid leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MeetBakers() {
  const bakers = [
    { name: "Rupa Devi", role: "Head Baker & Cake Artist", emoji: "👩‍🍳", exp: "12 years", spec: "Wedding & Custom Cakes" },
    { name: "Arun Mondal", role: "Pastry Chef & Designer", emoji: "👨‍🍳", exp: "8 years", spec: "Theme Cakes & Pastries" },
    { name: "Priti Sen", role: "Chocolate Specialist", emoji: "👩‍🍳", exp: "6 years", spec: "Chocolates & Truffles" },
  ];
  return (
    <section id="bakers" className="py-20 bg-bg-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader badge="Our Team" title="The Artisans" titleHighlight="Behind Every Cake" subtitle="Meet the passionate bakers who pour their heart into every creation. আমাদের টিম — আপনার স্বপ্নের কেকের স্রষ্টা।" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4">
          {bakers.map((baker, i) => (
            <motion.div
              key={baker.name}
              className="bg-white rounded-4xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-5xl mx-auto mb-5">
                {baker.emoji}
              </div>
              <h3 className="font-heading font-800 text-lg text-text-dark">{baker.name}</h3>
              <p className="font-body text-sm text-primary font-600 mt-1">{baker.role}</p>
              <div className="mt-4 flex justify-center gap-4 text-xs text-text-muted">
                <span className="bg-bg-tint rounded-pill px-3 py-1">{baker.exp}</span>
                <span className="bg-bg-tint rounded-pill px-3 py-1">{baker.spec}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <CreamDrip color="#FFF9F6" className="mt-16" />
    </section>
  );
}
