import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-nunito)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#C8546E",
          dark: "#A83B55",
          light: "#E8748E",
        },
        accent: {
          DEFAULT: "#D4A96A",
          light: "#F0C88A",
        },
        bg: {
          base: "#FDF8F4",
          tint: "#FDF0F4",
          cream: "#FFF9F6",
        },
        text: {
          dark: "#2D1F1F",
          mid: "#7A5C5C",
          muted: "#B09090",
        },
        border: {
          DEFAULT: "#F0D8DE",
          light: "#FAF0F3",
        },
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "88": "22rem",
        "96": "24rem",
        "104": "26rem",
        "120": "30rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        pill: "9999px",
      },
      boxShadow: {
        "card": "0 4px 24px rgba(200, 84, 110, 0.08)",
        "card-hover": "0 20px 50px rgba(200, 84, 110, 0.18)",
        "btn": "0 4px 16px rgba(200, 84, 110, 0.35)",
        "btn-hover": "0 8px 28px rgba(200, 84, 110, 0.45)",
        "gold": "0 4px 16px rgba(212, 169, 106, 0.35)",
        "glass": "0 8px 32px rgba(200, 84, 110, 0.08)",
      },
      animation: {
        "float": "float 5s ease-in-out infinite",
        "float-alt": "floatAlt 6s ease-in-out infinite",
        "scroll-x": "scroll-x 30s linear infinite",
        "badge-bounce": "badge-bounce 2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s cubic-bezier(0.25,0.46,0.45,0.94) forwards",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.25,0.46,0.45,0.94) forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-14px) rotate(4deg)" },
          "66%": { transform: "translateY(-6px) rotate(-3deg)" },
        },
        floatAlt: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg) scale(1)" },
          "50%": { transform: "translateY(-18px) rotate(-5deg) scale(1.05)" },
        },
        "scroll-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "badge-bounce": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(200, 84, 110, 0.3)" },
          "50%": { boxShadow: "0 0 0 12px rgba(200, 84, 110, 0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
    },
  },
  plugins: [],
};

export default config;
