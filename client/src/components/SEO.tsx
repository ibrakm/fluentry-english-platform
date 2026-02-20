import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  imageUrl?: string;
  type?: "website" | "article";
  keywords?: string;
  publishedDate?: string;
  authorName?: string;
}

const BASE_URL = "https://fluentry-english-platform.vercel.app";
const DEFAULT_IMAGE = `${BASE_URL}/og-cover.jpg`;
const DEFAULT_KEYWORDS =
  "English coaching Morocco, online English lessons Morocco, English teacher Tangier, TESOL certified coach Morocco, Business English Morocco, IELTS preparation Morocco, learn English online Morocco, 1-on-1 English coaching, private English lessons Morocco, English fluency Morocco";

export const SEO = ({
  title,
  description,
  path,
  imageUrl = DEFAULT_IMAGE,
  type = "website",
  keywords = DEFAULT_KEYWORDS,
  publishedDate,
  authorName = "Mr. Ibrahim K.",
}: SEOProps) => {
  const fullUrl = `${BASE_URL}${path}`;
  // Prevent double "| Fluentry" if title already contains it
  const fullTitle = title.includes("Fluentry") ? title : `${title} | Fluentry`;

  // JSON-LD structured data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Fluentry",
    description:
      "Personalized 1-on-1 English coaching online for Moroccan students and professionals. TESOL-certified coach based in Tangier, Morocco.",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    image: DEFAULT_IMAGE,
    telephone: "+212672580932",
    email: "ibrahimkabaikm@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tangier",
      addressCountry: "MA",
    },
    founder: {
      "@type": "Person",
      name: "Ibrahim K.",
      jobTitle: "TESOL-Certified English Language Coach",
      sameAs: ["https://web.facebook.com/SweetLollipope/"],
    },
    sameAs: ["https://web.facebook.com/SweetLollipope/"],
    priceRange: "62.50–100 MAD",
    areaServed: "Morocco",
    knowsAbout: [
      "English Language Teaching",
      "IELTS Preparation",
      "TOEFL Preparation",
      "Business English",
      "Conversation Practice",
    ],
  };

  const articleSchema =
    type === "article"
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: fullTitle,
          description,
          image: imageUrl,
          author: {
            "@type": "Person",
            name: authorName,
          },
          publisher: {
            "@type": "Organization",
            name: "Fluentry",
            logo: {
              "@type": "ImageObject",
              url: `${BASE_URL}/logo.png`,
            },
          },
          datePublished: publishedDate,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": fullUrl,
          },
        }
      : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Mr. Ibrahim K. — Fluentry" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="MA" />
      <meta name="geo.placename" content="Tangier, Morocco" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Fluentry" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data — Local Business */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      {/* Structured Data — Article (only for blog posts) */}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  );
};
