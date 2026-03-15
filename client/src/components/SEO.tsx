import { Helmet } from "react-helmet-async";

import { useLanguage } from "@/contexts/LanguageContext";

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface SEOProps {
  title: string;
  description: string;
  path: string;
  imageUrl?: string;
  type?: "website" | "article";
  keywords?: string;
  publishedDate?: string;
  modifiedDate?: string;
  authorName?: string;
  faqItems?: Array<{ question: string; answer: string }>;
  courseData?: {
    name: string;
    description: string;
    provider: string;
    price?: string;
    priceCurrency?: string;
  };
  breadcrumbs?: BreadcrumbItem[];
  reviewData?: {
    ratingValue: string;
    reviewCount: string;
    bestRating?: string;
  };
  videoData?: {
    name: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
    duration?: string;
    contentUrl?: string;
  };
  titleFr?: string;
  titleAr?: string;
  descriptionFr?: string;
  descriptionAr?: string;
}

const BASE_URL = "https://fluentry.online";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;
const DEFAULT_KEYWORDS =
  "English coaching Morocco, online English lessons Morocco, English teacher Tangier, TESOL certified coach Morocco, Business English Morocco, IELTS preparation Morocco, IELTS Morocco 2026, learn English online Morocco, 1-on-1 English coaching, private English lessons Morocco, English fluency Morocco, cours anglais en ligne Maroc, تعلم الإنجليزية المغرب, English tutor Morocco, English speaking course Morocco, online English teacher Morocco, English lessons Casablanca, English lessons Rabat, English lessons Marrakech, English lessons Fes, English coach Tangier, English coach Marrakech, English coach Fes, English coach Agadir, English coach Casablanca, English coach Rabat, CEFR test Morocco, English for job interviews Morocco, business English Casablanca, English pronunciation Morocco, speak English fluently Morocco, تعلم الانجليزية اون لاين المغرب, cours anglais Casablanca, cours anglais Marrakech, cours anglais Maroc en ligne, professeur anglais Maroc, professeur anglais Marrakech, professeur anglais Fes";

