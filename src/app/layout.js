import { Poppins, Caveat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://digitalmarketingnearby.com"),
  title: {
    default: "Best Digital Marketing Agency in Noida | Top SEO & PPC Company Nearby - Brandmingo",
    template: "%s | Digital Marketing Nearby",
  },
  description:
    "Brandmingo is the #1 rated Digital Marketing Agency in Noida & Delhi NCR. We deliver rank #1 SEO, high-ROI Google Ads, social media growth, lead generation and custom websites for local businesses in Noida.",
  keywords: [
    "digital marketing agency in noida",
    "best digital marketing company in noida",
    "seo company in noida",
    "digital marketing nearby",
    "digital marketing agency near me",
    "top seo agency noida",
    "google ads agency in noida",
    "ppc company in noida sector 62",
    "local seo services noida",
    "social media marketing company in noida",
    "website development company in noida",
    "lead generation agency noida",
    "brandmingo media noida",
    "digital marketing agency in greater noida",
    "digital marketing near me noida sector 18",
    "performance marketing agency noida",
  ],
  authors: [{ name: "Brandmingo Media Pvt. Ltd.", url: "https://brandmingo.com" }],
  creator: "Brandmingo Media Pvt. Ltd.",
  publisher: "Brandmingo Media Pvt. Ltd.",
  category: "Digital Marketing & SEO Services",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "https://digitalmarketingnearby.com",
  },
  openGraph: {
    title: "Best Digital Marketing Agency in Noida | Brandmingo",
    description:
      "Looking for top digital marketing nearby? Brandmingo helps Noida & India businesses dominate Google Search, generate quality leads, and scale revenue.",
    url: "https://digitalmarketingnearby.com",
    siteName: "Digital Marketing Nearby",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/brandmingologo.png",
        width: 1200,
        height: 630,
        alt: "Brandmingo Media - Best Digital Marketing Agency in Noida Sector 62",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Agency in Noida | Brandmingo",
    description:
      "Award-winning SEO, Google Ads, and local business growth solutions from Brandmingo Media, Noida Headquarters.",
    images: ["/brandmingologo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Noida, Uttar Pradesh, India",
    "geo.position": "28.627981;77.373406",
    "ICBM": "28.627981, 77.373406",
  },
};

export default function RootLayout({ children }) {
  // Schema.org structured data for LocalBusiness & Organization targeting Noida
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://digitalmarketingnearby.com/#website",
        "url": "https://digitalmarketingnearby.com",
        "name": "Digital Marketing Nearby - Brandmingo",
        "description":
          "Find top rated digital marketing services, SEO, Google Ads and website development nearby in Noida and across India.",
        "publisher": {
          "@id": "https://brandmingo.com/#organization",
        },
        "inLanguage": "en-IN",
      },
      {
        "@type": "Organization",
        "@id": "https://brandmingo.com/#organization",
        "name": "Brandmingo Media Private Limited",
        "url": "https://brandmingo.com",
        "logo": "https://digitalmarketingnearby.com/brandmingologo.png",
        "sameAs": [
          "https://www.linkedin.com/company/brandmingo",
          "https://www.instagram.com/brandmingo",
          "https://www.facebook.com/brandmingo",
          "https://x.com/brandmingo",
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-99906-13140",
          "contactType": "customer service",
          "areaServed": ["IN", "Noida", "Delhi NCR"],
          "availableLanguage": ["English", "Hindi"],
        },
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://digitalmarketingnearby.com/#localbusiness",
        "name": "Brandmingo - Digital Marketing Agency in Noida",
        "url": "https://digitalmarketingnearby.com",
        "logo": "https://digitalmarketingnearby.com/brandmingologo.png",
        "image": "https://digitalmarketingnearby.com/brandmingologo.png",
        "telephone": "+919990613140",
        "email": "hello@brandmingo.com",
        "priceRange": "₹₹",
        "description":
          "Brandmingo Media is a premier full-service digital marketing agency in Noida offering SEO, Google Ads, social media marketing, local lead generation, and website development.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "8th Floor, ITHUM Tower, B-806, Block A, Industrial Area",
          "addressLocality": "Sector 62, Noida",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "201309",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 28.627981,
          "longitude": 77.373406,
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:30",
            "closes": "19:00",
          },
        ],
        "areaServed": [
          { "@type": "City", "name": "Noida" },
          { "@type": "City", "name": "Greater Noida" },
          { "@type": "City", "name": "Noida Extension" },
          { "@type": "City", "name": "Sector 62 Noida" },
          { "@type": "City", "name": "Sector 18 Noida" },
          { "@type": "City", "name": "Sector 63 Noida" },
          { "@type": "City", "name": "Delhi NCR" },
          { "@type": "City", "name": "Delhi" },
          { "@type": "City", "name": "Gurgaon" },
          { "@type": "City", "name": "Ghaziabad" },
          { "@type": "City", "name": "Indirapuram" },
          { "@type": "City", "name": "Faridabad" },
          { "@type": "City", "name": "Mumbai" },
          { "@type": "City", "name": "Bangalore" },
          { "@type": "City", "name": "Pune" },
          { "@type": "City", "name": "Hyderabad" },
          { "@type": "City", "name": "Lucknow" },
          { "@type": "City", "name": "Jaipur" },
          { "@type": "City", "name": "Chandigarh" },
          { "@type": "Country", "name": "India" },
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "58",
          "bestRating": "5",
          "worstRating": "1",
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Marketing & SEO Services in Noida",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Optimization & Google Ranking in Noida",
                "description": "Rank #1 on Google Search with technical, on-page, and local SEO services in Noida.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Google Ads & PPC Lead Generation in Noida",
                "description": "High-intent PPC campaigns that generate high-quality phone calls and leads.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Social Media Marketing in Noida",
                "description": "Paid Meta ads, Instagram marketing, and brand building campaigns.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Website Development in Noida",
                "description": "Fast, high-converting Next.js, WordPress and Shopify websites.",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${poppins.variable} ${caveat.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}
