import { CONFIG } from "@/lib/site";

export function JsonLdSchema() {
  const schema = {
    "@context":   "https://schema.org",
    "@type":      "AutoDealer",
    name:         "Parshwa Auto",
    logo: "https://parshwaauto.in/logo/parshwa_auto_logo.png",
    description:
      "Premium pre-owned motorcycle dealer in PCMC, Pune. Buy, sell and exchange motorcycles with instant payment and free RC transfer.",
    url:          "https://parshwaauto.in",
    telephone:    "+91-8390558079",
    priceRange:   "₹₹",
    address: {
      "@type":          "PostalAddress",
      streetAddress:    CONFIG.address,
      addressLocality:  "Pimpri-Chinchwad",
      addressRegion:    "Maharashtra",
      postalCode:       "411033",
      addressCountry:   "IN",
    },
    geo: {
      "@type":    "GeoCoordinates",
      latitude:   "18.630334916910325",
      longitude:  "73.79320093002663",
    },
    openingHoursSpecification: [
      {
        "@type":   "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens:     "10:30",
        closes:    "19:00",
      },
    ],
    aggregateRating: {
      "@type":       "AggregateRating",
      ratingValue:   "4.8",
      reviewCount:   "156",
      bestRating:    "5",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8390558079",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Marathi"]
    },
    areaServed: [
      "Pune", "Pimpri-Chinchwad", "PCMC", "Haveli Taluka", "Maharashtra",
    ],
    sameAs: [CONFIG.instagram, CONFIG.googleReview],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name:    "Motorcycle Buy, Sell & Exchange Services",
      itemListElement: [
        {
          "@type": "Offer",
          name:    "Sell Your Bike — Instant Payment",
          description:
            "Sell your pre-owned motorcycle with best price guarantee and instant same-day payment in PCMC, Pune.",
        },
        {
          "@type": "Offer",
          name:    "Bike Exchange Program",
          description:
            "Trade your old motorcycle and upgrade to a new one from our stock. Pay only the difference.",
        },
        {
          "@type": "Offer",
          name:    "Free RC Transfer Support",
          description:
            "Complete RC transfer including Form 29, Form 30 and insurance, handled entirely by Parshwa Auto.",
        },
        {
          "@type":"Offer",
          name:"Used Motorcycle Sales",
          description:"Buy inspected pre-owned motorcycles in Pune."
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  );
}