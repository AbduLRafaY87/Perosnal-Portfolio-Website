import React from 'react'
import { Helmet } from 'react-helmet-async'
import { createPageMeta, structuredData, SITE_DOMAIN, SITE_NAME } from '../../config/seoConfig'

/**
 * SEO Component
 * Manages all meta tags, canonical URLs, and structured data for a page
 */
const SEO = ({
  pageKey,
  title,
  description,
  keywords,
  canonical,
  image,
  imageAlt,
  author,
  publishedDate,
  modifiedDate,
  type = 'website',
  customStructuredData,
}) => {
  const meta = createPageMeta(pageKey, {
    title,
    description,
    keywords,
    canonical,
  })

  const canonicalUrl = canonical || meta.canonical
  const imageUrl = image || meta.og?.image

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{meta.title}</title>
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />
      {meta.keywords && <meta name="keywords" content={meta.keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="charset" content="UTF-8" />
      <meta name="author" content={author || SITE_NAME} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta property="twitter:card" content={meta.twitter?.card || 'summary_large_image'} />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      {imageUrl && <meta property="twitter:image" content={imageUrl} />}
      {meta.twitter?.handle && <meta property="twitter:creator" content={meta.twitter.handle} />}

      {/* Additional SEO Tags */}
      <meta name="language" content="English" />
      <meta httpEquiv="cache-control" content="max-age=3600" />
      <meta name="theme-color" content="#0a0c14" />

      {/* Blog/Article Specific */}
      {publishedDate && <meta property="article:published_time" content={publishedDate} />}
      {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}

      {/* JSON-LD Structured Data */}
      {customStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(customStructuredData)}
        </script>
      )}

      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData.organization)}
      </script>

      {/* Preconnect to external resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
    </Helmet>
  )
}

export default SEO
