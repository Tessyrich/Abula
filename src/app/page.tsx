import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Dishes } from "@/components/Dishes";
import { PhotoStrip } from "@/components/PhotoStrip";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Reserve } from "@/components/Reserve";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";
import { business } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://abulazone.co.uk";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: business.name,
  description: business.description,
  url: siteUrl,
  telephone: business.phone,
  servesCuisine: ["Nigerian", "West African"],
  priceRange: "££",
  acceptsReservations: "True",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: "Greater London",
    postalCode: business.address.postcode,
    addressCountry: business.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: business.geo.lat, longitude: business.geo.lng },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "12:00",
      closes: "00:00",
    },
  ],
  sameAs: [business.instagramUrl, business.delivery.justEat, business.delivery.deliveroo, business.delivery.uberEats],
};

export default function Page() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Dishes />
        <PhotoStrip />
        <About />
        <Menu />
        <Reserve />
        <Visit />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
