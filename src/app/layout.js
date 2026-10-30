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
    default: "Top Digital Marketing Agency Nearby | Brandmingo",
    template: "%s | Digital Marketing Nearby",
  },
  description:
    "Grow your business with Brandmingo - the #1 rated digital marketing agency nearby. Expert SEO, Google Ads (PPC), Social Media Marketing & High-Quality Lead Generation.",
  keywords: [
    "digital marketing nearby",
    "best digital marketing agency",
    "seo agency near me",
    "brandmingo",
    "google ads management nearby",
    "social media marketing agency",
    "local business lead generation",
    "ppc expert nearby",
    "search engine optimization nearby",
  ],
  authors: [{ name: "Brandmingo", url: "https://brandmingo.com" }],
  creator: "Brandmingo",
  publisher: "Brandmingo",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "https://digitalmarketingnearby.com",
  },
  openGraph: {
    title: "Top Digital Marketing Agency Nearby | Brandmingo",
    description:
      "Dominate search results and scale your revenue with proven SEO and digital marketing services from Brandmingo.",
    url: "https://digitalmarketingnearby.com",
    siteName: "Digital Marketing Nearby",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/brandmingologo.png",
        width: 1200,
        height: 630,
        alt: "Brandmingo Digital Marketing Agency Nearby",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Digital Marketing Agency Nearby | Brandmingo",
    description:
      "Award-winning SEO and growth marketing solutions for businesses looking for digital marketing nearby.",
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
};

export default function RootLayout({ children }) {
  // Schema.org structured data for LocalBusiness & Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://brandmingo.com/#organization",
        "name": "Brandmingo",
        "url": "https://brandmingo.com",
        "logo": "https://digitalmarketingnearby.com/brandmingologo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-99906-13140",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"],
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://digitalmarketingnearby.com/#service",
        "name": "Digital Marketing Nearby - Brandmingo",
        "url": "https://digitalmarketingnearby.com",
        "telephone": "+919990613140",
        "priceRange": "$$",
        "image": "https://digitalmarketingnearby.com/brandmingologo.png",
        "description":
          "Premier SEO, PPC, and digital marketing agency providing lead generation and local business ranking solutions.",
        "parentOrganization": {
          "@id": "https://brandmingo.com/#organization",
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
