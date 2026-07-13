"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Cakes", href: "#birthday" },
  { label: "Wedding", href: "#wedding" },
  { label: "Custom", href: "#custom" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-glass border-b border-white/40 py-2"
            : "bg-transparent py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" id="nav-logo">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-heading font-900 text-lg shadow-btn group-hover:shadow-btn-hover transition-shadow duration-300">
              🎂
            </div>
            <div>
              <span className="font-heading font-900 text-xl text-primary leading-none block">CAKE QUEEN</span>
              <span className="font-body text-[10px] text-text-muted tracking-widest uppercase leading-none">Medinipur</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body font-600 text-[13px] text-text-mid hover:text-primary px-3.5 py-2 rounded-xl transition-colors duration-200 hover:bg-primary/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918918499216"
              id="nav-call-btn"
              className="flex items-center gap-2 font-body font-600 text-[13px] text-text-mid hover:text-primary transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              +91 89184 99216
            </a>
            <a
              href="https://wa.me/918918499216?text=Hi%20Cake%20Queen!%20I%20want%20to%20order%20a%20cake%20%F0%9F%8E%82"
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp-btn"
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-heading font-700 text-[13px] px-5 py-2.5 rounded-pill shadow-btn hover:shadow-btn-hover transition-all duration-300 hover:scale-[1.03]"
            >
              <MessageCircle className="w-4 h-4" />
              Order on WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            id="mobile-menu-btn"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-text-dark/40 z-40 lg:hidden"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              ref={menuRef}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 lg:hidden flex flex-col shadow-2xl"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex items-center justify-between p-5 border-b border-border">
                <span className="font-heading font-900 text-primary text-lg">CAKE QUEEN</span>
                <button onClick={() => setOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-body font-600 text-text-dark hover:text-primary text-base py-3 px-3 rounded-xl hover:bg-primary/5 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="p-5 border-t border-border flex flex-col gap-3">
                <a
                  href="tel:+918918499216"
                  className="flex items-center justify-center gap-2 border-2 border-primary text-primary font-heading font-700 py-3 rounded-pill text-sm hover:bg-primary/5 transition-colors"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a
                  href="https://wa.me/918918499216?text=Hi%20Cake%20Queen!%20I%20want%20to%20order%20a%20cake%20%F0%9F%8E%82"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-primary text-white font-heading font-700 py-3 rounded-pill text-sm shadow-btn"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Order
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
