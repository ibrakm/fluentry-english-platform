/**
 * AdvancedSchema.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Injects advanced JSON-LD schema markup into the page head using react-helmet-async.
 * This is critical for advanced SEO and getting rich snippets in Google.
 *
 * Schemas included:
 * - FAQPage: For all FAQs on a page
 * - HowTo: For step-by-step guides in blog posts
 * - Course: For the pricing/course packages
 * - BreadcrumbList: For all pages
 */

import { Helmet } from "react-helmet-async";

interface FAQ {
  question: string;
  answer: string;
}

interface HowToStep {
  name: string;
  text: string;
}

interface Course {
  name: string;
  description: string;
  provider: string;
}

interface Breadcrumb {
  name: string;
  url: string;
}

interface Props {
  faqs?: FAQ[];
  howTo?: { name: string; steps: HowToStep[] };
  course?: Course;
  breadcrumbs?: Breadcrumb[];
}

export function AdvancedSchema({ faqs, howTo, course, breadcrumbs }: Props) {
  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const howToSchema = howTo ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": howTo.name,
    "step": howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      "name": step.name,
      "text": step.text,
      "position": index + 1
    }))
  } : null;

  const courseSchema = course ? {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.name,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": course.provider
    }
  } : null;

  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://fluentry.com${crumb.url}`
    }))
  } : null;

  return (
    <Helmet>
      {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      {howToSchema && <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>}
      {courseSchema && <script type="application/ld+json">{JSON.stringify(courseSchema)}</script>}
      {breadcrumbSchema && <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>}
    </Helmet>
  );
}