export const SEO = ({
  title,
  description,
  path,
  imageUrl = DEFAULT_IMAGE,
  type = "website",
  keywords = DEFAULT_KEYWORDS,
  publishedDate,
  modifiedDate,
  authorName = "Mr. Ibrahim K.",
  faqItems,
  courseData,
  breadcrumbs,
  reviewData,
  titleFr,
  titleAr,
  descriptionFr,
  descriptionAr,
  videoData,
}: SEOProps) => {
  const fullUrl = `${BASE_URL}${path}`;

  // Multilingual support
  let currentLang = "en";
  try {
    const pathSegment = window.location.pathname.split("/")[1];
    if (["en", "fr", "ar"].includes(pathSegment)) currentLang = pathSegment;
  } catch (e) {}

  const localizedTitle = currentLang === "fr" && titleFr ? titleFr : currentLang === "ar" && titleAr ? titleAr : title;
  const localizedDescription = currentLang === "fr" && descriptionFr ? descriptionFr : currentLang === "ar" && descriptionAr ? descriptionAr : description;
  const localeMap: Record<string, string> = { en: "en_US", fr: "fr_MA", ar: "ar_MA" };
  const langNameMap: Record<string, string> = { en: "English", fr: "French", ar: "Arabic" };

  const fullTitle = localizedTitle.includes("Fluentry") ? localizedTitle : `${localizedTitle} | Fluentry`;

  // ── Structured Data: Organization / Local Business ──────────────────────
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": `${BASE_URL}/#organization`,
    name: "Fluentry",
    alternateName: "Fluentry English Coach",
    description:
      "Personalized 1-on-1 English coaching online for Moroccan students and professionals. TESOL-certified coach Mr. Ibrahim K., based in Tangier, Morocco.",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/android-chrome-512x512.png`,
      width: 512,
      height: 512,
    },
    image: DEFAULT_IMAGE,
    telephone: "+212672580932",
    email: "ibrahimkabaikm@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tangier",
      addressRegion: "Tanger-Tétouan-Al Hoceïma",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.7595,
      longitude: -5.8340,
    },
    founder: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Ibrahim K.",
      jobTitle: "TESOL-Certified English Language Coach",
      knowsAbout: [
        "English Language Teaching",
        "IELTS Preparation",
        "TOEFL Preparation",
        "Business English",
        "Conversation Practice",
        "CEFR Assessment",
      ],
      sameAs: ["https://web.facebook.com/SweetLollipope/"],
    },
    priceRange: "62.50–100 MAD",
    currenciesAccepted: "MAD",
    areaServed: [
      { "@type": "Country", name: "Morocco" },
      { "@type": "City", name: "Casablanca" },
      { "@type": "City", name: "Rabat" },
      { "@type": "City", name: "Tangier" },
      { "@type": "City", name: "Marrakech" },
      { "@type": "City", name: "Fes" },
      { "@type": "City", name: "Agadir" },
      { "@type": "City", name: "Meknes" },
      { "@type": "City", name: "Oujda" },
      { "@type": "City", name: "Kenitra" },
      { "@type": "City", name: "Tetouan" },
    ],
    serviceType: "English Language Coaching",
    sameAs: ["https://web.facebook.com/SweetLollipope/"],
    openingHours: "Mo-Sa 09:00-20:00",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "English Coaching Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Starter Pack — 4 Sessions",
          price: "250",
          priceCurrency: "MAD",
        },
        {
          "@type": "Offer",
          name: "Growth Pack — 8 Sessions",
          price: "450",
          priceCurrency: "MAD",
        },
        {
          "@type": "Offer",
          name: "Intensive Pack — 12 Sessions",
          price: "600",
          priceCurrency: "MAD",
        },
      ],
    },
  };

  // ── Structured Data: WebPage ─────────────────────────────────────────────
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebPage",
    "@id": `${fullUrl}#webpage`,
    url: fullUrl,
    name: fullTitle,
    description: localizedDescription,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    ...(type === "article" && {
      headline: fullTitle,
      author: {
        "@type": "Person",
        "@id": `${BASE_URL}/#person`,
        name: authorName,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Fluentry",
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/android-chrome-512x512.png`,
        },
      },
      datePublished: publishedDate,
      dateModified: modifiedDate || publishedDate,
      image: imageUrl,
      mainEntityOfPage: { "@type": "WebPage", "@id": fullUrl },
      inLanguage: currentLang === "fr" ? "fr" : currentLang === "ar" ? "ar" : "en",
    }),
  };

  // ── Structured Data: Website (sitelinks searchbox) ───────────────────────
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Fluentry",
    description: "1-on-1 English Coaching Online for Morocco",
    publisher: { "@id": `${BASE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: currentLang === "fr" ? "fr" : currentLang === "ar" ? "ar" : "en",
  };

  // ── Structured Data: BreadcrumbList ────────────────────────────────────
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      ...(breadcrumbs || []).map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: crumb.name,
        item: crumb.item,
      })),
    ],
  };

  // ── Structured Data: FAQ (optional) ─────────────────────────────────────
  const faqSchema =
    faqItems && faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  // ── Structured Data: Course (optional) ──────────────────────────────────
  const courseSchema =
    courseData
      ? {
          "@context": "https://schema.org",
          "@type": "Course",
          name: courseData.name,
          description: courseData.description,
          provider: {
            "@type": "Organization",
            name: courseData.provider || "Fluentry",
            sameAs: BASE_URL,
          },
          ...(courseData.price && {
            offers: {
              "@type": "Offer",
              price: courseData.price,
              priceCurrency: courseData.priceCurrency || "MAD",
              availability: "https://schema.org/InStock",
              url: fullUrl,
            },
          }),
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "online",
            instructor: {
              "@type": "Person",
              name: "Mr. Ibrahim K.",
              description: "TESOL-Certified English Language Coach",
            },
          },
        }
      : null;


  // ── Structured Data: AggregateRating (optional) ────────────────────────
  const aggregateRatingSchema =
    reviewData
      ? {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "@id": `${BASE_URL}/#organization`,
          name: "Fluentry",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: reviewData.ratingValue,
            reviewCount: reviewData.reviewCount,
            bestRating: reviewData.bestRating || "5",
            worstRating: "1",
          },
        }
      : null;

  // ── Structured Data: VideoObject (optional) ────────────────────────────
  const videoSchema =
    videoData
      ? {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: videoData.name,
          description: videoData.description,
          thumbnailUrl: videoData.thumbnailUrl,
          uploadDate: videoData.uploadDate,
          ...(videoData.duration && { duration: videoData.duration }),
          ...(videoData.contentUrl && { contentUrl: videoData.contentUrl }),
          publisher: {
            "@type": "Organization",
            "@id": `${BASE_URL}/#organization`,
            name: "Fluentry",
          },
        }
      : null;
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={localizedDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      {/* Hreflang alternate links for multilingual SEO */}
      <link rel="alternate" hrefLang="en" href={`${BASE_URL}/en${path}`} />
      <link rel="alternate" hrefLang="fr" href={`${BASE_URL}/fr${path}`} />
      <link rel="alternate" hrefLang="ar" href={`${BASE_URL}/ar${path}`} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${path}`} />
      <meta name="author" content="Mr. Ibrahim K. — Fluentry" />
      <meta name="language" content={langNameMap[currentLang] || "English"} />
      <meta name="geo.region" content="MA-01" />
      <meta name="geo.placename" content="Tangier, Morocco" />
      <meta name="geo.position" content="35.7595;-5.8340" />
      <meta name="ICBM" content="35.7595, -5.8340" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={localizedDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Fluentry — English Coaching Morocco" />
      <meta property="og:site_name" content="Fluentry" />
      <meta property="og:locale" content={localeMap[currentLang] || "en_US"} />
      <meta property="og:locale:alternate" content="fr_MA" />
      <meta property="og:locale:alternate" content="ar_MA" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={localizedDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content="Fluentry — English Coaching Morocco" />

      {/* Article-specific */}
      {type === "article" && publishedDate && (
        <meta property="article:published_time" content={publishedDate} />
      )}
      {type === "article" && modifiedDate && (
        <meta property="article:modified_time" content={modifiedDate} />
      )}
      {type === "article" && (
        <meta property="article:author" content={authorName} />
      )}

      {/* Structured Data — Organization */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Structured Data — WebSite (enables sitelinks) */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {/* Structured Data — WebPage / Article */}
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>

      {/* Structured Data — BreadcrumbList */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Structured Data — FAQ (if provided) */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      {/* Structured Data — Course (if provided) */}
      {courseSchema && (
        <script type="application/ld+json">
          {JSON.stringify(courseSchema)}
        </script>
      )}

      {/* Structured Data — AggregateRating (if provided) */}
      {aggregateRatingSchema && (
        <script type="application/ld+json">
          {JSON.stringify(aggregateRatingSchema)}
        </script>
      )}

      {/* Structured Data — VideoObject (if provided) */}
      {videoSchema && (
        <script type="application/ld+json">
          {JSON.stringify(videoSchema)}
        </script>
      )}
    </Helmet>
  );
};
