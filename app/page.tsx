import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import BestSellers from "@/components/BestSellers";
import CakeCategories from "@/components/CakeCategories";
import CustomCake from "@/components/CustomCake";
import {
  BirthdayCollection,
  WeddingCollection,
  AnniversaryCollection,
  KidsCollection,
  FestivalCollection,
} from "@/components/Collections";
import {
  PastriesSection,
  CupcakesSection,
  CookiesSection,
  ChocolateSection,
} from "@/components/SmallBites";
import {
  WhyChooseUs,
  FreshIngredients,
  BakingProcess,
  MeetBakers,
} from "@/components/BrandSections";
import { Gallery, HappyCelebrations } from "@/components/GallerySections";
import { ReviewsSection, GoogleReviewManager } from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/Contact";
import { Footer, MobileBottomBar, FloatingWhatsApp } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* ── Navigation ── */}
      <Navbar />

      {/* ── HERO ── */}
      <Hero />

      {/* ── TRUST BAR ── */}
      <TrustBar />

      {/* ── BEST SELLERS ── */}
      <BestSellers />

      {/* ── CAKE CATEGORIES ── */}
      <CakeCategories />

      {/* ── FEATURED COLLECTIONS ── */}
      <BirthdayCollection />
      <WeddingCollection />

      {/* ── CUSTOM CAKE CTA ── */}
      <CustomCake />

      {/* ── MORE COLLECTIONS ── */}
      <AnniversaryCollection />
      <KidsCollection />
      <FestivalCollection />

      {/* ── SMALL BITES ── */}
      <PastriesSection />
      <CupcakesSection />
      <CookiesSection />
      <ChocolateSection />

      {/* ── BRAND STORY ── */}
      <WhyChooseUs />
      <FreshIngredients />
      <BakingProcess />
      <MeetBakers />

      {/* ── SOCIAL PROOF ── */}
      <Gallery />
      <HappyCelebrations />
      <ReviewsSection />
      <GoogleReviewManager />

      {/* ── INFO ── */}
      <FAQ />

      {/* ── CONTACT & ORDER ── */}
      <ContactSection />

      {/* ── FOOTER ── */}
      <Footer />

      {/* ── FLOATING ELEMENTS ── */}
      <FloatingWhatsApp />
      <MobileBottomBar />
    </>
  );
}
