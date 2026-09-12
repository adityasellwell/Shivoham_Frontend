import { useEffect } from 'react';

/**
 * Reusable SEO Component for React 19 / Vite.
 * Dynamically updates document title, meta tags, canonical link,
 * Open Graph / Twitter cards, and injects Schema.org JSON-LD structured data.
 */
export default function SEO({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = '/img/mainLogo.png',
  schemas = [] // Single schema object or array of schema objects
}) {
  useEffect(() => {
    // 1. Update Document Title
    const siteName = 'Shivoham & Associates';
    const finalTitle = title ? (title.includes(siteName) ? title : `${title} | ${siteName}`) : siteName;
    document.title = finalTitle;

    // Helper to set or create meta tag
    const setMetaTag = (attributeName, attributeValue, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attributeName, attributeValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Standard Meta Description
    if (description) {
      setMetaTag('name', 'description', description);
    }

    // 3. Open Graph Tags
    const fullCanonical = canonicalUrl || window.location.href;
    setMetaTag('property', 'og:title', finalTitle);
    if (description) setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', fullCanonical);
    setMetaTag('property', 'og:site_name', siteName);
    if (ogImage) {
      const fullImage = ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`;
      setMetaTag('property', 'og:image', fullImage);
    }

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', finalTitle);
    if (description) setMetaTag('name', 'twitter:description', description);
    if (ogImage) {
      const fullImage = ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`;
      setMetaTag('name', 'twitter:image', fullImage);
    }

    // 5. Canonical Link Tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', fullCanonical);

    // 6. JSON-LD Structured Data
    const schemaArray = Array.isArray(schemas) ? schemas : [schemas];
    const validSchemas = schemaArray.filter(Boolean);

    // Remove any previously injected SEO json-ld scripts
    const existingScript = document.getElementById('seo-json-ld');
    if (existingScript) {
      existingScript.remove();
    }

    if (validSchemas.length > 0) {
      const script = document.createElement('script');
      script.id = 'seo-json-ld';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(
        validSchemas.length === 1 ? validSchemas[0] : {
          '@context': 'https://schema.org',
          '@graph': validSchemas
        }
      );
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup json-ld script on unmount
      const scriptToRemove = document.getElementById('seo-json-ld');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, canonicalUrl, ogType, ogImage, JSON.stringify(schemas)]);

  return null;
}
