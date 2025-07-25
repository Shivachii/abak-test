export type SEOProps = {
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: { asset: { url: string } };
  twitterCard?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  keywords?: string[];
};
