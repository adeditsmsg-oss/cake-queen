"use client";
import { motion } from "framer-motion";

export function CreamDrip({ color = "#FFFFFF", className = "" }: { color?: string; className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden leading-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <path
          d="M0,0 L0,60 Q40,120 80,80 Q120,40 160,90 Q200,130 240,80 Q280,30 320,85 Q360,130 400,75 Q440,20 480,80 Q520,130 560,70 Q600,20 640,80 Q680,130 720,65 Q760,10 800,75 Q840,130 880,70 Q920,20 960,80 Q1000,130 1040,75 Q1080,30 1120,85 Q1160,130 1200,75 Q1240,20 1280,80 Q1320,130 1360,75 Q1400,20 1440,60 L1440,0 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function CreamDripBottom({ color = "#FDF0F4", className = "" }: { color?: string; className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden leading-none rotate-180 ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <path
          d="M0,0 L0,50 Q60,100 120,60 Q180,20 240,70 Q300,110 360,55 Q420,10 480,65 Q540,110 600,50 Q660,5 720,60 Q780,110 840,50 Q900,5 960,60 Q1020,110 1080,55 Q1140,10 1200,65 Q1260,110 1320,55 Q1380,10 1440,50 L1440,0 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

interface FloatingElementProps {
  emoji: string;
  className?: string;
  size?: string;
  floatClass?: string;
}

export function FloatingElement({ emoji, className = "", size = "text-3xl", floatClass = "float-1" }: FloatingElementProps) {
  return (
    <span
      className={`absolute select-none pointer-events-none z-10 ${size} ${floatClass} ${className}`}
      aria-hidden="true"
    >
      {emoji}
    </span>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeader({ badge, title, titleHighlight, subtitle, center = true, light = false }: SectionHeaderProps) {
  return (
    <motion.div
      className={`${center ? "text-center" : ""} mb-12`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-heading font-700 uppercase tracking-widest px-4 py-1.5 rounded-pill mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          {badge}
        </span>
      )}
      <h2 className={`font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight ${light ? "text-white" : "text-text-dark"}`}>
        {title}
        {titleHighlight && (
          <span className="block text-gradient">{titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg font-body max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-white/75" : "text-text-mid"}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-5 flex items-center gap-2 ${center ? "justify-center" : ""}`}>
        <div className="w-8 h-0.5 bg-accent rounded-full" />
        <div className="w-16 h-1 bg-primary rounded-full" />
        <div className="w-8 h-0.5 bg-accent rounded-full" />
      </div>
    </motion.div>
  );
}
