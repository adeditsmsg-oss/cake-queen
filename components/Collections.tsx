"use client";
import { SectionHeader, CreamDrip } from "@/components/ui/shared";
import ProductCard from "@/components/ui/ProductCard";
import { birthdayCakes, weddingCakes, anniversaryCakes, kidsCakes, festivalCakes } from "@/data/products";


function ProductGrid({ items, id }: { items: typeof birthdayCakes; id: string }) {
  return (
    <div id={id} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 pt-5">
      {items.map((p, i) => (
        <ProductCard key={p.id} product={p} index={i} />
      ))}
    </div>
  );
}

// ── BIRTHDAY ──
export function BirthdayCollection() {
  return (
    <section id="birthday" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader badge="🎂 Birthday Cakes" title="Make Their Day" titleHighlight="Unforgettable" subtitle="Because every birthday deserves a cake as unique and special as the person celebrating it." />
        <ProductGrid items={birthdayCakes} id="birthday-grid" />
      </div>
      <CreamDrip color="#FDF0F4" className="mt-16" />
    </section>
  );
}

// ── WEDDING ──
export function WeddingCollection() {
  return (
    <section id="wedding" className="py-20 bg-bg-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader badge="💍 Wedding Cakes" title="For Your Most" titleHighlight="Beautiful Day" subtitle="Each wedding cake is a masterpiece — crafted with artistry, love, and the finest ingredients for your forever memory." />
        <ProductGrid items={weddingCakes} id="wedding-grid" />
      </div>
      <CreamDrip color="#FFFFFF" className="mt-16" />
    </section>
  );
}

// ── ANNIVERSARY ──
export function AnniversaryCollection() {
  return (
    <section id="anniversary" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader badge="❤️ Anniversary Cakes" title="Celebrate Every" titleHighlight="Year of Love" subtitle="From the first to the fiftieth — mark your milestone with a cake as meaningful as your journey together." />
        <ProductGrid items={anniversaryCakes} id="anniversary-grid" />
      </div>
      <CreamDrip color="#FDF0F4" className="mt-16" />
    </section>
  );
}

// ── KIDS ──
export function KidsCollection() {
  return (
    <section id="kids" className="py-20 bg-bg-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader badge="🦄 Kids Special" title="Magical Cakes" titleHighlight="For Little Ones" subtitle="Unicorns, superheroes, dinosaurs — we bring your child's favourite characters to life in sugar and cream!" />
        <ProductGrid items={kidsCakes} id="kids-grid" />
      </div>
      <CreamDrip color="#FFFFFF" className="mt-16" />
    </section>
  );
}

// ── FESTIVAL ──
export function FestivalCollection() {
  return (
    <section id="festival" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader badge="🪔 Festival Cakes" title="Celebrate Every" titleHighlight="Festive Moment" subtitle="Durga Puja, Christmas, New Year, Eid — every festival is sweeter with a Cake Queen creation. উৎসবে মিষ্টি আনন্দ!" />
        <ProductGrid items={festivalCakes} id="festival-grid" />
      </div>
    </section>
  );
}
