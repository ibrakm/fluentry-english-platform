import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  imageUrl?: string;
  type?: 'website' | 'article';
}

const BASE_URL = "https://fluentry-english-platform.vercel.app";
const DEFAULT_IMAGE = `${BASE_URL}/og-cover.jpg`;

export const SEO = ({
  title,
  description,
  path,
  imageUrl = DEFAULT_IMAGE,
  type = 'website',
}: SEOProps) => {
  const fullUrl = `${BASE_URL}${path}`;
  const fullTitle = `${title} | Fluentry`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};
