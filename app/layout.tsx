import type { Metadata } from "next";
import { Montserrat, Nunito } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cakequeen.in"),
  title: "Best Cake Shop in Medinipur | Birthday, Wedding & Custom Cakes | Cake Queen",
  description:
    "Cake Queen — Medinipur's most loved bakery. Order freshly baked birthday cakes, wedding cakes, anniversary cakes, custom theme cakes, pastries & more. Free delivery in Midnapore. Call +91 8918499216.",
  keywords: [
    "cake shop in medinipur",
    "best cake shop in midnapore",
    "birthday cake medinipur",
    "wedding cake midnapore",
    "custom cake medinipur",
    "bakery near me midnapore",
    "anniversary cake medinipur",
    "cake delivery midnapore",
    "theme cake midnapore",
    "cake queen medinipur",
  ],
  openGraph: {
    title: "Cake Queen — Best Cake Shop in Medinipur",
    description:
      "Premium cakes, pastries & desserts freshly baked in Midnapore. Birthday, Wedding, Anniversary & Custom cakes. Call +91 8918499216.",
    type: "website",
    locale: "en_IN",
    siteName: "Cake Queen",
    images: [
      {
        url: "/images/hero_cake.jpg",
        width: 1200,
        height: 630,
        alt: "Cake Queen — Premium Bakery in Medinipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cake Queen — Best Cake Shop in Medinipur",
    description: "Premium freshly baked cakes, pastries & desserts in Midnapore, West Bengal.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "Cake Queen",
  image: "https://cakequeen.in/images/hero_cake.jpg",
  description:
    "Cake Queen is Medinipur's premier cake shop offering custom birthday cakes, wedding cakes, anniversary cakes, pastries and more.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot 1446, Keranitola, Station Road",
    addressLocality: "Midnapore",
    addressRegion: "West Bengal",
    postalCode: "721101",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.4198533,
    longitude: 87.3196116,
  },
  telephone: "+918918499216",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
    ],
    opens: "09:30",
    closes: "22:00",
  },
  url: "https://cakequeen.in",
  priceRange: "₹₹",
  servesCuisine: "Bakery",
  hasMap: "https://maps.app.goo.gl/cakequeen",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "312",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${nunito.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
