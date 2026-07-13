"use client";
import { Phone, MessageCircle, MapPin, Camera, Share2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-text-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl">🎂</div>
              <div>
                <span className="font-heading font-900 text-lg text-white leading-none block">CAKE QUEEN</span>
                <span className="font-body text-[10px] text-white/50 tracking-widest uppercase">Midnapore, W.B.</span>
              </div>
            </div>
            <p className="font-body text-sm text-white/60 leading-relaxed mb-5">
              Medinipur&apos;s most loved cake shop. Freshly baked, lovingly crafted, always delicious. প্রতিটি উপলক্ষকে মিষ্টি করে তুলুন।
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                <Camera className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="https://wa.me/918918499216" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-green-600 transition-colors flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-800 text-sm uppercase tracking-wider text-white/80 mb-4">Our Cakes</h4>
            <ul className="flex flex-col gap-2.5">
              {[["Birthday Cakes","#birthday"],["Wedding Cakes","#wedding"],["Anniversary Cakes","#anniversary"],["Kids Cakes","#kids"],["Photo Cakes","#photo"],["Festival Cakes","#festival"],["Custom Cakes","#custom"]].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="font-body text-sm text-white/60 hover:text-primary transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sweets */}
          <div>
            <h4 className="font-heading font-800 text-sm uppercase tracking-wider text-white/80 mb-4">Sweets & More</h4>
            <ul className="flex flex-col gap-2.5">
              {[["Cupcakes","#cupcakes"],["Pastries","#pastries"],["Cookies","#cookies"],["Brownies","#cookies"],["French Macarons","#cookies"],["Chocolates","#chocolates"],["Gift Packaging","#contact"]].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="font-body text-sm text-white/60 hover:text-primary transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-800 text-sm uppercase tracking-wider text-white/80 mb-4">Contact</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+918918499216" className="flex items-start gap-3 group">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-white/60 group-hover:text-primary transition-colors">+91 89184 99216</span>
              </a>
              <a href="https://wa.me/918918499216" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                <MessageCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-white/60 group-hover:text-primary transition-colors">WhatsApp Order</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-white/60">Plot 1446, Keranitola,<br />Station Road, Midnapore – 721101</span>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 mt-2">
                <p className="font-heading font-700 text-xs text-white/80 mb-1">Opening Hours</p>
                <p className="font-body text-xs text-white/50">Mon – Sun: 9:30 AM – 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} Cake Queen, Midnapore. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/40 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" /> in Midnapore, West Bengal
          </p>
          <div className="flex gap-4">
            <a href="#" className="font-body text-xs text-white/40 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="font-body text-xs text-white/40 hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-border shadow-glass mobile-bar-safe">
      <div className="grid grid-cols-4 divide-x divide-border">
        <a
          href="tel:+918918499216"
          id="mobile-bar-call"
          className="flex flex-col items-center justify-center py-3 gap-1 text-text-mid hover:text-primary hover:bg-primary/5 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="font-body text-[10px] font-600">Call</span>
        </a>
        <a
          href="https://wa.me/918918499216?text=Hi%20Cake%20Queen!%20I%20want%20to%20order%20a%20cake%20%F0%9F%8E%82"
          target="_blank" rel="noopener noreferrer"
          id="mobile-bar-whatsapp"
          className="flex flex-col items-center justify-center py-3 gap-1 text-green-600 hover:bg-green-50 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-body text-[10px] font-600">WhatsApp</span>
        </a>
        <a
          href="#contact"
          id="mobile-bar-order"
          className="flex flex-col items-center justify-center py-3 gap-1 bg-primary text-white"
        >
          <span className="text-lg">🎂</span>
          <span className="font-heading font-800 text-[10px]">Order Cake</span>
        </a>
        <a
          href="https://www.google.com/maps/place/CAKE+QUEEN/@22.4198533,87.3196116"
          target="_blank" rel="noopener noreferrer"
          id="mobile-bar-directions"
          className="flex flex-col items-center justify-center py-3 gap-1 text-text-mid hover:text-accent hover:bg-accent/5 transition-colors"
        >
          <MapPin className="w-5 h-5" />
          <span className="font-body text-[10px] font-600">Directions</span>
        </a>
      </div>
    </div>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918918499216?text=Hi%20Cake%20Queen!%20I%20want%20to%20order%20a%20cake%20%F0%9F%8E%82"
      target="_blank"
      rel="noopener noreferrer"
      id="floating-whatsapp"
      className="fixed right-6 bottom-6 z-50 hidden md:flex w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
