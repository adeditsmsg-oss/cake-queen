"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { type Product } from "@/data/products";

const BADGE_STYLES: Record<string, string> = {
  "Best Seller": "bg-primary text-white",
  "Popular": "bg-accent text-white",
  "Chef Pick": "bg-emerald-600 text-white",
  "Premium": "bg-text-dark text-white",
  "Custom": "bg-purple-600 text-white",
  "Kids Fav": "bg-sky-500 text-white",
  "Seasonal": "bg-orange-500 text-white",
  "Signature": "bg-primary-dark text-white",
  "Luxury": "bg-accent-dark text-white",
  "New": "bg-green-500 text-white",
};

interface ProductCardProps {
  product: Product;
  index?: number;
  onOrder?: (product: Product) => void;
}

export default function ProductCard({ product, index = 0, onOrder }: ProductCardProps) {
  const waMsg = encodeURIComponent(
    `🎂 *CAKE QUEEN ORDER INQUIRY*\n━━━━━━━━━━━━━━━━\n🍰 Cake: ${product.name}\n💰 Price: ${product.price}\n🎉 Occasion: \n📅 Delivery Date: \n⚖️ Weight: \n📍 Delivery Address: \n\nPlease confirm availability!`
  );
  const waLink = `https://wa.me/918918499216?text=${waMsg}`;

  return (
    <motion.div
      className="product-card group bg-white rounded-3xl overflow-hidden shadow-card flex flex-col"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Image container — image overflows top (reference design technique) */}
      <div className="relative -mt-4 mx-4 h-52 rounded-2xl overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-3 left-3 text-[10px] font-heading font-700 uppercase tracking-wider px-2.5 py-1 rounded-pill animate-badge shadow-sm ${BADGE_STYLES[product.badge] || "bg-primary text-white"}`}>
            {product.badge}
          </span>
        )}
        {/* Veg badge */}
        {product.isVeg !== false && (
          <span className="absolute top-3 right-3 w-5 h-5 rounded bg-white border-2 border-green-500 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 block" />
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-5 pt-4 pb-5 gap-2">
        {/* Category tag */}
        {product.weight && (
          <span className="text-[10px] font-heading uppercase tracking-widest text-text-muted">{product.weight}</span>
        )}

        {/* Name */}
        <h3 className="font-heading font-800 text-base text-text-dark leading-snug">
          {product.name}
        </h3>
        {product.nameBn && (
          <p className="text-[11px] text-text-muted font-body -mt-1">{product.nameBn}</p>
        )}

        {/* Description */}
        <p className="text-[13px] text-text-mid font-body leading-relaxed line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-3 gap-3">
          <span className="font-heading font-900 text-lg text-primary leading-none">
            {product.price}
          </span>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            id={`order-${product.id}`}
            className="flex-1 text-center bg-primary hover:bg-primary-dark text-white text-[13px] font-heading font-700 py-2.5 px-4 rounded-pill shadow-btn hover:shadow-btn-hover transition-all duration-300 hover:scale-[1.03]"
          >
            Order Now
          </a>
        </div>
      </div>
    </motion.div>
  );
}
